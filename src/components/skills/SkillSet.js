import React from 'react';

export default function SkillSet(props) {
  const { set: skillSet } = props;
  const renderSkills = skillSet.skills.map(({ name, icon: Icon }) => (
    <div className="d-flex flex-column skill">
      <span className="skill-icon">{<Icon />}</span>
      <span className="skill-name">{name}</span>
    </div>
  ));
  return (
    <div className="skill-set text-center">
      <div className="set-name">{skillSet.category}</div>
      <div className="set-values d-flex justify-content-center mt-4">
        {renderSkills}
      </div>
    </div>
  );
}
