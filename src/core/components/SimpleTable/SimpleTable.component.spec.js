import React from 'react';
import SimpleTable from './SimpleTable.component';
import columnHeaders from '../../../module/body/components/UsersTable/UsersTable.columns';
import {mount} from 'enzyme';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

describe('<SimpleTable/>', () => {
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
    tableHead: columnHeaders,
    tableData: mockTableData
  }
  let wrapper = mount(
    <SimpleTable
      data={data}
      selectedRowIndex={-1}
    />
  );
  it('should render everything successfully', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(Table)).toBeTruthy();
    expect(wrapper.find(TableBody)).toBeTruthy();
    expect(wrapper.find(TableCell)).toBeTruthy();
    expect(wrapper.find(TableHead)).toBeTruthy();
    expect(wrapper.find(TableRow)).toBeTruthy();
    expect(wrapper.find(Paper)).toBeTruthy();
    expect(wrapper.find('.no-data')).toHaveLength(0);
    expect(wrapper.find('.selected-row').find('tr')).toHaveLength(0);
  });

  it('should display no content message if there is no tableData', () => {
    data.tableData = [];
    wrapper = mount(
      <SimpleTable
        data={data}
        selectedRowIndex={-1}
      />
    );
    expect(wrapper.find('.no-data')).toHaveLength(1);
  });

  it('should highlight the row searched by user', () => {
    data.tableData = mockTableData;
    wrapper = mount(
      <SimpleTable
        data={data}
        selectedRowIndex={1}
      />
    );
    expect(wrapper.find('.selected-row').find('tr')).toHaveLength(1);
  });
})