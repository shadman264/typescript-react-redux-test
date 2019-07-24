import {connect} from 'react-redux';
import SearchBar from './SearchBar.component';
import * as searchBarActions from './SearchBar.action';
import {bindActionCreators} from 'redux';

function mapDispatchToProps(dispatch) {
  const actions = {...searchBarActions};
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);