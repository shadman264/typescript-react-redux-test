import {SEARCH_USER} from './SearchBar.constants';

const initialState = '';

const searchBarReducer = (state = initialState, action) => {
    switch(action.type) {
      case SEARCH_USER:
        return {
          ...state,
          name: action.payload
        }
			default:
				return state;
		}
}

export default searchBarReducer;