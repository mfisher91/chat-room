import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

it('can change to the home view', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Home' }));
  expect(screen.getByText('Welcome Maris')).toBeInTheDocument();
});

it('can change to the new conversation view', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'UserNew' }));
  expect(screen.getByText('Start talking')).toBeInTheDocument();
});