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

const IncidentCreateForm = ({
  incidentCreateForm,
  updateIncidentCreateForm,
  createIncident,
}) => (
  <section className="col-4">
    <ul className="incident">
      <li className="incident__item-header">Title</li>
      <li className="incident__item-value">
        <input
          type="text"
          name="title"
          value={incidentCreateForm.title}
          onChange={event => updateIncidentCreateForm(event)}
        />
      </li>
      <li className="incident__item-header">Level</li>
      <li className="incident__item-value">
        <select name="level" value={incidentCreateForm.level} onChange={event => updateIncidentCreateForm(event)}>
          { createOptions(levelItems) }
        </select>
      </li>
      <li className="incident__item-header">Status</li>
      <li className="incident__item-value">
        <select name="status" value={incidentCreateForm.status} onChange={event => updateIncidentCreateForm(event)}>
          { createOptions(statusItems) }
        </select>
      </li>
      <li className="incident__item-header">Description</li>
      <li className="incident__item-value">
        <textarea
          name="description"
          value={incidentCreateForm.description}
          onChange={event => updateIncidentCreateForm(event)}
        />
      </li>
      <li className="incident__item-header">Person</li>
      <li className="incident__item-value">
        <input
          type="text"
          name="person"
          value={incidentCreateForm.person}
          onChange={event => updateIncidentCreateForm(event)}
        />
      </li>
      <li className="incident__item-button">
        <button onClick={() => createIncident(incidentCreateForm)}>Create</button>
      </li>
    </ul>
  </section>
);

IncidentCreateForm.propTypes = {
  incidentCreateForm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
  }).isRequired,
  updateIncidentCreateForm: PropTypes.func.isRequired,
  createIncident: PropTypes.func.isRequired,
};

export default IncidentCreateForm;

