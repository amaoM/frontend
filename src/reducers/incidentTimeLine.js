const initialState = [];

const incidentList = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SHOW_TIMELINE':
      return state;
    case 'UPDATE_TIMELINE':
      return state;
    default:
      return state;
  }
};

export default incidentList;
