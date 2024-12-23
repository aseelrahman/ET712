import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <div>
        <p className='name'>FootForward</p>
      </div>
      <div>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/products">Products</Link>
        {/* Cart count in the navbar */}
        <Link className='nav-link' to="/cart">
          Cart ({cartItemCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
