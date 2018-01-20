import { connect } from 'react-redux';
import IncidentListContainer from '../components/IncidentListContainer';

const mapStateToProps = state => ({
  incidentSearchForm: state.incidentSearchForm,
  incidentList: state.incidentList,
  incidentCreateForm: state.incidentCreateForm,
});

const VisibleIncidentListContainer = connect(mapStateToProps)(
  IncidentListContainer
);

export default VisibleIncidentListContainer;
