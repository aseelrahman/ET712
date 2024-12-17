import React from "react";
import "../App.css";

const Modalwindow = function ({ title, image, description, onClose }) {
    return (
        <>
            {/* Modal window */}
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className="modalheader">
                        <p>{title}</p> {/* Title dynamically passed */}
                        <p className="closemodal" onClick={onClose}>
                            &#x58; {/* Close button */}
                        </p>
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
        </>
    );
};

export default Modalwindow;
