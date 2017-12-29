const incident = (
  state,
  action,
) => {
  switch (action.type) {
    case 'CREATE_INCIDENT':
      return {
        title: action.title,

      };
    default:
      return state;
  }
};

export default incident;
