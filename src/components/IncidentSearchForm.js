import React from 'react';
import PropTypes from 'prop-types';

const levelItems = {
  all: 'All',
  critical: 'Critical',
  warning: 'Warning',
};

const statusItems = {
  all: 'All',
  unsupported: 'Unsupported',
  in_progress: 'In Progress',
  completed: 'Completed',
};

const createOptions = (
  selectedKey,
  items,
) => {
  const options = [];
  let isSelected = false;
  Object.keys(items).forEach((key) => {
    isSelected = selectedKey === key;
    options.push(<option key={key} value={key} defaultValue={isSelected} >{items[key]}</option>);
  });
  return options;
};

const IncidentSearchForm = ({
  incidentSearchForm,
  searchIncident,
}) => (
  <section className="col search">
    <div className="search__form">
      <input
        type="text"
        className="search__form__input"
        name="keyword"
        value={incidentSearchForm.keyword}
        onChange={event => searchIncident(event)}
      />
      <select className="search__form__select" name="level" onChange={event => searchIncident(event)}>
        { createOptions(incidentSearchForm.level, levelItems) }
      </select>
      <select className="search__form__select" name="status" onChange={event => searchIncident(event)}>
        { createOptions(incidentSearchForm.status, statusItems) }
      </select>
    </div>
  </section>
);

IncidentSearchForm.propTypes = {
  incidentSearchForm: PropTypes.shape({
    keyword: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  searchIncident: PropTypes.func.isRequired,
};

export default IncidentSearchForm;
