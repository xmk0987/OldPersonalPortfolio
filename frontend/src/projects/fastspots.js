import React from "react";
import '../stylesheets/project.css';


import login from '../images/projects/fastspots/login.png';
import playlistEditor from '../images/projects/fastspots/playlisteditor.png';
import playliststart from '../images/projects/fastspots/playliststart.png';
import toplists from '../images/projects/fastspots/toplists.png';
import addToPlaylist from '../images/projects/fastspots/addToPlaylist.png';

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
                        <p>The goal of this project was to create a third party website for Spotify users to speed up the playlist creation and to be 
                            able to see top songs and artists all year around. If you have a Spotify account <a className="fastspotlink" href="https://www.fastspots.net/" target="_blank">give it a try.</a> Hosted through free render so initial load has a delay.
                        </p>
                    </div>
                    <div className="lesson-container">
                        <h2  className="secondary-header lesson-header" >Lessons</h2>
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
                <h2  className="secondary-header lesson-header">Images</h2>
                <div className="single-project-images">
                    <div class="project project1">
                        <h3 className="project-title">Login</h3>
                        <img className="project-image" src={login} />
                    </div>
                    <div class="project project1">
                        <h3 className="project-title">Playlist Start</h3>
                        <img className="project-image" src={playliststart} />
                    </div>
                    <div class="project project1">
                        <h3 className="project-title">Playlist Editor</h3>
                        <img className="project-image" src={playlistEditor} />
                    </div>
                    <div class="project project1">
                        <h3 className="project-title">Add playlist</h3>
                        <img className="project-image" src={addToPlaylist} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FastSpots;