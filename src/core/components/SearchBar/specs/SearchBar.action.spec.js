import * as searchBarActions from '../SearchBar.action';
import {SEARCH_USER} from '../SearchBar.constants';

describe('SearchBar.action', () => {
  it('should create an action to dispatch searchedUsername', () => {
    const searchedUsername = 'test'
    const expectedAction = {
      type: SEARCH_USER,
      payload: 'test'
    }
    expect(searchBarActions.searchUser(searchedUsername)).toEqual(expectedAction);
  })
})