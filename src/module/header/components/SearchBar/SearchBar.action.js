import {SEARCH_USER} from './SearchBar.constants';

export const searchUser = searchedUsername => {
  return{
    type: SEARCH_USER,
    payload: searchedUsername
  }
}