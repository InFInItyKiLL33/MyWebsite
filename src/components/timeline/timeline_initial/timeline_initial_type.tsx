import React, { useState, useEffect } from "react";
import {TimelineInitialTypesProps} from "../../../declarations";

function TimelineInitialTypes(props: TimelineInitialTypesProps): JSX.Element {

    const [initialTimelineAnimationDelay, setDelay] = useState(" timelineInitialTypesAnimationBefore");
    const [activeData, setActiveData] = useState("inactive");
    const customAnimationLength = [1600, 825, 4500, 3100];
    const customAnimationDelay = [600, 600, 600, 950];
    let alternateFit = props.index === 3 ? "timelineInitialTypesImgAlt" : "";

    function setType(currIndex: number): void {

        setActiveData("active");

        for (let i = 0; i < Object.keys(props.types).length; i++) {
            if (currIndex === 3 || currIndex === 2 || i !== currIndex) {
                let delay = (i < currIndex ? 150 : 0) + i * 150;
                props.staggeredFadeout(i, delay);
            };
        };

        setTimeout(() => {
            props.changeTransitionAnimationState((currIndex) + 1);
            setTimeout(() => {
                props.setTypeVal(currIndex);
                props.changeImage(props.imageOptions[currIndex]);
                props.changeTimelineState(1);
                setTimeout(() => {
                    props.changeTransitionAnimationState(0);
                }, 1000);
            }, customAnimationLength[currIndex]);
        }, customAnimationDelay[currIndex]);

    };

    function chooseType(e: any): void {

        setType(parseInt(e.target.getAttribute("data-index")));

    };

    function initialTimelineAnimation(index: number): void {
        setTimeout(() => {
            setDelay(props.index % 2 === 0 ? " timelineInitialTypesAnimation" : " timelineInitialTypesAnimationReverse");
        }, index * 300);
    };

    useEffect(() => {
        
        const urlParams = window.location.href.split("?");
        const params: any = {};
        urlParams.forEach((curr: string): void => {
            const thisParam: any = curr.split("=");
            params[thisParam[0]] = thisParam[1];
        });

        if ("type" in params) {
            if (params["type"] === "0" || params["type"] === "1" || params["type"] === "2" || params["type"] === "3") {
    
                let currType: any = params["type"];
                currType = parseInt(currType);
                setType(currType);
                
            } else {
    
                initialTimelineAnimation(props.index);
    
            };
        };



    }, []);

    return(
        <button className={"timelineInitialTypes " + props.timelineToFadeOut[props.index] + initialTimelineAnimationDelay} key={props.index} data-index={props.index} data-selection={activeData} onClick={chooseType}>
            <img src={props.imageInitialOptions[props.index]} alt="bg img for each type" data-index={props.index} className={"timelineInitialTypesImg " + alternateFit}></img>
            <p className="timelineInitialTypesText" data-index={props.index}>{props.types[props.index]}</p>
        </button>
    );
};

export default TimelineInitialTypes;