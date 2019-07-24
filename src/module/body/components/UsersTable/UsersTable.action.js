import axios from 'axios';
import * as usersTableConstants from './UsersTable.constants';

const getUsersDataAction = ((type, payload = null) => {
  return {
    type,
    payload
  }
});

export const getUsersData = url => {
  return async dispatch => {
    dispatch(getUsersDataAction(usersTableConstants.GET_USERS_DATA_REQUEST));
    try {
      const res = await axios.get(url);
      dispatch(getUsersDataAction(usersTableConstants.GET_USERS_DATA_REQUEST_SUCCESS, res.data));
    } catch (e) {
      console.error('Error occured: ', e);
      dispatch(getUsersDataAction(usersTableConstants.GET_USERS_DATA_REQUEST_FAILURE));
    }
  }
};
