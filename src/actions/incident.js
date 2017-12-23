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
