import React, { Component } from 'react';
import backgroundImage from "../../images/background.png";
import MyPicture from "../../images/me filter.png";
import './about.css';
import Navbar from "../navbar";

function getYears(year) {
    let d = new Date();
    if (Math.floor((d.getTime() - 31536000000 * (year - 1970)) / 31536000000) < 1) {
        return ("<1");
    };
    return Math.floor((d.getTime() - 31536000000 * (year - 1970)) / 31536000000);
};

function OrangeSpan(props) {
    return(
        <span className="orangeText">{props.text}</span>
    );
};

function BreakLine(props) {
    let counter = [];
    for (let i = 0; i < parseInt(props.count); i++) {
        counter.push(<br key={i}></br>);
    }
    return(counter);
};

function About(props) {

    
    return(
        <div className="App AboutApp">

            <img src={backgroundImage} className="backgroundImage" alt="background wing view"></img>

            <Navbar page={props.page} />

            <div className="aboutpage fade">
                
                <div>
                    <img src={MyPicture} className="myPicture" alt="my face"></img>
                    <p className="test">Poh Jun Kang</p>
                </div>

                <p className="aboutMeText orangeText bolded">About Me</p>

                <div className="aboutMeTextsWrappers">

                    
                    <p className="aboutMeTexts">
                        I'm <OrangeSpan text="Poh Jun Kang" />, and I'm {getYears(2002)} this year!. I'm based in Singapore and my skills are in <OrangeSpan text="Programming, Designing, Flying" /> and <OrangeSpan text="PC Building" />. My main goal in life is to become an Airline Pilot, or a Full Stack Web Developer otherwise. In my free time, I find passion not only playing games, but also simulators to keep my interest alive!
                        <BreakLine count="2" />
                        My interest in programming came from wanting to develop plugins for flight simulators. However, due to my limited knowledge at that time, I was not able to acomplish anything. What rekindled my interest in it was taking Computing in Junior College, which started the Butterfly Effect of my programming journey, and lead me to study Computer Science in NUS. That said, my main skills in programming is Website Building, with UI Design skills to complement that. In fact, this personal website is built by myself with React!
                        <BreakLine count="2" />
                        Beyond that, I'm also very interested in tech related stuff, especially PCs. I've built a few of them so far, including my own personal and favourite PC that is fully white themed! If you would like to see it, you can always head over to the Timeline page to explore :)
                    </p>
                
                </div>

                <p className="aboutMeText orangeText bolded">My Skills</p>
                
                <div className="aboutMeTextsWrappers">
                    
                    <p className="aboutMeTexts">
                        <span className="bolded footnoteForeword">• Progamming Skills •</span>
                        <BreakLine count="1" />
                        <span className="aboutMeTexts footnotes"><i>(Years of experience in brackets, ordered by most to least proficient. Italicised languages are not official languages but still a good skill to have.)</i></span>
                    </p>
                    <p className="aboutMeTexts indented">    
                        Proficient Languages - 
                        <OrangeSpan text=" Python" /> ({getYears(2016)}), 
                        <OrangeSpan text=" CSS" /> ({getYears(2019)}), 
                        <OrangeSpan text=" HTML5" /> ({getYears(2019)}), 
                        <OrangeSpan text=" Javascript" /> ({getYears(2019)}), 
                        <i><OrangeSpan text=" jQuery" /></i> ({getYears(2019)}), 
                        <OrangeSpan text=" React" /> ({getYears(2022)}),
                        <i><OrangeSpan text=" Git" /> ({getYears(2019)})</i>, and
                        <OrangeSpan text=" SQL" /> ({getYears(2019)}). 
                        <BreakLine count="2" />
                        Less Proficient Languages - 
                        <OrangeSpan text=" C++" /> ({getYears(2019)}), 
                        <OrangeSpan text=" NoSQL" /> ({getYears(2019)}), 
                        <OrangeSpan text=" Lua" /> ({getYears(2018)}), and
                        <OrangeSpan text=" PHP" /> ({getYears(2020)}).
                    </p>

                    <BreakLine count="2" />
                    <p className="aboutMeTexts">
                        <span className="bolded">• Designing Skills •</span> <span className="footnotes"></span>
                    </p>
                    <p className="aboutMeTexts indented">
                        <OrangeSpan text=" Photoshop" /> ({getYears(2015)}), and <OrangeSpan text="Illustrator" /> (2.5)
                    </p>

                    <BreakLine count="2" />
                    <p className="aboutMeTexts">
                        <span className="bolded">• Flying Experience •</span> <span className="footnotes"></span>
                    </p>
                    <p className="aboutMeTexts indented">
                        <OrangeSpan text=" Photoshop" /><OrangeSpan text=" DA40" /><span className="footnotes"> @ Singapore Youth Flying Club</span> (9.0 Flight Hours + 8.0 Simulator Hours),
                        <BreakLine count="2" />
                        <OrangeSpan text=" X-Plane 11" /> + <OrangeSpan text="Microsoft Flight Simulator" /> (Around 2000 Flight Hours)
                    </p>

                    <BreakLine count="2" />
                    <p className="aboutMeTexts">
                        <span className="bolded">• PC Building •</span> <span className="footnotes"></span>
                    </p>
                    <p className="aboutMeTexts indented">
                        Built <OrangeSpan text="6 complete PCs" />, and additionally, <OrangeSpan text="helped source parts" /> and <OrangeSpan text="handcrafted lists for 3 PCs" /> in my lifetime
                        <BreakLine count="2" />
                        <OrangeSpan text=" Tinkered" /> with PC parts for at least <OrangeSpan text={getYears(2019)} /> years
                    </p>
                </div>

            </div>

        </div>
    )

};

export default About;