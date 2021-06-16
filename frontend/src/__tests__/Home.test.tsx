import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../pages/home/Home';


import { store } from '../redux/store';
import { Provider } from 'react-redux';

describe('HomeListView Tests', () => {

    it('renders list-items', () => {
      const wrapper = shallow(
        <Provider store={store}>
        <Home />
      </Provider>
      );
      //const instance = wrapper.instance();

      // Expect the wrapper object to be defined
      console.log(wrapper.find('.home-container-wrapper').toString());
      expect(wrapper.find('.homes-container-wrapper')).toBeDefined();
    });
  });