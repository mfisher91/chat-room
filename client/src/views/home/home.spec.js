import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './index';
import ConversationView from '../conversation';

// Mock the setView function
const setView = jest.fn();

it('renders', () => {
  render(<Home user="Maris" setView={setView} />);
  expect(screen.getByText('Welcome Maris')).toBeInTheDocument();
});

it('shows a list of conversations', () => {
  render(<Home user="Maris" setView={setView} />);
  expect(screen.getByText('Sam Smith')).toBeInTheDocument();
});

it('can open the message view', () => {
  render(<Home user="Maris" setView={setView} />);

  fireEvent.click(screen.getByRole('button', { name: 'Reply' }));
  expect(setView).toHaveBeenCalled();
  expect(setView).toHaveBeenCalledWith(<ConversationView person={'Sam Smith'} />)
});
