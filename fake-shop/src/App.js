import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import EditProduct from './components/EditProduct';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/edit/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
