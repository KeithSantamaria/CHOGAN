import * as React from 'react';
import { mount} from 'enzyme';
import ProjectEndpoints from '../../components/ProjectEndpoints';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('ProjectEndpoints tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        wrapper = mount(
          <Provider store={store} > 
            <ProjectEndpoints /> 
          </Provider>
        );
     });
    it('checking page loads', () => {
        const actual = wrapper.find('#pg-content');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
});