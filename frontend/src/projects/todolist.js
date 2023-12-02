import React from "react";
import '../stylesheets/project.css';


import login from '../images/projects/todo/login2.png';
import todolist from '../images/projects/todo/todolist.png';
import todolistclose from '../images/projects/todo/todolistclose.png';


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
                        <p>The goal of this project was to create a online todolist with user registration and save todos to sql database. 
                            This project was also aimed to practice the Angular framework and focus more on the design.
                        </p>
                    </div>
                    <div className="lesson-container">
                        <h2  className="secondary-header lesson-header" >Lessons</h2>
                        <p>
                            This project was done as a Angular/Express project. The database used was MySQL. 
                        </p>
                        <p>
                            Skills learned during this project were creating own authorization with JWT and using SQL driven databases and to edit them.
                             Protecting database from SQL injection.
                        </p>
                        <p>
                            This project came with valuable lesssons about SQL and protecting own databases from SQL injection. Learned more about properly structuring code and using middlewares and services.
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
                        <h3 className="project-title">Todolist</h3>
                        <img className="project-image" src={todolist} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList;