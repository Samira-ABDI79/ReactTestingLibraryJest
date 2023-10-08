
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './User/User';
import ProductList from './Product/productList'
import Modal from './Modal/Modal';

function App() {



  return (
<>

      <Router>
      <Routes>
      <Route path="/user" element={<UserPage />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/modal" element={<Modal />} />

      </Routes>
    </Router>

    
</>
  );
}

export default App;
