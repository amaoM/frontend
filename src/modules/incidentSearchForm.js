const initialState = {
  keyword: '',
  level: 'all',
  status: 'all',
};

// Action Creators
export const searchIncident = event => ({
  type: 'SEARCH_INCIDENT',
  event,
});

// Reducer
const search = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SEARCH_INCIDENT': {
      switch (action.event.target.name) {
        case 'keyword':
          return Object.assign({}, state, {
            keyword: action.event.target.value,
          });
        case 'level':
          return Object.assign({}, state, {
            level: action.event.target.value,
          });
        case 'status':
          return Object.assign({}, state, {
            status: action.event.target.value,
          });
        default:
          return state;
      }
    }
    default:
      return state;
  }
};

export default search;
