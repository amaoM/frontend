const initialState = [];

// Action Creators
export const showTimeLine = incidentId => ({
  type: 'SHOW_TIMELINE',
  incidentId,
});

export const updateTimeLine = event => ({
  type: 'UPDATE_TIMELINE',
  event,
});

// Reducer
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
