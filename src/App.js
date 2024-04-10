import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListingPage from './components/productList/ProductListingPage';
import ProductDetailsPage from './components/productDetails/ProductDetailsPage';
import './components/styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
