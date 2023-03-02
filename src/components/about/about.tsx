import React from 'react';
import backgroundImage from "../../images/background-about.jpg";
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

            <img src={backgroundImage} className="backgroundImage backgroundImageAbout" alt="background wing view"></img>

            <Navbar page={props.page} />

            <div className="aboutpage fade flex-row">
                
                <div className="myPictureWrapper">
                    <img src={MyPicture} className="myPicture" alt="my face"></img>
                    <p className="name bolded">Poh Jun Kang</p>
                </div>

                <div className='flex-col'>
                    <AboutMeContentWrappers type="1" />
    
                    <AboutMeContentWrappers type="2" />
                    
                    <AboutMeContentWrappers type="3" />
                </div >

            </div>

        </div>
    )

};

export default About;