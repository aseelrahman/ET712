// pages/Home.js
import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="slideshow-container">
      {/* Fixed text overlay */}
      <div className="text-overlay">
        <h1>Welcome to <span className='logo'>FootForward</span></h1>
        <p>Explore the latest trends in footwear.</p>
        <button className='shop-btn'><Link className='shop-btn-link' to="/products">Shop Now!</Link></button>
      </div>
    </div>
  );
}

export default Home;
