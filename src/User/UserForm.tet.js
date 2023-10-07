import {render,screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and a button',()=>{
    render(<UserForm />);
    const inputs=screen.getAllByRole('textbox');
    const button=screen.getByRole('button');
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
})
test('it calls onUserAdd when the form is submitted',()=>{
     render(<UserForm />);
     const [nameInput,emailInput]=screen.getAllByRole('textbox')
     user.click(nameInput)
     user.keyboard('jane')
     user.click(emailInput)
     user.keyboard('jane@jane.com')

})