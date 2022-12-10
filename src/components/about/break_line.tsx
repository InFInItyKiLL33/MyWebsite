import React from "react";
import {LineBreakProps} from "../../declarations";

function BreakLine(props: LineBreakProps): any {
    let counter: any = [];
    for (let i = 0; i < parseInt(props.count); i++) {
        counter.push(<br key={i}></br>);
    }
    return(counter);
};

export default BreakLine;