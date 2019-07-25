import {SEARCH_REQUEST} from './SearchBar.constants';

export const search = searchedText => {
  return{
    type: SEARCH_REQUEST,
    payload: searchedText
  }
}