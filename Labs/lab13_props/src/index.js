import React from 'react';
import ReactDOM from 'react-dom/client';

// import all images
import avataruser1 from './images/batman.png';
import avataruser2 from './images/businessman.png';
import avataruser3 from './images/lady.png';
// import files
import User_feedback from './user_feedback';
import './index.css';
import User from './comments'

const App = function(){
  return(
    <>
      <h1 style={{textAlign:'center'}}>Aseel Rahman</h1>
      <section className='container'>

       
        
      </section>

      <section className='container'>
        {/* user 1 */}
      <User_feedback username= "Batman"><User image={avataruser1}  date="11/12/24" msg="I am Batman"/></User_feedback>

        {/* user 2 */}
        <User_feedback username="Peter"> <User image={avataruser2} date="10/31/24" msg="Need more rest!"/></User_feedback>
      
        {/* user 3 */}
        <User_feedback username="Jessica"><User image={avataruser3}  date="10/16/24" msg="Great Job!"/></User_feedback>
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
