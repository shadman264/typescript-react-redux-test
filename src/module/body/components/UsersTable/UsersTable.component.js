import React, {Component} from 'react';
import PropTypes from 'prop-types';

import UsersTableForm from './UsersTable.form';

import _isEqual from 'lodash/isEqual';
import _get from 'lodash/get';

/**
 * This component will display users' data in tabular format and handle refactoring of data and mapping
 * @prop {array} usersData : array of users data as json object
 * @prop {string} searchedUsername : name of the searched user
 * @prop {func: required} getUsersData : action creator to make api call and dispatch users' data
 */
class UsersTable extends Component{

  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      searchedUsername: '',
      searchedUserIndex: -1,
      mappedUsersData: {
        tableData: []
      }
    }
  }

  /**
   * This method will call the action creator to fetch user's data
   */
  componentDidMount() {
    this.props.getUsersData('https://jsonplaceholder.typicode.com/users');
  }

  /**
   * This static method will update state with incoming props
   * @param {object} nextProps : incoming properties
   * @param {object} prevState : previous states 
   */
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

  /**
   * This method will handle data refactoring works after new props have been received
   * @param {object} prevProps : previous properties
   * @param {object} prevState : previous states 
   */
  componentDidUpdate(prevProps, prevState) {
    if(!_isEqual(this.state.usersData, prevState.usersData)) {
      const tableData = this.mapUsersData();
      this.setState({
        mappedUsersData: {
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

  /**
   * This method will return searched user by it's name
   */
  getSearchedUsernameIndex() {
    if(this.state.searchedUsername === '') {
      return -1;
    }
    return this.state.mappedUsersData.tableData.findIndex(user => {
      return user.name.toLowerCase().includes(this.state.searchedUsername.toLowerCase())
    });
  }

  /**
   * This method will refactor api data for tableData
   */
  mapUsersData() {
    return this.state.usersData.map(user => {
      const mappedUser = {};
      Object.entries(this.props.mappedFields).forEach(entry => {
        mappedUser[entry[0]] = _get(user, entry[1]) ;
      });
      return mappedUser;
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
  usersData: PropTypes.array,
  searchedUsername: PropTypes.string,
  getUsersData: PropTypes.func.isRequired,
  mappedFields: PropTypes.object.isRequired
}

UsersTable.defaultProps = {
  usersData: [],
  searchedUsername: ''
}

export default UsersTable;