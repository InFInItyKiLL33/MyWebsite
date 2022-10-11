import React, { Component, useState } from 'react';
import MyWebsite from "../../images/mywebsite.png";
import ReactImg from "../../images/react.png";
import './timeline.css';

function TimelineSpecificContent(props) {
    let currentContent = [];
    for (let i = 0; i < (props.content[props.typeValue]).length; i++) {
        currentContent.push(
            <div className="eachContent" key={i}>
                <p className="eachContentYear">{props.content[props.typeValue][i][2]}</p>
                <div className="eachContentDecorationDot"></div>
                <img src={props.content[props.typeValue][i][0]} className="eachContentImage"></img>
                <div className="eachContentWrapper">
                    <h1 className="eachContentHeader">{props.content[props.typeValue][i][1]}</h1>
                    <p className="eachContentDescription">{props.content[props.typeValue][i][3]}</p>
                </div>
            </div>
        );
    }

    return(
        <div className="timelineSpecificContent">
            {currentContent}
        </div>
    )

};

function TimelineSpecific(props) {

    const [fadeoutContent, status] = useState("active");
    const [type, setType] = useState(props.type); // the string related
    const [typeVal, setTypeVal] = useState(props.initialTimeline); // 0 - 3
    const types = {0: "Programming", 1: "Aviation", 2: "Design", 3: "PC Building"};
    const content = {
        0: [
            [MyWebsite, "My Personal Website", "Oct 2022", "After coming back from my trip to the USA, I had a lot of free time in the Army before I finish my service. That's where I decided to make use of my newly learnt knowledge on React to rebuild a second version of my website."],
            [ReactImg, "Learning React", "Sep 2022", "During my National Service trip to USA, I decided to learn React, specifically ReactJS, to further expand my Web Programming knowledge."]
        ],
        1: [

        ],
        2: [

        ],
        3: [

        ]
    };

    function changeType() {
        props.fadeImage("fadeOutImage");
        status("timeline fadeOutTimelineContent");
        setTimeout(function() {
            setTypeVal((typeVal + 1) % 4);
            setType(types[(typeVal + 1) % 4]);
            props.changeImage(props.imageOptions[(typeVal + 1) % 4]);
        }, 500);
        setTimeout(function() {
            props.fadeImage("active");
            status("timeline active");
        }, 1400);
    }

    
    return(

        <>
            <button onClick={changeType} className={"timelineChanger " + fadeoutContent}>{type}</button>
            <div className={"timeline " + fadeoutContent}>
    
                <div className="timelineUI">
                    <div className="timelineLine"></div>
                </div>
    
                <TimelineSpecificContent typeValue={typeVal} value={types[typeVal]} content={content} />
    
            </div>
        </>
        
    )


};

export default TimelineSpecific;