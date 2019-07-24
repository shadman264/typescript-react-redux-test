import usersTableReducer from '../UsersTable.reducer';
import * as usersTableConstants from '../UsersTable.constants';
import mockData from '../UsersTable.mock';

describe('UsersTable.reducer', () => {
  it('should return the initial state', () => {
    const initialState = [];
    expect(usersTableReducer(undefined, {})).toEqual(initialState);
  });

  it('should reduce GET_USERS_DATA_REQUEST', () => {
    const prevState = {};
    const dispatchedAction = {
      type: usersTableConstants.GET_USERS_DATA_REQUEST,
      payload: null
    };
    const expectedReducedData = prevState;
    expect(usersTableReducer(prevState, dispatchedAction)).toEqual(expectedReducedData);
  });

  it('should reduce GET_USERS_DATA_REQUEST_SUCCESS', () => {
    const prevState = {};
    const dispatchedAction = {
      type: usersTableConstants.GET_USERS_DATA_REQUEST_SUCCESS,
      payload: mockData
    };
    const expectedReducedData = {
      ...prevState,
      data: mockData
    }
    expect(usersTableReducer(prevState, dispatchedAction)).toEqual(expectedReducedData);

  });

  it('should reduce GET_USERS_DATA_REQUEST_FAILURE', () => {
    const prevState = {};
    const dispatchedAction = {
      type: usersTableConstants.GET_USERS_DATA_REQUEST_FAILURE,
      payload: null
    };
    const expectedReducedData = prevState;
    expect(usersTableReducer(prevState, dispatchedAction)).toEqual(expectedReducedData);
  });
});
