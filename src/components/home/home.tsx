import React, { useEffect, useState } from 'react';
import { NavLink as Link } from "react-router-dom";
import backgroundImage from "../../images/background-main.png"; // this is Image2=
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

    const MAXOFFSETMOUSE = -3; // in px
    const [mouseToImageMovement, setMouseOffset] = useState([0, 0]);

    const [pointerEvents, setPointerEvents] = useState([0, 0, 0, 0]);
    const [homepageHeight, setHomepageHeight] = useState(625);

    const [imgCounterOffset, setImageCounterOffset] = useState(Array(Object.keys(props.types).length + 2).fill(0));
    const [pointerEventsOffset, setPointerEventsOffset] = useState(Array(Object.keys(props.types).length).fill(0));

    const [scollPromptOpacity, setScollPromptOpacity] = useState(1);

    const [scrollText, setScrollText] = useState("Scroll");         
    const [scrollTextOpacity, setScrollTextOpacity] = useState(0);
    
    const [imgScrollOffset, setImageScrollOffset] = useState(Array(Object.keys(props.types).length + 2).fill(0));
    const [imgOpacityOffset, setImageOpacityOffset] = useState([1, ...Array(Object.keys(props.types).length + 1).fill(0)]);

    function mouseMoveEvent(event: any): void {
        setMouseOffset([MAXOFFSETMOUSE * ((event.pageX * 2)/window.innerWidth - 1), MAXOFFSETMOUSE * ((event.pageY * 2)/window.innerHeight - 1)]);
    };

    function updateImgOffset(type: number, index: number, offset: number, offset2: number = 0): void { // type 0 is scroll, type 1 is opacity, 2 if both
        if (type == 0) {
            setImageScrollOffset((prevOffset) => {
                prevOffset[index] = offset;
                return prevOffset;
            });
        } else if (type == 1) {
            setImageOpacityOffset((prevOffset) => {
                prevOffset[index] = offset;
                return prevOffset;
            });
        } else if (type == 2) {
            setImageScrollOffset((prevOffset) => {
                prevOffset[index] = offset;
                return prevOffset;
            });
            setImageOpacityOffset((prevOffset) => {
                prevOffset[index] = offset2;
                return prevOffset;
            });
        };
    };

    function updatePointerEvents(index: number): void {
        setPointerEvents(() => {
            let newPointerEvents = [0, 0, 0, 0];
            if (index >= 0 && index < pointerEvents.length) {
                newPointerEvents[index] = 1;
            };
            return newPointerEvents;
        });
    };
    
    useEffect(() => {
    
        function scrollEffect(): void {

            if (document.documentElement.scrollTop >= 1) {
                setScollPromptOpacity(0);
            } else {
                setScollPromptOpacity(1);
            };
            
            // The next few tabs of codes are a jumbled mess of math that will take awhile to understand, that may not make sense (even for myself). Read at your own risk
            
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
            if (document.documentElement.scrollTop < window.innerHeight * 2.7) {
                updatePointerEvents(0 + pointerEventsOffset[0]);
            } else if (document.documentElement.scrollTop < window.innerHeight * 3.6) {
                updatePointerEvents(1 + pointerEventsOffset[1]);
            } else if (document.documentElement.scrollTop < window.innerHeight * 4.2) {
                updatePointerEvents(2 + pointerEventsOffset[2]);
            } else if (document.documentElement.scrollTop < window.innerHeight * 5.2) {
                updatePointerEvents(3 + pointerEventsOffset[3]);
            } else {
                updatePointerEvents(-1);
            };

            // animated backgrounds for diff skills
            switch (true) {

                case document.documentElement.scrollTop < window.innerHeight * 1:

                    updateImgOffset(
                        2, 0, 
                        document.documentElement.scrollTop / 3, 
                        Math.min(0.99, 1.25 - document.documentElement.scrollTop / (window.innerHeight * 0.6))
                    );
                    /* falls through */


                case document.documentElement.scrollTop >= window.innerHeight * 1.5 && document.documentElement.scrollTop < window.innerHeight * 3:

                    updateImgOffset(
                        2, 1, 
                        window.innerHeight * 1.4 + Math.min((document.documentElement.scrollTop - window.innerHeight) / 3, window.innerHeight * 2), 
                        Math.min(0.99,
                            document.documentElement.scrollTop > window.innerHeight * 2.5 ? 
                                1 - (((document.documentElement.scrollTop - window.innerHeight * 2.5) / window.innerHeight) / 0.35)
                            : 
                                document.documentElement.scrollTop > window.innerHeight * 1.5 ? 
                                    ((document.documentElement.scrollTop - window.innerHeight * 1.5) / window.innerHeight) / 0.4
                                : 
                                    0
                        )
                    );
                    /* falls through */

                case document.documentElement.scrollTop >= window.innerHeight * 2.5 && document.documentElement.scrollTop < window.innerHeight * 4:
                    
                    updateImgOffset(
                        2, 2, 
                        window.innerHeight * 2.8 - Math.min((document.documentElement.scrollTop - window.innerHeight * 2.5) / 3, window.innerHeight * 2), 
                        Math.min(0.99,
                            document.documentElement.scrollTop > window.innerHeight * 3.3 ? 
                                1 - (((document.documentElement.scrollTop - window.innerHeight * 3.3) / window.innerHeight) / 0.35)
                            : 
                                document.documentElement.scrollTop > window.innerHeight * 2.5 ? 
                                    ((document.documentElement.scrollTop - window.innerHeight * 2.5) / window.innerHeight) / 0.4
                                : 
                                    0
                        )
                    );
                    /* falls through */
                    
                case document.documentElement.scrollTop >= window.innerHeight * 3.5 && document.documentElement.scrollTop < window.innerHeight * 5:
                    
                    updateImgOffset(
                        2, 3, 
                        window.innerHeight * 3.8 - Math.min((document.documentElement.scrollTop - window.innerHeight * 2.5) / 3, window.innerHeight * 2), 
                        Math.min(0.99,
                            document.documentElement.scrollTop > window.innerHeight * 4.1 ? 
                                1 - (((document.documentElement.scrollTop - window.innerHeight * 4.1) / window.innerHeight) / 0.35)
                            : 
                                document.documentElement.scrollTop > window.innerHeight * 3.5 ? 
                                    ((document.documentElement.scrollTop - window.innerHeight * 3.5) / window.innerHeight) / 0.4
                                : 
                                    0
                        )
                    );
                    /* falls through */
                    
                case document.documentElement.scrollTop >= window.innerHeight * 4.1 && document.documentElement.scrollTop < window.innerHeight * 6:
                    
                    updateImgOffset(
                        2, 4, 
                        window.innerHeight * 4.7 - Math.min((document.documentElement.scrollTop - window.innerHeight * 2.5) / 3, window.innerHeight * 2), 
                        Math.min(0.99,
                            document.documentElement.scrollTop > window.innerHeight * 5 ? 
                                1 - (((document.documentElement.scrollTop - window.innerHeight * 5) / window.innerHeight) / 0.35)
                            : 
                                document.documentElement.scrollTop > window.innerHeight * 4.1 ? 
                                    ((document.documentElement.scrollTop - window.innerHeight * 4.1) / window.innerHeight) / 0.4
                                : 
                                    0
                        )
                    );
                    /* falls through */
                    
                case document.documentElement.scrollTop >= window.innerHeight * 5.0:
                    
                    updateImgOffset(
                        2, 5, 
                        window.innerHeight * 4.8,
                        Math.min(0.99,
                            document.documentElement.scrollTop > window.innerHeight * 5.0 ? 
                                ((document.documentElement.scrollTop - window.innerHeight * 5.0) / window.innerHeight) / 0.4
                            : 
                                0
                        )
                    );
                    break;

            }
        };

        window.addEventListener('scroll', scrollEffect);

        return () => window.removeEventListener('scroll', scrollEffect);

    }, [pointerEventsOffset]);

    useEffect(():void => {
        console.log(props.allowedContentTypes)
        setImageCounterOffset(() => {
            let defaultOffset = Array(Object.keys(props.types).length + 2).fill(0);
            if (props.allowedContentTypes.reduce((partialSum: number, a: number): number => partialSum + a, 0) !== 0) {
                for (let i = 0; i < props.allowedContentTypes.length; i++) {
                    if (props.allowedContentTypes[i] === 0) {
                        for (let j = 2 + i; j < defaultOffset.length; j++) {
                            defaultOffset[j] -= 1;
                        };
                    };
                };
            };
            return defaultOffset;
        });
        setPointerEventsOffset(() => {
            let defaultOffset = Array(Object.keys(props.types).length).fill(0);
            if (props.allowedContentTypes.reduce((partialSum: number, a: number): number => partialSum + a, 0) !== 0) {
                let prevIndex = 0;
                for (let i = 0; i < props.allowedContentTypes.length; i++) {
                    if (props.allowedContentTypes[i] === 0) {
                        for (let j = prevIndex; j < defaultOffset.length; j++) {
                            defaultOffset[j] += 1;
                        };
                    } else {
                        prevIndex++;
                    };
                };
            };
            return defaultOffset;
        });
        setHomepageHeight((prevHeight) => {
            if (props.allowedContentTypes.reduce((partialSum: number, a: number): number => partialSum + a, 0) !== 0) {
                for (let i = 0; i < props.allowedContentTypes.length; i++) {
                    if (props.allowedContentTypes[i] === 0) {
                        prevHeight -= 85
                    };
                };
            };
            return prevHeight;
        });
    }, [props.allowedContentTypes]);

    return(
        <div className="homepage" onMouseMove={mouseMoveEvent} style={{"height": String(homepageHeight) + "vh"}}>

            <img src={backgroundImage} className="backgroundImage backgroundImageHome backgroundImageHomeTop" alt="background wing view" style={{"scale": "1.05", "marginTop": imgScrollOffset[0], "opacity": imgOpacityOffset[0 + imgCounterOffset[0]], "translate": String(mouseToImageMovement[0]) + "px " + String(mouseToImageMovement[1]) + "px"}}></img>

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

            {props.allowedContentTypes.reduce((partialSum: number, a: number): number => partialSum + a, 0) === 0 || props.allowedContentTypes[0] !== 0 ? 
                <>
                    <Link to={"/timeline?type=0"} style={{"width": "100vw", "height": "100vh"}}>
                        <div className="showcaseImageText showcaseImageText1 flex-row flex-jc-center" style={{"marginTop": imgScrollOffset[1 + imgCounterOffset[1]], "opacity": imgOpacityOffset[1 + imgCounterOffset[1]], "pointerEvents": pointerEvents[0] === 1 ? "all" : "none"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="programmingIcon my-auto"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V15.2H7V37Zm8-3.6-2.1-2.1 5.15-5.2-5.2-5.2L15 18.8l7.3 7.3Zm9.5.2v-3h11v3Z"/></svg>
                            <p className='programmingText my-auto'>Programming</p>
                        </div>
                    </Link>
    
                    <img src={backgroundImage1} className="backgroundImage backgroundImageHome backgroundImage2" alt="programming pic" style={{"marginTop": imgScrollOffset[1 + imgCounterOffset[1]], "opacity": imgOpacityOffset[1 + imgCounterOffset[1]], "filter": "brightness(0.3) blur(5px)", "translate": String(mouseToImageMovement[0]) + "px " + String(mouseToImageMovement[1]) + "px"}}></img>
                </>
            :
                <></>
            }

            {props.allowedContentTypes.reduce((partialSum: number, a: number): number => partialSum + a, 0) === 0 || props.allowedContentTypes[1] !== 0 ? 
                <>
                    <Link to={"/timeline?type=1"}>
                        <div className="showcaseImageText showcaseImageText2 flex-row flex-jc-center" style={{"marginTop": imgScrollOffset[2 + imgCounterOffset[2]], "opacity": imgOpacityOffset[2 + imgCounterOffset[2]], "pointerEvents": pointerEvents[1] === 1 ? "all" : "none"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="aviationIcon my-auto"><path d="M17.5 44v-2.1l4-3V26.35L4 31.5v-2.9l17.5-10.3V6.5q0-1.05.725-1.775Q22.95 4 24 4q1.05 0 1.775.725.725.725.725 1.775v11.8L44 28.6v2.9l-17.5-5.15V38.9l4 3V44L24 42.15Z"/></svg>
                            <p className='aviationText my-auto'>Aviation</p>
                        </div>
                    </Link>
    
                    <img src={backgroundImage2} className="backgroundImage backgroundImageHome backgroundImage3" alt="aviation pic" style={{"marginTop": imgScrollOffset[2 + imgCounterOffset[2]], "opacity": imgOpacityOffset[2 + imgCounterOffset[2]], "filter": "brightness(0.3) blur(2px)", "translate": String(mouseToImageMovement[0]) + "px " + String(mouseToImageMovement[1]) + "px"}}></img>
                </>
            :
                <></>
            }

            {props.allowedContentTypes.reduce((partialSum: number, a: number): number => partialSum + a, 0) === 0 || props.allowedContentTypes[2] !== 0 ? 
                <>
                    <Link to={"/timeline?type=2"}>
                        <div className="showcaseImageText showcaseImageText3 flex-row flex-jc-center" style={{"marginTop": imgScrollOffset[3 + imgCounterOffset[3]], "opacity": imgOpacityOffset[3 + imgCounterOffset[3]], "pointerEvents": pointerEvents[2] === 1 ? "all" : "none"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="pcIcon my-auto"><path d="M3.5 42q-.65 0-1.075-.425Q2 41.15 2 40.5q0-.65.425-1.075Q2.85 39 3.5 39h41q.65 0 1.075.425Q46 39.85 46 40.5q0 .65-.425 1.075Q45.15 42 44.5 42ZM7 36q-1.2 0-2.1-.9Q4 34.2 4 33V9q0-1.2.9-2.1Q5.8 6 7 6h34q1.2 0 2.1.9.9.9.9 2.1v24q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V9H7v24Zm0 0V9v24Z"/></svg>
                            <p className='pcText my-auto'>PC Building</p>
                        </div>
                    </Link>
    
                    <img src={backgroundImage3} className="backgroundImage backgroundImageHome backgroundImage4" alt="pc building pic" style={{"marginTop": imgScrollOffset[3 + imgCounterOffset[3]], "opacity": imgOpacityOffset[3 + imgCounterOffset[3]], "rotate": "0deg", "translate": String(mouseToImageMovement[0]) + "px " + String(mouseToImageMovement[1]) + "px"}}></img>
                </>
            :
                <></>
            }

            {props.allowedContentTypes.reduce((partialSum: number, a: number): number => partialSum + a, 0) === 0 || props.allowedContentTypes[3] !== 0 ? 
                <>
                    <Link to={"/timeline?type=3"}>
                        <div className="showcaseImageText showcaseImageText4 flex-row flex-jc-center" style={{"marginTop": imgScrollOffset[4 + imgCounterOffset[4]], "opacity": imgOpacityOffset[4 + imgCounterOffset[4]], "pointerEvents": pointerEvents[3] === 1 ? "all" : "none"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="designIcon my-auto"><path d="M10.75 42.15q-1.7 0-3.35-.575Q5.75 41 4.5 39.7q1.75-.6 2.5-1.75t.75-3.1q0-2.2 1.525-3.725T13 29.6q2.2 0 3.725 1.525t1.525 3.725q0 3.2-2.175 5.25t-5.325 2.05Zm0-3q1.75 0 3.125-1.25t1.375-3.05q0-1-.625-1.625T13 32.6q-1 0-1.625.625t-.625 1.625q0 1.95-.425 2.875T8.75 38.85q.3.05 1 .175.7.125 1 .125Zm11.5-8.85-4.5-4.75 18.8-18.8q.7-.7 1.55-.725.85-.025 1.6.725l1.45 1.45q.75.75.725 1.625-.025.875-.725 1.575ZM13 34.85Z"/></svg>
                            <p className='designText my-auto'>Design</p>
                        </div>
                    </Link>
    
                    <img src={backgroundImage4} className="backgroundImage backgroundImageHome backgroundImage5" alt="design pic" style={{"marginTop": imgScrollOffset[4 + imgCounterOffset[4]], "opacity": imgOpacityOffset[4 + imgCounterOffset[4]], "rotate": "0deg", "filter": "brightness(0.3) blur(1px)", "translate": String(mouseToImageMovement[0]) + "px " + String(mouseToImageMovement[1]) + "px"}}></img>
                </>
            :
                <></>
            }
            
            <div className="contactMeEndPage flex-col" style={{"marginTop": imgScrollOffset[5 + imgCounterOffset[5]], "opacity": Math.min(0.99, 1.6 * imgOpacityOffset[5 + imgCounterOffset[5]])}}>
                <p className="contactMeEndPageText">Interested in contacting me?</p>
                <button className="contactMeEndPageButton">
                    <Link to={"/contact"} className="links links-home semi-bold flex-col flex-jc-center">
                        Click Here
                    </Link>
                </button>
            </div>

            <img src={backgroundImage5} alt="end page bg" className="backgroundImage backgroundImageHome backgroundImageLast" style={{"opacity": Math.min(0.99, 1.5 * imgOpacityOffset[5 + imgCounterOffset[5]])}}></img>

            <button className="backToTop" style={{"opacity": Math.min(0.99, 1.5 * imgOpacityOffset[5 + imgCounterOffset[5]])}} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back to Top</button>

        </div>
    )

};

export default Home;