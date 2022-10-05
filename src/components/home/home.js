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

                <img src={backgroundImage} className="backgroundImage" alt="background wing view"></img>

                <Navbar page={this.props.page} />

                <img src={squigglyArrow} className="squigglyArrow" alt="arrow below timeline button"></img>
                <p className="pastExperience">My Past Experiences</p>

                <div className="appMain">
                    <BasicInfo />
                </div>

            </div>
        )
    }

};

export default Home;