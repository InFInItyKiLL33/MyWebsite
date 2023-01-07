import React, { useState, useEffect } from "react";
import {TimelineInitialTypesProps} from "../../../declarations";

function TimelineInitialTypes(props: TimelineInitialTypesProps): JSX.Element {

    const [initialTimelineAnimationDelay, setDelay] = useState(" timelineInitialTypesAnimationBefore");
    const [activeData, setActiveData] = useState("inactive");
    const customAnimationLength = [1600, 825, 4500, 3100];
    const customAnimationDelay = [600, 600, 600, 950];
    let alternateFit = props.index === 3 ? "timelineInitialTypesImgAlt" : "";

    function chooseType(e: any): void {

        setActiveData("active");

        for (let i = 0; i < Object.keys(props.types).length; i++) {
            if (props.index === 3 || props.index === 2 || i !== props.index) {
                let delay = (i < props.index ? 150 : 0) + i * 150;
                props.staggeredFadeout(i, delay);
            };
        };

        setTimeout(() => {
            props.changeTransitionAnimationState(parseInt(e.target.getAttribute("data-index")) + 1);
            setTimeout(() => {
                props.setTypeVal(parseInt(e.target.getAttribute("data-index")));
                props.changeImage(props.imageOptions[e.target.getAttribute("data-index")]);
                props.changeTimelineState(1);
                setTimeout(() => {
                    props.changeTransitionAnimationState(0);
                }, 1000);
            }, customAnimationLength[props.index]);
        }, customAnimationDelay[props.index]);
    };

    function initialTimelineAnimation(index: number): void {
        setTimeout(() => {
            setDelay(props.index % 2 === 0 ? " timelineInitialTypesAnimation" : " timelineInitialTypesAnimationReverse");
        }, index * 300);
    };

    useEffect(() => {
        initialTimelineAnimation(props.index);
    });

    return(
        <button className={"timelineInitialTypes " + props.timelineToFadeOut[props.index] + initialTimelineAnimationDelay} key={props.index} data-index={props.index} data-selection={activeData} onClick={chooseType}>
            <img src={props.imageInitialOptions[props.index]} alt="bg img for each type" data-index={props.index} className={"timelineInitialTypesImg " + alternateFit}></img>
            <p className="timelineInitialTypesText" data-index={props.index}>{props.types[props.index]}</p>
        </button>
    );
};

export default TimelineInitialTypes;