// components/ProductModal.js
import React from 'react';
import './components.css'
import '../App.css'

function ProductModal({ product, quantity, setQuantity, onClose, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p><span className='p-price'>Price:</span> ${product.price.toFixed(2)}</p>
        <label>
          <span className='quantity'>
          Quantity:
          </span>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
        </label>
        <br/>
        <button className='cart-btn' onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductModal;
