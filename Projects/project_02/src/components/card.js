import React from "react";
import '../App'
import '../App.css'
import Modalwindow from "./modalwindow"

const Card = function(props){
    // open modal window
    const openmodalwindow = () => {
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = "block";
    }
    return(
        <>
            <div className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="content"><p>{props.username}</p></div>
                    <div className="description">{props.children}</div>
                    <div className="cardfooter">
                        <p className="addicon" onClick={openmodalwindow}><span>&#10011;</span>See More</p>
                    </div>
                </section>
            </div>

            {/* MODAL WINDOW */}
            <Modalwindow/>
        </>
    )
}

export default Card