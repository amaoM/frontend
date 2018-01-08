import { connect } from 'react-redux';
import IncidentTimeLine from '../components/IncidentTimeLine';

const mapStateToProps = state => ({
  incidentTimeLine: state.incidentTimeLine,
  incidentEditForm: state.incidentEditForm,
});

const VisibleIncidentTimeLine = connect(mapStateToProps)(IncidentTimeLine);

export default VisibleIncidentTimeLine;
