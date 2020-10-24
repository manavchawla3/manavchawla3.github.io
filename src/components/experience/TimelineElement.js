import React from 'react';

import TimelineCard from './TimelineCard';

export default function TimeLineElement(props) {
  const { data } = props;
  const {
    fromDate,
    toDate = false,
    isPresent = false,
    info = '',
    logo = null
  } = data;

  return (
    <div>
      <div>
        <div className="timeline-element-date">
          <span className="from-date">
            {fromDate.month} {fromDate.year}
          </span>
          {toDate ? (
            <span className="to-date">
              {' '}
              - {toDate.month} {toDate.year}
            </span>
          ) : (
            <></>
          )}
          {isPresent ? <span className="present"> - Present</span> : <></>}
        </div>
        {logo || info ? (
          <div className="timeline-element-info mt-4">
            <div className="logo">
              <img style={{ 'max-height': '30px' }} src={logo} />
            </div>
            <div className="summary mt-1">{info}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="mt-4">
        <TimelineCard data={data}></TimelineCard>
      </div>
    </div>
  );
}
