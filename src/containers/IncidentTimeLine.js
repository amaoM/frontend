import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentTimeLine from '../components/IncidentTimeLine';
import { addIncidentTimeLineEvent } from '../modules/incidentTimeLine';
import { editIncident } from '../modules/incidentEditForm';

const mapStateToProps = state => ({
  incidentTimeLine: state.incidentTimeLine,
  incidentEditForm: state.incidentEditForm,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addIncidentTimeLineEvent, editIncident }, dispatch),
});

const VisibleIncidentTimeLine = connect(mapStateToProps)(IncidentTimeLine);

export default VisibleIncidentTimeLine;
