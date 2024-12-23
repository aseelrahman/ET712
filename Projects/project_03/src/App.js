// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './components/Cart';
import NotFound from './pages/NotFound';

// Product Images
import p1 from './images/p1.png'
import p2 from './images/p2.png'
import p3 from './images/p3.png'
import p4 from './images/p4.png'
import p5 from './images/p5.png'
import p6 from './images/p6.png'
import p7 from './images/p7.png'
import p8 from './images/p8.png'
import p9 from './images/p9.png'
import p10 from './images/p10.png'
import p11 from './images/p11.png'
import p12 from './images/p12.png'

// Sample product data (you might fetch from an API in a real project)
const initialProducts = [
  // At least 9 sample products
  {
    id: 1,
    title: 'Air Jordan 5 Retro "White and Black"',
    image: p1,
    description: 'Get your piece of Jordan history and heritage with the Air Jordan 5 Retro. Based on the classic game shoe from 1990, it has all the iconic details, including the bump-out collar, lace toggle and fighter plane-inspired design lines.',
    price: 200,
  },
  {
    id: 2,
    title: 'Air Jordan 1 Low "Game Royal"',
    image: p2,
    description: 'The Air Jordan 1 Low OG remakes the classic sneaker with new colors and textures. Premium materials and accents give fresh expression to an all-time favorite.',
    price: 140,
  },
  {
    id: 3,
    title: 'Nike C1TY',
    image: p3,
    description: 'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the shoe breathable, while the reinforced sides and toe box help protect your feet from the elements. Inspired by the spirit of city life, this shoe gives street style a whole new meaning.',
    price: 100,
  },
  {
    id: 4,
    title: 'Nike Dunk Low Retro SE',
    image: p4,
    description: 'You can always count on a classic. This winterized version of the Dunk Low pairs its iconic color blocking with waterproof materials so you can step out in style no matter the weather. The possibilities are endless—how will you wear your Dunks?',
    price: 125,
  },
  {
    id: 5,
    title: 'Nike Dunk Low Retro',
    image: p5,
    description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.",
    price: 115,
  },
  {
    id: 6,
    title: 'Nike Air Force 1',
    image: p6,
    description: 'The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
    price: 115,
  },
  {
    id: 7,
    title: 'Nike Free Metcon',
    image: p7,
    description: 'From power lifts to ladders, from grass blades to grainy platforms, from the turf to the track your workout has a certain purpose, a specific focus. The Free Metcon 6 supports every grunt, growl and “got it!” We added even more forefoot flexibility to our most adaptable trainer and reinforced the heel with extra foam. That means more freedom for dynamic movements during plyos and cardio classes, plus the stable base you need for weights.',
    price: 120,
  },
  {
    id: 8,
    title: 'Nike Pegasus 41',
    image: p8,
    description: 'Responsive cushioning in the Pegasus provides an energized ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units and a ReactX foam midsole. Plus, improved engineered mesh on the upper decreases weight and increases breathability.',
    price: 140,
  },
  {
    id: 9,
    title: 'Nike Zoom Vomero 5',
    image: p9,
    description: 'Carve a new lane for yourself in the Zoom Vomero 5—your go-to for complexity, depth and easy styling. The richly layered design includes textiles, leather and plastic accents that come together to make one of the coolest sneakers of the season.',
    price: 160,
  },
  {
    id: 10,
    title: 'Nike P-6000',
    image: p10,
    description: "The Nike P-6000 draws on the 2006 Nike Air Pegasus, bringing you a mash-up of iconic style that's breathable, comfortable and evocative of that early-2000s vibe.",
    price: 110,
  },
  {
    id: 11,
    title: 'Book 1 "Christmas"',
    image: p11,
    description: 'Devin Booker is a craftsman who can lose a defender with an ankle-snatching stutter-go, then come back with a series of spellbinding jabs into a splashed jumper. Book’s signature shoe gives him the tools he needs to carve. With leather accents highlighting a supersmooth upper and a speedy, yet cushioned ride, this design can help you explore the spaces created by your piercing footwork and hungry hooper soul.',
    price: 140,
  },
  {
    id: 12,
    title: 'Nike Air Max 90',
    image: p12,
    description: 'Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the 90s. Worn by presidents, revolutionized through collabs and celebrated through rare colorways, its striking visuals, Waffle outsole, and exposed Air cushioning keep it alive and well.',
    price: 130,
  }
];

function App() {
  // State for the shopping cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product, quantity) => {
    // Check if item already in cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex >= 0) {
      // Update quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      // Add new item with chosen quantity
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  return (
    <div>
      <Navbar cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              products={initialProducts}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
