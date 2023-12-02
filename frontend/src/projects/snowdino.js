import React from "react";
import '../stylesheets/project.css';


import snowDinoI from '../images/projects/snowdino/snowdino.png';
import snowDinoI2 from '../images/projects/snowdino/snowdino2.png';


const SnowDino = () => {
    
    return (
        <div className="single-project-container">
            <div className="single-project-inner">
                <h1 className="single-project-header">Snowboard Dino Recreation</h1>
                <div className="single-project-header-image">
                    <img src={snowDinoI2} alt="Project by Onni"></img>
                </div>
                <div className="single-project-content">
                    <div className="single-project-intro">
                        <p>The goal of this project was to recreate the famous Google Dinosaurus game, but with a own twist. 
                            Wanted to learn how I can combine other language projects to websites and 
                            to learn the syntax of Python. This project was a fun way to achieve it. Also you can see my amazing drawing and animation skills.
                             Motivation to learn Python came from the interest to learn data analysis in the future.
                        </p>
                    </div>
                    <div className="lesson-container">
                        <h2  className="secondary-header lesson-header" >Lessons</h2>
                        <p>
                            This project was done with Python using the Pygame library.
                        </p>
                        <p>
                            Skills learned during this project were Python, compiling other language code to websites.
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
                        <img className="project-image" src={snowDinoI} />
                    </div>
                    <div class="project project1">
                        <h3 className="project-title">Wolf enemy</h3>
                        <img className="project-image" src={snowDinoI2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SnowDino;