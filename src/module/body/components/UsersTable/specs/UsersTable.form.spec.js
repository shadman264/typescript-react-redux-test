import React from 'react';
import UsersTableForm from '../UsersTable.form';
import Table from '../../../../../core/components/SimpleTable/SimpleTable.component';
import {mount} from 'enzyme';

describe('<UsersTableForm/>', () => {
  const mockTableData = [
    {
      name: 'Leanne Graham',
      email: 'sincere@april.biz',
      city: 'Gwenborough',
      company: 'Romaguera-Crona'
    },
    {
      name: 'Ervin Howell',
      email: 'shanna@melissa.tv',
      city: 'Wisokyburgh',
      company: 'Deckow-Crist'
    }
  ];
  let data = {
    tableData: mockTableData
  }
  const wrapper = mount(
    <UsersTableForm
      data={data}
      selectedRowIndex={-1}
    />
  );
  it('should render everything successfully', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find(Table).exists()).toBeTruthy();
  });
})