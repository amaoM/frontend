import { connect } from 'react-redux';
import IncidentDetailContainer from '../components/IncidentDetailContainer';

const mapStateToProps = (
  state,
  ownProps,
) => ({
  ...state,
  incidentId: ownProps.params.id,
});

const VisibleIncidentDetailContainer = connect(mapStateToProps)(IncidentDetailContainer);

export default VisibleIncidentDetailContainer;
