import React from "react";
import floridaimage from "../images/florida.jpg"

const Florida = function(){
    return(
        <>
        <h1 className="title">Florida</h1>
        <figure className="imgcontainer">
            <img src={floridaimage}/>
        </figure>
        </>
    )
}

export default Florida