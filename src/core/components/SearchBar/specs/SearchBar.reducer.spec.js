import searchBarReducer from '../SearchBar.reducer';
import {SEARCH_REQUEST} from '../SearchBar.constants';

describe('SearchBar.reducer', () => {
  it('should return the initial state', () => {
    expect(searchBarReducer(undefined, {})).toEqual({});
  });

  it('should handle SEARCH_REQUEST', () => {
    const searchedText = 'test';
    const dispatchedAction = {
      type: SEARCH_REQUEST,
      payload: searchedText
    };
    const prevState = {};
    const expectedReducedData = {
      ...prevState,
      searchedText: searchedText
    };  
    expect(searchBarReducer(prevState, dispatchedAction)).toEqual(expectedReducedData);
  });
});
