import incident from './incident';

const incidents = (
  state = [
    {
      id: 1,
      status: 'up',
      title: 'title1',
      person: 'person1',
      toggleStatus: 'down',
    },
    {
      id: 2,
      status: 'up',
      title: 'title2',
      person: 'person2',
      toggleStatus: 'down',
    },
    {
      id: 3,
      status: 'up',
      title: 'title3',
      person: 'person3',
      toggleStatus: 'down',
    },
  ],
  action,
) => {
  switch (action.type) {
    case 'STATUS_TOGGLE':
      return state.map(t => incident(t, action));
    default:
      return state;
  }
};

export default incidents;
