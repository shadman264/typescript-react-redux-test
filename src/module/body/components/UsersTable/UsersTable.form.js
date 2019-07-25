import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../core/components/SimpleTable/SimpleTable.component';

const UsersTableForm = props => {
  return(
    <Table
      data={props.data}
      selectedRowIndex={props.searchedUserIndex}
    />
  );
}

UsersTableForm.propTypes = {
  data: PropTypes.object.isRequired,
  selectedRowIndex: PropTypes.number
}

UsersTableForm.defaultProps = {
  selectedRowIndex: -1
}

export default UsersTableForm;