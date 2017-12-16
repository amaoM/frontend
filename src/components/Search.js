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
    if (selectedKey === key) isSelected = true;
    options.push(<option key={key} value={key} defaultValue={isSelected} >{items[key]}</option>);
  });
  return options;
};

const Search = ({
  search,
  searchIncident,
}) => (
  <div className="row">
    <section className="search col">
      <input
        type="text"
        name="keyword"
        value={search.keyword}
        onChange={event => searchIncident(event, search)}
      />
      <select name="level" onChange={event => searchIncident(event, search)}>
        { createOptions(search.level, levelItems) }
      </select>
      <select name="status" onChange={event => searchIncident(event, search)}>
        { createOptions(search.status, statusItems) }
      </select>
    </section>
  </div>
);

Search.propTypes = {
  search: PropTypes.shape({
    keyword: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  searchIncident: PropTypes.func.isRequired,
};

export default Search;
