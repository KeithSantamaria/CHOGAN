import * as React from 'react';
import { mount} from 'enzyme';
import ProfileForm from '../../components/authentication/ProfileForm';
import { Provider } from 'react-redux';
import {store} from '../../redux/store';

describe('ProfileForm Tests', () => {
    let wrapper:any;
    beforeEach(() => {
        wrapper = mount(
        <Provider store={store}>
            <ProfileForm />
        </Provider>
        );
     });
    it('profileForm basic test', () => {
        const actual = wrapper.find('Button[type="submit"]');
        expect(actual.length).toEqual(1);
    });
    
  });