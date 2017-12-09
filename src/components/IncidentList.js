import React from 'react';
import PropTypes from 'prop-types';
import VisibleIncident from '../containers/Incident';

const ul = {
  'list-style': 'none',
};

const IncidentList = ({
  incidents,
}) => (
  <ul style={ul}>
    {incidents.map(incident => (
      <VisibleIncident
        key={incident.id}
        {...incident}
      />
    ))}
  </ul>
);

IncidentList.propTypes = {
  incidents: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    toggleStatus: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default IncidentList;
