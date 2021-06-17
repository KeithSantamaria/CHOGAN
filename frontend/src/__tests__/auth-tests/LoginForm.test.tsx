import * as React from 'react';
import { mount} from 'enzyme';
import LoginForm from '../../components/authentication/LoginForm';
import { Provider } from 'react-redux';
import {store} from '../../redux/store';

describe('LoginForm Tests', () => {
    let wrapper:any;
    beforeEach(() => {
        wrapper = mount(
        <Provider store={store}>
            <LoginForm />
        </Provider>
        );
     });
    it('test whether contains button', () => {
        const actual = wrapper.find('button');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
    
  });