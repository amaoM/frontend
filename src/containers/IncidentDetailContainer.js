import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentDetailContainer from '../components/IncidentDetailContainer';
import * as actions from '../actions/incident';

const mapStateToProps = (
  state,
  ownProps,
) => ({
  ...state,
  incidentId: ownProps.params.id,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

const VisibleIncidentDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentDetailContainer);

export default VisibleIncidentDetailContainer;
