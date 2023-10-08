import { fireEvent, render, screen } from '@testing-library/react';
import {User} from '@testing-library/user-event';
import Modal from './Modal';

test('When I click on the button the modal is displayed', () => {
  render(<Modal />);
  
  const openModalButton = screen.getByRole('button', { name: /open modal/i });


  fireEvent.click(openModalButton);
  const modalTitle =  screen.getByRole('heading',{ name: /Terms of Service/i });
  expect(modalTitle).toBeInTheDocument();
});


test('Modal closes when the close button is clicked', () => {
  render(<Modal />);
  
  const openModalButton = screen.getByRole('button', { name: /open modal/i });


 
  fireEvent.click(openModalButton);
const closeButton = screen.getByTestId('CloseModal')

fireEvent.click(closeButton);
const closedModal = screen.queryByTestId('CloseModal');
// expect(closedModal).toBeNull();دو  مچر برابر 
expect(closedModal).not.toBeInTheDocument();
 
});