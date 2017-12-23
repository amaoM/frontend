import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentList from '../components/IncidentList';
import * as actions from '../actions/incident';

const searchIncident = (incidentList, search) => {
  let result = incidentList;
  if (search.keyword !== '') result = result.filter(t => (t.title.includes(search.keyword)));
  if (search.status !== 'all') result = result.filter(t => (t.status === search.status));
  if (search.level !== 'all') result = result.filter(t => (t.level === search.level));
  return result;
};

const mapStateToProps = state => ({
  incidentList: searchIncident(state.incidentList, state.search),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

const VisibleIncidentList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentList);

export default VisibleIncidentList;
