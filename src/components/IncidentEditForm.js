import React from 'react';
import PropTypes from 'prop-types';

const levelItems = {
  critical: 'Critical',
  warning: 'Warning',
};

const statusItems = {
  unsupported: 'Unsupported',
  in_progress: 'In Progress',
  completed: 'Completed',
};

const createOptions = (items) => {
  const options = [];
  Object.keys(items).forEach((key) => {
    options.push(<option key={key} value={key}>{items[key]}</option>);
  });
  return options;
};

const IncidentEditForm = ({
  incidentEditForm,
  updateIncidentEditForm,
  editIncident,
}) => (
  <section className="col-4">
    <ul className="incident">
      <li className="incident__item-header">Title</li>
      <li className="incident__item-value">
        <input
          type="text"
          name="title"
          value={incidentEditForm.title}
          onChange={event => updateIncidentEditForm(event)}
        />
      </li>
      <li className="incident__item-header">Level</li>
      <li className="incident__item-value">
        <select name="level" value={incidentEditForm.level} onChange={event => updateIncidentEditForm(event)}>
          { createOptions(levelItems) }
        </select>
      </li>
      <li className="incident__item-header">Status</li>
      <li className="incident__item-value">
        <select name="status" value={incidentEditForm.status} onChange={event => updateIncidentEditForm(event)}>
          { createOptions(statusItems) }
        </select>
      </li>
      <li className="incident__item-header">Description</li>
      <li className="incident__item-value">
        <textarea
          name="description"
          value={incidentEditForm.description}
          onChange={event => updateIncidentEditForm(event)}
        />
      </li>
      <li className="incident__item-header">Person</li>
      <li className="incident__item-value">
        <input
          type="text"
          name="person"
          value={incidentEditForm.person}
          onChange={event => updateIncidentEditForm(event)}
        />
      </li>
      <li className="incident__item-button">
        <button onClick={() => editIncident(incidentEditForm)}>Create</button>
      </li>
    </ul>
  </section>
);

IncidentEditForm.propTypes = {
  incidentEditForm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
  }).isRequired,
  updateIncidentEditForm: PropTypes.func.isRequired,
  editIncident: PropTypes.func.isRequired,
};

export default IncidentEditForm;
