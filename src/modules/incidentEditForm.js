// Action Creators
export const editIncident = incident => ({
  type: 'EDIT_INCIDENT',
  incident,
});

export const updateIncidentEditForm = event => ({
  type: 'UPDATE_INCIDENT_EDIT_FORM',
  event,
});

// Reducer
const validation = (state) => {
  const result = {
    title: !!state.title && state.title !== null && state.title !== '',
    level: !!state.level && ['critical', 'warning'].indexOf(state.level) >= 0,
    status: !!state.status && ['unsupported', 'in_progress', 'completed'].indexOf(state.status) >= 0,
    description: !!state.description,
    person: !!state.person,
  };
  const totalResult = Object.keys(result).every(item => {
    return result[item];
  })
  console.log(state);
  return Object.assign({}, result, { totalResult });
};

const incidentEditForm = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_INCIDENT_EDIT_FORM': {
      const newState = Object.assign({}, state, {
        [action.event.target.name]: action.event.target.value,
      });
      const validationResult = validation(newState);
      return Object.assign({}, newState, { validationResult });
    }
    case 'EDIT_INCIDENT': {
      const validationResult = validation(action.incident);
      return Object.assign({}, action.incident, { validationResult });
    }
    default:
      return state;
  }
};

export default incidentEditForm;
