const initialState = {
  id: '1',
  title: '',
  level: 'critical',
  status: 'unsupported',
  description: '',
  person: '',
  validationResult: {},
  toggleCreateButton: false,
};

// Action Creators
export const updateIncidentCreateForm = event => ({
  type: 'UPDATE_INCIDENT_CREATE_FORM',
  event,
});

// Reducer
const validation = state => {
  return {
    title: !!state.title && state.title !== null && state.title !== '',
    level: !!state.level && ['critical', 'warning'].indexOf(state.level) >= 0,
    status:
      !!state.status &&
      ['unsupported', 'in_progress', 'completed'].indexOf(state.status) >= 0,
    description: !!state.description,
    person: !!state.person,
  };
};

const incidentCreateForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INCIDENT_CREATE_FORM': {
      const newState = Object.assign({}, state, {
        [action.event.target.name]: action.event.target.value,
      });
      const validationResult = validation(newState);
      const toggleCreateButton = Object.keys(validationResult).every(item => validationResult[item]);
      return Object.assign({}, newState, { validationResult, toggleCreateButton });
    }
    case 'ADD_INCIDENT':
      return Object.assign({}, initialState, {
        id: String(Number(state.id) + 1),
      });
    default:
      return state;
  }
};

export default incidentCreateForm;
