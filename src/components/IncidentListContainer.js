import React from 'react';
import VisibleIncidentSearchForm from '../containers/IncidentSearchForm';
import VisibleIncidentList from '../containers/IncidentList';
import VisibleIncidentCreateForm from '../containers/IncidentCreateForm';

const IncidentListContainer = () => (
  <div>
    <div className="row">
      <VisibleIncidentSearchForm />
    </div>
    <div className="row">
      <VisibleIncidentList />
      <VisibleIncidentCreateForm />
    </div>
  </div>
);

export default IncidentListContainer;
