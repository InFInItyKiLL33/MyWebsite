import React, { useState } from "react";
import "./aviation_animation.css";
import AviationAnimationImg from "../../../../../images/aviation.svg";

function TimelineAviationAnimation(props) {

    return(
        <>
            <div className="timelineAviationAnimImgWrapper"> {/* wrapper is the outer exhaust*/}
                <img src={AviationAnimationImg} className="timelineAviationAnimImg"></img>
            </div>
            {/* inner exhausts */}
            <div className="timelineAviationAnimExhaustL"></div>
            <div className="timelineAviationAnimExhaustR"></div>
        </>
    );

};

export default TimelineAviationAnimation;