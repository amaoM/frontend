import { connect } from 'react-redux';
import IncidentList from '../components/IncidentList';

const mapStateToProps = state => ({
  incidents: state.incidents,
});

const VisibleIncidentList = connect(mapStateToProps)(IncidentList);

export default VisibleIncidentList;
