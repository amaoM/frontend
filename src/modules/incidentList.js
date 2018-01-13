const initialState = [];

// Action Creators
export const addIncident = incidentCreateForm => ({
  type: 'ADD_INCIDENT',
  incidentCreateForm,
});

export const updateIncident = incidentEditForm => ({
  type: 'UPDATE_INCIDENT',
  incidentEditForm,
});

// Reducer
const incidentList = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INCIDENT':
      return [...state, action.incidentCreateForm];
    case 'UPDATE_INCIDENT': {
      return state.map(t =>
        (t.id !== action.incidentEditForm.id
          ? t
          : Object.assign({}, t, { ...action.incidentEditForm })));
    }
    default:
      return state;
  }
};

export default incidentList;
