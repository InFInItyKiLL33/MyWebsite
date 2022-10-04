import React, { Component } from 'react';
import backgroundImage from "../../images/background.png";
import squigglyArrow from "../../images/arrow left custom.png";
import './home.css';
import BasicInfo from "./basic_info";
import Navbar from "../navbar";

class Home extends Component {

    render() {
        return(
            <div className="homepage">

                <img src={backgroundImage} className="backgroundImage"></img>

                <Navbar page={this.props.page} />

                <img src={squigglyArrow} className="squigglyArrow"></img>
                <p className="pastExperience">My Past Experiences</p>

                <div className="appMain">
                    <BasicInfo />
                </div>

            </div>
        )
    }

};

export default Home;