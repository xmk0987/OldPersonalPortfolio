import React from "react";
import '../stylesheets/project.css';


import toplists from '../images/projects/fastspots/toplists.png';
import fastSpotsIntroVid from '../images/fastspotsintro.mp4';

const FastSpots = () => {    
    return (
        <div className="single-project-container">
            <div className="single-project-inner">
                <h1 className="single-project-header">FastSpots</h1>
                <div className="single-project-header-image">
                    <img src={toplists} alt="Project by Onni"></img>
                </div>
                <div className="single-project-content">
                    <div className="single-project-intro">
                        <p>FastSpots is a third party website for Spotify users to speed up the playlist creation and to be 
                            able to see top songs and artists all year around. If you have a Spotify account <a className="fastspotlink" rel="noreferrer" href="https://www.fastspots.net/" target="_blank">give it a try</a>. 
                            Currently only accessible to people who I have allowed access. 
                            Publication under review by Spotify.
                        </p>
                    </div>
                    <div className="lesson-container">
                        <h2  className="secondary-header lesson-header" >Knowledge</h2>
                        <p>
                            This project was done as a React/Express project. The database used was Redis. 
                        </p>
                        <p>
                            Skills learned during this project were using sessions, cookies and authorization flows (Spotify uses OAuth).
                            Knowledge about different frameworks and especially React in front and Express in back grew significantly.
                        </p>
                        <p>
                            This project came with valuable lesssons for next projects.
                            Such as remember to simplify code to smaller components, simplify design, don't forget to think about mobile design also from the start and make clear plans before you start.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-images-container">
                <h2  className="secondary-header video-header">Media</h2>
                <div className="single-project-video-container">
                    <video className="project-video" src={fastSpotsIntroVid} alt="Todolist login" autoPlay loop muted controls/>
                </div>
            </div>
        </div>
    )
}

export default FastSpots;