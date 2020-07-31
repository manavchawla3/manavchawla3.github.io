import React from 'react';

import Behance from '../../../static/icons/behance.svg';
import Dribbble from '../../../static/icons/dribbble.svg';

const socialLinks = [
  {
    socialName: 'https://www.behance.net/aaqil_jamal',
    socialIcon: Behance,
    socialLink: 'https://www.behance.net/aaqil_jamal'
  },
  {
    socialName: 'https://dribbble.com/Aaqil_J',
    socialIcon: Dribbble,
    socialLink: 'https://dribbble.com/Aaqil_J'
  }
];

export default function Footer() {
  const socials = socialLinks.map(
    ({ socialName, socialLink, socialIcon: Icon }) => (
      <li className="nav-item ml-3">
        <a className="nav-link" target="blank" href={socialLink}>
          <Icon className="designer-profile-icons" />
        </a>
      </li>
    )
  );

  return (
    <div className="footer row">
      <div className="container d-flex justify-content-between">
        <span>Designed by Aaqil Jamal</span>
        <ul className="d-flex social-links"> {socials} </ul>
      </div>
    </div>
  );
}
