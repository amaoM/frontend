import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import incidentList from './incidentList';
import search from './search';
import incidentCreateForm from './incidentCreateForm';
import incidentTimeLine from './incidentTimeLine';
import incidentEditForm from './incidentEditForm';

export default combineReducers({
  incidentList,
  search,
  incidentCreateForm,
  incidentTimeLine,
  incidentEditForm,
  routing: routerReducer,
});
