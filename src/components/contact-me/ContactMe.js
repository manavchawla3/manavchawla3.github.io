import React from 'react';

import Gmail from '../../../static/icons/gmail.svg';
import Linkedin from '../../../static/icons/linkedin.svg';
import Github from '../../../static/icons/github.svg';

const socialLinks = [
  {
    socialName: 'manavchawla3@mail.com',
    socialIcon: Gmail,
    socialLink: 'mailto:manavchawla3@gmail.com'
  },
  {
    socialName: 'github.com/manavchawla3',
    socialIcon: Github,
    socialLink: 'https://github.com/manavchawla3'
  },
  {
    socialName: 'linkedin.com/in/manav-chawla-4955489b',
    socialIcon: Linkedin,
    socialLink: 'https://linkedin.com/in/manav-chawla-4955489b'
  }
];

export default function ContactMe() {
  const socials = socialLinks.map(
    ({ socialName, socialLink, socialIcon: Icon }) => (
      <li className="nav-item">
        <a className="nav-link" target="blank" href={socialLink}>
          <Icon className="contact-icons" />
        </a>
      </li>
    )
  );

  return (
    <div
      id="#contact-me"
      className="contact-me section d-flex justify-content-center"
    >
      <div className="d-flex">
        <div className="profile-links d-flex flex-column align-items-center">
          <img className="profile-picture" src="images/gatsby-astronaut.png" />
          <ul className="d-flex mt-3 social-links"> {socials} </ul>
        </div>

        <div className="contact-form d-flex flex-column">
          <span className="form-header text--uppercase">Contact Me</span>
          <form className="mt-3">
            <div className="d-flex">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group ml-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                class="form-control"
                id="message"
                placeholder="Message"
                rows="5"
              />
            </div>
            <div className="d-flex mt-3 flex-row-reverse">
              <button type="submit" className="btn btn-primary align-items-end">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
