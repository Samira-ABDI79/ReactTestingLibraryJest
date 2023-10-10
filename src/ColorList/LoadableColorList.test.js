import {render, screen} from '@testing-library/react'
import LoadableColorList from "./LoadableColorList";

test('Favor findBy or findAllBy when data fetching', async () => {
    render(<LoadableColorList />);
  
    const els = await screen.findAllByRole('listitem');
  
    expect(els).toHaveLength(3);
  });