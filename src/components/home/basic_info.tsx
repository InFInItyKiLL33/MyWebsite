import React from 'react';
import './basic_info.sass';
import {BasicInfoProps} from "../../declarations";

export function getAge(): number {
    let d = new Date();
    let ageDate = new Date(d.getTime() - 1025712000000)
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

function BasicInfo(props: BasicInfoProps): JSX.Element {
    return(
        <div className={"appBGOverlay " + (props.bgType === 1 && window.innerWidth / window.innerHeight > 1.5 ? "appBGOverlay1" : "")}>
            <div className="infoBackground flex-row slideInInitialR slideInR">
                <p className="greetings">Hey! I'm</p>
                <h1 className="homeName">Poh Jun Kang</h1>
            </div>
            <div className={"divider slideInInitialR " + (props.bgType === 1 && window.innerWidth / window.innerHeight > 1.5 ? "divider2" : "")}></div>
            <div className="infoDescription slideInInitialR slideInRDelayed">
                <p className="skills description">Programmer • Graphic Designer • Aviation Enthusiast • PC Builder</p>
                <p className="age description">I'm currently {getAge()}!</p>
            </div>
        </div>
    )
};


export default BasicInfo;