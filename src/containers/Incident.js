import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Incident from '../components/Incident';
import { createIncident } from '../modules/incidentCreateForm';

const mapStateToProps = state => ({
  incident: state.incident,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ createIncident }, dispatch),
});

const VisibleIncident = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Incident);

export default VisibleIncident;
