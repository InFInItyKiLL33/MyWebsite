import React, { useState, useEffect } from 'react';
import backgroundImage from "../../images/background.png";
import backgroundImage0 from "../../images/programmingbg.png";
import backgroundImage1 from "../../images/aviationbg.png";
import backgroundImage2 from "../../images/pcbuildingbg3.jpg";
import backgroundImage2Alt from "../../images/pcbuildingbg4.png";
import backgroundImage3 from "../../images/designbg.png";
import './timeline.css';
import Navbar from "../navbar";
import TimelineInitial from "./timeline_initial";
import TimelineSpecific from './timeline_specific';
import TimelineProgrammingAnimation from "./animations/programming/programming";
import TimelineAviationAnimation from "./animations/aviation/aviation";
import TimelineDesignAnimation from "./animations/design/design";

function Timeline(props) {
    const initialTimeline = 0;
    const types = {0: "Programming", 1: "Aviation", 2: "PC Building", 3: "Design"};
    const imageOptions = [backgroundImage0, backgroundImage1, backgroundImage2Alt, backgroundImage3];
    const imageInitialOptions = [backgroundImage0, backgroundImage1, backgroundImage2, backgroundImage3];
    const [typeVal, setTypeVal] = useState(initialTimeline); // 0 - 3
    const [fadeoutTimelineImage, setFadeoutTimelineImage] = useState("backgroundImage active")
    const [imageType, changeImageType] = useState(imageOptions[typeVal]);
    const [timelineState, changeTimelineState] = useState(0); // 0 - Initial, 1 - Specific
    const [transitionAnimation, changeTransitionAnimationState] = useState(0); // 0 - Disable, 1 - Run animation for type 1, 2 - for 2, etc..

    function renderAnimation() {
        switch(transitionAnimation) {
            case 1:
                return <TimelineProgrammingAnimation />

            case 2:
                return <TimelineAviationAnimation /> 

            case 3:
                return <></>
                
            case 4:
                return <TimelineDesignAnimation /> 

            default:
                return <></>
        }
    };

    // useEffect(function() {
    //     changeTransitionAnimationState(4); // For testing
    // }, []);

    return(

        <div className="App">

            <div page={props.page}>

                {renderAnimation()}

                {
                    timelineState === 0 ? 
                        <>
                            <Navbar page={props.page} />
                            <TimelineInitial types={types} imageOptions={imageOptions} imageInitialOptions={imageInitialOptions} setTypeVal={setTypeVal} changeTimelineState={changeTimelineState} changeImage={changeImageType} changeTransitionAnimationState={changeTransitionAnimationState} /> 
                        </>
                    : 
                        <>
                            <img src={imageType} className={"backgroundImage " + fadeoutTimelineImage} alt="background wing view"></img>
                            <Navbar page={props.page} />
                            <TimelineSpecific type="Programming" changeImageType={changeImageType} fadeImage={setFadeoutTimelineImage} imageOptions={imageOptions} initialTimeline={initialTimeline} typeVal={typeVal} setTypeVal={setTypeVal} types={types} />
                        </>
                }
                
            </div>

        </div>

    )

};

export default Timeline;