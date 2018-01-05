const initialState = [];

const getTimeLineDate = () => {
  const date = new Date();
  let format = 'hh:mm:ss';
  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  return format;
};

// Action Creators
export const showTimeLine = incidentId => ({
  type: 'SHOW_TIMELINE',
  incidentId,
});

export const addIncidentTimeLineEvent = () => {
  const timelineDate = getTimeLineDate();
  return {
    type: 'ADD_INCIDENT_TIMELINE_EVENT',
    time: timelineDate,
    message: 'ステータスを更新しました。',
  };
};

// Reducer
const incidentTimeLine = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SHOW_TIMELINE':
      return state;
    case 'ADD_INCIDENT_TIMELINE_EVENT':
      return [...state, { time: action.time, message: action.message }];
    default:
      return state;
  }
};

export default incidentTimeLine;
