import {connect} from 'react-redux';
import UsersTable from './UsersTable.component';
import {bindActionCreators} from 'redux';

import * as usersTableActions from './UsersTable.action';

import _has from 'lodash/has';

function mapStateToProps(state) {
  return{
    usersData: _has(state, 'users.data') ? state.users.data : []
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {...usersTableActions};
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);