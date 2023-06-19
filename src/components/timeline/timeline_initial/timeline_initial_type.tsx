import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {TimelineInitialTypesProps} from "../../../declarations";

function TimelineInitialTypes(props: TimelineInitialTypesProps): JSX.Element {

    const [initialTimelineAnimationDelay, setDelay] = useState(" timelineInitialTypesAnimationBefore");
    const [activeData, setActiveData] = useState("inactive");
    const customAnimationLength = [1600, 825, 4500, 3100];
    const customAnimationDelay = [600, 600, 600, 950];
    const imageScale = [1, 1, 1, 0.6];
    const imageObjectPosition = ["7% 0%", "center", "center", "center"]; //y axis, in vh
    const [searchParams, setSearchParams]:any = useSearchParams(); // search params on url
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

        const params: any = searchParams.get("type");
            
        if (params === "0" || params === "1" || params === "2" || params === "3") {

            let currType: any = params;
            currType = parseInt(currType);
            setType(currType);

        } else {

            initialTimelineAnimation(props.index);

        };

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <button className={"timelineInitialTypes " + props.timelineToFadeOut[props.index] + initialTimelineAnimationDelay} key={props.index} data-index={props.index} data-selection={activeData} onClick={chooseType}>
            <img src={props.imageInitialOptions[props.index]} style={{"transform": "scale(" + String(imageScale[props.index]) + ")", "objectPosition": imageObjectPosition[props.index]}} alt="background img for each type" data-index={props.index} className={"timelineInitialTypesImg " + alternateFit}></img>
            <p className="timelineInitialTypesText" data-index={props.index}>{props.types[props.index]}</p>
        </button>
    );
};

export default TimelineInitialTypes;