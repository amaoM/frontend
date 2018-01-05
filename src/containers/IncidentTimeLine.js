import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentTimeLine from '../components/IncidentTimeLine';

const mapStateToProps = state => ({
  incidentTimeLine: state.incidentTimeLine,
});

const VisibleIncidentTimeLine = connect(mapStateToProps)(IncidentTimeLine);

export default VisibleIncidentTimeLine;
