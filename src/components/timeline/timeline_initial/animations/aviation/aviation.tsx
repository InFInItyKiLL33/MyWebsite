import React, { useState } from "react";
import "./aviation_animation.sass";
import AviationAnimationImg from "../../../../../images/aviation.svg";

function TimelineAviationAnimation() {

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