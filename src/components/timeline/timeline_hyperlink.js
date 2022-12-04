import React from "react";

function TimelineHyperlink(props) {
    if (props.content.length === 5) {
        return(
            <a href={props.content[4]} className="hyperlink">{props.content[4]}</a>
        )
    } else {
        return(<></>)
    }
};

export default TimelineHyperlink;