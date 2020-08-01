import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateConversationView from './index';
import ConversationView from '../conversation';

// Mock the setView function
const setView = jest.fn();

it('renders', () => {
  render(<CreateConversationView setView={setView} />);
  expect(screen.getByText('Start talking')).toBeInTheDocument();
});

it('displays people you can chat with', () => {
  render(<CreateConversationView setView={setView} />);
  expect(screen.getByText('Sam Smith')).toBeInTheDocument();
});

it('can open the message view', () => {
  render(<CreateConversationView setView={setView} />);

  fireEvent.click(screen.getByRole('button', { name: 'Start conversation' }));
  expect(setView).toHaveBeenCalled();
  expect(setView).toHaveBeenCalledWith(<ConversationView person={'Sam Smith'} />)
});