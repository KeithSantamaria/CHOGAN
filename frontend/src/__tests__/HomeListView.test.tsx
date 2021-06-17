import * as React from 'react';
import { shallow, render, mount } from 'enzyme';
import HomeListView from '../components/home/HomeListView';
import {ListGroup} from 'react-bootstrap';

describe('HomeListView Tests', () => {

    it('shallow rendering list-view-items', () => {
      const wrapper = shallow(<HomeListView />);
      //expect(wrapper.find('.list-view-container')).toBeDefined();
    });
  });