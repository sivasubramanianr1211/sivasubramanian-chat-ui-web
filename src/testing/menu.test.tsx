import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Menu from '../components/Menu';

test('to check if menu logo is rendered or not', () => {
  act(() => {
    render(<Menu />);
  });
  expect(screen.getByTestId('menu-logo')).toBeInTheDocument();
});

test('to check if home icon is rendered or not', () => {
  act(() => {
    render(<Menu />);
  });
  expect(screen.getByTestId('home-icon')).toBeInTheDocument();
});