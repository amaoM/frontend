import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentList from '../components/IncidentList';
import * as actions from '../actions/incident';

const mapStateToProps = state => ({
  incidents: state.incidents,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

const VisibleIncidentList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentList);

export default VisibleIncidentList;
