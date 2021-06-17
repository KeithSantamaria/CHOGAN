import * as React from 'react';
import { mount} from 'enzyme';
import ProjectList from '../components/home/ProjectList.component';

describe('ProjectList Tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        projs = [{projectName: 'one', projectDescription: "one"}, {projectName: 'two', projectDescription: "two"}];
        wrapper = mount(<ProjectList projects={projs} />);
     });
    it('shallow rendering project-name', () => {
        
        const actual = wrapper.find('.project-name');
        expect(actual.length).toBeGreaterThanOrEqual(projs.length);
    });
  });