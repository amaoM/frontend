import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentTimeLineEvent from '../components/IncidentTimeLineEvent';

const mapStateToProps = state => ({
  incidentTimeLine: state.incident,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ editIncident }, dispatch),
});

const VisibleIncidentTimeLineEvent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentTimeLineEvent);

export default VisibleIncidentTimeLineEvent;
