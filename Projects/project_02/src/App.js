import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import routing files
import Home from './components/home'
import Navbars from './components/navbar'
import Newyork from './components/newyork'
import California from './components/california'
import Florida from './components/florida';

function App() {
  return(
    <>

    <BrowserRouter>
      <Navbars/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newyork' element={<Newyork/>}/>
        <Route path='/california' element={<California/>}/>
        <Route path='/florida' element={<Florida/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
