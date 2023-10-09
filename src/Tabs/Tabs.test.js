import { render, fireEvent,screen } from '@testing-library/react';

import BasicTabs from "./Tabs"

test('Display the correct content in each tab', () => {
    render(<BasicTabs />);
  
  
    const itemOne = screen.getByRole('tab', {
      name: /item one/i,
    });
    fireEvent.click(itemOne);
    expect(screen.getByRole('tabpanel', {
        name: /item one/i
      })).toBeInTheDocument();
  
    const itemTwo = screen.getByRole('tab', {
      name: /item two/i,
    });
    fireEvent.click(itemTwo);
    expect(screen.getByRole('tabpanel', {
        name: /item two/i
      })).toBeInTheDocument();
    const itemThree = screen.getByRole('tab', {
      name: /item three/i,
    });
  
    fireEvent.click(itemThree);
    expect(screen.getByRole('tabpanel', {
        name: /item three/i
      })).toBeInTheDocument(



        
      );
  });