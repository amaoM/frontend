import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentList from '../components/IncidentList';

const search = (incidentList, incidentSearchForm) => {
  let result = incidentList;
  if (incidentSearchForm.keyword !== '') result = result.filter(t => (t.title.includes(incidentSearchForm.keyword)));
  if (incidentSearchForm.status !== 'all') result = result.filter(t => (t.status === incidentSearchForm.status));
  if (incidentSearchForm.level !== 'all') result = result.filter(t => (t.level === incidentSearchForm.level));
  return result;
};

const mapStateToProps = state => ({
  incidentList: search(state.incidentList, state.incidentSearchForm),
  incidentCreateForm: state.incidentCreateForm,
});

const VisibleIncidentList = connect(mapStateToProps)(IncidentList);

export default VisibleIncidentList;
