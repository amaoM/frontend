import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const statusUp = id => ({
  type: 'STATUS_UP',
  id,
  status: 'up',
});

const statusDown = id => ({
  type: 'STATUS_DOWN',
  id,
  status: 'down',
});

const incident = (
  state,
  action,
) => {
  switch (action.type) {
    case 'STATUS_UP':
    case 'STATUS_DOWN':
      if (state.id === action.id) {
        return {
          id: state.id,
          title: state.title,
          status: action.status,
        };
      }
    default:
      return state;
  }
};

const incidents = (
  state = [
    { id: 1, title: 'title1', status: 'up' },
    { id: 2, title: 'title2', status: 'up' },
    { id: 3, title: 'title3', status: 'up' },
  ],
  action,
) => {
  switch (action.type) {
    case 'STATUS_UP':
    case 'STATUS_DOWN':
      return state.map(t => incident(t, action));
    default:
      return state;
  }
};

const runway = combineReducers({
  incidents,
});

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

const mapStateToIncidentProps = state => ({
  incident: state.incident,
});

const mapDispatchToIncidentProps = dispatch => ({
  onUpClick: (id) => {
    dispatch(statusUp(id));
  },
  onDownClick: (id) => {
    dispatch(statusDown(id));
  },
});

const VisibleIncident = connect(
  mapStateToIncidentProps,
  mapDispatchToIncidentProps,
)(Incident);

const IncidentList = ({
  nowIncidents,
}) => (
  <ul>
    {nowIncidents.map(nowIncident => (
      <VisibleIncident
        key={nowIncident.id}
        {...nowIncident}
      />
    ))}
  </ul>
);

const mapStateToIncidentListProps = state => ({
  nowIncidents: state.incidents,
});

const VisibleIncidentList = connect(mapStateToIncidentListProps)(IncidentList);

const Runway = () => (
  <div>
    <VisibleIncidentList />
  </div>
);

ReactDOM.render(
  <Provider store={createStore(runway)}>
    <Runway />
  </Provider>,
  document.getElementById('root'),
);
