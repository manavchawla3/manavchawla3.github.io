import React from 'react';
import SkillSet from './SkillSet';

import NodeJs from '../../../static/icons/nodejs.svg';
import ReactJs from '../../../static/icons/reactjs.svg';
import Angular from '../../../static/icons/angular.svg';
import Laravel from '../../../static/icons/Laravel.svg';
import Css from '../../../static/icons/css.svg';
import Html from '../../../static/icons/html.svg';
import MySql from '../../../static/icons/mysql.svg';
import Mongo from '../../../static/icons/mongo.svg';
import AWS from '../../../static/icons/aws.svg';
import Jenkins from '../../../static/icons/jenkins.svg';
import Kotlin from '../../../static/icons/kotlin.svg';
import Redis from '../../../static/icons/redis.svg';
import Kafka from '../../../static/icons/kafka.svg';

const skillLevelWiseArray = [
  [
    {
      category: 'Web Development',
      skills: [
        { name: 'Node Js', icon: NodeJs },
        { name: 'React Js', icon: ReactJs },
        { name: 'Angular', icon: Angular },
        { name: 'Laravel', icon: Laravel },
        { name: 'CSS', icon: Css },
        { name: 'HTML', icon: Html }
      ]
    }
  ],
  [
    {
      category: 'Database Query Languages',
      skills: [
        { name: 'Mongo DB', icon: Mongo },
        { name: 'My Sql', icon: MySql }
      ]
    },
    {
      category: 'Dev-Ops',
      skills: [
        { name: 'AWS', icon: AWS },
        { name: 'Jenkins', icon: Jenkins }
      ]
    },
    {
      category: 'Mobile app development',
      skills: [{ name: 'Android using Kotlin', icon: Kotlin }]
    }
  ],
  [
    {
      category: 'Others',
      skills: [
        { name: 'Redis', icon: Redis },
        { name: 'Kafka', icon: Kafka }
      ]
    }
  ]
];

export default function Skills() {
  const skillSets = skillSets =>
    skillSets.map(skillSet => (
      <div className="mx-auto">
        <SkillSet set={skillSet} />
      </div>
    ));

  const skillLevels = skillLevelWiseArray.map((skillLevel, index) => (
    <div
      className={`d-flex justify-content-center ${
        index > 0 ? 'skill-level' : ''
      }`}
    >
      {skillSets(skillLevel)}
    </div>
  ));
  return (
    <div id="skills" className="skills-section section">
      {skillLevels}
    </div>
  );
}
