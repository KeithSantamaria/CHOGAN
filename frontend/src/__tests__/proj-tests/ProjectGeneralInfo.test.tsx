import * as React from 'react';
import { mount} from 'enzyme';
import ProjectGeneralInfo from '../../components/ProjectGeneralInfo';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('ProjectGeneralInfo tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        wrapper = mount(
          <Provider store={store} > 
            <ProjectGeneralInfo /> 
          </Provider>
        );
     });
    it('checking for #pg-content elements', () => {
        const actual = wrapper.find('#pg-content');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
});