import * as React from 'react';
import { mount} from 'enzyme';
import SignUpForm from '../../components/authentication/SignUpForm';
import { Provider } from 'react-redux';
import {store} from '../../redux/store';

describe('SignUpForm Tests', () => {
    let wrapper:any;
    beforeEach(() => {
        wrapper = mount(
        <Provider store={store}>
            <SignUpForm />
        </Provider>
        );
     });
    it('shallow rendering project-name', () => {
        const actual = wrapper.find({type: 'submit'});
        expect(actual.length).toEqual(1);
    });
  });