import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Incident from '../components/Incident';
import * as actions from '../actions/incident';

const mapStateToProps = state => ({
  incident: state.incident,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

const VisibleIncident = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Incident);

export default VisibleIncident;
