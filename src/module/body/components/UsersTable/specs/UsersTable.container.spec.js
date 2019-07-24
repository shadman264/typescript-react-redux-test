import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import UsersTableComponent from '../UsersTable.component';
import UsersTableContainer from '../UsersTable.container';

describe('container <UsersTable />', () => {
  const store = {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => {},
  };

  const wrapper = mount(
    <Provider store={store}>
      <UsersTableContainer />
    </Provider>
  );

  const container = wrapper.find(UsersTableContainer);
  const component = container.find(UsersTableComponent);

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should map state to props', () => {
    const expectedPropKeys = ['usersData', 'searchedUsername'];
    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  it('should map dispatch to props', () => {
    const expectedPropKeys = ['getUsersData'];
    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });
});