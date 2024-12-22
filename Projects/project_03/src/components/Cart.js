// components/Cart.js
import React, { useMemo } from 'react';
import './components.css'

function Cart({ cartItems, setCartItems }) {
  // Calculate subtotal
  const subtotal = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems]
  );
  const taxRate = 0.0816; // 8.16%
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Update item quantity in the cart
  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map(item => 
        item.id === id ? {...item, quantity: newQuantity} : item
      )
    );
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price Each</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td className='p-title'>{item.title}</td>
                <td>
                  <input
                  className='cart-quantity'
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => 
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                  />
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className='cart-close-btn' onClick={() => removeItem(item.id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
          <tr>
              <th></th>
              <th></th>
              <th>Subtotal</th>
              <th>NY Sales Tax (8.16%)</th>
              <th>Total</th>
            </tr>
            <tr>
            <td></td>
              <td></td>
              <td>${subtotal.toFixed(2)}</td>
              <td>${taxAmount.toFixed(2)}</td>
              <td>${total.toFixed(2)}</td>
            </tr>
          </tfoot>
         
        </table>
      )}
    </div>
  );
}

export default Cart;
