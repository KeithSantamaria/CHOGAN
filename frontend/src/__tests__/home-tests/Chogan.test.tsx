import * as React from 'react';
import { shallow } from 'enzyme';
import HomeListView from '../../components/home/HomeListView';
import Chogan from '../../Chogan';

describe('Chogan Tests', () => {

    it('renders list-items', () => {
      const wrapper = shallow(<Chogan/>);
  
      // Expect the wrapper object to be defined
      expect(wrapper.find('.App')).toBeDefined();
    });
  });