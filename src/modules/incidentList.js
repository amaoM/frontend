import incident from './incident';

const initialState = [];

// Action Creators
export const searchIncident = event => ({
  type: 'SEARCH_KEYWORD',
  event,
});

export const addIncident = incidentCreateForm => ({
  type: 'ADD_INCIDENT',
  incidentCreateForm,
});

// Reducer
const incidentList = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SEARCH_KEYWORD':
      return state.map(t => incident(t, action));
    case 'ADD_INCIDENT':
      return [
        ...state,
        action.incidentCreateForm,
      ];
    default:
      return state;
  }
};

export default incidentList;
