import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentEditForm from '../components/IncidentEditForm';
import { editIncident, updateIncidentEditForm } from '../modules/incidentEditForm';

const mapStateToProps = (
  state,
  ownProps,
) => {
  const res = state.incidentList.map((incident) => {
    return (incident.id === ownProps.incidentId)
      ? incident
      : undefined;
  });
  return {
    incidentEditForm: state.incidentEditForm,
  };
};

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
