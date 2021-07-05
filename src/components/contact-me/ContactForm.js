import React from 'react';
import axios from 'axios';
import { useStaticQuery, graphql } from "gatsby"

import Spinner from '../common/Spinner';

class ContactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      isSubmitting: false,
      showSuccessAlert: false,
      showErrorAlert: false,
      errors: [],
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.formRef = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmitForm = event => {
    const formRef = this.formRef.current;
    event.preventDefault();
    if (this.state.isSubmitting) {
      return;
    }

    this.setState({
      isSubmitting: true
    });

    if(this.props.data.sendMailUrl) {
      axios
      .post(`${this.props.data.sendMailUrl}`, {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      })
      .then(res => {
        this.successAlertHandler();
      })
      .catch(({ response: error }) => {
        if (error) {
          if (error.status == 400) {
            this.errorAlertHandler(error.data.errors.map(error => error.msg));
          } else {
            this.errorAlertHandler(['Something Went Wrong']);
          }
        } else {
          this.errorAlertHandler(['Something Went Wrong']);
        }
      })
      .finally(() => {
        this.resetFormState();
        formRef.reset();
      });
    } else {
      this.errorAlertHandler(['Something Went Wrong']);
      this.resetFormState();
      formRef.reset();
    }
  };

  resetFormState() {
    this.setState({
      isSubmitting: false,
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  successAlertHandler() {
    this.setState({ showSuccessAlert: true });
    this.resetAlertsAfterTimeout();
  }

  errorAlertHandler(errors) {
    this.setState({ showErrorAlert: true, errors });
    this.resetAlertsAfterTimeout();
  }

  resetAlertsAfterTimeout() {
    setTimeout(() => {
      this.setState({ showSuccessAlert: false, showErrorAlert:false, errors: [] });
    }, 5000);
  }

  errorAlertRenderer() {
    return this.state.errors.map(error => (
      <div
        class="alert alert-danger alert-dismissible animated flipInX"
        role="alert"
      >
        <strong>Error!</strong> {error}
      </div>
    ));
  }

  successAlertRenderer() {
    return (
      <div class="alert alert-success alert-dismissible flipInX" role="alert">
        <strong>Success!</strong> Your message has been successfuly delivered.
      </div>
    );
  }

  handleSuccess;

  render() {
    return (
      <>
        {this.state.showSuccessAlert ? this.successAlertRenderer() : <></>}

        {this.state.showErrorAlert ? this.errorAlertRenderer() : <></>}

        <form ref={this.formRef} onSubmit={this.handleSubmitForm}>
          <div class="row inline-form">
            <div class="col-md">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>
            <div class="col-md">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              rows="5"
              value={this.state.message}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="d-flex mt-3 flex-row-reverse">
            <button
              type="submit"
              className={
                'btn btn-primary align-items-end ' +
                (this.state.isSubmitting ? 'disabled' : '')
              }
            >
              {this.state.isSubmitting ? <Spinner></Spinner> : <></>}
              Send Message
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default () => {
  const {
    contentfulContactMe: data
  } = useStaticQuery(graphql`
    {
      contentfulContactMe {
        sendMailUrl
      }
    }
  `);
  
  return (
    <ContactForm data={data} />
  )
}