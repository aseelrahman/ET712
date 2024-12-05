import React from "react";
import newyorkimage from "../images/newyork.jpg"

const Newyork = function(){
    return(
        <>
        <h1 className="title">New York</h1>
        <figure className="imgcontainer">
            <img src={newyorkimage}/>
        </figure>
        </>
    )
}

export default Newyork