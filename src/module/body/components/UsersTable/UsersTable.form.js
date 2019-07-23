import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../core/components/SimpleTable/SimpleTable.component';

const UsersTableForm = props => {
  return(
    <Table
      data={props.data}
    />
  );
}

UsersTableForm.propTypes = {
  data: PropTypes.object.isRequired
}

export default UsersTableForm;