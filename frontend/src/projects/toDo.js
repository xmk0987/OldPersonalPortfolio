import React from "react";
import '../stylesheets/project.css';

import studentVid from '../images/studentToDo.mp4';
import teacherVid from '../images/teacherToDo.mp4';
import teacherFront from '../images/teacherTodos.png'
import teacherStudents from '../images/todoFront.png'


const ToDo = () => {
    
    return (
        <div className="single-project-container">
            <div className="single-project-inner">
                <h1 className="single-project-header">ToDo</h1>
                <div className="single-project-header-image">
                    <img src={teacherStudents} alt="Project by Onni"></img>
                </div>
                <div className="single-project-content">
                    <div className="single-project-intro">
                        <p>An online class management system for teachers or group leaders. Helps the teachers keep track of the students progress
                             and helps the students to follow the lesson. <a rel="noreferrer" className="todolink" href="https://todo-ekwu.onrender.com" target="_blank">
                                Try it out.</a>                       
                        </p>
                    </div>
                    <div className="lesson-container">
                        <h2  className="secondary-header lesson-header" >Background</h2>
                        <p>
                            This project was done as a React/Express project. The database used was PostgreSQL. 
                        </p>
                        <p>
                            The goal of the project was to create a useful tool for group leaders or teachers to follow the progress of people in the group. 
                            The group leader is the only one needed to register and then the group members can join by classroom name and username. 
                            The group leader can choose what current ToDo list to show to the group and can create multiple groups if needed. 
                            The learning goals were to create a larger scale web app with more complex databases.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-images-container">
                <h2  className="secondary-header video-header">Media</h2>
                <div className="single-project-video-container firstVideo">
                    <h3 className="videoTitle">Teacher view</h3>
                    <video className="project-video" src={teacherVid} alt="Teacher view" autoPlay loop muted controls/>
                </div>
                <div className="single-project-video-container">
                    <h3 className="videoTitle">Student view</h3>
                    <video className="project-video" src={studentVid} alt="Student view" autoPlay loop muted controls/>
                </div>
            </div>
        </div>
    )
}

export default ToDo;