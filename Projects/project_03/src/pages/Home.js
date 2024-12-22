// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Our Sales Website</h1>
      <p>Browse our products and add them to your cart!</p>
      <Link to="/products">View Products</Link>
    </div>
  );
}

export default Home;
