import React from "react";
import {CustomRectStyle} from "../../../../../declarations";

function TimelineDesignAnimationBoxes(props: CustomRectStyle): JSX.Element {

    return(
        <div className={"timelineDesignAnimBox" + props.id + " " + props.extraClasses} data-index={props.id} style={{
            width: props.width,
            height: props.height,
            marginTop: props.mt,
            marginRight: props.mr,
            marginLeft: props.ml,
            borderRadius: props.br,
            backgroundColor: props.bgColour,
            boxShadow: props.boxShadow,
            textAlign: props.textAlign === "center" ? "center" : "start",
            paddingTop: props.pt,
            aspectRatio: props.ar,
            overflow: props.overflow,
            position: props.pos === "absolute" ? "absolute" : "static",
            rotate: props.rotate,
            zIndex: props.zindex,
            animation: props.anim,
            opacity: props.opacity,
            transform: props.transform,
            transformOrigin: props.transformOrigin
        }}>
            {props.children}
        </div>
    );
}

export default TimelineDesignAnimationBoxes;