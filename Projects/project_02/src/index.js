import './App.css';
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './card'
import User from './comments'
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

    <section className='container'>
        {/* user 1 */}
      <Card username= "Batman"><User image={Newyork}  date="11/12/24" msg="I am Batman"/></Card>

        {/* user 2 */}
        <Card username="Peter"> <User image={California} date="10/31/24" msg="Need more rest!"/></Card>
      
        {/* user 3 */}
        <Card username="Jessica"><User image={Florida}  date="10/16/24" msg="Great Job!"/></Card>
      </section>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);