import React from 'react';
import SearchBar from '../SearchBar.component';
import {mount} from 'enzyme'
describe('<SearchBar/>', () => {
  const wrapper = mount(
    <SearchBar/>
  );
  it('should render everything successfully', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should test change on input', () => {
    const textField = wrapper.find({name: 'searchedUsername'});
    console.log(textField.debug());
  });
})