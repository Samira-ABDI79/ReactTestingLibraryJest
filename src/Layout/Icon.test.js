import {render, screen} from '@testing-library/react'
import Icons from './Icons'

test('renders three icons',()=>{
    render(<Icons />);
  
    const settingsIcon = screen.getByTestId('settings-icon');
    const emailIcon = screen.getByTestId('email-icon');
    const userIcon = screen.getByTestId('user-icon');
    
    expect(settingsIcon).toBeInTheDocument();
    expect(emailIcon).toBeInTheDocument();
    expect(userIcon).toBeInTheDocument();
})