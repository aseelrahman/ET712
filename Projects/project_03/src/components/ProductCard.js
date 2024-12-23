import React, { useState } from 'react';
import ProductModal from './ProductModal';
import '../App.css'

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); 
  };

  return (
    <div className="product-card">
      <img className='p-img'
        src={product.image}
        alt={product.title}
        onClick={() => setIsModalOpen(true)}
      />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className="quantity-section">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
        />
        <button className='cart-btn' onClick={handleAddToCart}>Add to Cart</button>
      </div>

      {isModalOpen && (
        <ProductModal
          product={product}
          quantity={quantity}
          setQuantity={setQuantity}
          onClose={() => setIsModalOpen(false)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default ProductCard;
