import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const SearchBarForm = (props) => {
  return(
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <TextField
          id="navbar-search-bar"
          name ="searchedUsername"
          placeholder="Search"
          value={props.searchedUsername}
          classes={{root: 'search-bar-textfield'}}
          onChange={props.onChange}
        />
        <SearchIcon
          className="search-icon"
        />
      </Grid>
    </Grid>
  );
}

SearchBarForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchedUsername: PropTypes.string
}

SearchBarForm.defaultProps = {
  searchedUsername: ''
}


export default SearchBarForm;