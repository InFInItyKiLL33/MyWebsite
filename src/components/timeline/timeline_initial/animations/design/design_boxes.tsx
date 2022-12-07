import React from "react";

function TimelineDesignAnimationBoxes(props) {
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
            textAlign: props.textAlign,
            paddingTop: props.pt,
            aspectRatio: props.ar,
            overflow: props.overflow,
            position: props.pos,
            rotate: props.rotate,
            zIndex: props.zindex,
            animation: props.anim,
            rotate: props.rotate,
            opacity: props.opacity,
            transform: props.transform,
            transformOrigin: props.transformOrigin
        }}>
            {props.children}
        </div>
    );
}

export default TimelineDesignAnimationBoxes;