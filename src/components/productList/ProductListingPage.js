// ProductListingPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './productListingPage.css';


const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container"> {/* Add container class */}
      <h1>Products Listing Page</h1>
      {error && <div className="error">{error}</div>}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`} className="link"> {/* Add link class */}
              <img src={product.thumbnail} alt={product.title} />
              <div>{product.title}</div>
              <div>{product.price}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListingPage;
