import { render, fireEvent,screen } from '@testing-library/react';
import FilterList from './FilterList';





test('displays only matching user names',()=>{
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

test('displays all user names when filter is empty',()=>{
    render(<FilterList />)
    const input = screen.getByRole('textbox', {
        name: /search/i
      });
      fireEvent.change(input, { target: { value: '' } });
      expect(screen.getByText('Billy')).toBeInTheDocument();
      expect(screen.getByText('Cindy')).toBeInTheDocument();

})


test('No matching data found', () => {
    render(<FilterList />);
    const input = screen.getByLabelText(/search/i);
    fireEvent.change(input, { target: { value: 'xxx' } });
    expect(screen.getByText('No matching data found.')).toBeInTheDocument();
  });