// components/Layout/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';  // optional styling

function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      {/* Cart count in the navbar */}
      <Link to="/cart">
        Cart ({cartItemCount})
      </Link>
    </nav>
  );
}

export default Navbar;
