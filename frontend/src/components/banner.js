import React from "react";
import { useEffect, useState } from "react";

import '../stylesheets/banner.css';
import typeWriter from "../extra/typewriter";



const Header = () => {
    const [ iAm, setIAm ] = useState('');
    const [iAmDone, setIAmDone] = useState(false);

    const fullIAm = "I am a full stack developer";
    const fullNewIAm = "an aspiring full stack developer";

    // Creating the typing animation for the banner
    useEffect(() => {
        // Waiting for each part complete before starting a new one
        const waitDone = async () => {    

          setTimeout(async () => {
            await typeWriter({
              l: fullIAm.length,
              index: 0,
              text: "",
              fullText: fullIAm,
              type: 3,
              setTextCallback: setText,
            });
  
            await typeWriter({
              l: fullNewIAm.length,
              index: 0,
              text: "I am ",
              fullText: fullNewIAm,
              type: 4,
              setTextCallback: setText,
            });

            setIAmDone(true);

          }, 500);
        };

        waitDone();

      }, []);
    

    const setText = (text) => {
      setIAm(text);
    };

    return (
        <header className="banner-container">
            <div className="banner-text-container">
                <h1 className ={`main-header banner-header-text name-done`} >Hi, my name is <span className="banner-text-name main-header">Onni</span></h1>
            </div>
            <div>
                <h2 className ={`banner-sec-text secondary-header ${iAmDone ? 'name-done' : ''}` } id="banner-sec-text">{iAm}</h2>
            </div>
        </header>
    );
};

export default Header;