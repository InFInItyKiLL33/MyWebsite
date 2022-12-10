import React from "react";
import {OrangeSpanProps} from "../../declarations";

function OrangeSpan(props: OrangeSpanProps): JSX.Element {
    return(
        <span className="orangeText">{props.text}</span>
    );
};

export default OrangeSpan;