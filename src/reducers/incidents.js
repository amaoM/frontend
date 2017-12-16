import incident from './incident';

const initialState = [];

const incidents = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'STATUS_TOGGLE':
      return state.map(t => incident(t, action));
    case 'SEARCH_KEYWORD': {
      let search = {};
      switch (action.event.target.name) {
        case 'keyword':
          search = Object.assign({}, action.search, {
            keyword: action.event.target.value,
          });
          break;
        case 'level':
          search = Object.assign({}, action.search, {
            level: action.event.target.value,
          });
          break;
        case 'status':
          search = Object.assign({}, action.search, {
            status: action.event.target.value,
          });
          break;
        default:
          search = state;
      }
      return state.filter(t => (t.title.includes(search.keyword))).map(t => incident(t, action));
    }
    case 'CREATE_INCIDENT':
      return [
        ...state,
        Object.assign({}, action.incidentCreateForm),
      ];
    default:
      return state;
  }
};

export default incidents;
