import React, { useState } from "react";
import "../App.css";
import Modalwindow from "./modalwindow";

const Card = function (props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open Modal
    const openModal = () => setIsModalOpen(true);

    // Close Modal
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="content">
                        <p>{props.username}</p>
                    </div>
                    <div className="description">{props.children}</div>
                    <div className="cardfooter">
                        <p className="addicon" onClick={openModal}>
                            <span>&#10011;</span> See More
                        </p>
                    </div>
                </section>
            </div>

            {/* Render Modal Only if Open */}
            {isModalOpen && (
                <Modalwindow
                    title={props.username}       // Pass card's title
                    image={props.image}          // Pass card's image URL
                    description={props.children} // Pass card's description
                    onClose={closeModal}         // Close modal function
                />
            )}
        </>
    );
};

export default Card;
