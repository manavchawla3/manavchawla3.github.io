import React from 'react';

import Behance from '../../../static/icons/behance.svg';
import Dribbble from '../../../static/icons/dribbble.svg';

const socialLinks = [
  {
    socialName: 'https://dribbble.com/Aaqil_J',
    socialIcon: Dribbble,
    socialLink: 'https://dribbble.com/Aaqil_J'
  },
  {
    socialName: 'https://www.behance.net/aaqil_jamal',
    socialIcon: Behance,
    socialLink: 'https://www.behance.net/aaqil_jamal'
  }
];

export default function Footer() {
  const socials = socialLinks.map(
    ({ socialName, socialLink, socialIcon: Icon }) => (
      <li className="nav-item ml-4 ml-md-5 d-flex align-items-center">
        <a className="nav-link" target="blank" href={socialLink}>
          <Icon className="designer-profile-icons" />
        </a>
      </li>
    )
  );

  return (
    <div className="footer row">
      <div className="container d-flex justify-content-between align-items: center;">
        <span>Designed by Aaqil Jamal</span>
        <ul className="d-flex social-links"> {socials} </ul>
      </div>
    </div>
  );
}
