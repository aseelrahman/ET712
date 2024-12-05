import React from "react";
import californiaimage from "../images/california.jpg"

const California = function(){
    return(
        <>
        <h1 className="title">California</h1>
        <figure className="imgcontainer">
            <img src={californiaimage}/>
        </figure>
        </>
    )
}

export default California