import React, { useEffect, useState } from 'react';
import backgroundImage from "../../images/background.png"; // this is Image2
import backgroundImage1 from "../../images/programmingbg.png";
import backgroundImage3 from "../../images/mypc.png";
import backgroundImage4 from "../../images/jpmun5.png";
import squigglyArrow from "../../images/arrow left custom.png";
import './home.css';
import BasicInfo from "./basic_info";
import Navbar from "../navbar/navbar";
import {HomeProps} from "../../declarations";

function Home(props: HomeProps): JSX.Element {

    const [img1ScrollOffset, setImg1ScrollOffset] = useState(0);
    const [img1OpacityOffset, setImg1OpacityOffset] = useState(1);
    const [img2ScrollOffset, setImg2ScrollOffset] = useState(0);
    const [img2OpacityOffset, setImg2OpacityOffset] = useState(0);
    const [img2Brightness, setImg2Brightness] = useState(0.4);
    const [img3ScrollOffset, setImg3ScrollOffset] = useState(0);
    const [img3OpacityOffset, setImg3OpacityOffset] = useState(0);

    const unhoverColour = "#ffffff44";
    const hoverColour = "rgb(240, 111, 79, 45%)";

    const [dynamicImage, setDynamicImage] = useState(backgroundImage); // for actual image
    const [newestHoverImage, setNewestHoverImage] = useState(backgroundImage); // for knowing the image to change to after fade out
    const [dynamicImageButtonColours, setDynamicImageButtonColours] = useState([unhoverColour, hoverColour, unhoverColour, unhoverColour]);
    

    function changeDynamicImage(newImage: string, index: number): void {
        if (newImage !== dynamicImage) {
            setImg2Brightness(0);
            setNewestHoverImage(newImage);
        };
        setDynamicImageButtonColours((prevColours: any): any => {
            prevColours = [unhoverColour, unhoverColour, unhoverColour, unhoverColour];
            prevColours[index] = hoverColour;
            return prevColours;
        })
    };

    useEffect(() => {
        let changeImgTimeout = setTimeout(() => {
            setDynamicImage(newestHoverImage);
            setImg2Brightness(0.4);
        }, 250);
        return () => clearTimeout(changeImgTimeout);
    }, [newestHoverImage]);
    
    useEffect(() => {
    
        function scrollEffect(): void {
            switch (true) {
                case document.documentElement.scrollTop < window.innerHeight * 1:
                    setImg1ScrollOffset(document.documentElement.scrollTop / 3);
                    setImg1OpacityOffset(1.25 - document.documentElement.scrollTop / (window.innerHeight * 0.6));
                case document.documentElement.scrollTop >= window.innerHeight * 1 && document.documentElement.scrollTop < window.innerHeight * 2.5:
                    setImg2ScrollOffset(window.innerHeight * -0.95 + Math.min((document.documentElement.scrollTop - window.innerHeight) / 3, window.innerHeight * 2));
                    setImg2OpacityOffset(
                        document.documentElement.scrollTop > window.innerHeight * 1.75 ? 
                            1 - ((document.documentElement.scrollTop - (window.innerHeight * 1.75)) / 1) / window.innerHeight
                        : 
                            document.documentElement.scrollTop > window.innerHeight / 2 ? 
                                ((document.documentElement.scrollTop - (window.innerHeight / 2)) / 1) / window.innerHeight
                            : 
                                0
                    );
                case document.documentElement.scrollTop >= window.innerHeight * 2.5:
                    setImg3ScrollOffset(window.innerHeight * 2 + Math.min((document.documentElement.scrollTop - window.innerHeight) / 3, window.innerHeight * 3));
                    setImg3OpacityOffset(
                        document.documentElement.scrollTop > window.innerHeight * 3.5 ? 
                            1 - (document.documentElement.scrollTop - (window.innerHeight * 3.5))/(window.innerHeight * 3) 
                        : 
                            document.documentElement.scrollTop > window.innerHeight * 2.5 ? 
                                (document.documentElement.scrollTop - (window.innerHeight * 2.5))/(window.innerHeight) 
                            : 
                                0
                    );


            }
        };

        window.addEventListener('scroll', scrollEffect);

        return () => window.removeEventListener('scroll', scrollEffect);

    }, []);

    return(
        <div className="homepage">

            <img src={backgroundImage} className="backgroundImage" alt="background wing view" style={{"marginTop": img1ScrollOffset, "opacity": img1OpacityOffset}}></img>

            <Navbar page={props.page} />

            <img src={squigglyArrow} className="squigglyArrow" alt="arrow below timeline button"></img>
            <p className="pastExperience semi-bold">My Past Experiences</p>

            <div className="appMain">
                <BasicInfo />
            </div>

            <p className="checkOutText">Check out my past experiences on these areas or learn more about me!</p>
            <div className="showcaseImageButtons flex-row flex-jc-space-e">
                <button onMouseEnter={() => changeDynamicImage(backgroundImage1, 0)} className="showcaseImageButton" style={
                        {
                            color: dynamicImageButtonColours[0] === hoverColour ? "white" : dynamicImageButtonColours[0], 
                            backgroundColor: dynamicImageButtonColours[0] === hoverColour ? dynamicImageButtonColours[0] : "transparent", 
                            borderLeft: "1px solid " + dynamicImageButtonColours[0], 
                            borderRight: "1px solid " + dynamicImageButtonColours[0], 
                            scale: dynamicImageButtonColours[0] !== hoverColour ? "0.9" : "1.05",
                            width: dynamicImageButtonColours[0] === hoverColour ? "125%" : "100%"
                        }
                    }>Programming</button>
                <button onMouseEnter={() => changeDynamicImage(backgroundImage, 1)} className="showcaseImageButton" style={
                        {
                            color: dynamicImageButtonColours[1] === hoverColour ? "white" : dynamicImageButtonColours[1], 
                            backgroundColor: dynamicImageButtonColours[1] === hoverColour ? dynamicImageButtonColours[1] : "transparent", 
                            borderLeft: "1px solid " + dynamicImageButtonColours[1], 
                            borderRight: "1px solid " + dynamicImageButtonColours[1], 
                            scale: dynamicImageButtonColours[1] !== hoverColour ? "0.9" : "1.05",
                            width: dynamicImageButtonColours[1] === hoverColour ? "125%" : "100%"
                        }
                    }>Aviation</button>
                <button onMouseEnter={() => changeDynamicImage(backgroundImage3, 2)} className="showcaseImageButton" style={
                        {
                            color: dynamicImageButtonColours[2] === hoverColour ? "white" : dynamicImageButtonColours[2], 
                            backgroundColor: dynamicImageButtonColours[2] === hoverColour ? dynamicImageButtonColours[2] : "transparent", 
                            borderLeft: "1px solid " + dynamicImageButtonColours[2], 
                            borderRight: "1px solid " + dynamicImageButtonColours[2], 
                            scale: dynamicImageButtonColours[2] !== hoverColour ? "0.9" : "1.05",
                            width: dynamicImageButtonColours[2] === hoverColour ? "125%" : "100%"
                        }
                    }>PC Building</button>
                <button onMouseEnter={() => changeDynamicImage(backgroundImage4, 3)} className="showcaseImageButton lastShowcaseImageButton" style={
                        {
                            color: dynamicImageButtonColours[3] === hoverColour ? "white" : dynamicImageButtonColours[3], 
                            backgroundColor: dynamicImageButtonColours[3] === hoverColour ? dynamicImageButtonColours[3] : "transparent", 
                            borderLeft: "1px solid " + dynamicImageButtonColours[3], 
                            borderRight: "1px solid " + dynamicImageButtonColours[3], 
                            scale: dynamicImageButtonColours[3] !== hoverColour ? "0.9" : "1.05",
                            width: dynamicImageButtonColours[3] === hoverColour ? "125%" : "100%"
                        }
                    }>Design</button>
            </div>
            <button>About Me</button>

            <div className="spacer"></div>
            {/* Dynamic image based on hover */}
            <div className='backgroundImage2Wrapper' style={{"marginTop": img2ScrollOffset}}>
                <img src={dynamicImage} className="backgroundImage backgroundImage2" alt="background wing view" style={{"opacity": img2OpacityOffset, filter: "brightness(" + img2Brightness + ") blur(5px)"}}></img>
            </div>


            <img src={backgroundImage} className="backgroundImage backgroundImage3" alt="background wing view" style={{"marginTop": img3ScrollOffset, "opacity": img3OpacityOffset, "rotate": "180deg"}}></img>

            <p>Interested in contacting me?</p>
            <button>Click Me</button>

        </div>
    )

};

export default Home;