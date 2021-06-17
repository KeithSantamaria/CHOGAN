import * as React from 'react';
import { mount} from 'enzyme';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import TopNavbar from '../../components/TopNavbar';

describe('TopNavbar tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        wrapper = mount(
          <Provider store={store} > 
            <TopNavbar /> 
          </Provider>
        );
     });
    it('checking page loads', () => {
        const actual = wrapper.find('.nav-wrapper');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
});