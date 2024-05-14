import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Directory from '../components/Directory';

test('to check if Directory header is rendered or not', () => {
  act(() => {
    render(<Directory />);
  });
  expect(screen.getByText('Directory')).toBeInTheDocument();
});

test('to check if Team Members container is rendered or not', () => {
  act(() => {
    render(<Directory />);
  });
  expect(screen.getByText('Team Members')).toBeInTheDocument();
});

test('to check if Files container is rendered or not', () => {
    act(() => {
      render(<Directory />);
    });
    expect(screen.getByText('Files')).toBeInTheDocument();
  });