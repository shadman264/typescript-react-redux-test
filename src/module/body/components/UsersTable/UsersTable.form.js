import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../core/components/SimpleTable/SimpleTable.component';

/**
 * This stateless component will display users' data in tabular format
 * @prop {object: required} data : array of users data as json object
 * @prop {string} searchedUsername : name of the searched user
 * @prop {func: required} getUsersData : action creator to make api call and dispatch users' data
 */
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