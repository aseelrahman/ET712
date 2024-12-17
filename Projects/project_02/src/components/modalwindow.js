import React from "react";
import "../App.css";

const Modalwindow = function ({ title, image, description, onClose }) {
    return (
        <section className="modalwindow">
            <div className="modalcontent">
                <header className="modalheader">
                    <p>{title}</p> {/* Title */}
                    <span className="closemodal" onClick={onClose}>
                        &#x58;
                    </span>
                </header>
                <main className="modalbody">
                    <img
                        src={image}
                        alt={title}
                        className="modalimage"
                    />
                    <p className="modaldescription">{description}</p>
                </main>
            </div>
        </section>
    );
};

export default Modalwindow;
