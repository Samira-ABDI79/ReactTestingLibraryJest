import { render, fireEvent,screen } from '@testing-library/react';
import FilterList from './FilterList';

test('updates filter correctly on input change', () => {

    render(<FilterList />)
    const input = screen.getByRole('textbox', {
        name: /search/i
      });
      fireEvent.change(input, { target: { value: 'Billy' } });
      const Billy = screen.getByText('Billy');
      const Cindy = screen.queryByText('Cindy');
 
      expect(Billy).toBeInTheDocument();
      expect(Cindy).not.toBeInTheDocument();


})



test('displays only matching user names',()=>{
    render(<FilterList />)

})

test('displays all user names when filter is empty',()=>{
    render(<FilterList />)

})