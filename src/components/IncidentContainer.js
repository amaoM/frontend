import React from 'react';
import VisibleIncidentList from '../containers/IncidentList';
import VisibleIncidentCreateForm from '../containers/IncidentCreateForm';

const IncidentContainer = () => (
  <div className="row">
    <VisibleIncidentList />
    <VisibleIncidentCreateForm />
  </div>
);

export default IncidentContainer;
