import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentList from './CommentList';

describe('CommentList', () => {
  test('renders the "Load More" button', () => {
    render(<CommentList />);

    const loadMoreButton = screen.getByRole('button', { name: 'Load More' });
    expect(loadMoreButton).toBeInTheDocument();
  });
});