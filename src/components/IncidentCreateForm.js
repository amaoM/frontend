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

const createOptions = items => {
  const options = [];
  Object.keys(items).forEach(key => {
    options.push(
      <option key={key} value={key}>
        {items[key]}
      </option>
    );
  });
  return options;
};

const IncidentCreateForm = ({
  incidentCreateForm,
  updateIncidentCreateForm,
  addIncident,
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
            value={incidentCreateForm.title}
            onChange={event => updateIncidentCreateForm(event)}
          />
        </li>
        <li className="incidentForm__container__item-header">Level</li>
        <li className="incidentForm__container__item-value">
          <select
            name="level"
            className="incidentForm__container__item-value__select"
            value={incidentCreateForm.level}
            onChange={event => updateIncidentCreateForm(event)}
          >
            {createOptions(levelItems)}
          </select>
        </li>
        <li className="incidentForm__container__item-header">Status</li>
        <li className="incidentForm__container__item-value">
          <select
            name="status"
            className="incidentForm__container__item-value__select"
            value={incidentCreateForm.status}
            onChange={event => updateIncidentCreateForm(event)}
          >
            {createOptions(statusItems)}
          </select>
        </li>
        <li className="incidentForm__container__item-header">Description</li>
        <li className="incidentForm__container__item-value">
          <textarea
            name="description"
            className="incidentForm__container__item-value__textarea"
            value={incidentCreateForm.description}
            onChange={event => updateIncidentCreateForm(event)}
          />
        </li>
        <li className="incidentForm__container__item-header">Person</li>
        <li className="incidentForm__container__item-value">
          <input
            type="text"
            className="incidentForm__container__item-value__input"
            name="person"
            value={incidentCreateForm.person}
            onChange={event => updateIncidentCreateForm(event)}
          />
        </li>
        <li className="incidentForm__container__item-button">
          <button
            className="incidentForm__container__item-button__decision"
            onClick={() => addIncident(incidentCreateForm)}
            disabled={!incidentCreateForm.validationResult.totalResult}
          >
            Create
          </button>
        </li>
      </ul>
    </div>
  </section>
);

IncidentCreateForm.propTypes = {
  incidentCreateForm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
    validationResult: PropTypes.shape({
      totalResult: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  updateIncidentCreateForm: PropTypes.func.isRequired,
  addIncident: PropTypes.func.isRequired,
};

export default IncidentCreateForm;
