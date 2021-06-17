import * as React from 'react';
import { mount} from 'enzyme';
import { store } from '../../redux/store';
import CreateProjectForm from '../../components/home/form/CreateProjectForm';
import { Provider } from 'react-redux';

describe('CreateProjectForm tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <CreateProjectForm /> 
            </Provider>
        );
     });
    it('checking page loads', () => {
        const actual = wrapper.find('.create-proj-form-container');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
});