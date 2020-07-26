import React from 'react';
import SkillSet from './SkillSet';

import ReactJs from '../../../static/icons/reactjs.svg';

const skillLevelWiseArray = [
  [
    {
      category: 'Web Development',
      skills: [
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs }
      ]
    }
  ],
  [
    {
      category: 'Database Query Languages',
      skills: [
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs }
      ]
    },
    {
      category: 'Dev-Ops',
      skills: [
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs }
      ]
    },
    {
      category: 'Mobile app development',
      skills: [
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs }
      ]
    }
  ],
  [
    {
      category: 'Others',
      skills: [
        { name: 'React Js', icon: ReactJs },
        { name: 'React Js', icon: ReactJs }
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
    <div id="#skills" className="skills-section section">
      {skillLevels}
    </div>
  );
}
