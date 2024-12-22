// pages/Products.js
import React from 'react';
import ProductCard from '../components/ProductCard';

function Products({ products, addToCart }) {
  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
