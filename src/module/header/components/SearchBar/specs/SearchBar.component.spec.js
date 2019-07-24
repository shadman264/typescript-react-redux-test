import React from 'react';
import SearchBar from '../SearchBar.component';
import {mount} from 'enzyme'
describe('<SearchBar/>', () => {
  const testFunc = jest.fn();
  const wrapper = mount(
    <SearchBar
      searchUser={testFunc}
    />
  );
  it('should render everything successfully', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate a change event on textField', () => {
    const textField = wrapper.find('input');
    textField.simulate('change', { target: { value: 'Changed' } });
    expect(wrapper.state().searchedUsername).toEqual('Changed');
  });
})