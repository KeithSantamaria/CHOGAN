import * as React from 'react';
import { mount} from 'enzyme';
import GridView from '../../components/home/GridView.component';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('GridView tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        projs = [{projectName: 'one', projectDescription: "one"}, {projectName: 'two', projectDescription: "two"}];
        wrapper = mount(
          <Provider store={store} > 
            <GridView projects={projs} /> 
          </Provider>
        );
     });
    it('rendering inner project card', () => {
        const actual = wrapper.find('.card-container-wrapper');
        expect(actual.length).toBeGreaterThanOrEqual(projs.length);
    });
});