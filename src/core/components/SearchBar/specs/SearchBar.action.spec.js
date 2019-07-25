import * as searchBarActions from '../SearchBar.action';
import {SEARCH_REQUEST} from '../SearchBar.constants';

describe('SearchBar.action', () => {
  it('should create an action to dispatch searchedText', () => {
    const searchedText = 'test'
    const expectedAction = {
      type: SEARCH_REQUEST,
      payload: 'test'
    }
    expect(searchBarActions.search(searchedText)).toEqual(expectedAction);
  })
})