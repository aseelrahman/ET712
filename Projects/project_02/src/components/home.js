import React from "react";
import ReactDOM from 'react-dom/client';
import newyorkimage from "../images/newyork.jpg"
import californiaimage from "../images/california.jpg"
import floridaimage from "../images/florida.jpg"

import '../App.css';

import Card from './card'
import User from './comments'
const Home = function(){
    return(
        <>
        <h1 className="title">Explore the Top 3 Must-Visit States in the U.S.</h1>
        <p>Welcome to our guide to three of the most visited states in the United States: New York, California, and Florida! Each of these incredible destinations offers unique experiences that attract millions of travelers from around the world. From the bustling streets of New York City and the breathtaking beauty of Niagara Falls to California's Hollywood glamour, stunning beaches, and world-class national parks, and Florida's magical theme parks and tropical escapes, there’s something for everyone. Whether you’re planning your next vacation or simply dreaming about your ideal getaway, explore the best these iconic states have to offer!</p>
        
    


        <section className='container'>

       
        
        </section>

        <section className='container'>
            {/* user 1 */}
            <Card username= "New york"><User image={newyorkimage}  date="11/12/24" msg="Famous for its bustling cities, iconic landmarks like the Statue of Liberty, and natural wonders like Niagara Falls, New York has something for everyone."/></Card>

            {/* user 2 */}
            <Card username="California"> <User image={californiaimage} date="10/31/24" msg="Known for its sunny beaches, Hollywood glamour, and breathtaking national parks, California is a destination that combines adventure with relaxation."/></Card>
        
            {/* user 3 */}
            <Card username="Florida"><User image={floridaimage}  date="10/16/24" msg="With its world-class theme parks, tropical beaches, and vibrant nightlife, Florida is the ultimate getaway for fun and sunshine."/></Card>
        </section>

        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


export default Home