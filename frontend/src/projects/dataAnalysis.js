import React from "react";
import '../stylesheets/project.css';

import caseStudy from '../images/caseStudy.png'

const DataAnalysis = () => {
    return (
        <div className="single-project-container">
            <div className="single-project-inner">
                <h1 className="single-project-header">Real Estate Data Analysis</h1>
                <div className="single-project-header-image">
                    <img src={caseStudy} alt="Project by Onni"></img>
                </div>
                <div className="single-project-content">
                    <div className="single-project-intro">
                        <p>
                        My case study, the culmination of the Google Data Analysis certification, 
                        focuses on identifying the ideal real estate investment for working-class 
                        individuals. Through eight courses, I've gained skills to become a junior-level data analyst. 
                        This project showcases my ability to make informed decisions in the complex realm of real estate, 
                        catering to the needs of the working class.
                        </p>
                    </div>
                    <div className="lesson-container">
                        <h2  className="secondary-header lesson-header" >Knowledge</h2>
                        <p>
                            This study was done as a R markdown. I created my own database about the real estate properties in 
                            Tampere by web scraping real estate sites for the information needed with Python.
                        </p>
                        <p>
                            Throughout this project, I acquired valuable technical skills, including Python web scraping, data cleaning 
                            with R, and utilizing various R libraries for analysis. Additionally, I honed my ability to create insightful 
                            visualizations. Beyond technical expertise, I cultivated essential soft skills such as critical thinking and 
                            proficiency in data analysis, making me well-equipped for roles that demand a combination of technical and 
                            analytical prowess.
                        </p>
                        <div className="analysisFolder">
                            <a className="fastspotlink" rel="noreferrer" href="https://drive.google.com/drive/folders/1JhdkHN1p-TSNH39ZKLmzj4YU9YW1i55s?usp=sharing" target="_blank">The analysis folder.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DataAnalysis