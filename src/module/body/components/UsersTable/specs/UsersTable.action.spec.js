import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as usersTableActions from '../UsersTable.action';
import * as usersTableConstants from '../UsersTable.constants';
import mockData from '../UsersTable.mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UsersTable.action', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should dispatch actions after getting users succesfully', () => {
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockData,
      });
    });

    const expectedActions = [
      {
        type: usersTableConstants.GET_USERS_DATA_REQUEST,
        payload: null
      },
      {
        type: usersTableConstants.GET_USERS_DATA_REQUEST_SUCCESS,
        payload: mockData
      },
    ];

    const url = 'https://jsonplaceholder.typicode.com/users';
    return store.dispatch(usersTableActions.getUsersData(url)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to fetch users and dispatch failure action', () => {
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {},
      });
    });

    const expectedActions = [
      {
        type: usersTableConstants.GET_USERS_DATA_REQUEST,
        payload: null
      },
      {
        type: usersTableConstants.GET_USERS_DATA_REQUEST_FAILURE,
        payload: null
      },
    ];

    const url = 'dummy_wrong_url';
    return store.dispatch(usersTableActions.getUsersData(url)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })
});
