import React, { useEffect, useState } from 'react';
import BackgroundImage from "../../images/background-about.jpg";
import MyPicture from "../../images/me filter.png";
import './about.sass';
import Navbar from "../navbar/navbar";
import AboutMeContentWrappers from './about_me_content_wrapper';
import {AboutMeProps} from "../../declarations"

// const backgroundImage = require('../../images/background.png');
// const MyPicture = require('../../images/me filter.png');

function About(props: AboutMeProps): JSX.Element {

    const [bgImageScroll, setBGImageScroll] = useState(0);

    useEffect(() => {
    
        function scrollEffect(): void {
            setBGImageScroll((document.documentElement.scrollTop / document.body.scrollHeight) * -1.5)
        };

        window.addEventListener('scroll', scrollEffect);

        return () => window.removeEventListener('scroll', scrollEffect);

    }, [bgImageScroll]);

    
    return(
        <div className="App AboutApp">

            <img src={BackgroundImage} className="backgroundImage backgroundImageAbout" alt="background wing view" style={{"scale": "1.02", "transform": "translateY(" + String(bgImageScroll) + "%)"}}></img>

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