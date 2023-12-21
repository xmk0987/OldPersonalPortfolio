import React from "react";
import { useState } from "react";

import { handleNextLeft, handleNextRight } from "../extra/projectSpinner";

import '../stylesheets/projects.css';
import todoImage from "../images/projects/todo/login.png";
import fsImage from "../images/projects/fastspots/toplists.png";
import smallImage from "../images/small.png";



const Projects = () => {
    const todoListProject = {
        image: todoImage,
        title: "Todo List",
        description: "A online todolist with user authentication",
        route: "/todolistProject",
        url: "https://onlinetodolist-kfg5.onrender.com"
    }

    const fastSpotsProject = {
        image: fsImage,
        title: "FastSpots",
        description: "A Spotify third-party app to see top lists and make playlists",
        route: "/fastspotsProject",
        url: "https://www.fastspots.net/"
    }

    const smallProject = {
        image: smallImage,
        title: "Small Projects",
        description: "Some smaller sized projects using different libraries",
        route: "/smallProjects"
    }

    const [projectArray, setProjectArray] = useState( [smallProject, todoListProject, fastSpotsProject]);
    const [centerImage, setCenterImage] = useState(projectArray[1].image);
    const [projectName, setProjectName ] = useState(projectArray[1].title);
    const [projectDesc, setProjectDesc ] = useState(projectArray[1].description);
    const [currentProject, setCurrentProject] = useState(projectArray[1]);
    const [showTryUrl, setShowTryUrl] = useState(true);

    const handleLeftClick = () => {
        const newArr = handleNextLeft(projectArray);
        setProjects(newArr);
    };

    const handleRightClick = () => {
        const newArr = handleNextRight(projectArray);
        setProjects(newArr);
    };

    const setProjects = (array) => {
        setProjectArray(array);
        setCenterImage(array[1].image);
        setProjectName(array[1].title);
        setProjectDesc(array[1].description);
        setCurrentProject(array[1]);
        if(array[1].url){
            setShowTryUrl(true);
        }
        else{
            setShowTryUrl(false);
        }
    }

    return (
        <div className="projects-container" id="projects">
            <h3 className="secondary-header projects-header">Projects</h3>
            <div className="center-project">
                <img className="image" src={centerImage} alt="Project by Onni"></img>
                <button className="leftProjectButton nextButton" onClick={handleLeftClick}><ion-icon name="chevron-forward-outline"></ion-icon></button>
                <button className="rightProjectButton nextButton" onClick={handleRightClick}><ion-icon name="chevron-back-outline"></ion-icon></button>
            </div>
            <div className="project-details">
                <h4 className="project-detail-title">{projectName}</h4>
                <p className="project-detail-description">{projectDesc}</p>
                <div className="project-more-info-container">
                    <a 
                        className={`project-more-info ${showTryUrl? '' : 'dont-show'}`} 
                        rel="noreferrer"   href={currentProject.url ? currentProject.url : '#'}
                        target="_blank">Give it a try
                    </a>
                    <p className={` ${showTryUrl? '' : 'dont-show'} about-text or-text`} > or </p>
                    <a className="project-more-info" href={currentProject.route}>Find out more</a>
                </div>
            </div>
        </div>
    );
}


export default Projects;