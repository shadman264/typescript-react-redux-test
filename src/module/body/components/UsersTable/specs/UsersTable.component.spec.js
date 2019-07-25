// import React from 'react';
// import UsersTable from '../UsersTable.component';
// import {mount} from 'enzyme';

// describe('<UsersTable/>', () => {
//   const testFunc = jest.fn();
//   const wrapper = mount(
//     <UsersTable
//       searchUser={testFunc}
//     />
//   );
//   it('should render everything successfully', () => {
//     expect(wrapper).toHaveLength(1);
//   });
//   it('should simulate a change event on textField and state should be updated', () => {
//     const textField = wrapper.find('input');
//     textField.simulate('change', { target: { value: 'Changed' } });
//     expect(wrapper.state().searchedUsername).toEqual('Changed');
//   });
// })