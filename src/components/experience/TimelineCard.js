import React from 'react';

export default function TimeLine(props) {
  const {
    data: {
      title = '',
      description = null,
      extra = null,
      link = null,
      content = null,
      keyPoints = [],
      skills = []
    }
  } = props;

  const renderKeyPoints = keyPoints => (
    <ul>
      {keyPoints.map(point => (
        <li>{point}</li>
      ))}
    </ul>
  );

  const renderSkills = skills => {
    return skills.map(({ name, icon: Icon }) => (
      <span className="card-icons">{<Icon />}</span>
    ));
  };

  return (
    <div className={`card ${skills.length ? 'pb-0' : ''}`}>
      {/* Card Header */}
      <div className="card-header d-flex align-items-center">
        <div className="left-text flex-grow-1">
          <div className="header-text">{title}</div>
          {description ? <div className="sub-text">{description}</div> : <></>}
        </div>

        <div className="right-text d-flex flex-column align-items-end">
          {extra ? <span>{extra}</span> : <></>}
          {link ? (
            <a target="_blank" href={link}>
              {link}
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* Card Body */}
      {content || keyPoints.length ? (
        <div
          className={`card-body ${
            description ? 'margin-top-16' : 'margin-top-40'
          }`}
        >
          {content ? <div className="content">{content}</div> : <></>}
          {keyPoints.length ? (
            <div className={`keyPoints ${content ? 'mt-3' : ''}`}>
              {renderKeyPoints(keyPoints)}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      {/* Card Footer */}
      {skills.length ? (
        <div
          className={`card-footer d-flex justify-content-between ${
            keyPoints.length ? 'margin-top-16' : 'margin-top-40'
          }`}
        >
          {renderSkills(skills)}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
