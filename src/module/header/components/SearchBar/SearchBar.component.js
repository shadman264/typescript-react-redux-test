import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SearchBarForm from './SearchBar.form';

class SearchBar extends Component{
  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      searchedUsername: ''
    }
  }
  handleFieldChange(e) {
    this.setState({
      searchedUsername: e.target.value
    }, () => {
      this.props.searchUser(this.state.searchedUsername.trim());
    })
  }

  render() {
    return(
      <div>
        <SearchBarForm
          searchedUsername={this.state.searchedUsername}
          onChange={this.handleFieldChange}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  searchUser: PropTypes.func.isRequired
}

export default SearchBar;