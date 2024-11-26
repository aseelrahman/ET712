import React from 'react';
import ReactDOM from 'react-dom/client';
import landscape from './images/landscape.jpg'
import './index.css'

// content in the app
const App = function(){
  // creating a JSX variabel
  const anymsg = "I am a text constant variable"
  return(
    <>
    <h1 style={{color:'magenta', textAlign:'center'}}>Welcome to React JS</h1>
    <h2 style={{fontFamily:'algerian'}} className='subtitle'>Aseel Rahman</h2>
    <figure style={{border:'inset olive 20px', width:'60%', margin:'auto'}}>
      <img src={landscape} style={{width:'100%', display:'block'}}/>
    </figure>
    <h2 style={{padding:'2em'}}>{anymsg}</h2>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
