import React from 'react';
import PropTypes from 'prop-types';
import VisibleIncidentTimeLine from '../containers/IncidentTimeLine';
import VisibleIncidentEditForm from '../containers/IncidentEditForm';

const IncidentDetailContainer = ({
  initialIncident,
}) => (
  <div className="row">
    <VisibleIncidentTimeLine />
    <VisibleIncidentEditForm initialIncident={initialIncident} />
  </div>
);

IncidentDetailContainer.propTypes = {
  initialIncident: PropTypes.shape({
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
  }).isRequired,
};

export default IncidentDetailContainer;
