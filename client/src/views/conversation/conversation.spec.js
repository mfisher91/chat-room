import React from 'react';
import { render, screen, fireEvent, Simulate } from '@testing-library/react';
import ConversationView from './index';

it('renders', () => {
  render(<ConversationView person="Sam Smith" />);
  expect(screen.getByText('Chatting with Sam Smith')).toBeInTheDocument();
});

it('displays current messages', () => {
  render(<ConversationView person="Sam Smith" />);
  expect(screen.getByText('Blah blah')).toBeInTheDocument();
});

it('can send a new message', () => {
  render(<ConversationView person="Sam Smith" />);
  
  const input = screen.getByLabelText('your-message');
  fireEvent.change(input, { target: { value: 'Some message' }});
  fireEvent.click(screen.getByRole('button', { name: 'Send' }));
  expect(screen.getByText('Some message')).toBeInTheDocument();
});