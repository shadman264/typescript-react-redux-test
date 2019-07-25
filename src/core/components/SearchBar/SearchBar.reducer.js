import {SEARCH_REQUEST} from './SearchBar.constants';

const initialState = {
  
};

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