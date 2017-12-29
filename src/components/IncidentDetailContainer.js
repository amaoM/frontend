import React from 'react';
import PropTypes from 'prop-types';
import VisibleIncidentTimeLine from '../containers/IncidentTimeLine';
import VisibleIncidentEditForm from '../containers/IncidentEditForm';

const IncidentDetailContainer = ({ incidentId }) => (
  <div className="row">
    <VisibleIncidentTimeLine />
    <VisibleIncidentEditForm incidentId={incidentId} />
  </div>
);

IncidentDetailContainer.propTypes = {
  incidentId: PropTypes.string.isRequired,
};

export default IncidentDetailContainer;
