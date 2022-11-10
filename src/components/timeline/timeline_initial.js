import React, { useState } from "react";
import TimelineInitialTypes from "./timeline_initial_type";

function TimelineInitial(props) {

    let options = [];
    
    for (let i = 0; i < Object.keys(props.types).length; i++) {
        options.push(
            <TimelineInitialTypes index={i} imageOptions={props.imageOptions} imageInitialOptions={props.imageInitialOptions} types={props.types} setTypeVal={props.setTypeVal} changeTimelineState={props.changeTimelineState} changeImage={props.changeImage} changeTransitionAnimationState={props.changeTransitionAnimationState} />
        );
    };

    return(
        <div className="timelineInitialWrapper flex-row">
            {options}
        </div>
    );
};

export default TimelineInitial;