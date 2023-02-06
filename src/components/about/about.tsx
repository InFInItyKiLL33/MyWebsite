import React, { useState } from 'react';
import backgroundImage from "../../images/background.png";
import MyPicture from "../../images/me filter.png";
import './about.sass';
import Navbar from "../navbar/navbar";
import AboutMeContentWrappers from './about_me_content_wrapper';
import {AboutMeProps} from "../../declarations"

// const backgroundImage = require('../../images/background.png');
// const MyPicture = require('../../images/me filter.png');

function About(props: AboutMeProps): JSX.Element {

    
    return(
        <div className="App AboutApp">

            <img src={backgroundImage} className="backgroundImage backgroundImageHome" alt="background wing view"></img>

            <Navbar page={props.page} />

            <div className="aboutpage fade">
                
                <div>
                    <img src={MyPicture} className="myPicture" alt="my face"></img>
                    <p className="name bolded">Poh Jun Kang</p>
                </div>

                <AboutMeContentWrappers type="1" />

                <AboutMeContentWrappers type="2" />
                
                <AboutMeContentWrappers type="3" />

            </div>

        </div>
    )

};

export default About;