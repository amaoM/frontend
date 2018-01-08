import React from 'react';
import PropTypes from 'prop-types';
import IncidentTimeLineEvent from '../components/IncidentTimeLineEvent';

const IncidentTimeLine = ({
  incidentTimeLine,
}) => (
  <div className="col-8">
    <section className="timeline-box">
      <section className="timeline">
        {incidentTimeLine.map(timeLineEvent => (
          <IncidentTimeLineEvent
            key={`IncidentTimeLineEvent${timeLineEvent.id}`}
            {...timeLineEvent}
          />
        ))}
      </section>
    </section>
  </div>
);

IncidentTimeLine.propTypes = {
  incidentTimeLine: PropTypes.arrayOf(PropTypes.shape({
    timelineDate: PropTypes.string.isRequired,
    offsetMessage: PropTypes.shape().isRequired,
  }).isRequired).isRequired,
};

export default IncidentTimeLine;
