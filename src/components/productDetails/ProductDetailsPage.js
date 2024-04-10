// ProductDetailsPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.css'; // Import CSS file

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError('Failed to fetch product details. Please try again later.');
      }
    };
    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div className="container">{error || 'Loading...'}</div>;
  }

  return (
    <div className="container">
      <h1>Product Details Page</h1>
      <img src={product.images} alt={product.title} />
      <div className="title">{product.title}</div>
      <div className="price">{product.price}</div>
      <div className="description">{product.description}</div>
      {/* Display other product details as required */}
    </div>
  );
};

export default ProductDetailsPage;
