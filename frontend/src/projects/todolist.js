import React from "react";
import '../stylesheets/project.css';


import todolist from '../images/projects/todo/todolist.png';
import todoVid from '../images/todointro.mp4';

const TodoList = () => {
    
    return (
        <div className="single-project-container">
            <div className="single-project-inner">
                <h1 className="single-project-header">Todolist</h1>
                <div className="single-project-header-image">
                    <img src={todolist} alt="Project by Onni"></img>
                </div>
                <div className="single-project-content">
                    <div className="single-project-intro">
                        <p>An online todolist with user registration and saving todos to sql database. <a rel="noreferrer" className="todolink" href="https://onlinetodolist-z6qc.onrender.com" target="_blank">
                                Try it out.</a>                       
                        </p>
                    </div>
                    <div className="lesson-container">
                        <h2  className="secondary-header lesson-header" >Background</h2>
                        <p>
                            This project was done as a Angular/Express project. The database used was MySQL. 
                        </p>
                        <p>
                            The goal of this project was to create a Todo list that is accessible with user registration with any device via
                            wifi. Learning goals were to use jwt tokens and creating own databases with user registration and login.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-images-container">
                <h2  className="secondary-header video-header">Media</h2>
                <div className="single-project-video-container">
                    <video className="project-video" src={todoVid} alt="Todolist login" autoPlay loop muted controls/>
                </div>
            </div>
        </div>
    )
}

export default TodoList;