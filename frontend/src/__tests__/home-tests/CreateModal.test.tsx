import * as React from 'react';
import { mount} from 'enzyme';
import { store } from '../../redux/store';
import CreateModal from '../../components/home/CreateModal';

describe('CreateModal tests', () => {
    let wrapper:any;
    let projs:any;
    beforeEach(() => {
        wrapper = mount(
            <CreateModal /> 
        );
     });
    it('checking page loads', () => {
        const actual = wrapper.find('Modal');
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });
});