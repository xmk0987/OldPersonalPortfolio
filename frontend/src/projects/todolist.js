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
                        <p>An online todolist with user registration and saving todos to sql database. 
                            This project was also aimed to practice the Angular framework. <a rel="noreferrer" className="todolink" href="https://onlinetodolist-kfg5.onrender.com" target="_blank">
                                Try it out.</a>                       
                        </p>
                    </div>
                    <div className="lesson-container">
                        <h2  className="secondary-header lesson-header" >Knowledge</h2>
                        <p>
                            This project was done as a Angular/Express project. The database used was MySQL. 
                        </p>
                        <p>
                            Skills learned during this project were creating own authorization with JWT and using SQL driven databases and to edit them.
                            Protecting database from SQL injection. Checking user signup and login. Password hashing. SQL and Angular code deployment.
                        </p>
                        <p>
                            This project came with valuable lessons about proberly splitting the code into parts. Using services, middleware...
                            Also came with a valuable lesson that different types of OS have different implementations for css, for example scrollbars.
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