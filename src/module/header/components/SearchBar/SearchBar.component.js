import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends Component{
  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchedUsername: ''
    }
  }
  handleFieldChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  handleSearch() {
    this.props.searchUser(this.state.searchedUsername);
  }
  render() {
    return(
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField
              id="navbar-search-bar"
              name ="searchedUsername"
              placeholder="Search"
              classes={{root: 'search-bar-textfield'}}
              onChange={this.handleFieldChange}
            />
            <SearchIcon
              className="search-icon"
              onClick={this.handleSearch}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default SearchBar;