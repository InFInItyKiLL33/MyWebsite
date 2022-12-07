import React, { Component } from 'react';
import backgroundImage from "../../images/background.png";
import squigglyArrow from "../../images/arrow left custom.png";
import './home.css';
import BasicInfo from "./basic_info";
import Navbar from "../navbar";

function Home(props) {

    return(
        <div className="homepage">

            <img src={backgroundImage} className="backgroundImage" alt="background wing view"></img>

            <Navbar page={props.page} />

            <img src={squigglyArrow} className="squigglyArrow" alt="arrow below timeline button"></img>
            <p className="pastExperience semi-bold">My Past Experiences</p>

            <div className="appMain">
                <BasicInfo />
            </div>

        </div>
    )

};

export default Home;