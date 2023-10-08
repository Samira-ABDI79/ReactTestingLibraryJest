import { render, screen, fireEvent } from '@testing-library/react';
import UserPage from './User';

test('can add a new user and display it in the list', () => {
  render(<UserPage />);

  // Find input elements
  const nameInput = screen.getByLabelText('Name');
  const emailInput = screen.getByLabelText('Email');
  const addButton = screen.getByRole('button', { name: 'Add User' });

  // Enter user information
  fireEvent.change(nameInput, { target: { value: 'Jane' } });
  fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });

  // Click the add button
  fireEvent.click(addButton);

  // Verify that the user is added to the list
  const nameCell = screen.getByRole('cell', { name: 'Jane' });
  const emailCell = screen.getByRole('cell', { name: 'jane@example.com' });

  expect(nameCell).toBeInTheDocument();
  expect(emailCell).toBeInTheDocument();
});