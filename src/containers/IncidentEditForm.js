import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentEditForm from '../components/IncidentEditForm';
import { updateIncident } from '../modules/incidentList';
import {
  editIncident,
  updateIncidentEditForm,
} from '../modules/incidentEditForm';
import { addIncidentTimeLineEvent } from '../modules/incidentTimeLine';

const mapStateToProps = state => ({
  incidentEditForm: state.incidentEditForm,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      editIncident,
      updateIncidentEditForm,
      updateIncident,
      addIncidentTimeLineEvent,
    },
    dispatch
  ),
});

const VisibleIncidentEditForm = connect(mapStateToProps, mapDispatchToProps)(
  IncidentEditForm
);

export default VisibleIncidentEditForm;
