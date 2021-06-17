import * as React from 'react';
import { shallow, render, mount} from 'enzyme';
import ProjectList from '../components/home/ProjectList.component';
import {ListGroup, Col, Row} from 'react-bootstrap';

describe('ProjectList Tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        projs = [{projectName: 'one', projectDescription: "one"}, {projectName: 'two', projectDescription: "two"}];
        wrapper = mount(<ProjectList projects={projs} />);
     });
    it('shallow rendering project-name', () => {
        console.log(wrapper.debug());
        console.log(wrapper.html());
        const actual = wrapper.find('.project-list-item');
        
        expect(actual).toHaveLength(projs.length);
    });
  });