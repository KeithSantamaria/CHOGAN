import * as React from 'react';
import { mount} from 'enzyme';
import ProjectList from '../../components/home/ProjectList.component';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('ProjectList Tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        projs = [{projectName: 'one', projectDescription: "one"}, {projectName: 'two', projectDescription: "two"}];
        wrapper = mount(
        <Provider store={store}>
            <ProjectList projects={projs} />
        </Provider>
        );
     });
    it('finding project-name', () => {
        
        const actual = wrapper.find('.project-name');
        expect(actual.length).toBeGreaterThanOrEqual(projs.length);
    });
  });