import React from "react";
import {Link} from "react-router-dom";

const Navbars = function(){
    return(
        <>
        <nav className="navbar">
            <div>
                <h1>Must-Visit USA</h1>
            </div>
            <div className="btngroup">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/newyork">New York</Link></button>
                <button><Link to="/california">California</Link></button>
                <button><Link to="/florida">Florida</Link></button>
            </div>
        </nav>
        </>
    )
}

export default Navbars