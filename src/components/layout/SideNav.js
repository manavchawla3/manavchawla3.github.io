import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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

export default function SideNav() {
  const socialNavs = socialLinks.map(
    ({ socialName, socialLink, socialIcon: Icon }) => (
      <li className="nav-item py-4">
        <a className="nav-link" target="blank" href={socialLink}>
          <Icon className="contact-icons" />
        </a>
      </li>
    )
  );
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10"></div>
      <div className="col-1 d-flex justify-content-center">
        <nav className="side-nav py-5">
          <ul>{socialNavs}</ul>
        </nav>
      </div>
    </div>
  );
}
