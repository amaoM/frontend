import React from 'react';
import VisibleSearch from '../containers/Search';
import IncidentContainer from '../components/IncidentContainer';

const Runway = () => (
  <main className="container">
    <VisibleSearch />
    <IncidentContainer />
  </main>
);

export default Runway;
