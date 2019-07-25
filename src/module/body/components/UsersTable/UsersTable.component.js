import React, {Component} from 'react';
import PropTypes from 'prop-types';

import UsersTableForm from './UsersTable.form';
import columnHeaders from './UsersTable.columns';

import _isEqual from 'lodash/isEqual';
import _has from 'lodash/has';
import _startCase from 'lodash/startCase';
import _toLower from 'lodash/toLower';

class UsersTable extends Component{

  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      searchedUsername: '',
      searchedUserIndex: -1,
      mappedUsersData: {
        tableHead: columnHeaders,
        tableData: []
      }
    }
  }

  componentDidMount() {
    this.props.getUsersData('https://jsonplaceholder.typicode.com/users');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(!_isEqual(nextProps.usersData, prevState.usersData)) {
      return{
        usersData: nextProps.usersData
      }
    } else if(nextProps.searchedUsername !== prevState.searchedUsername) {
      return{
        searchedUsername: nextProps.searchedUsername
      }
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if(!_isEqual(this.state.usersData, prevState.usersData)) {
      const tableData = this.mapUsersData();
      this.setState({
        mappedUsersData: {
          tableHead: columnHeaders,
          tableData
        }
      })
    } else if(this.state.searchedUsername !== prevState.searchedUsername) {
      const searchedUserIndex = this.getSearchedUsernameIndex();
      this.setState({
        searchedUserIndex
      });
    }
  }

  getSearchedUsernameIndex() {
    if(this.state.searchedUsername === '') {
      return -1;
    }
    return this.state.mappedUsersData.tableData.findIndex(user => {
      return user.name.toLowerCase().includes(this.state.searchedUsername.toLowerCase())
    });
  }

  mapUsersData() {
    return this.state.usersData.map(user => {
      return {
        name: _has(user, 'name') ? _startCase(_toLower(user.name)) : '',
        email: _has(user, 'email') ? _toLower(user.email) : '',
        city: _has(user, 'address.city') ? _startCase(_toLower(user.address.city)) : '',
        company: _has(user, 'company.name') ? _startCase(_toLower(user.company.name)) : ''
      };
    });
  }
  
  render() {
    return(
      <div className="users-table-container">
        <UsersTableForm
          data={this.state.mappedUsersData}
          searchedUserIndex={this.state.searchedUserIndex}
        />
      </div>
    );
  }
}

UsersTable.propTypes = {
  usersData: PropTypes.array
}

UsersTable.defaultProps = {
  usersData: []
}

export default UsersTable;