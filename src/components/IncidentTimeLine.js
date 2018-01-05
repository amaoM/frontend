import React from 'react';
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

export default IncidentTimeLine;
