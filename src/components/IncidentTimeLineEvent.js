import React from 'react';
import PropTypes from 'prop-types';

const IncidentTimeLineEvent = ({ timelineDate, offsetMessage }) => (
  <section className="event">
    <div className="time">{timelineDate}</div>
    <div className="text">
      {Object.keys(offsetMessage).map(item => (
        <div key={Math.floor(Math.random() * 10000)}>{offsetMessage[item]}</div>
      ))}
    </div>
  </section>
);

IncidentTimeLineEvent.propTypes = {
  timelineDate: PropTypes.string.isRequired,
  offsetMessage: PropTypes.string.isRequired,
};

export default IncidentTimeLineEvent;
