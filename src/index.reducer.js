import {combineReducers} from 'redux';

import usersTableReducer from './module/body/components/UsersTable/UsersTable.reducer';
import searchBarReducer from './module/header/components/SearchBar/SearchBar.reducer';

const rootReducer = combineReducers({
    users: usersTableReducer,
    searchedUsername: searchBarReducer
});

export default rootReducer;