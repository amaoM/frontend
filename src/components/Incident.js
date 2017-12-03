import React from 'react';
import PropTypes from 'prop-types';

const Incident = ({
  id,
  title,
  status,
  onUpClick,
  onDownClick,
}) => (
  <li>
    <span>{title}</span>
    <span>{status}</span>
    <button onClick={() => onUpClick(id)}>up</button>
    <button onClick={() => onDownClick(id)}>down</button>
  </li>
);

Incident.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onUpClick: PropTypes.func.isRequired,
  onDownClick: PropTypes.func.isRequired,
};

export default Incident;
