import React from "react";
import { useEffect, useState } from "react";

import '../stylesheets/banner.css';
import typeWriter from "../extra/typewriter";



const Header = () => {
    const [ nameSentence, setNameSentence ] = useState('');
    const [ name, setName ] = useState('');
    const [ iAm, setIAm ] = useState('');
    const [nameDone, setNameDone] = useState(false);
    const [iAmDone, setIAmDone] = useState(false);


    const fullNameSentence = "Hi, my name is ";
    const fullName = "Onni";
    const fullIAm = "I am a full stack developer";
    const fullNewIAm = "an aspiring full stack developer";

    // Creating the typing animation for the banner
    useEffect(() => {
        // Waiting for each part complete before starting a new one
        const waitDone = async () => {
          await typeWriter({
            l: fullNameSentence.length,
            index: 0,
            text: "",
            fullText: fullNameSentence,
            type: 1,
            setTextCallback: setText,
          });
    
          await typeWriter({
            l: fullName.length,
            index: 0,
            text: "",
            fullText: fullName,
            type: 2,
            setTextCallback: setText,
          });

          setNameDone(true);


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
    

    const setText = (text, type) => {
    if (type === 1) {
        setNameSentence(text);
    } else if (type === 2) {
        setName(text);
    } else {
        setIAm(text);
    }
    };

    return (
        <header className="banner-container">
            <div className="banner-text-container">
                <h1 className ={`main-header banner-header-text ${nameDone ? 'name-done' : ''}`} >{nameSentence}<span className="banner-text-name main-header">{name}</span></h1>
            </div>
            <div>
                <h2 className ={`banner-sec-text secondary-header ${iAmDone ? 'name-done' : ''}` } id="banner-sec-text">{iAm}</h2>
            </div>
        </header>
    );
};

export default Header;