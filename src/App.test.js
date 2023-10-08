import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import UserPage from './User/User';
import ProductList from './Product/productList';

test('renders user and product routes', () => {
  render(
    <App />
 
  );


});