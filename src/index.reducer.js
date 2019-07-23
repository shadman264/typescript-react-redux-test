import {combineReducers} from 'redux';

import usersTableReducer from './module/body/components/UsersTable/UsersTable.reducer';

const rootReducer = combineReducers({
    users: usersTableReducer
});

export default rootReducer;