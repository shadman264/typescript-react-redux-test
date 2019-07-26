import {connect} from 'react-redux';
import SearchBar from './SearchBar.component';
import * as searchBarActions from './SearchBar.action';
import {bindActionCreators} from 'redux';

/**
 * This method will map action creators as property of component
 * @param {func} dispatch : dispatch method
 */
const mapDispatchToProps = dispatch => {
  const actions = {...searchBarActions};
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);