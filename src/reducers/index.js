import { combineReducers } from 'redux';
import incidents from './incidents';
import search from './search';
import incidentCreateForm from './incidentCreateForm';

export default combineReducers({
  incidents,
  search,
  incidentCreateForm,
});
