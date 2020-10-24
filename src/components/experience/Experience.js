import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import TimeTag from '../../../static/icons/time-tag.svg';

import TimelineElement from './TimelineElement';

import NodeJs from '../../../static/icons/nodejs.svg';
import ReactJs from '../../../static/icons/reactjs.svg';
import Angular from '../../../static/icons/angular.svg';
import Laravel from '../../../static/icons/Laravel.svg';
import Mongo from '../../../static/icons/mongo.svg';
import Kafka from '../../../static/icons/kafka.svg';
import AWS from '../../../static/icons/aws.svg';
import NextJs from '../../../static/icons/nextjs.svg';
import RubyOnRails from '../../../static/icons/reactjs.svg';
import Php from '../../../static/icons/php.svg';
import MySql from '../../../static/icons/mysql.svg';

const experienceData = [
  {
    fromDate: {
      month: 'July',
      year: '2019'
    },
    logo: 'images/zetwerk.png',
    info:
      'Zetwerk provides global end-to-end manufacturing supply chain solutions',
    isPresent: true,
    title: 'Full-Stack Developer',
    description: 'Bengaluru, India',
    keyPoints: [
      'Promoted to tech lead position within the 9 month timeframe for exceeding goals & lead a team of 5 developers',
      'Pioneered the re-achitecture of AWS infrastructure reducing cost by 40% and increasing security',
      'Designed a ready-to-use boilerplate using NodeJs & ExpressJS based on OOPs to sign up a new micro service from scratch in no time and effort. Boilerplate supports many out-of-the box features like authentication etc',
      'Design & implementation of several micro services like Supplier Onboarding and Enquiry Management Systems',
      'Contributed to android app developments in JAVA and Kotlin'
    ],
    skills: [
      { name: 'Node Js', icon: NodeJs },
      { name: 'AWS', icon: AWS },
      { name: 'Kafka', icon: Kafka },
      { name: 'Angular', icon: Angular },
      { name: 'Mongo', icon: Mongo }
    ]
  },
  {
    fromDate: {
      month: 'April',
      year: '2019'
    },
    toDate: {
      month: 'July',
      year: '2019'
    },
    logo: 'images/anteelo.png',
    info:
      'Zetwerk provides global end-to-end manufacturing supply chain solutions',
    title: 'Full-Stack Developer',
    description: 'Delhi, India',
    keyPoints: [
      'Responsible for making new APIs and maintaining the backend of the application “italic” (www.italic.com) and build new UI components',
      'Deploying and maintaining the application on Kubernetes'
    ],
    skills: [
      { name: 'Next Js', icon: NextJs },
      { name: 'React Js', icon: ReactJs },
      { name: 'RubyOnRails', icon: RubyOnRails }
    ]
  },
  {
    fromDate: {
      month: 'July',
      year: '2017'
    },
    toDate: {
      month: 'April',
      year: '2019'
    },
    logo: 'images/dockabl.png',
    info:
      'An employee experience platform that enhances productivity, enables continuous performance and drives engagement',
    title: 'Software Developer',
    description: 'Delhi, India',
    keyPoints: [
      'Responsible for development and delivery of end-to-end modules for the product in a very constricted timeline',
      'Moved from front-end developer to full-stack developer within 6-7 months for joining'
    ],
    skills: [
      { name: 'Laravel', icon: Laravel },
      { name: 'Angular', icon: Angular },
      { name: 'React Js', icon: ReactJs },
      { name: 'Php', icon: Php },
      { name: 'Node Js', icon: NodeJs }
    ]
  }
];

const projectData = [
  {
    fromDate: {
      year: '2018'
    },
    title: 'Owney Mail',
    link: 'https://owneymail.com/',
    content:
      'OwneyMail is a high volume and reliable email marketing service for websites & mobile applications. We support all major email providers by providing dedicated email templating service that supports custom variables on the fly for each provider, a very easy to use RESTful server APL, & an online dashboard for marketers, developers & designers to design and send email easily.',
    skills: [
      { name: 'React Js', icon: ReactJs },
      { name: 'Next Js', icon: NextJs },
      { name: 'NodeJs', icon: NodeJs },
      { name: 'MySql', icon: MySql }
    ]
  },
  {
    fromDate: {
      year: '2017'
    },
    title: 'BuildSeeker',
    content:
      'We gather information about all of the PC components & creates the best suitable build to buy. Our community help each other by sharing their reviews about PC components, so you have all the right information to build your next new PC',
    skills: [
      { name: 'React Js', icon: ReactJs },
      { name: 'Laravel', icon: Laravel },
      { name: 'MySql', icon: MySql },
      { name: 'Next Js', icon: NextJs },
      { name: 'Php', icon: Php }
    ]
  }
];

const educationData = [
  {
    fromDate: {
      year: '2013'
    },
    toDate: {
      year: '2017'
    },
    title: 'B.Tech (Computer Science)',
    description: 'SGGSCC, University of Delhi',
    extra: '80%'
  },
  {
    fromDate: {
      year: '2011'
    },
    toDate: {
      year: '2013'
    },
    title: 'XII',
    description: 'Maharaja Agrasen Model School',
    extra: '94.6%'
  }
];

const timelineHeaderElement = title => {
  return (
    <>
      <VerticalTimelineElement
        icon={<TimeTag />}
        iconStyle={{ visibility: 'hidden' }}
      ></VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<TimeTag />}
        iconStyle={{ visibility: 'hidden' }}
      ></VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element-header"
        icon={<TimeTag />}
        iconStyle={{ visibility: 'hidden' }}
      >
        <div className="header-text-container">
          <span className="header-text">{title}</span>
          <span className="header-text-background">{title}</span>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<TimeTag />}
        iconStyle={{ visibility: 'hidden' }}
      ></VerticalTimelineElement>
    </>
  );
};

export default function Experience() {
  return (
    <div id="experience" className="experience section">
      {/* Experience Timeline */}
      <div className="workEx-Header header-text-container">
        <span className="header-text">Work Experience</span>
        <span className="header-text-background">Work Experience</span>
      </div>
      <VerticalTimeline>
        {experienceData.map(exp => (
          <VerticalTimelineElement icon={<TimeTag />}>
            <TimelineElement data={exp}></TimelineElement>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {/* Personal Projects Timeline */}
      <VerticalTimeline>
        {timelineHeaderElement('Personal Projects')}
        {projectData.map(exp => (
          <VerticalTimelineElement icon={<TimeTag />}>
            <TimelineElement data={exp}></TimelineElement>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {/* Education Timeline */}
      <VerticalTimeline>
        {timelineHeaderElement('Education')}
        {educationData.map(exp => (
          <VerticalTimelineElement icon={<TimeTag />}>
            <TimelineElement data={exp}></TimelineElement>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement className="end-tag" icon={<TimeTag />} />
      </VerticalTimeline>
    </div>
  );
}
