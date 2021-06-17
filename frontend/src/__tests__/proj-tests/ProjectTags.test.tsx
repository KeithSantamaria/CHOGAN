import * as React from 'react';
import { mount} from 'enzyme';
import ProjectTags from '../../components/ProjectTags';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('ProjectTags tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        wrapper = mount(
          <Provider store={store} > 
            <ProjectTags /> 
          </Provider>
        );
     });
    it('checking for #pg-content element', () => {
        const actual = wrapper.find('#pg-content');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
});