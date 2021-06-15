import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './Chogan.css';
import Chogan from './Chogan';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Chogan />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
