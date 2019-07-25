import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SearchBarForm from './SearchBar.form';

class SearchBar extends Component{
  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      searchedText: ''
    }
  }
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
