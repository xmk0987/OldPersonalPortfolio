import React, { useEffect, useState } from 'react';
import '../stylesheets/navigation.css';


const Navigation = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [showProjectPopup, setProjectPopup] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const shouldShowNavbar = prevScrollPos > currentScrollPos

            setVisible(shouldShowNavbar);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            setProjectPopup(false);
        }
    }, [prevScrollPos]);


    const projectPopup = () => {
        return(
            <div className='project-popup'>
                <ul className='project-popup-list'>
                    <li><a href='/#projects'>Overview</a></li>
                    <li><a href='/fastspotsProject'>FastSpots</a></li>
                    <li><a href='/todolistProject'>Todo List</a></li>
                    <li><a href='/projectGroup'>Small Projects</a></li>
                </ul>
            </div>
        )
    }

    

    return(
        <div className={`navigation-container ${visible ? '' : 'dontShow'}`}>
            <ul className='nav-list'>
                <li><a href='/'>Home</a></li>
                <li><a href='/#about'>About</a></li>
                <div className='project-popup-container' onMouseOver={() => (setProjectPopup(true))} onMouseLeave={() => setProjectPopup(false)}>
                    <li><button className='projects-button' onClick={() => setProjectPopup(!showProjectPopup)}>Projects</button></li>
                    {showProjectPopup ? projectPopup() : ''}
                </div>
                <li><a href='/#contact'>Contact</a></li>
            </ul>
        </div>
    )

}

export default Navigation;