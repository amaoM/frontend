const initialState = [];

// Action Creators
export const addIncidentTimeLineEvent = (initialIncident, incidentEditForm) => {
  return {
    type: 'ADD_INCIDENT_TIMELINE_EVENT',
    initialIncident,
    incidentEditForm,
  };
};

// Reducer
const getTimeLineDate = () => {
  const date = new Date();
  let format = 'hh:mm:ss';
  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  return format;
};

const compareIncidents = (incidentEditForm, initialIncident) => {
  let offsetMessage = {};
  if (incidentEditForm.title !== initialIncident.title) offsetMessage['title'] = `Title: ${initialIncident.title} -> ${incidentEditForm.title}`;
  if (incidentEditForm.level !== initialIncident.level) offsetMessage['level'] = `Level: ${initialIncident.level} -> ${incidentEditForm.level}`;
  if (incidentEditForm.status !== initialIncident.status) offsetMessage['status'] = `Status: ${initialIncident.status} -> ${incidentEditForm.status}`;
  if (incidentEditForm.description !== initialIncident.description) offsetMessage['description'] = 'Description was updated.';
  if (incidentEditForm.person !== initialIncident.person) offsetMessage['person'] = `Person: ${initialIncident.person} -> ${incidentEditForm.person}`;
  return offsetMessage;
}

const incidentTimeLine = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'ADD_INCIDENT_TIMELINE_EVENT':
      const timelineDate = getTimeLineDate();
      const offsetMessage = compareIncidents(action.incidentEditForm, action.initialIncident);
      return [...state, { timelineDate, offsetMessage }];
    default:
      return state;
  }
};

export default incidentTimeLine;
