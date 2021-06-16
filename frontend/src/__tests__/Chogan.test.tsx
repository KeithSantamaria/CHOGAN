import * as React from 'react';
import { shallow } from 'enzyme';
import HomeListView from '../components/home/HomeListView';
import Chogan from '../Chogan';

import Enzyme, { configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('HomeListView Tests', () => {

    it('renders list-items', () => {
      const wrapper = shallow(<Chogan/>);
  
      // Expect the wrapper object to be defined
      expect(wrapper.find('.Apps')).toBeDefined();
    });
  });