import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentEditForm from '../components/IncidentEditForm';
import * as actions from '../actions/incident';

const mapStateToProps = (
  state,
  ownProps,
) => {
  const res = state.incidentList.map((incident) => {
    if (incident.id === ownProps.incidentId) {
      console.log(incident);
      return incident;
    }
  });
  console.log(res);
  return {
    incidentEditForm: state.incidentEditForm,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

const VisibleIncidentEditForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentEditForm);

export default VisibleIncidentEditForm;
