import * as React from 'react';
import { mount} from 'enzyme';
import HomeListView from '../../components/home/HomeListView';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('HomeListView tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        projs = [{projectName: 'one', projectDescription: "one"}, {projectName: 'two', projectDescription: "two"}];
        wrapper = mount(
          <Provider store={store} > 
            <HomeListView projects={projs} /> 
          </Provider>
        );
     });
    it('shallow rendering project-name', () => {
        
        const actual = wrapper.find('.project-list-item');
        expect(actual.length).toBeGreaterThanOrEqual(projs.length);
    });
  });