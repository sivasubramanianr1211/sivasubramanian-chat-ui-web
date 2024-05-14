import { render, screen } from '@testing-library/react';
import { act } from 'react';
import ChatBox from '../components/ChatBox';

test('to check if menu logo is rendered or not', () => {
  act(() => {
    render(<ChatBox />);
  });
  expect(screen.getByTestId('chat-header')).toBeInTheDocument();
});
