// pages/Products.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import '../App.css'

function Products({ products, addToCart }) {
  return (
    <div className="products-container">
      <h1 className='logo'>Welcome to Our Shoe Collections!</h1>
      <p>We know you just need a solid pair of shoes that look great and feel even better. Whether you’re after a simple sneaker for everyday wear or something that stands out at a special event, we’ve got you covered. Browse our selection, find your fit, and step up your style plain and simple.</p>
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
