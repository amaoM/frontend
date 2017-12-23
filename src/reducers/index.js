import { combineReducers } from 'redux';
import incidentList from './incidentList';
import search from './search';
import incidentCreateForm from './incidentCreateForm';

export default combineReducers({
  incidentList,
  search,
  incidentCreateForm,
});
