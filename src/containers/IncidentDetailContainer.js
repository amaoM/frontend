import { connect } from 'react-redux';
import IncidentDetailContainer from '../components/IncidentDetailContainer';

const searchIncidentById = (incidentList, targetIncidentId) => {
  for (let i = 0; i < incidentList.length; i += 1) {
    const incident = incidentList[i];
    if (incident.id === targetIncidentId) return incident;
  }
  return undefined;
};

const mapStateToProps = (
  state,
  ownProps,
) => {
  const initialIncident = searchIncidentById(state.incidentList, ownProps.params.id);
  return { initialIncident };
};

const VisibleIncidentDetailContainer = connect(mapStateToProps)(IncidentDetailContainer);

export default VisibleIncidentDetailContainer;
