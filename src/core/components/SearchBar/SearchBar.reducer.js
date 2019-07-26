import {SEARCH_REQUEST} from './SearchBar.constants';

const initialState = {
  
};

/**
 * This method will reduce SEARCH_REQUEST action
 * @param {object} state : state data from store
 * @param {object} action : dispatched action with type and payload
 */
const searchBarReducer = (state = initialState, action) => {
    switch(action.type) {
      case SEARCH_REQUEST:
        return {
          ...state,
          searchedText: action.payload
        }
			default:
				return state;
		}
}

export default searchBarReducer;