import React, { useState } from "react";
import TimelineInitialTypes from "./timeline_initial_type";
import "./animations/timeline_initial_animation.css";
import "./timeline_initial.css"

function TimelineInitial(props) {
    
    const [timelineToFadeOut, setToFadeOut] = useState(Array(Object.keys(props.types).length).fill(""));
    const [dataStateChanger, setDataState] = useState(0);

    function staggeredFadeout(timerIndex, finalDelay) {
        setTimeout(function() {
            setToFadeOut(function(prevTimelineFadeout) {
                let timelineFadeoutSetter = prevTimelineFadeout;
                timelineFadeoutSetter[timerIndex] = "timelineFadeout " + (timerIndex % 2 === 0 ? "timelineUnloadTopDown" : "timelineUnloadBottomUp");
                return timelineFadeoutSetter;
            });
            setDataState(timerIndex + 1);
        }, finalDelay);
    };

    let options = [];
    
    for (let i = 0; i < Object.keys(props.types).length; i++) {
        options.push(
            <TimelineInitialTypes index={i} imageOptions={props.imageOptions} imageInitialOptions={props.imageInitialOptions} types={props.types} setTypeVal={props.setTypeVal} changeTimelineState={props.changeTimelineState} changeImage={props.changeImage} changeTransitionAnimationState={props.changeTransitionAnimationState} timelineToFadeOut={timelineToFadeOut} setToFadeOut={setToFadeOut} staggeredFadeout={staggeredFadeout} />
        );
    };

    return(
        <div className="timelineInitialWrapper flex-row" data-state-changer={dataStateChanger}>
            {options}
        </div>
    );
};

export default TimelineInitial;