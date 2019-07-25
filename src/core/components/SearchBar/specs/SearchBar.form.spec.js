import React from 'react';
import SearchBarForm from '../SearchBar.form';
import SearchBar from '../SearchBar.component';
import {mount} from 'enzyme';

describe('<SearchBarForm/>', () => {
  const testFunc = jest.fn();

  const initialState = {
    searchedUsername: ''
  };
  const parentWrapper = mount(
    <SearchBar
      searchUser={testFunc}
    />
  );
  const wrapper = mount(
    <SearchBarForm
      searchedUsername={initialState.searchedUsername}
      onChange={parentWrapper.instance().handleFieldChange}
    />
  );
  it('should render everything successfully', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find({ name: 'searchedUsername'}).exists()).toBeTruthy();
    expect(wrapper.find('.search-icon').exists()).toBeTruthy();
  });
  it('should simulate a change event on textField and call onChange function', () => {
    const textField = wrapper.find('input');
    textField.simulate('change', { target: { value: 'Changed' } });
    expect(testFunc).toHaveBeenCalled();
  });
})