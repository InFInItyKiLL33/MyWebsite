import React, { Component, useState } from 'react';
import backgroundImage from "../../images/background.png";
import backgroundImage0 from "../../images/code.png";
import backgroundImage1 from "../../images/18.png";
import './timeline.css';
import Navbar from "../navbar";
import TimelineSpecific from './timeline_specific';

function WholeTimeline(props) {
    const [initialTimeline, changeInitialTimeline] = useState(0);
    const [fadeOutTimelineImage, status] = useState("backgroundImage active")
    const imageOptions = [backgroundImage0, backgroundImage1, backgroundImage0, backgroundImage1];
    const [imageType, changeImage] = useState(imageOptions[initialTimeline]);

    return(

        <>
            <img src={imageType} className={"backgroundImage " + fadeOutTimelineImage} alt="background wing view"></img>
    
            <Navbar page={props.page} />
    
            <TimelineSpecific type="Programming" changeImage={changeImage} fadeImage={status} imageOptions={imageOptions} initialTimeline={initialTimeline} />
        </>

    )

}

function Timeline(props) {

    return(

        <div className="App">

            <WholeTimeline page={props.page}/>

        </div>

    )

};

export default Timeline;