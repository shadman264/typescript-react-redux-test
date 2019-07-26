import {connect} from 'react-redux';
import UsersTable from './UsersTable.component';
import {bindActionCreators} from 'redux';

import * as usersTableActions from './UsersTable.action';
import mappedFields from './UsersTable.mapped.mock';

import _has from 'lodash/has';

/**
 * This method will map state as property of component
 * @param {object} state : state data from store
 */
const mapStateToProps = state => {
  return{
    usersData: _has(state, 'users.data') ? state.users.data : [],
    searchedUsername: _has(state, 'searchedUsername.searchedText') ? state.searchedUsername.searchedText : '',
    mappedFields
  }
}
/**
 * This method will map action creators as property of component
 * @param {func} dispatch : dispatch method
 */
const mapDispatchToProps = dispatch => {
  const actions = {...usersTableActions};
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);