import React from 'react';
import Navbar from './Navbar.component';
import {shallow} from 'enzyme';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SearchBar from '../SearchBar/SearchBar.container';

describe('<Navbar/>', () => {
  const wrapper = shallow(
    <Navbar/>
  );
  it('should render everything successfully', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(AppBar)).toBeTruthy();
    expect(wrapper.find(Toolbar)).toBeTruthy();
    expect(wrapper.find(Typography)).toBeTruthy();
    expect(wrapper.find(IconButton)).toBeTruthy();
    expect(wrapper.find(MenuIcon)).toBeTruthy();
    expect(wrapper.find(SearchBar)).toBeTruthy();
  });
})