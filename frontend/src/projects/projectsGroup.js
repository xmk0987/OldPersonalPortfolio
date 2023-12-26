import React from "react";
import '../stylesheets/smallprojects.css';

import bear from '../images/projects/snowdino/bear.png';
import barChart from '../images/projects/smallProjects/barchart.png'
import fireMov from '../images/projects/smallProjects/fire.mp4';
import rainMov from '../images/projects/smallProjects/rain.mp4';
import heatMap from '../images/projects/smallProjects/heatmap.png';
import roadwatch from '../images/projects/smallProjects/roadwatch.png';
import caseStudy from '../images/caseStudy.png'


const ProjectGroup = () => {  

    return (
        <div className="single-project-container">
            <h1 className="small-project-main-header" >Small Project Collection</h1>
            <div className="small-project-container">
                <div className="small-project">
                    <h3 className="single-project-title">Snow Dino</h3>                      
                    <img className="single-project-image" src={bear} alt="SnowDino Bear Enemy"/>
                    <div className="small-project-desc">
                        <p>Python syntax revision game.</p>
                        <p><a className="snowdinolink" rel="noreferrer" href="https://onniviti.itch.io/snowdino" target="_blank">Try it from here.</a></p>
                    </div>
                </div>
                <div className="small-project">
                    <h3 className="single-project-title">Rain Animation</h3>
                    <video className="single-project-image" src={rainMov} alt="Game Bear Enemy" autoPlay loop muted/>
                    <div className="small-project-desc">
                        <p>Using canvas and drawing to create particle rain.</p>
                    </div>
                </div>
                <div className="small-project">
                    <h3 className="single-project-title">Fire Animation</h3>
                    <video className="single-project-image" src={fireMov} alt="Fire animation" autoPlay loop muted/>
                    <div className="small-project-desc">
                        <p>Altering image pixels to create animation.</p>
                    </div>
                </div>
                <div className="small-project">
                    <h3 className="single-project-title">Data Analysis</h3>
                    <img className="single-project-image" src={caseStudy} alt="Case study"/>
                    <div className="small-project-desc">
                        <p>Real Estate investing case study</p>
                        <a className="snowdinolink" href="/dataAnalysis">Read more</a>
                    </div>
                </div>
                <div className="small-project">
                    <h3 className="single-project-title">Roadwatch</h3>
                    <img className="single-project-image" src={roadwatch} alt="Roadwatch app"/>
                    <div className="small-project-desc">
                        <p>A group work from a course.</p>
                        <p><a className="snowdinolink" rel="noreferrer" href="https://github.com/xmk0987/OHJSU-Ryhm-ty-" target="_blank">Link to Github</a></p>
                    </div>
                </div>
                <div className="small-project">
                    <h3 className="single-project-title">D3</h3>
                    <div>
                        <img className="single-project-image2" src={barChart} alt="Bar chart US GDP"/>
                        <img className="single-project-image2" src={heatMap} alt="Heat chart"/>
                    </div>
                    <div className="small-project-desc">
                        <p>Charts using the D3 library.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectGroup;