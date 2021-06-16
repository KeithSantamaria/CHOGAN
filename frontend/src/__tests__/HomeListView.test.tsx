import * as React from 'react';
import { shallow } from 'enzyme';
import HomeListView from '../components/home/HomeListView';

describe('HomeListView Tests', () => {

    it('renders list-items', () => {
      const items = ['one', 'two', 'three'];
      const wrapper = shallow(<HomeListView projects={items} />);
      //const instance = wrapper.instance();

      // Expect the wrapper object to be defined
      expect(wrapper.find('.list-view-container')).toBeDefined();
    });
  });