import { render, fireEvent } from '@testing-library/react';
import FilterList from './FilterList';

test('updates filter correctly on input change', () => {

    render(<FilterList />)
})



test('displays only matching user names',()=>{
    render(<FilterList />)

})

test('displays all user names when filter is empty',()=>{
    render(<FilterList />)

})