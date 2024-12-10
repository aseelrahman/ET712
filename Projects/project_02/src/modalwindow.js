import React from "react";
import './index.css';
import './App.css'

const Modalwindow = function(props){
    // finction to close the modal window
    const closemodalwindow = ()=>{
        let modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = "none";
    }
    
    // collect comment
    const collectcomment = ()=>{
        const commentarea = document.querySelector(".commentarea").value
        const testingpost = document.querySelector(".testingpost")
        testingpost.innerHTML += `<li>${props.usercomment} - ${commentarea}</li>`
    }
    return(
        <>
            {/* Modal window */}
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className="modalheader">
                        <p>Add Feedback</p>
                        <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
                    </header>
                    <main className="modalbody">
                        <input placeholder="Type your comments..." className="commentarea" type="text"/>
                        <p className="description_comment">Max 200 characters</p>
                        <button className="btnpostfeedback" onClick={collectcomment}>Post Feedback</button>
                    </main>
                </div>
            </section>
           
           {/* TESTING POST */}
           <ul className="testingpost">
            
           </ul>
        </>
    )
}

export default Modalwindow