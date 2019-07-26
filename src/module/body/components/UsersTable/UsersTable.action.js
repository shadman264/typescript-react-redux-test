import axios from 'axios';
import * as usersTableConstants from './UsersTable.constants';

/**
 * This method will return action
 * @param {string} type : type of action
 * @param {object} payload : payload of action
 */
const getUsersDataAction = ((type, payload = null) => {
  return {
    type,
    payload
  }
});

/**
 * This method will dispatch action with fetched users as payload
 * @param {string} url : URL for making api call
 */
export const getUsersData = url => {
  return async dispatch => {
    dispatch(getUsersDataAction(usersTableConstants.GET_USERS_DATA_REQUEST));
    try {
      const res = await axios.get(url);
      dispatch(getUsersDataAction(usersTableConstants.GET_USERS_DATA_REQUEST_SUCCESS, res.data));
    } catch (e) {
      dispatch(getUsersDataAction(usersTableConstants.GET_USERS_DATA_REQUEST_FAILURE));
    }
  }
};
