import React from 'react';
import PropTypes from 'prop-types';
import VisibleIncident from '../containers/Incident';

const IncidentList = ({ incidentList }) => (
  <section className="col-8 incident-list">
    <table className="table">
      <thead className="table__head">
        <tr className="table__head__row">
          <th className="table__head__row__item" width="5%" />
          <th className="table__head__row__item" width="10%">
            ID
          </th>
          <th className="table__head__row__item" width="15%">
            Level
          </th>
          <th className="table__head__row__item" width="15%">
            Status
          </th>
          <th className="table__head__row__item" width="45%">
            Title
          </th>
          <th className="table__head__row__item" width="10%">
            Person
          </th>
        </tr>
      </thead>
      <tbody className="table__body">
        {incidentList.map(incident => (
          <VisibleIncident
            key={`VisibleIncident${incident.id}`}
            {...incident}
          />
        ))}
      </tbody>
    </table>
  </section>
);

IncidentList.propTypes = {
  incidentList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      person: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default IncidentList;
