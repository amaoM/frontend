import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Incident from '../components/Incident';
import { editIncident } from '../modules/incidentEditForm';

const mapStateToProps = state => ({
  incident: state.incident,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ editIncident }, dispatch),
});

const VisibleIncident = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Incident);

export default VisibleIncident;
