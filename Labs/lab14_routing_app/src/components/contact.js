import React from "react";
import contactimage from "../images/contact.jpg"

const Contact = function(){
    return(
        <>
        <h1 className="title">Contact Us</h1>
        <figure className="imgcontainer">
            <img src={contactimage}/>
        </figure>
        </>
    )
}

export default Contact