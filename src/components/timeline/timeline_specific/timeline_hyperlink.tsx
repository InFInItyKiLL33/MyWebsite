import React from "react";
import {TimelineHyperlinkProps} from "../../../declarations";

function TimelineHyperlink(props: TimelineHyperlinkProps): JSX.Element {
    if (props.content.length === 5) {
        return(
            <a href={props.content[4]} className="hyperlink">{props.content[4]}</a>
        )
    } else {
        return(<></>)
    }
};

export default TimelineHyperlink;