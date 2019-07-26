import * as usersTableConstants from './UsersTable.constants';

const initialState = [];

/**
 * This method will reduce GET_USERS_DATA_REQUEST, GET_USERS_DATA_REQUEST_SUCCESS
 * and GET_USERS_DATA_REQUEST_FAILURE action
 * @param {object} state : state data from store
 * @param {object} action : dispatched action with type and payload
 */
const usersTableReducer = (state = initialState, action) => {
    switch(action.type) {
			case usersTableConstants.GET_USERS_DATA_REQUEST:
				return state;
			case usersTableConstants.GET_USERS_DATA_REQUEST_SUCCESS:
				return {
					...state,
					data: [...action.payload]
				}
			case usersTableConstants.GET_USERS_DATA_REQUEST_FAILURE:
				return state;
			default:
				return state;
		}
}
export default usersTableReducer;