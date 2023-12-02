import React from "react";
import { useState } from "react";

import { handleNextLeft, handleNextRight } from "../extra/projectSpinner";

import '../stylesheets/projects.css';
import todoImage from "../images/projects/todo/login.png";
import fsImage from "../images/projects/fastspots/toplists.png";
import sdImage from "../images/projects/snowdino/snowdino2.png";



const Projects = () => {
    const todoListProject = {
        image: todoImage,
        title: "Todo List",
        description: "A online todolist with user authentication",
        route: "/todolistProject"
    }

    const fastSpotsProject = {
        image: fsImage,
        title: "FastSpots",
        description: "A Spotify third-party app to see top lists and make playlists",
        route: "/fastspotsProject"
    }

    const snowDinoProject = {
        image: sdImage,
        title: "Snow Dino",
        description: "A own recreation of the legendary Google Dino Run",
        route: "/snowdinoProject"
    }

    const [projectArray, setProjectArray] = useState( [fastSpotsProject, todoListProject, snowDinoProject]);
    const [leftImage, setLeftImage] = useState(projectArray[0].image);
    const [centerImage, setCenterImage] = useState(projectArray[1].image);
    const [rightImage, setRightImage] = useState(projectArray[2].image);
    const [projectName, setProjectName ] = useState(projectArray[1].title);
    const [projectDesc, setProjectDesc ] = useState(projectArray[1].description);
    const [currentProject, setCurrentProject] = useState(projectArray[1]);

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
        setLeftImage(array[0].image);
        setCenterImage(array[1].image);
        setRightImage(array[2].image);
        setProjectName(array[1].title);
        setProjectDesc(array[1].description);
        setCurrentProject(array[1]);
    }

    return (
        <div className="projects-container">
            <h3 className="secondary-header projects-header">Projects</h3>
            <div className="center-project">
                <img className="image" src={centerImage} alt="Project by Onni"></img>
                <button className="leftProjectButton nextButton" onClick={handleLeftClick}><ion-icon name="chevron-forward-outline"></ion-icon></button>
                <button className="rightProjectButton nextButton" onClick={handleRightClick}><ion-icon name="chevron-back-outline"></ion-icon></button>
            </div>
            <div className="left-project side-project">
                <img className="image" src={leftImage} alt="Project by Onni"></img>
            </div>
            <div className="right-project side-project">
                <img className="image" src={rightImage} alt="Project by Onni"></img>
            </div>
            <div className="project-details">
                <h4 className="project-detail-title">{projectName}</h4>
                <p className="project-detail-description">{projectDesc}</p>
                <a className="project-more-info" href={currentProject.route}>Find out more</a>
            </div>
        </div>
    );
}


export default Projects;