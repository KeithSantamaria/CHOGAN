import * as React from 'react';
import { mount} from 'enzyme';
import UserView from '../../components/home/UserView.component';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('UserView tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        projs = [{projectName: 'one', projectDescription: "one"}, {projectName: 'two', projectDescription: "two"}];
        wrapper = mount(
          <Provider store={store} > 
            <UserView projects={projs} /> 
          </Provider>
        );
     });
    it('correct project number displays', () => {
        const actual = wrapper.find('.project-number');
        expect(parseInt(actual.text())).toEqual(projs.length);
    });
});