import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import incidentList from './incidentList';
import incidentSearchForm from './incidentSearchForm';
import incidentCreateForm from './incidentCreateForm';
import incidentTimeLine from './incidentTimeLine';
import incidentEditForm from './incidentEditForm';

export default combineReducers({
  incidentList,
  incidentSearchForm,
  incidentCreateForm,
  incidentTimeLine,
  incidentEditForm,
  routing: routerReducer,
});
