// Action Creators
export const editIncident = incident => ({
  type: 'EDIT_INCIDENT',
  incident,
});

export const updateIncidentEditForm = (event, initialIncident) => ({
  type: 'UPDATE_INCIDENT_EDIT_FORM',
  event,
  initialIncident,
});

// Reducer
const validation = (state, initialIncident = null) => {
  const result = {
    title: !!state.title && state.title !== null && state.title !== '',
    level: !!state.level && ['critical', 'warning'].indexOf(state.level) >= 0,
    status: !!state.status && ['unsupported', 'in_progress', 'completed'].indexOf(state.status) >= 0,
    description: !!state.description,
    person: !!state.person,
  };
  const totalResult = initialIncident != null &&
    Object.keys(result).every(item => (result[item])) &&
    Object.keys(initialIncident).some(item => (
      state[item] !== initialIncident[item]
    ));
  return Object.assign({}, result, { totalResult });
};

const updateState = (state, initialIncident) => {
  const validationResult = validation(state, initialIncident);
  return Object.assign({}, state, { validationResult });
};

const incidentEditForm = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_INCIDENT': {
      return updateState(action.incident);
    }
    case 'UPDATE_INCIDENT_EDIT_FORM': {
      const newState = Object.assign({}, state, {
        [action.event.target.name]: action.event.target.value,
      });
      return updateState(newState, action.initialIncident);
    }
    case 'ADD_INCIDENT_TIMELINE_EVENT': {
      return updateState(state);
    }
    default:
      return state;
  }
};

export default incidentEditForm;
