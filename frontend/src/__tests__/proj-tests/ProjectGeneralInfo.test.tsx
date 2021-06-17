import * as React from 'react';
import { mount} from 'enzyme';
import ProjectGeneralInfo from '../../components/ProjectGeneralInfo';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('GridView tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        wrapper = mount(
          <Provider store={store} > 
            <ProjectGeneralInfo /> 
          </Provider>
        );
     });
    it('rendering inner project card', () => {
        const actual = wrapper.find('.pg-content');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
});