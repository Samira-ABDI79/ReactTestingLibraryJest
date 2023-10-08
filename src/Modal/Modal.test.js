import { fireEvent, render, screen } from '@testing-library/react';
import {User} from '@testing-library/user-event';
import Modal from './Modal';

test('When I click on the button the modal is displayed', () => {
  render(<Modal />);
  
  const openModalButton = screen.getByRole('button', { name: /open modal/i });
  expect(openModalButton).toBeInTheDocument();

  fireEvent.click(openModalButton);
  const modalTitle =  screen.getByRole('heading',{ name: /Terms of Service/i });
  expect(modalTitle).toBeInTheDocument();
});