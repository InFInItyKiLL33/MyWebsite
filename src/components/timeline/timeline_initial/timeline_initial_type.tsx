import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {TimelineInitialTypesProps} from "../../../declarations";

function TimelineInitialTypes(props: TimelineInitialTypesProps): JSX.Element {

    const [initialTimelineAnimationDelay, setDelay] = useState<string>(" timelineInitialTypesAnimationBefore");
    const [activeData, setActiveData] = useState<string>("inactive");
    const CUSTOM_ANIM_LENGTH: Array<number> = [1600, 825, 4500, 3100];
    const CUSTOM_ANIM_DELAY: Array<number> = [600, 600, 600, 950];
    const IMAGE_SCALE: Array<number> = [1, 1, 1, 0.6];
    const IMG_OBJ_POS: Array<string> = ["7% 0%", "center", "center", "center"]; //y axis, in vh
    const [searchParams, setSearchParams]: any = useSearchParams(); // search params on url
    let alternateFit: string = props.index === 3 ? "timelineInitialTypesImgAlt" : "";
    const HIDDEN_OFFSET: number = props.allowedContent.slice(0, props.index + 1).reduce((total: number, x: number): number => (x == 0 ? total + 1 : total), 0);

    function setType(currIndex: number): void {

        setActiveData("active");

        for (let i = 0; i < Object.keys(props.types).length; i++) {
            if (currIndex === 3 || currIndex === 2 || i !== currIndex) {
                let delay = (i < currIndex ? 150 : 0) + (i - HIDDEN_OFFSET) * 150;
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
            }, CUSTOM_ANIM_LENGTH[currIndex]);
        }, CUSTOM_ANIM_DELAY[currIndex]);

    };

    function chooseType(e: any): void {
        setType(parseInt(e.target.getAttribute("data-index")));
    };

    function initialTimelineAnimation(index: number): void {
        setTimeout(() => {
            setDelay((props.index - HIDDEN_OFFSET) % 2 === 0 ? " timelineInitialTypesAnimation" : " timelineInitialTypesAnimationReverse");
        }, (index - HIDDEN_OFFSET) * 300);
    };

    useEffect(() => {

        const params: string = searchParams.get("type");
            
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
            <img src={props.imageInitialOptions[props.index]} style={{"transform": "scale(" + String(IMAGE_SCALE[props.index]) + ")", "objectPosition": IMG_OBJ_POS[props.index]}} alt="background img for each type" data-index={props.index} className={"timelineInitialTypesImg " + alternateFit}></img>
            <p className="timelineInitialTypesText" data-index={props.index}>{props.types[props.index]}</p>
        </button>
    );
};

export default TimelineInitialTypes;