import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentTimeLine from '../components/IncidentTimeLine';
import { showTimeLine, updateTimeLine } from '../modules/incidentTimeLine';

const mapStateToProps = state => ({
  timeline: state.timeline,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { showTimeLine, updateTimeLine },
    dispatch,
  ),
});

const VisibleIncidentTimeLine = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentTimeLine);

export default VisibleIncidentTimeLine;
