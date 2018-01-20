import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentCreateForm from '../components/IncidentCreateForm';
import { updateIncidentCreateForm } from '../modules/incidentCreateForm';
import { addIncident } from '../modules/incidentList';

const mapStateToProps = state => ({
  incidentCreateForm: state.incidentCreateForm,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ updateIncidentCreateForm, addIncident }, dispatch),
});

const VisibleIncidentCreateForm = connect(mapStateToProps, mapDispatchToProps)(
  IncidentCreateForm
);

export default VisibleIncidentCreateForm;
