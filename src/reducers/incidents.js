import incident from './incident';

const incidents = (
  state = [
    { id: 1, title: 'title1', status: 'up' },
    { id: 2, title: 'title2', status: 'up' },
    { id: 3, title: 'title3', status: 'up' },
  ],
  action,
) => {
  switch (action.type) {
    case 'STATUS_UP':
    case 'STATUS_DOWN':
      return state.map(t => incident(t, action));
    default:
      return state;
  }
};

export default incidents;
