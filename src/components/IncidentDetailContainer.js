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

export default IncidentDetailContainer;
