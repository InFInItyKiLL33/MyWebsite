import React from "react";
import {TimelineDesignSVGTextPathProps} from "../../../../../declarations"

function TimelineDesignSVGTextPath(props: TimelineDesignSVGTextPathProps): JSX.Element {
    const STROKE_COLOUR: string = "#f06f4f";
    const STROKE_WIDTH: string = "24";
    const ANIM_TIME: string = props.animTime !== undefined ? props.animTime : "3s";
    const ANIM_DELAY: string = props.animDelay !== undefined ? props.animDelay : "";
    const PATH_OPACITY: string | undefined = props.opacity !== undefined ? "1.0" : props.opacity; // for some reason I needa declare it may be undefined even though it won't be
    return(
        <path d={props.d} stroke={STROKE_COLOUR} stroke-width={STROKE_WIDTH} stroke-linecap="round" style={{animation: ANIM_TIME + " " + props.animKeyframe + " ease " + ANIM_DELAY, animationFillMode: "both", opacity: PATH_OPACITY}} />
    );
}

export default TimelineDesignSVGTextPath;