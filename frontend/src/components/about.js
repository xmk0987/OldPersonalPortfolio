import React from "react";
import '../stylesheets/about.css';


const About = () => {

    return(
        <main className="about-container" id="about">
            <div className="about-center-container">
                <img src={require("../images/onni1.jpg")} alt="Onni Vitikainen" className="about-profile-image"></img>
                <div className="about-text-container">
                    <h3 className="secondary-header about-header">About me</h3>
                    <p className="about-text">A highly dedicated aspiring full stack web developer.</p>
                    <p className="about-text">               
                        I received my information technology bachelor from Tampere University in 2023.</p>
                    <p className="about-text">
                    Lately, I have developed a particular interest in the field of web development. 
                    I perceive this as a profession I am eager to pursue, aiming to further enhance my skills and expertise in this domain.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default About