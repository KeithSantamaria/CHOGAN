import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import AuthPage from '../../pages/AuthPage';

describe('AuthPage Tests', () => {

    it('renders list-items', () => {
      const wrapper = mount(
        <Provider store={store}>
          <AuthPage />
        </Provider>
      );
      expect(wrapper.find('.auth-page-overall')).toBeDefined();
    });
  });