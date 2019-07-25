import searchBarReducer from '../SearchBar.reducer';
import {SEARCH_USER} from '../SearchBar.constants';

describe('SearchBar.reducer', () => {
  it('should return the initial state', () => {
    expect(searchBarReducer(undefined, {})).toEqual({});
  });

  it('should handle SEARCH_USER', () => {
    const searchedName = 'test';
    const dispatchedAction = {
      type: SEARCH_USER,
      payload: searchedName
    };
    const prevState = {
      user: [
        {
          name: 'test_user_1'
        },
        {
          name: 'test_user_2'
        }
      ]
    }
    const expectedReducedData = {
      ...prevState,
      name: searchedName
    };  
    expect(searchBarReducer(prevState, dispatchedAction)).toEqual(expectedReducedData);
  });
});
