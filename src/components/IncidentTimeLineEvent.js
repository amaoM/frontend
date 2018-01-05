import React from 'react';

const IncidentTimeLineEvent = ({
  time,
  message,
}) => (
  <section className="event">
    <div className="time">{time}</div>
    <div className="text">{message}</div>
  </section>
);

export default IncidentTimeLineEvent;
