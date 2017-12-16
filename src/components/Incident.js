import React from 'react';
import PropTypes from 'prop-types';

const Incident = ({
  level,
  status,
  title,
  person,
}) => {
  let rowClassName = `table__body__row table__body__row--${level}`;
  if (status === 'completed') rowClassName = 'table__body__row table__body__row--completed';
  return (
    <tr className={rowClassName}>
      <td className="table__body__row__item table__body__row__item--center">{level}</td>
      <td className="table__body__row__item table__body__row--center">{status}</td>
      <td className="table__body__row__item">{title}</td>
      <td className="table__body__row__item table__body__row__item--center">{person}</td>
    </tr>
  );
};

Incident.propTypes = {
  level: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
};

export default Incident;
