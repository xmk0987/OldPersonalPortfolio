import React from "react";
import '../stylesheets/project.css';


import wolf from '../images/projects/snowdino/wolf.png';
import eagle from '../images/projects/snowdino/eagle.png';
import bear from '../images/projects/snowdino/bear.png';


const SnowDino = () => {
    
    return (
        <div className="single-project-container">
            <div className="single-project-inner">
                <h1 className="single-project-header">Snowboard Dino</h1>
                <div className="single-project-header-image">
                    <img src={bear} alt="Project by Onni"></img>
                </div>
                <div className="single-project-content">
                    <div className="single-project-intro">
                        <p>The goal of this project was to recreate the famous Google Dinosaurus game, but with a own twist. 
                            Wanted to learn and revise the syntax for Python. This project was a fun way to achieve it. Also you can see my amazing drawing and animation skills.
                             Motivation to learn Python came from the interest to learn data analysis in the future. You can try the game <a className="snowdinolink" rel="noreferrer" href="https://onniviti.itch.io/snowdino" target="_blank">from this link.</a>
                        </p>
                    </div>
                    <div className="lesson-container">
                        <h2  className="secondary-header lesson-header" >Lessons</h2>
                        <p>
                            This project was done with Python using the Pygame library.
                        </p>
                        <p>
                            Skills learned during this project was using different Python libraries and the syntax. Also learned about the process of uploading games online.
                        </p>
                        <p>
                            This project came with valuable lesssons about classes and dividing project optimally. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-images-container">
                <h2  className="secondary-header lesson-header">Images</h2>
                <div className="single-project-images">
                    <div class="project project1">
                        <h3 className="project-title">Eagle enemy</h3>
                        <img className="project-image" src={eagle} alt="Game Eagle Enemy" />
                    </div>
                    <div class="project project1">
                        <h3 className="project-title">Wolf enemy</h3>
                        <img className="project-image" src={wolf} alt="Game Wolf Enemy"/>
                    </div>
                    <div class="project project1">
                        <h3 className="project-title">Bear enemy</h3>
                        <img className="project-image" src={bear} alt="Game Bear Enemy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SnowDino;