import React, {Component} from 'react';

import SearchBarForm from './SearchBar.form';

class SearchBar extends Component{
  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleFieldChange(e) {
    this.props.searchUser(e.target.value.trim());
  }

  render() {
    return(
      <div>
        <SearchBarForm
          onChange={this.handleFieldChange}
        />
      </div>
    )
  }
}

export default SearchBar;