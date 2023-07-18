import React from 'react';
import './basic_info.sass';
import {BasicInfoProps} from "../../declarations";

export function getAge(): number {
    let d: Date = new Date();
    let ageDate: Date = new Date(d.getTime() - 1025712000000)
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

function BasicInfo(props: BasicInfoProps): JSX.Element {

    let desktopModeProgBG: boolean = props.bgType === 1 && window.innerWidth / window.innerHeight > 1.5;

    function getFontSize(refSize: number): string {
        return String(refSize * window.innerWidth / 2560) + "em";
    };

    return(
        <div className={"appBGOverlay " + (desktopModeProgBG ? "appBGOverlay1" : "")} style={{"marginTop": (props.bgType === 0 ? "calc(50vh - 200px)" : "")}}>
            <div className="infoBackground flex-row slideInInitialR slideInR">
                <p className="greetings flex-col" style={{"fontSize": desktopModeProgBG ? getFontSize(1.6) : ""}}>Hey! I'm</p>
                <h1 className="homeName flex-col" style={{"fontSize": desktopModeProgBG ? getFontSize(2.75) : ""}}>POH JUN KANG</h1>
            </div>
            <div className={"divider slideInInitialR " + (desktopModeProgBG ? "divider2" : "")}></div>
            <div className="infoDescription">
                <p className="skills description" style={{"fontSize": desktopModeProgBG ? getFontSize(1) : ""}}>Programmer • Graphic Designer • Aviation Enthusiast • PC Builder</p>
                <p className="age description" style={{"fontSize": desktopModeProgBG ? getFontSize(1) : ""}}>I'm currently {getAge()}!</p>
            </div>
        </div>
    )
};


export default BasicInfo;