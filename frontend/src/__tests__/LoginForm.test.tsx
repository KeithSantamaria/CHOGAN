import * as React from 'react';
import { mount} from 'enzyme';
import LoginForm from '../components/authentication/LoginForm';

describe('LoginForm Tests', () => {
    let wrapper:any;
    beforeEach(() => {
        wrapper = mount(<LoginForm />);
     });
    it('shallow rendering project-name', () => {
        
        const actual = wrapper.find('button');
        console.log(actual.debug());
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
  });