import incident from './incident';

const initialState = [];

let newIncidentId = 0;

const incidentList = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SEARCH_KEYWORD':
      return state.map(t => incident(t, action));
    case 'CREATE_INCIDENT':
      newIncidentId += 1;
      return [
        ...state,
        Object.assign({}, { id: newIncidentId }, action.incidentCreateForm),
      ];
    default:
      return state;
  }
};

export default incidentList;
