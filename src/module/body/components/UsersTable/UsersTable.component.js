import React, {Component} from 'react';
import UsersTableForm from './UsersTable.form';
import * as data from './UsersTable.mock';
class UsersTable extends Component{
  render() {
    return(
      <UsersTableForm
        data={data}
      />
    );
  }
}

export default UsersTable;