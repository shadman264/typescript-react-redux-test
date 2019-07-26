import {SEARCH_REQUEST} from './SearchBar.constants';

/**
 * This method will dispatch action with searched text as payload
 * @param {string} searchedText : searched text
 */
export const search = searchedText => {
  return{
    type: SEARCH_REQUEST,
    payload: searchedText
  }
}