export const createIncident = incidentCreateForm => ({
  type: 'CREATE_INCIDENT',
  incidentCreateForm,
});

export const updateIncidentCreateForm = event => ({
  type: 'UPDATE_INCIDENT_CREATE_FORM',
  event,
});

export const searchIncident = event => ({
  type: 'SEARCH_KEYWORD',
  event,
});

export const showTimeLine = incidentId => ({
  type: 'SHOW_TIMELINE',
  incidentId,
});

export const updateTimeLine = event => ({
  type: 'UPDATE_TIMELINE',
  event,
});

export const editIncident = incidentEditForm => ({
  type: 'EDIT_INCIDENT',
  incidentEditForm,
});

export const updateIncidentEditForm = event => ({
  type: 'UPDATE_INCIDENT_EDIT_FORM',
  event,
});
