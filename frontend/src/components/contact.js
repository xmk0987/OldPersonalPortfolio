import React from "react";

import '../stylesheets/contact.css';


const Contact = () => {

    return(
        <div className="contact-container" id="contact">
            <h3 className="secondary-header contact-header">Contact</h3>
            <p className="contact-text">If you want to work together, feel free to contact me on any of the following</p>
            <div className="contact-buttons">
                <a rel="noreferrer" className="linkedinLink" href="https://www.linkedin.com/in/onni-vitikainen-a9a57a16b/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a rel="noreferrer" className="mailLink" href="mailto:vitikainenonni@gmail.com" target="_blank"><ion-icon name="mail"></ion-icon></a>
                <a rel="noreferrer" className="githubLink" href="https://github.com/xmk0987" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
            </div>
        </div>
    );
}

export default Contact;