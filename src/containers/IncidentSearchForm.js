import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentSearchForm from '../components/IncidentSearchForm';
import { searchIncident } from '../modules/incidentSearchForm';

const mapStateToProps = state => ({
  incidentSearchForm: state.incidentSearchForm,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ searchIncident }, dispatch),
});

const VisibleIncidentSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentSearchForm);

export default VisibleIncidentSearchForm;
