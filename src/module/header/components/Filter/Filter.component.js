import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

class Filter extends Component{
  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      filterTitle: ''
    }
  }
  handleFieldChange(e) {

  }
  render() {
    return(
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField id="navbar-filter" onChange={this.handleFieldChange} placeholder="Search" classes={{root: 'filter-textfield'}}/>
            <SearchIcon />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Filter;