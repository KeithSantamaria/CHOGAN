import  React from 'react';
import {shallow} from 'enzyme';
import { render, screen} from '@testing-library/react';

import HomeListView from '../components/home/HomeListView';

test('renders learn react link', () => {
    render(<HomeListView />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });