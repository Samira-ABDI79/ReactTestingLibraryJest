
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './User/User';
import ProductList from './Product/productList'
import Modal from './Modal/Modal';
import BasicTabs from './Tabs/Tabs';
import Layout from './Layout/Layout';

function App() {



  return (
<>
<Layout>
      <Router>
      <Routes>
      <Route path="/user" element={<UserPage />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/" element={<BasicTabs />} />


      </Routes>
    </Router>

    </Layout>
</>
  );
}

export default App;
