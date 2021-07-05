import React from 'react';

import ProgressRing from '../common/ProgressRing';

const skillAssessmentData = [
  { percentage: 75, name: 'Web development' },
  { percentage: 50, name: 'Database Query' },
  { percentage: 50, name: 'Dev-Ops' },
  { percentage: 50, name: 'Mobile App development' }
];

export default function SkillAssessment() {
  const skillProgress = skillAssessmentData.map((skillProgress, index) => (
    <div key={index} className="circular-progress d-flex flex-column align-items-center">
      <ProgressRing
        radius={65}
        strokeWidth={10}
        progress={skillProgress.percentage}
      />
      <span className="progress-label">{skillProgress.name}</span>
    </div>
  ));
  return (
    <div className="d-flex justify-content-around skill-assessment">
      {skillProgress}
    </div>
  );
}
