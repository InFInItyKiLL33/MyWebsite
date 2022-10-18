import React, { useState } from 'react';
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

function AboutMeContentWrappers(props) {
    const [fadeDelay, setFadeDelay] = useState("fadeInitialOpacity slideInInitial");
    setTimeout(function() {
        setFadeDelay("fadeLong slideIn");
    }, (parseInt(props.type)) * 500);
    switch (props.type) {
        case "1":
            return(
                <div className={fadeDelay}>
                    <p className="aboutMeText orangeText bolded">Who am I?</p>
                    
                    <div className="aboutMeTextsWrappers">
                            
                        <p className="aboutMeTexts">
                            I'm <OrangeSpan text="Poh Jun Kang" />, and I'm {getYears(2002)} this year! I'm based in Singapore and my skills are in <OrangeSpan text="Programming, Designing, Flying" /> and <OrangeSpan text="PC Building" />. My main goal in life is to become a commercial Airline Pilot, or a Full Stack Web Developer otherwise. In my free time, I find passion not only playing games and programming, but also simulators to keep my interest alive!
                        </p>
                    
                    </div>
                </div>
            );

        case "2":
            return(
                <div className={fadeDelay}>
                    <p className="aboutMeText orangeText bolded">My History</p>
                    
                    <div className="aboutMeTextsWrappers">
    
                        <p className="aboutMeTexts">
                            My interest in programming came from the want to develop plugins for flight simulators. However, due to my limited knowledge at that time, I was not able to acomplish anything. What rekindled my interest in it was taking Computing in Junior College, which started the Butterfly Effect of my programming journey, and lead me to study Computer Science in NUS. That said, my main skills in programming is Website Building, with UI Design skills to complement that. In fact, this personal website is built by myself with React!
                            <BreakLine count="2" />
                            As for where my interest in designing came in, it all started from joining a Co Curriculum Activity (CCA) in Secondary School, where I joined Infocomm. I was taught mainly Photoshop and Illustrator skills there, along with a small amount of After Effects and Filming. As I was more interested in the designing aspect, I honed my skills there, alongside learning how to be a leader as the <OrangeSpan text="Vice-President of the CCA" /> in the later years. Although I did try to run for an ex-committe role in my CCA during my Junior College (JC) years, I was unfortunately not selected as they wanted to give others who haven't had a chance of being one before to be one. That however, gave me the free time to also join <OrangeSpan text="Singapore Youth Flying Club" /> to learn more about flying!
                            <BreakLine count="2" />
                            Beyond that, I'm also very interested in tech related stuff, especially PCs. I've built a few of them so far, including my own personal and favourite PC that is fully white themed! If you would like to see it, you can always head over to the Timeline page to explore :)
                            <BreakLine count="2" />
                            Studies wise, I came from a neighbourhood school and worked my way up slowly over the years, eventually being able to join NUS in their Degree for Computer Science with just my academic results. Here's a history of where I studied at:
                            <BreakLine count="2" />
                            <OrangeSpan text="National University of Singapore (NUS)" className="bolded" /> - 2023 onwards
                            <BreakLine count="1" />
                            Degree in Computer Science
                            <BreakLine count="2" />
                            <OrangeSpan text="Jurong Pioneer Junior College" /> - 2019-2020
                            <BreakLine count="1" />
                            'A' Levels RP - 87.5
                            <BreakLine count="2" />
                            <OrangeSpan text="Zhenghua Secondary School" /> - 2015-2018
                            <BreakLine count="1" />
                            'O' Levels L1R5 - 10 (Raw - 12)
                            <BreakLine count="2" />
                            <OrangeSpan text="Beacon Primary School" /> - 2009-2014
                            <BreakLine count="1" />
                            PSLE T-Score - 217
                        </p>
                    
                    </div>
                </div>
            );

        case "3":
            return(
                <div className={fadeDelay}>
                    <p className="aboutMeText orangeText bolded">My Skills</p>
    
                    <div className="aboutMeTextsWrappers">
                            
                        <p className="aboutMeTexts">
                            <span className="bolded footnoteForeword">• Progamming Skills •</span>
                            <BreakLine count="1" />
                            <span className="aboutMeTexts footnotes"><i>(Years of experience in brackets, ordered by most to least proficient. Italicised languages are not official languages but still a good skill to have.)</i></span>
                        </p>
                        <p className="aboutMeTexts indented">    
                            Proficient Languages - 
                            <OrangeSpan text=" Python" /> ({getYears(2018)}), 
                            <OrangeSpan text=" CSS" /> ({getYears(2019)}), 
                            <OrangeSpan text=" HTML5" /> ({getYears(2019)}), 
                            <OrangeSpan text=" Javascript" /> ({getYears(2019)}), 
                            <i><OrangeSpan text=" jQuery" /></i> ({getYears(2019)}), 
                            <i><OrangeSpan text=" Wordpress" /></i> ({getYears(2021)}), 
                            <i><OrangeSpan text=" React" /></i> ({getYears(2022)}),
                            <i><OrangeSpan text=" Flask" /></i> (2),
                            <i><OrangeSpan text=" Django" /></i> (&#60;1),
                            <i><OrangeSpan text=" Git" /> ({getYears(2019)})</i>, and
                            <OrangeSpan text=" SQL" /> ({getYears(2019)}). 
                            <BreakLine count="2" />
                            Less Proficient Languages - 
                            <OrangeSpan text=" C++" /> ({getYears(2019)}), 
                            <OrangeSpan text=" NoSQL" /> ({getYears(2019)}), 
                            <OrangeSpan text=" Lua" /> ({getYears(2019)}), and
                            <OrangeSpan text=" PHP" /> ({getYears(2020)}).
                        </p>
    
                        <BreakLine count="2" />
                        <p className="aboutMeTexts">
                            <span className="bolded">• Designing Skills •</span> <span className="footnotes"></span>
                        </p>
                        <p className="aboutMeTexts indented">   
                            <OrangeSpan text=" Photoshop" /> ({getYears(2015)}), <OrangeSpan text="Illustrator" /> (2.5), <OrangeSpan text="Autodesk Maya" /> (&#60;1), and <OrangeSpan text="Sketch" /> (2)
                        </p>
    
                        <BreakLine count="2" />
                        <p className="aboutMeTexts">
                            <span className="bolded">• Flying Experience •</span> <span className="footnotes"></span>
                        </p>
                        <p className="aboutMeTexts indented">
                            <OrangeSpan text=" DA40" /><span className="footnotes"> @ Singapore Youth Flying Club</span> (9.0 Flight Hours + 8.0 Simulator Hours, 2019),
                            <BreakLine count="2" />
                            <OrangeSpan text=" X-Plane 11" /> + <OrangeSpan text="Microsoft Flight Simulator" /> (Around 2000 Flight Hours from 2017)
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
            );
        default:
            return(<></>);
        

    }
};

function About(props) {

    
    return(
        <div className="App AboutApp">

            <img src={backgroundImage} className="backgroundImage" alt="background wing view"></img>

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