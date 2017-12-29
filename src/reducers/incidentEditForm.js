const initialState = {
  title: '',
  level: 'critical',
  status: 'unsupported',
  description: '',
  person: '',
};

const incidentEditForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INCIDENT_EDIT_FORM':
      switch (action.event.target.name) {
        case 'title':
          return Object.assign({}, state, {
            title: action.event.target.value,
          });
        case 'person':
          return Object.assign({}, state, {
            person: action.event.target.value,
          });
        case 'description':
          return Object.assign({}, state, {
            description: action.event.target.value,
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
    case 'EDIT_INCIDENT':
      return state;
    default:
      return state;
  }
};

export default incidentEditForm;
