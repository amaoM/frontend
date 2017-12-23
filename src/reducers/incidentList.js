import incident from './incident';

const initialState = [];

const incidentList = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SEARCH_KEYWORD':
      return state.map(t => incident(t, action));
    case 'CREATE_INCIDENT':
      return [
        ...state,
        Object.assign({}, action.incidentCreateForm),
      ];
    default:
      return state;
  }
};

export default incidentList;
