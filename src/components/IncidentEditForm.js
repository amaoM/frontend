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
  initialIncident,
  incidentEditForm,
  updateIncidentEditForm,
  updateIncident,
  addIncidentTimeLineEvent,
}) => (
  <section className="col-4">
    <div className="incidentForm">
      <ul className="incidentForm__container">
        <li className="incidentForm__container__item-header">Title</li>
        <li className="incidentForm__container__item-value">
          <input
            type="text"
            className="incidentForm__container__item-value__input"
            name="title"
            value={incidentEditForm.title}
            onChange={event => updateIncidentEditForm(event, initialIncident)}
          />
        </li>
        <li className="incidentForm__container__item-header">Level</li>
        <li className="incidentForm__container__item-value">
          <select
            name="level"
            className="incidentForm__container__item-value__select"
            value={incidentEditForm.level}
            onChange={event => updateIncidentEditForm(event, initialIncident)}
          >
            { createOptions(levelItems) }
          </select>
        </li>
        <li className="incidentForm__container__item-header">Status</li>
        <li className="incidentForm__container__item-value">
          <select
            name="status"
            className="incidentForm__container__item-value__select"
            value={incidentEditForm.status}
            onChange={event => updateIncidentEditForm(event, initialIncident)}
          >
            { createOptions(statusItems) }
          </select>
        </li>
        <li className="incidentForm__container__item-header">Description</li>
        <li className="incidentForm__container__item-value">
          <textarea
            name="description"
            className="incidentForm__container__item-value__textarea"
            value={incidentEditForm.description}
            onChange={event => updateIncidentEditForm(event, initialIncident)}
          />
        </li>
        <li className="incidentForm__container__item-header">Person</li>
        <li className="incidentForm__container__item-value">
          <input
            type="text"
            className="incidentForm__container__item-value__input"
            name="person"
            value={incidentEditForm.person}
            onChange={event => updateIncidentEditForm(event, initialIncident)}
          />
        </li>
        <li className="incidentForm__container__item-button">
          <button
            className="incidentForm__container__item-button__decision"
            onClick={() => {
              updateIncident(incidentEditForm);
              addIncidentTimeLineEvent(initialIncident, incidentEditForm);
            }}
            disabled={(!incidentEditForm.validationResult.totalResult)}
          >
            Edit
          </button>
        </li>
      </ul>
    </div>
  </section>
);

IncidentEditForm.propTypes = {
  initialIncident: PropTypes.shape({
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
  }).isRequired,
  incidentEditForm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
  }).isRequired,
  updateIncidentEditForm: PropTypes.func.isRequired,
  updateIncident: PropTypes.func.isRequired,
  addIncidentTimeLineEvent: PropTypes.func.isRequired,
};

export default IncidentEditForm;
