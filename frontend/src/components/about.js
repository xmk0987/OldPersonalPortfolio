import React from "react";
import '../stylesheets/about.css';


const About = () => {

    return(
        <main className="about-container" id="about">
            <div className="about-center-container">
                <div className="about-text-container">
                    <h3 className="secondary-header about-header">About me</h3>
                    <p className="about-text">A highly dedicated aspiring full stack developer.</p>
                    <p className="about-text">               
                        I received my information technology bachelor from Tampere University in 2023.</p>
                    <p className="about-text">
                    Lately, I have developed a particular interest in the field of web development and in data analysis. 
                    I perceive these professions as opportunities to enhance my skills and expertise in this domain, and I am eager to pursue them.
                    </p>
                </div>
                <img src={require("../images/Onni1mv.jpg")} alt="Onni Vitikainen" className="about-profile-image"></img>
            </div>
        </main>
    )
}

export default About