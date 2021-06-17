import * as React from 'react';
import { mount} from 'enzyme';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import ProjectSideNav from '../../components/ProjectSideNav';

describe('ProjectSideNav tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        wrapper = mount(
          <Provider store={store} > 
            <ProjectSideNav /> 
          </Provider>
        );
     });
    it('checking page loads', () => {
        const actual = wrapper.find('#sideMenu');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
});