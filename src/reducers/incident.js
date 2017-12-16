const incident = (
  state,
  action,
) => {
  switch (action.type) {
    case 'STATUS_TOGGLE':
      if (state.id === action.id) {
        const toggleStatus = { up: 'down', down: 'up' };
        return {
          id: state.id,
          status: toggleStatus[state.status],
          title: state.title,
          person: state.person,
          toggleStatus: state.status,
        };
      }
      return state;
    case 'CREATE_INCIDENT':
      return {
        title: action.title,

      };
    default:
      return state;
  }
};

export default incident;
