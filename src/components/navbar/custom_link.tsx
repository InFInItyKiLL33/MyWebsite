import React from 'react';
import { NavLink as Link } from "react-router-dom";
import './navbar.sass';
import {LinkCustomProps} from '../../declarations'

function LinkCustom(props: LinkCustomProps): JSX.Element {
    return(
        <Link to={"/" + props.dir} className="links semi-bold">
            <p className="linksText" style={{color: props.currentIndex === props.index ? "#ffffff" : "#b0b0b0"}}>{props.value}</p>
            {/* <div className="underline" style={{opacity: props.currentIndex == props.index ? "1" : "0"}}></div> */}
        </Link>
    );
};

export default LinkCustom;