import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentEditForm from '../components/IncidentEditForm';
import { editIncident, updateIncidentEditForm } from '../modules/incidentEditForm';

const mapStateToProps = (
  state,
) => ({
  incidentEditForm: state.incidentEditForm,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { editIncident, updateIncidentEditForm },
    dispatch,
  ),
});

const VisibleIncidentEditForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentEditForm);

export default VisibleIncidentEditForm;
