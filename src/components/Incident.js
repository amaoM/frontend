import React from 'react';
import PropTypes from 'prop-types';

const span = {
  'padding-right': '10px',
};

const Incident = ({
  id,
  status,
  title,
  person,
  toggleStatus,
  onChangeStatus,
}) => (
  <li>
    <span className="status" style={span}>{status}</span>
    <span className="title" style={span}>{title}</span>
    <span className="person" style={span}>{person}</span>
    <button className="status" onClick={() => onChangeStatus(id)}>{toggleStatus}</button>
  </li>
);

Incident.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  toggleStatus: PropTypes.string.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

export default Incident;
