import React from "react";
import '../stylesheets/about.css';


const About = () => {

    return(
        <main className="about-container" id="about">
            <img src={require("../images/onni1.jpg")} alt="Onni Vitikainen" className="about-profile-image"></img>
            <div className="about-text-container">
                <h3 className="secondary-header about-header">About</h3>
                <p className="about-text">A highly dedicated aspiring full stack web developer.</p>
                <p className="about-text">               
                    <br />
                    I received my information technology bachelor from Tampere University in 2023.</p>
                <p className="about-text">
                    <br/>
                    Web development is a fairly new found interest of mine.
                    I am highly motivated and dedicated to learn everything there is to web development front and back.
                </p>
            </div>
        </main>
    )
}

export default About