import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

/**
 * This stateless component will display search bar
 * @prop {object: required} data : incoming data structured as 
 * data = { 
 *   {array of string} tableHead: column headers,
 *   {array of object} tableData: table rows containing column data}
 * }
 * @prop {number} selectedRowIndex : index of the selected row
 */
const SearchBarForm = (props) => {
  return(
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <TextField
          id="navbar-search-bar"
          name ="searchedText"
          placeholder="Search"
          value={props.searchedText}
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
  searchedText: PropTypes.string
}

SearchBarForm.defaultProps = {
  searchedText: ''
}


export default SearchBarForm;