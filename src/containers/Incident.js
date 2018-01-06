import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Incident from '../components/Incident';
import { editIncident } from '../modules/incidentEditForm';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ editIncident }, dispatch),
});

const VisibleIncident = connect(
  null,
  mapDispatchToProps,
)(Incident);

export default VisibleIncident;
