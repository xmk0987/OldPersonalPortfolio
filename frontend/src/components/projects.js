import React from "react";
import { useEffect, useState } from "react";

import '../stylesheets/projects.css';


const Projects = () => {
    

    return (
        <div className="projects-container">
            <h3 className="secondary-header projects-header">Projects</h3>
            <div className="project-info">
                <div className="project-image">
                    
                </div> 
                <div className="project-details">
                    <h4>Todo List</h4>
                    <p>A simple todo list with angular/ts. MySql database</p>
                </div>

            </div>
        </div>
    );
}


export default Projects;