import * as React from 'react';
import { mount} from 'enzyme';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import UpdateTag from '../../components/UpdateTag';

describe('UpdateTag tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        wrapper = mount(
          <Provider store={store} > 
            <UpdateTag /> 
          </Provider>
        );
     });
    it('checking page loads', () => {
        const actual = wrapper.find('.update-proj-form-container');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
});