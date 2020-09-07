import React from 'react';

import TimelineCard from './TimelineCard';
import NodeJs from '../../../static/icons/nodejs.svg';
import ReactJs from '../../../static/icons/reactjs.svg';
import Angular from '../../../static/icons/angular.svg';
import Laravel from '../../../static/icons/Laravel.svg';

const experienceData = {
  title: 'Full-Stack Developer',
  description: 'Bengaluru, India',
  extra: '80%',
  link: 'https://owneymail.com/',
  content:
    'OwneyMail is a high volume and reliable email marketing service for websites & mobile applications. We support all major email providers by providing dedicated email templating service that supports custom variables on the fly for each provider, a very easy to use RESTful server APL, & an online dashboard for marketers, developers & designers to design and send email easily.',
  // keyPoints: [
  //   'Responsible for development and delivery of end-to-end modules for the product in a very constricted timeline',
  //   ' Moved from front-end developer to full-stack developer within 6-7 months for joining'
  // ],
  skills: [
    { name: 'Node Js', icon: NodeJs },
    { name: 'React Js', icon: ReactJs },
    { name: 'Angular', icon: Angular },
    { name: 'Laravel', icon: Laravel }
  ]
};

export default function Experience() {
  return (
    <div id="experience" className="experience section">
      <TimelineCard data={experienceData}></TimelineCard>
    </div>
  );
}
