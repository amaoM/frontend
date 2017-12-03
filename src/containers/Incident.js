import { connect } from 'react-redux';
import Incident from '../components/Incident';
import { statusUp, statusDown } from '../actions/incident';

const mapStateToProps = state => ({
  incident: state.incident,
});

const mapDispatchToProps = dispatch => ({
  onUpClick: (id) => {
    dispatch(statusUp(id));
  },
  onDownClick: (id) => {
    dispatch(statusDown(id));
  },
});

const VisibleIncident = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Incident);

export default VisibleIncident;
