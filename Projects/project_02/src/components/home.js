import React from "react";
import homeimage from '../images/home.jpg'

const Home = function(){
    return(
        <>
        <h1 className="title">Explore the Top 3 Must-Visit States in the U.S.</h1>
        <p>Welcome to our guide to three of the most visited states in the United States: New York, California, and Florida! Each of these incredible destinations offers unique experiences that attract millions of travelers from around the world. From the bustling streets of New York City and the breathtaking beauty of Niagara Falls to California's Hollywood glamour, stunning beaches, and world-class national parks, and Florida's magical theme parks and tropical escapes, there’s something for everyone. Whether you’re planning your next vacation or simply dreaming about your ideal getaway, explore the best these iconic states have to offer!</p>
        
        <figure className="imgcontainer">
            <img src={homeimage}/>
        </figure>
        </>
    )
}

export default Home