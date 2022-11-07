import React, { useState } from 'react';
import backgroundImage from "../../images/background.png";
import backgroundImage0 from "../../images/programmingbg.png";
import backgroundImage1 from "../../images/aviationbg.png";
import backgroundImage2 from "../../images/designbg.png";
import backgroundImage3 from "../../images/pcbuildingbg3.jpg";
import backgroundImage3Alt from "../../images/pcbuildingbg4.png";
import './timeline.css';
import Navbar from "../navbar";
import TimelineInitial from "./timeline_initial";
import TimelineSpecific from './timeline_specific';

function Timeline(props) {
    const initialTimeline = 0;
    const [typeVal, setTypeVal] = useState(initialTimeline); // 0 - 3
    const types = {0: "Programming", 1: "Aviation", 2: "Design", 3: "PC Building"};
    const [fadeOutTimelineImage, status] = useState("backgroundImage active")
    const imageOptions = [backgroundImage0, backgroundImage1, backgroundImage2, backgroundImage3Alt];
    const imageInitialOptions = [backgroundImage0, backgroundImage1, backgroundImage2, backgroundImage3];
    const [imageType, changeImage] = useState(imageOptions[typeVal]);
    const [timelineState, changeTimelineState] = useState(0); // 0 - Initial, 1 - Specific

    return(

        <div className="App">

            <div page={props.page}>
                
                {
                    timelineState === 1 ? 
                        <img src={imageType} className={"backgroundImage " + fadeOutTimelineImage} alt="background wing view"></img>
                    :
                        <></>
                }
        
                <Navbar page={props.page} />

                {
                    timelineState === 0 ? 
                        <TimelineInitial types={types} imageOptions={imageOptions} imageInitialOptions={imageInitialOptions} setTypeVal={setTypeVal} changeTimelineState={changeTimelineState} changeImage={changeImage} /> 
                    : 
                        <TimelineSpecific type="Programming" changeImage={changeImage} fadeImage={status} imageOptions={imageOptions} initialTimeline={initialTimeline} typeVal={typeVal} setTypeVal={setTypeVal} types={types} />
                }
                
            </div>

        </div>

    )

};

export default Timeline;