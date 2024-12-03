import React from "react";
import homeimage from '../images/home.jpg'

const Home = function(){
    return(
        <>
        <h1 className="title">Welcome to React Routing by Aseel Rahman</h1>
        <figure className="imgcontainer">
            <img src={homeimage}/>
        </figure>
        </>
    )
}

export default Home