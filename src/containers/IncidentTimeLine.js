import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentTimeLine from '../components/IncidentTimeLine';
import * as actions from '../actions/incident';

const mapStateToProps = state => ({
  timeline: state.timeline,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

const VisibleIncidentTimeLine = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentTimeLine);

export default VisibleIncidentTimeLine;
