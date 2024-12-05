import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import routing files
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Navbars from './components/navbar'
import Newyork from './components/newyork';

function App() {
  return(
    <>
    <h1 className='title'>Project: 02</h1>

    <BrowserRouter>
      <Navbars/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newyork' element={<Newyork/>}/>
        <Route path='/contact' element={<Contact/>}/>
        

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
