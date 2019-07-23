import React from 'react';
import Table from '../../../../core/components/SimpleTable/SimpleTable.component';

const UsersTableForm = props => {
  return(
    <Table
      data={props.data}
    />
  );
}

export default UsersTableForm;