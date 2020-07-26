import React from 'react';

import SkillAssessment from './SkillAssessment';
import Gmail from '../../../static/icons/gmail.svg';
import Github from '../../../static/icons/github.svg';
import Linkedin from '../../../static/icons/linkedin.svg';
import Location from '../../../static/icons/location.svg';
import Phone from '../../../static/icons/phone.svg';

const contactInfoLeft = [
  {
    link: 'mailto:manavchawla3@gmail.com',
    value: 'manavchawla3@mail.com',
    icon: Gmail
  },
  {
    link: 'https://goo.gl/maps/YQgL6jUwhNWzHqPBA',
    value: 'Qu 107 A, Pitampura, New Delhi, India',
    icon: Location
  },
  {
    link: 'https://github.com/manavchawla3',
    value: 'github.com/manavchawla3',
    icon: Github
  },
  {
    link: 'https://linkedin.com/in/manav-chawla-4955489b',
    value: 'linkedin.com/in/manav-chawla-4955489b',
    icon: Linkedin
  }
];

const contactInfoRight = [
  {
    link: 'tel:9711308935',
    value: '+91 9711308935',
    icon: Phone
  }
];

export default function About() {
  const contactListItems = contactInfo =>
    contactInfo.map(({ link, value, icon: Icon }, index) => (
      <li className={index > 0 ? 'mt-5' : ''}>
        <a
          className="d-flex align-items-center contact-icons"
          target="_blank"
          href={link}
        >
          <Icon />
          <span>{value}</span>
        </a>
      </li>
    ));
  return (
    <div className="about section">
      <SkillAssessment />
      <div id="#about" className="about-details">
        <div className="display-picture text-center">
          <img src="images/dp.png" />
          <a className="btn download-cv w-100">Download CV</a>
        </div>
        <div className="details">
          <div className="myContent-main">
            I am a Software Developer leading a team of 4 developers. Having 3
            years of experience in full-stack web and mobile app development
          </div>
          <div className="seperator"></div>
          <div className="myContent-sub">
            Experienced in end-to-end development and delivery of software.
            Understanding how to deal with clients and to deliver high-quality
            products on a timely schedule. Experience in all phases of product
            development from planning and requirement gathering, to implementing
            and testing.
          </div>
          <div className="contact-details d-flex">
            <ul className="mr-4">{contactListItems(contactInfoLeft)}</ul>
            <ul className="ml-4">{contactListItems(contactInfoRight)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
