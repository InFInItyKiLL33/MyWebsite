import React, { useEffect, useState } from 'react';
import { NavLink as Link } from "react-router-dom";
// import backgroundImage from "../../images/background-main.png"; // this is Image2
import backgroundImage from "public/background-main.png"; // this is Image2
import backgroundImage1 from "../../images/programming2-vignette.png";
import backgroundImage2 from "../../images/aviation-vignette.png";
import backgroundImage3 from "../../images/pcbuildingbg4.jpg";
import backgroundImage4 from "../../images/jpmun5-black-vignette.png";
import backgroundImage5 from "../../images/background-fade.png";
import squigglyArrow from "../../images/arrow left custom.png";
import './home.sass';
import '../navbar/navbar.sass';
import BasicInfo from "./basic_info";
import Navbar from "../navbar/navbar";
import {HomeProps} from "../../declarations";

function Home(props: HomeProps): JSX.Element {

    const [pointerEvents, setPointerEvents] = useState([0, 0, 0, 0]);

    const [scollPromptOpacity, setScollPromptOpacity] = useState(1);

    const [scrollText, setScrollText] = useState("Scroll");
    const [scrollTextOpacity, setScrollTextOpacity] = useState(0);

    const [img1ScrollOffset, setImg1ScrollOffset] = useState(0);
    const [img1OpacityOffset, setImg1OpacityOffset] = useState(1);
    const [img2ScrollOffset, setImg2ScrollOffset] = useState(0);
    const [img2OpacityOffset, setImg2OpacityOffset] = useState(0);
    const [img3ScrollOffset, setImg3ScrollOffset] = useState(0);
    const [img3OpacityOffset, setImg3OpacityOffset] = useState(0);
    const [img4ScrollOffset, setImg4ScrollOffset] = useState(0);
    const [img4OpacityOffset, setImg4OpacityOffset] = useState(0);
    const [img5ScrollOffset, setImg5ScrollOffset] = useState(0);
    const [img5OpacityOffset, setImg5OpacityOffset] = useState(0);
    const [img6OpacityOffset, setImg6OpacityOffset] = useState(0);
    
    useEffect(() => {
    
        function scrollEffect(): void {

            if (document.documentElement.scrollTop >= 1) {
                setScollPromptOpacity(0);
            } else {
                setScollPromptOpacity(1);
            };

            // Scroll to view my interests and skillsets... animated text
            if (document.documentElement.scrollTop >= window.innerHeight * 0.6 && document.documentElement.scrollTop < window.innerHeight * 1.7) {
                const scrollTextList = "Scroll to see my interests and skillsets...";
                if (document.documentElement.scrollTop < window.innerHeight * 0.8) {
                    setScrollTextOpacity((document.documentElement.scrollTop - window.innerHeight * 0.7) / (window.innerHeight * 0.1))
                    setScrollText("Scroll");
                } else if (document.documentElement.scrollTop > window.innerHeight * 1.35) {
                    setScrollTextOpacity(1 - (document.documentElement.scrollTop - window.innerHeight * 1.35) / (window.innerHeight * 0.2))
                } else {
                    setScrollText(scrollTextList.slice(0, Math.floor(Math.max(6, ((document.documentElement.scrollTop - window.innerHeight * 0.75) / window.innerHeight * 1) * 125))));
                };
            };

            // Pointer Events
            switch (true) {
                case document.documentElement.scrollTop < window.innerHeight * 2.7:
                    setPointerEvents([1, 0, 0, 0]);
                    break;
                case document.documentElement.scrollTop < window.innerHeight * 3.6:
                    setPointerEvents([0, 1, 0, 0]);
                    break;
                case document.documentElement.scrollTop < window.innerHeight * 4.2:
                    setPointerEvents([0, 0, 1, 0]);
                    break;
                case document.documentElement.scrollTop < window.innerHeight * 5.2:
                    setPointerEvents([0, 0, 0, 1]);
                    break;
                default:
                    setPointerEvents([0, 0, 0, 0]);
            }

            // animated backgrounds for diff skills
            switch (true) {

                case document.documentElement.scrollTop < window.innerHeight * 1:
                    setImg1ScrollOffset(document.documentElement.scrollTop / 3);
                    setImg1OpacityOffset(1.25 - document.documentElement.scrollTop / (window.innerHeight * 0.6));


                case document.documentElement.scrollTop >= window.innerHeight * 1.5 && document.documentElement.scrollTop < window.innerHeight * 3:
                    setImg2ScrollOffset(window.innerHeight * 1.4 + Math.min((document.documentElement.scrollTop - window.innerHeight) / 3, window.innerHeight * 2));
                    setImg2OpacityOffset(
                        document.documentElement.scrollTop > window.innerHeight * 2.5 ? 
                            1 - (((document.documentElement.scrollTop - window.innerHeight * 2.5) / window.innerHeight) / 0.35)
                        : 
                            document.documentElement.scrollTop > window.innerHeight * 1.5 ? 
                                ((document.documentElement.scrollTop - window.innerHeight * 1.5) / window.innerHeight) / 0.4
                            : 
                                0
                    );

                case document.documentElement.scrollTop >= window.innerHeight * 2.5 && document.documentElement.scrollTop < window.innerHeight * 4:
                    setImg3ScrollOffset(window.innerHeight * 2.8 - Math.min((document.documentElement.scrollTop - window.innerHeight * 2.5) / 3, window.innerHeight * 2));
                    setImg3OpacityOffset(
                        document.documentElement.scrollTop > window.innerHeight * 3.3 ? 
                            1 - (((document.documentElement.scrollTop - window.innerHeight * 3.3) / window.innerHeight) / 0.35)
                        : 
                            document.documentElement.scrollTop > window.innerHeight * 2.5 ? 
                                ((document.documentElement.scrollTop - window.innerHeight * 2.5) / window.innerHeight) / 0.4
                            : 
                                0
                    );
                    
                case document.documentElement.scrollTop >= window.innerHeight * 3.5 && document.documentElement.scrollTop < window.innerHeight * 5:
                    setImg4ScrollOffset(window.innerHeight * 3.8 - Math.min((document.documentElement.scrollTop - window.innerHeight * 2.5) / 3, window.innerHeight * 2));
                    setImg4OpacityOffset(
                        document.documentElement.scrollTop > window.innerHeight * 4.1 ? 
                            1 - (((document.documentElement.scrollTop - window.innerHeight * 4.1) / window.innerHeight) / 0.35)
                        : 
                            document.documentElement.scrollTop > window.innerHeight * 3.5 ? 
                                ((document.documentElement.scrollTop - window.innerHeight * 3.5) / window.innerHeight) / 0.4
                            : 
                                0
                    );
                    
                case document.documentElement.scrollTop >= window.innerHeight * 4.1 && document.documentElement.scrollTop < window.innerHeight * 6:
                    setImg5ScrollOffset(window.innerHeight * 4.7 - Math.min((document.documentElement.scrollTop - window.innerHeight * 2.5) / 3, window.innerHeight * 2));
                    setImg5OpacityOffset(
                        document.documentElement.scrollTop > window.innerHeight * 5 ? 
                            1 - (((document.documentElement.scrollTop - window.innerHeight * 5) / window.innerHeight) / 0.35)
                        : 
                            document.documentElement.scrollTop > window.innerHeight * 4.1 ? 
                                ((document.documentElement.scrollTop - window.innerHeight * 4.1) / window.innerHeight) / 0.4
                            : 
                                0
                    );
                    
                case document.documentElement.scrollTop >= window.innerHeight * 5.1:
                    setImg6OpacityOffset(
                        document.documentElement.scrollTop > window.innerHeight * 5.1 ? 
                            ((document.documentElement.scrollTop - window.innerHeight * 5.1) / window.innerHeight) / 0.2
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

            <img src={process.env.PUBLIC_URL + backgroundImage} className="backgroundImage backgroundImageHome backgroundImageHomeTop" alt="background wing view" style={{"marginTop": img1ScrollOffset, "opacity": img1OpacityOffset}}></img>

            <Navbar page={props.page} />

            <img src={squigglyArrow} className="squigglyArrow" alt="arrow below timeline button"></img>
            <p className="pastExperience semi-bold">My Past Experiences</p>

            <div className="appMain">
                <BasicInfo />
            </div>

            <div className="flex-col scrollPrompt" style={{"filter": "brightness(" + scollPromptOpacity + ")"}}>
                <p>Scroll</p>
                <p className="scrollPromptArrow">⌄</p>
            </div>

            <p className="scrollCheckOutText" style={{"opacity": scrollTextOpacity}}>{scrollText}</p>

            <div className="spacer"></div>

            <Link to={"/timeline?type=0"} style={{"width": "100vw", "height": "100vh"}}>
                <div className="showcaseImageText showcaseImageText1 flex-row flex-jc-center" style={{"opacity": img2OpacityOffset, "pointerEvents": pointerEvents[0] === 1 ? "all" : "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="programmingIcon my-auto"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V15.2H7V37Zm8-3.6-2.1-2.1 5.15-5.2-5.2-5.2L15 18.8l7.3 7.3Zm9.5.2v-3h11v3Z"/></svg>
                    <p className='programmingText my-auto'>Programming</p>
                </div>
            </Link>

            <img src={backgroundImage1} className="backgroundImage backgroundImageHome backgroundImage2" alt="programming pic" style={{"marginTop": img2ScrollOffset, "opacity": img2OpacityOffset, "filter": "brightness(0.3) blur(5px)"}}></img>

            <Link to={"/timeline?type=1"}>
                <div className="showcaseImageText showcaseImageText2 flex-row flex-jc-center" style={{"opacity": img3OpacityOffset, "pointerEvents": pointerEvents[1] === 1 ? "all" : "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="aviationIcon my-auto"><path d="M17.5 44v-2.1l4-3V26.35L4 31.5v-2.9l17.5-10.3V6.5q0-1.05.725-1.775Q22.95 4 24 4q1.05 0 1.775.725.725.725.725 1.775v11.8L44 28.6v2.9l-17.5-5.15V38.9l4 3V44L24 42.15Z"/></svg>
                    <p className='aviationText my-auto'>Aviation</p>
                </div>
            </Link>

            <img src={backgroundImage2} className="backgroundImage backgroundImageHome backgroundImage3" alt="aviation pic" style={{"marginTop": img3ScrollOffset, "opacity": img3OpacityOffset, "filter": "brightness(0.3) blur(2px)"}}></img>

            <Link to={"/timeline?type=2"}>
                <div className="showcaseImageText showcaseImageText3 flex-row flex-jc-center" style={{"opacity": img4OpacityOffset, "pointerEvents": pointerEvents[2] === 1 ? "all" : "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="pcIcon my-auto"><path d="M3.5 42q-.65 0-1.075-.425Q2 41.15 2 40.5q0-.65.425-1.075Q2.85 39 3.5 39h41q.65 0 1.075.425Q46 39.85 46 40.5q0 .65-.425 1.075Q45.15 42 44.5 42ZM7 36q-1.2 0-2.1-.9Q4 34.2 4 33V9q0-1.2.9-2.1Q5.8 6 7 6h34q1.2 0 2.1.9.9.9.9 2.1v24q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V9H7v24Zm0 0V9v24Z"/></svg>
                    <p className='pcText my-auto'>PC Building</p>
                </div>
            </Link>

            <img src={backgroundImage3} className="backgroundImage backgroundImageHome backgroundImage4" alt="pc building pic" style={{"marginTop": img4ScrollOffset, "opacity": img4OpacityOffset, "rotate": "0deg"}}></img>

            <Link to={"/timeline?type=3"}>
                <div className="showcaseImageText showcaseImageText4 flex-row flex-jc-center" style={{"opacity": img5OpacityOffset, "pointerEvents": pointerEvents[3] === 1 ? "all" : "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="designIcon my-auto"><path d="M10.75 42.15q-1.7 0-3.35-.575Q5.75 41 4.5 39.7q1.75-.6 2.5-1.75t.75-3.1q0-2.2 1.525-3.725T13 29.6q2.2 0 3.725 1.525t1.525 3.725q0 3.2-2.175 5.25t-5.325 2.05Zm0-3q1.75 0 3.125-1.25t1.375-3.05q0-1-.625-1.625T13 32.6q-1 0-1.625.625t-.625 1.625q0 1.95-.425 2.875T8.75 38.85q.3.05 1 .175.7.125 1 .125Zm11.5-8.85-4.5-4.75 18.8-18.8q.7-.7 1.55-.725.85-.025 1.6.725l1.45 1.45q.75.75.725 1.625-.025.875-.725 1.575ZM13 34.85Z"/></svg>
                    <p className='designText my-auto'>Design</p>
                </div>
            </Link>

            <img src={backgroundImage4} className="backgroundImage backgroundImageHome backgroundImage5" alt="design pic" style={{"marginTop": img5ScrollOffset, "opacity": img5OpacityOffset, "rotate": "0deg", "filter": "brightness(0.3) blur(1px)"}}></img>

            <div className="contactMeEndPage flex-col" style={{"opacity": img6OpacityOffset}}>
                <p className="contactMeEndPageText">Interested in contacting me?</p>
                <button className="contactMeEndPageButton">
                    <Link to={"/contact"} className="links links-home semi-bold flex-col flex-jc-center">
                        Click Here
                    </Link>
                </button>
            </div>

            <img src={backgroundImage5} alt="end page image" className="backgroundImage backgroundImageHome backgroundImageLast" style={{"opacity": img6OpacityOffset}}></img>

            <button className="backToTop" onMouseUp={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back to Top</button>

        </div>
    )

};

export default Home;