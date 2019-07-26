import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SearchBarForm from './SearchBar.form';

/**
 * This component will display search bar and dispatch action with searched text
 * @prop {func: required} search : action creator to dispatch action with searched text as payload
 */
class SearchBar extends Component{
  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      searchedText: ''
    }
  }

  /**
   * This method will handle field change
   * It will set searched text as state and call action creator to dispatch
   * searched text as action payload in callback.
   * @param {object} e : incoming event
   */
  handleFieldChange(e) {
    this.setState({
      searchedText: e.target.value
    }, () => {
      this.props.search(this.state.searchedText.trim());
    })
  }

  render() {
    return(
      <div>
        <SearchBarForm
          searchedText={this.state.searchedText}
          onChange={this.handleFieldChange}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
}

export default SearchBar;
