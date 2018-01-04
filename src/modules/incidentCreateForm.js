const initialState = {
  id: 1,
  title: '',
  level: 'critical',
  status: 'unsupported',
  description: '',
  person: '',
  validationResult: {
    totalResult: false,
  },
};

// Action Creators
export const updateIncidentCreateForm = event => ({
  type: 'UPDATE_INCIDENT_CREATE_FORM',
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

const incidentCreateForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INCIDENT_CREATE_FORM': {
      const newState = Object.assign({}, state, {
        [action.event.target.name]: action.event.target.value,
      });
      const validationResult = validation(newState);
      return Object.assign({}, newState, { validationResult });
    }
    case 'ADD_INCIDENT':
      return Object.assign({}, initialState, { id: state.id + 1 });
    default:
      return state;
  }
};

export default incidentCreateForm;
