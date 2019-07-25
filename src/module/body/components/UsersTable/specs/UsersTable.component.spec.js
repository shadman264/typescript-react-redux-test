import React from 'react';
import UsersTable from '../UsersTable.component';
import mockData from '../UsersTable.mock';
import {mount} from 'enzyme';

describe('<UsersTable/>', () => {
  const testFunc = jest.fn();
  let wrapper = mount(
    <UsersTable
      getUsersData={testFunc}
    />
  );
  it('should render everything successfully', () => {
    expect(wrapper.find('.users-table-container')).toHaveLength(1);
  });

  it('should call componentDidMount and fetch users data', () => {
    expect(wrapper.state().usersData.length).toEqual(0);
    const spy = jest.spyOn(UsersTable.prototype, 'componentDidMount');
    wrapper = mount(
      <UsersTable
        usersData={mockData}
        getUsersData={testFunc}
      />
    );
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().usersData.length).toBeGreaterThan(0);
  });

  it('should call getDerivedStateFromProps', () => {
    wrapper = mount(
      <UsersTable
        usersData={mockData}
        searchedUsername="text"
        getUsersData={testFunc}
      />
    );
    const nextProps = {
      searchedUsername: 'changed_text'
    };
    const prevState = {
      searchedUsername: 'text'
    };
    const expectedState = {
      searchedUsername: 'changed_text'
    };

    const returnedState = UsersTable.getDerivedStateFromProps(nextProps, prevState);
    expect(returnedState).toEqual(expectedState);
  });

  it('should call componentDidUpdate and map user data', () => {
    const spy = jest.spyOn(UsersTable.prototype, 'componentDidUpdate');
    const prevState = {
      usersData: []
    }
    expect(wrapper.state().mappedUsersData.tableData.length).toEqual(0);
    wrapper.instance().componentDidUpdate(null, prevState);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().mappedUsersData.tableData.length).toBeGreaterThan(0);
  });
})