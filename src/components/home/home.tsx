import React, { useEffect, useState } from 'react';
import backgroundImage from "../../images/background.png";
import squigglyArrow from "../../images/arrow left custom.png";
import './home.css';
import BasicInfo from "./basic_info";
import Navbar from "../navbar/navbar";
import {HomeProps} from "../../declarations";

function Home(props: HomeProps): JSX.Element {

    const [img1ScrollOffset, setImg1ScrollOffset] = useState(0);
    const [img1OpacityOffset, setImg1OpacityOffset] = useState(1);
    const [img2ScrollOffset, setImg2ScrollOffset] = useState(0);
    const [img2OpacityOffset, setImg2OpacityOffset] = useState(0);
    const [img3ScrollOffset, setImg3ScrollOffset] = useState(0);
    const [img3OpacityOffset, setImg3OpacityOffset] = useState(0);
    
    useEffect(() => {
    
        function scrollEffect(): void {
            switch (true) {
                case document.documentElement.scrollTop < window.innerHeight * 1:
                    setImg1ScrollOffset(document.documentElement.scrollTop / 3);
                    setImg1OpacityOffset(1.25 - document.documentElement.scrollTop / (window.innerHeight * 0.6));
                case document.documentElement.scrollTop >= window.innerHeight * 1 && document.documentElement.scrollTop < window.innerHeight * 2.5:
                    setImg2ScrollOffset(window.innerHeight * 0.5 + Math.min((document.documentElement.scrollTop - window.innerHeight) / 3, window.innerHeight * 2));
                    setImg2OpacityOffset(
                        document.documentElement.scrollTop > window.innerHeight * 1.5 ? 
                            1 - (document.documentElement.scrollTop - (window.innerHeight * 1))/(window.innerHeight * 2) 
                        : 
                            document.documentElement.scrollTop > window.innerHeight / 3 ? 
                                (document.documentElement.scrollTop - (window.innerHeight / 3))/(window.innerHeight / 3) 
                            : 
                                0
                    );
                case document.documentElement.scrollTop >= window.innerHeight * 2.5:
                    setImg3ScrollOffset(window.innerHeight * 2 + Math.min((document.documentElement.scrollTop - window.innerHeight) / 3, window.innerHeight * 3));
                    setImg3OpacityOffset(
                        document.documentElement.scrollTop > window.innerHeight * 3.5 ? 
                            1 - (document.documentElement.scrollTop - (window.innerHeight * 3.5))/(window.innerHeight * 3) 
                        : 
                            document.documentElement.scrollTop > window.innerHeight * 2.5 ? 
                                (document.documentElement.scrollTop - (window.innerHeight * 2.5))/(window.innerHeight) 
                            : 
                                0
                    );


            }
        };

        window.addEventListener('scroll', scrollEffect);

        return () => window.removeEventListener('scroll', scrollEffect);

    }, []);

    return(
        <div className="homepage">

            <img src={backgroundImage} className="backgroundImage" alt="background wing view" style={{"marginTop": img1ScrollOffset, "opacity": img1OpacityOffset}}></img>

            <Navbar page={props.page} />

            <img src={squigglyArrow} className="squigglyArrow" alt="arrow below timeline button"></img>
            <p className="pastExperience semi-bold">My Past Experiences</p>

            <div className="appMain">
                <BasicInfo />
            </div>

            {/* Dynamic image based on hover */}
            <img src={backgroundImage} className="backgroundImage backgroundImage2" alt="background wing view" style={{"marginTop": img2ScrollOffset, "opacity": img2OpacityOffset, "rotate": "180deg"}}></img>

            <p>Check out my past experiences on these areas or learn more about me!</p>
            <div>
                <button>Programming</button>
                <button>Aviation</button>
                <button>PC Building</button>
                <button>Design</button>
                <button>About Me</button>
            </div>

            <img src={backgroundImage} className="backgroundImage backgroundImage3" alt="background wing view" style={{"marginTop": img3ScrollOffset, "opacity": img3OpacityOffset, "rotate": "180deg"}}></img>

            <p>Interested in contacting me?</p>
            <button>Click Me</button>

        </div>
    )

};

export default Home;