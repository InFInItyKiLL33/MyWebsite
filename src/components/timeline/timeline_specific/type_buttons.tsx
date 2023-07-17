import React from 'react';
import '../timeline.sass';
import {TypeButtonsProps} from "../../../declarations";

function TypeButtons(props: TypeButtonsProps): JSX.Element {

    function mouseHoverGeneral(e: any, hover: boolean): void {
        if (e.target.getAttribute("data-index") !== String(props.typeVal)) {
            let tempTypeImage = [...props.typeImage];
            if (hover === true) {
                tempTypeImage[e.target.getAttribute("data-index")] = props.hoverIcons[e.target.getAttribute("data-index")];
            } else {
                tempTypeImage[e.target.getAttribute("data-index")] = props.defaultIcons[e.target.getAttribute("data-index")];
            };
            props.setTypeImage(tempTypeImage);
        };
    };
    
    function mouseHoverTypes(e: any): void { // hover over type header
        mouseHoverGeneral(e, true);
    };
    
    function mouseLeaveTypes(e: any): void { // unhover over type header
        mouseHoverGeneral(e, false);
    };

    function changeButtonActive(e: any): void {
        setTimeout(() => {
            let tempTypeImage: Array<string> = [...props.defaultIcons];
            tempTypeImage[e.target.getAttribute("data-index")] = props.activeIcons[e.target.getAttribute("data-index")];
            props.setTypeImage(tempTypeImage);
        }, 400);
        props.changeType(e);
    };

    return(
        <button onClick={changeButtonActive} key={props.index} data-index={props.index} className={"timelineChanger fade slideInInitialR slideInR bolded flex-row " + props.toOrange + " "} onMouseEnter={mouseHoverTypes} onMouseLeave={mouseLeaveTypes}>
            <img src={props.typeImage[props.index]} className="timelineIcons" data-index={props.index} alt="icons"></img>
            <p className="timelineOptionsText" data-index={props.index}>{props.types[props.index]}</p>
        </button>
    )
};

export default TypeButtons