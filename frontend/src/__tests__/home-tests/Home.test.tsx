import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../../pages/home/Home';


import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('Home Tests', () => {

    it('renders list-items', () => {
      const wrapper = shallow(
        <Provider store={store}>
        <Home />
      </Provider>
      );
      expect(wrapper.find('.home-container-wrapper')).toBeDefined();
    });
  });