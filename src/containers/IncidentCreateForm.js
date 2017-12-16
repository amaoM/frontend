import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentCreateForm from '../components/IncidentCreateForm';
import * as actions from '../actions/incident';

const mapStateToProps = state => ({
  incidentCreateForm: state.incidentCreateForm,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

const VisibleIncidentCreateForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentCreateForm);

export default VisibleIncidentCreateForm;
