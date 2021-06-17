import * as React from 'react';
import { mount} from 'enzyme';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import ProjectERDs from '../../components/ProjectERDs';

describe('ProjectEndpoints tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        wrapper = mount(
          <Provider store={store} > 
            <ProjectERDs /> 
          </Provider>
        );
     });
    it('checking page loads', () => {
        const actual = wrapper.find('#pg-content');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
});