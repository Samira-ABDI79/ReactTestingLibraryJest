import { screen, render, within } from '@testing-library/react';
import CustomMatcher from './CustomMatcher';


function toContainRole(container, role, quantity = 1) {
    const elements = within(container).queryAllByRole(role);
  
    if (elements.length === quantity) {
      return {
        pass: true
      };
    }
  
    return {
      pass: false,
      message: () => `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`
    }
  }
  
  expect.extend({ toContainRole });

  test('the form displays two buttons', () => {
    render(<CustomMatcher />);
  
    const form = screen.getByRole('form');
  
    expect(form).toContainRole('button', 2);
  });