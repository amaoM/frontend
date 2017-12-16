import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/Search';
import * as actions from '../actions/incident';

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

const VisibleSearch = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default VisibleSearch;
