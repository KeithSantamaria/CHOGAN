import * as React from 'react';
import { shallow } from 'enzyme';
import HomeListView from '../components/home/HomeListView';

describe('HomeListView Tests', () => {

    it('renders list-items', () => {
      const items = ['one', 'two', 'three'];
      const wrapper = shallow(<HomeListView projects={items} />);
  
      // Expect the wrapper object to be defined
      expect(wrapper.find('.list-items')).toBeDefined();
      expect(wrapper.find('.item')).toHaveLength(items.length);
    });
  
    it('renders a list item', () => {
      const items = ['Thor', 'Loki'];
      const wrapper = shallow(<List items={items} />);
  
      // Check if an element in the Component exists
      expect(wrapper.contains(<li key='Thor' className="item">Thor</li >)).toBeTruthy();
    });
  
    it('renders correct text in item', () => {
      const items = ['John', 'James', 'Luke'];
      const wrapper = shallow(<List items={items} />);
  
      //Expect the child of the first item to be an array
      expect(wrapper.find('.item').get(0).props.children).toEqual('John');
    });
  });

/* test('CheckboxWithLabel changes the text after click', () => {
    const checkbox:any = shallow(<HomeListView />);

    // Interaction demo
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

    // Snapshot demo
    expect(shallow).toMatchSnapshot();
}); */