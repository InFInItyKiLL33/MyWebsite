import React, { useState } from "react";

function TimelineInitialTypes(props) {

    function chooseType(e) {
        props.changeTransitionAnimationState(parseInt(e.target.getAttribute("data-index")) + 1);
        setTimeout(function() {
            props.setTypeVal(parseInt(e.target.getAttribute("data-index")));
            props.changeTimelineState(1);
            props.changeImage(props.imageOptions[e.target.getAttribute("data-index")]);
        }, 1000)
    };

    let alternateFit = props.index === 2 ? "timelineInitialTypesImgAlt" : "";

    return(
        <button className="timelineInitialTypes" key={props.index} data-index={props.index} onClick={chooseType}>
            <img src={props.imageInitialOptions[props.index]} data-index={props.index} className={"timelineInitialTypesImg " + alternateFit}></img>
            <p className="timelineInitialTypesText" data-index={props.index}>{props.types[props.index]}</p>
        </button>
    );
};

export default TimelineInitialTypes;