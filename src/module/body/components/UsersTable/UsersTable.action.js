import axios from 'axios';
import * as usersTableConstants from './UsersTable.constants';

export const getUsersData = url => {
  return dispatch => {
    dispatch({
      type: usersTableConstants.GET_USERS_DATA_REQUEST,
      payload: null
    });
    axios.get(url)
      .then(res => {
        dispatch({
          type: usersTableConstants.GET_USERS_DATA_REQUEST_SUCCESS,
          payload: res.data
        })
      })
      .catch(e => {
        console.error('Error occured: ', e);
        dispatch({
          type: usersTableConstants.GET_USERS_DATA_REQUEST_FAILURE,
          payload: null
        })
      })
  }
};