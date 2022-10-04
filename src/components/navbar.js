import React, { Component } from 'react';
import { NavLink as Link } from "react-router-dom";
import './navbar.css';

function LinkCustom(props) {
    return(
        <Link to={"/" + props.dir} className="links">
            <p className="linksText" style={{color: props.currentIndex == props.index ? "#ffffff" : "#b0b0b0"}}>{props.value}</p>
            {/* <div className="underline" style={{opacity: props.currentIndex == props.index ? "1" : "0"}}></div> */}
        </Link>
    );
};

class Navbar extends Component {

    render() {
        return(
            <div className="navbarBG">
                <LinkCustom dir="" index="1" currentIndex={this.props.page} value="Home" />
                <LinkCustom dir="timeline" index="2" currentIndex={this.props.page} value="Timeline" />
                <LinkCustom dir="about" index="3" currentIndex={this.props.page} value="About Me" />
                <LinkCustom dir="contact" index="4" currentIndex={this.props.page} value="Contact" />
            </div>
        )
    }
};

export default Navbar;