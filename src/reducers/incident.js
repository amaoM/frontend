const incident = (
  state,
  action,
) => {
  switch (action.type) {
    case 'STATUS_UP':
    case 'STATUS_DOWN':
      if (state.id === action.id) {
        return {
          id: state.id,
          title: state.title,
          status: action.status,
        };
      }
      return state;
    default:
      return state;
  }
};

export default incident;
