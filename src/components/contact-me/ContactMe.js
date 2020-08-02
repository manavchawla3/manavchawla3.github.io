import React from 'react';

import ContactForm from './ContactForm';

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
      <div className="d-flex container">
        <div className="profile-links d-flex flex-column align-items-center">
          <img
            className="profile-picture"
            src="images/contact_me_profile.png"
          />
          <ul className="d-flex mt-3 social-links"> {socials} </ul>
        </div>

        <div className="contact-form d-flex flex-column flex-grow-1">
          <span className="form-header text--uppercase mb-3">Contact Me</span>
          <ContactForm className="mt-3"></ContactForm>
        </div>
      </div>
    </div>
  );
}
