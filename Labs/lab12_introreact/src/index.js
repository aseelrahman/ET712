import React from 'react';
import ReactDOM from 'react-dom/client';
import landscape from './images/landscape.jpg'

// content in the app
const App = function(){
  return(
    <>
    <h1 style={{color:'magenta', textAlign:'center'}}>Welcome to React JS</h1>
    <h2 style={{fontFamily:'algerian'}}>Aseel Rahman</h2>
    <figure style={{border:'inset olive 20px'}}>
      <img src={landscape} style={{width:'100%', display:'block'}}/>
    </figure>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
