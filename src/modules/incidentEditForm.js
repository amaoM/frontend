const initialState = {
  title: '',
  level: 'critical',
  status: 'unsupported',
  description: '',
  person: '',
};

// Action Creators
export const editIncident = incidentEditForm => ({
  type: 'EDIT_INCIDENT',
  incidentEditForm,
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
    totalResult: false,
  };
  result.totalResult = result.title
    && result.level
    && result.status
    && result.description
    && result.person;
  return result;
};

const incidentEditForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INCIDENT_EDIT_FORM': {
      const newState = Object.assign({}, state, {
        [action.event.target.name]: action.event.target.value,
      });
      const validationResult = validation(newState);
      return Object.assign({}, newState, { validationResult });
    }
    case 'EDIT_INCIDENT': {
      const validationResult = validation(state);
      const editedIncident = (validationResult.totalResult)
        ? {
          id: state.id,
          title: state.title,
          level: state.level,
          status: state.status,
          description: state.description,
          person: state.person,
        }
        : undefined;
      return Object.assign({}, state, { validationResult, newIncident });
    }
    default:
      return state;
  }
};

export default incidentEditForm;
