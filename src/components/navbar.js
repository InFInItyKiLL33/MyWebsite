import React, { Component } from 'react';
import { NavLink as Link } from "react-router-dom";
import './navbar.css';

function LinkCustom(props) {
    return(
        <Link to={"/" + props.dir} className="links semi-bold">
            <p className="linksText" style={{color: props.currentIndex === props.index ? "#ffffff" : "#b0b0b0"}}>{props.value}</p>
            {/* <div className="underline" style={{opacity: props.currentIndex == props.index ? "1" : "0"}}></div> */}
        </Link>
    );
};

function Navbar(props) {

    return(
        <div className="navbarBG flex-row">
            <LinkCustom dir="" index="1" currentIndex={props.page} value="Home" />
            <LinkCustom dir="timeline" index="2" currentIndex={props.page} value="Timeline" />
            <LinkCustom dir="about" index="3" currentIndex={props.page} value="About Me" />
            <LinkCustom dir="contact" index="4" currentIndex={props.page} value="Contact" />
        </div>
    )
    
};

export default Navbar;