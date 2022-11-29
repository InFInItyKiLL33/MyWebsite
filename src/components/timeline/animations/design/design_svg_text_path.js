import React from "react";

function TimelineDesignSVGTextPath(props) {
    const strokeColour = "#f06f4f";
    const strokeW = "24";
    const animTime = props.animTime !== undefined ? props.animTime : "3s";
    const animDelay = props.animDelay !== undefined ? props.animDelay : "";
    const setOpacity = props.opacity !== undefined ? "1.0" : props.opacity;
    return(
        <path d={props.d} stroke={strokeColour} stroke-width={strokeW} stroke-linecap="round" style={{animation: animTime + " " + props.animKeyframe + " ease " + animDelay, animationFillMode: "both", opacity: setOpacity}} />
    );
}

export default TimelineDesignSVGTextPath;