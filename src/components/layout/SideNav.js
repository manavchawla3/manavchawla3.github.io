import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Gmail from '../../../static/icons/gmail.svg';
import Linkedin from '../../../static/icons/linkedin.svg';
import Github from '../../../static/icons/github.svg';

export default function SideNav() {
  return (
    <nav className="side-nav py-5">
      <ul>
        <li className="nav-item py-4">
          <a className="nav-link">
            <Gmail className="contact-icons" />
          </a>
        </li>
        <li className="nav-item py-4">
          <a className="nav-link">
            <Linkedin className="contact-icons" />
          </a>
        </li>
        <li className="nav-item py-4">
          <a className="nav-link">
            <Github className="contact-icons" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
