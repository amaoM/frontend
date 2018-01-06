import React from 'react';

const IncidentTimeLineEvent = ({
  timelineDate,
  offsetMessage,
}) => (
  <section className="event">
    <div className="time">{timelineDate}</div>
    <div className="text">
      {Object.keys(offsetMessage).map(item => {
        const message = offsetMessage[item];
        return (
          <div>{message}</div>
        );
      })}
    </div>
  </section>
);

export default IncidentTimeLineEvent;
