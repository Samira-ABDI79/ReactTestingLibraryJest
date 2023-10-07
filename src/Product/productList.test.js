import {render,screen,waitFor} from '@testing-library/react'
import user from '@testing-library/user-event'
import ProductList from './productList'
test('shows 3 products by default',async ()=>{
render(<ProductList />);
const headings=await screen.findAllByRole('heading');
expect(headings).toHaveLength(3);
})
test('clicking on the button loads 3 more products',async ()=>{
    render(<ProductList />)
    const button = await screen.findByRole('button',{
        name:/load more/i
    })
    await user.click(button)
    
    await waitFor(async ()=>{
        const headings =await screen.findAllByRole('heading')
        expect(headings).toHaveLength(6)
    })

})