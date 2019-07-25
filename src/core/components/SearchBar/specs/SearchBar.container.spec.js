import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import SearchBarComponent from '../SearchBar.component';
import SearchBarContainer from '../SearchBar.container';

describe('container <SearchBar />', () => {
  const store = {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => {},
  };

  const wrapper = mount(
    <Provider store={store}>
      <SearchBarContainer />
    </Provider>
  );

  const container = wrapper.find(SearchBarContainer);
  const component = container.find(SearchBarComponent);

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should map dispatch to props', () => {
    const expectedPropKeys = ['search'];
    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });
});