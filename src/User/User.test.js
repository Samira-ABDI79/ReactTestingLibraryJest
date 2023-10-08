import {render , screen} from '@testing-library/react'
import User from '@testing-library/user-event';

import UserPage from './User';
test('can receive a new user and show it on a list',()=>{
    render(<UserPage />)
    const nameInput = screen.getByRole('textbox', {
        name: /name/i,
      });
      const emailInput = screen.getByRole('textbox', {
        name: /email/i,
      });
      const button = screen.getByRole('button');
    
      User.click(nameInput);
      User.keyboard('jane');
      User.click(emailInput);
      User.keyboard('jane@jane.com');
    
      User.click(button);
    
      const name = screen.getByRole('cell', { name: 'jane' });
      const email = screen.getByRole('cell', { name: 'jane@jane.com' });
    
      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
})