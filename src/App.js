
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './User/User';
import ProductList from './Product/productList'

function App() {



  return (
<>

      <Router>
      <Routes>
      <Route path="/user" element={<UserPage />} />
        <Route path="/product" element={<ProductList />} />
      </Routes>
    </Router>

    
</>
  );
}

export default App;
