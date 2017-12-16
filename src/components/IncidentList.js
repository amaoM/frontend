import React from 'react';
import PropTypes from 'prop-types';
import VisibleIncident from '../containers/Incident';

const IncidentList = ({
  incidents,
}) => (
  <section className="col-8">
    <table className="table">
      <thead className="table__head">
        <tr className="table__head__row">
          <th className="table__head__row__item" width="20%">Level</th>
          <th className="table__head__row__item" width="20%">Status</th>
          <th className="table__head__row__item" width="50%">Title</th>
          <th className="table__head__row__item" width="10%">Person</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {incidents.map(incident => (
          <VisibleIncident
            key={incident.title}
            {...incident}
          />
        ))}
      </tbody>
    </table>
  </section>
);

IncidentList.propTypes = {
  incidents: PropTypes.arrayOf(PropTypes.shape({
    level: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default IncidentList;
