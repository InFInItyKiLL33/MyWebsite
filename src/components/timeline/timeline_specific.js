import React, { Component, useState } from 'react';
import MyWebsite from "../../images/mywebsite.png";
import ReactImg from "../../images/react.png";
import './timeline.css';

function TimelineSpecificContent(props) {

    const [clickStatus, changeClickStatus] = useState("");
    const [clickAnywhereStatus, changeClickAnywhereStatus] = useState("fadeInitialOpacity");
    function handleClick(e) {
        if (clickStatus == "" || clickStatus == "unclick") {
            changeClickStatus("clicked");
            setTimeout(function() {
                changeClickStatus("clicked clicked-end");
            }, 250);
        } else {
            changeClickStatus("unclick");
        };

        if (clickAnywhereStatus == "fadeInitialOpacity") {
            changeClickAnywhereStatus("fadeInitialOpacity disable-pointer");
            setTimeout(function() {
                changeClickAnywhereStatus("fadeOutInitialOpacity");
            }, 250);
        } else {
            changeClickAnywhereStatus("fadeInitialOpacity");
        };
    };

    return(
        <div className="eachContent flex-row" key={props.index}>
            <div className="eachContentLeftWrapper">
                <div className="eachContentImageWrapper flex-row">
                    <img src={props.content[props.typeValue][props.index][0]} className={"eachContentImage " + clickStatus} onClick={handleClick}></img>
                    <img src={props.content[props.typeValue][props.index][0]} className="eachContentImage2"></img>
                    <p className={"closeAnywhere " + clickAnywhereStatus}>Click anywhere to close</p>
                </div>
                <p className="eachContentYear bolded">{props.content[props.typeValue][props.index][2]}</p>
            </div>
            <div className="eachContentDecorationDot"></div>
            <div className="eachContentRightWrapper">
                <h1 className="eachContentHeader">{props.content[props.typeValue][props.index][1]}</h1>
                <p className="eachContentDescription">{props.content[props.typeValue][props.index][3]}</p>
            </div>
        </div>
    )

};

function TimelineSpecific(props) {

    
    let currentContent = [];

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
        status("fadeOutTimelineContent");
        setTimeout(function() {
            setTypeVal((typeVal + 1) % 4);
            setType(types[(typeVal + 1) % 4]);
            props.changeImage(props.imageOptions[(typeVal + 1) % 4]);
        }, 500);
        setTimeout(function() {
            props.fadeImage("active");
            status("active");
        }, 1400);
    }

    for (let i = 0; i < (content[typeVal]).length; i++) {
        currentContent.push(
            <TimelineSpecificContent typeValue={typeVal} value={types[typeVal]} content={content} index={i} />
        );
    };

    
    return(

        <>
            <button onClick={changeType} className={"timelineChanger fade bolded " + fadeoutContent}>{type}</button>
            <div className={"timeline fade flex-row " + fadeoutContent}>
    
                <div className="timelineUI">
                    <div className="timelineLine"></div>
                </div>
    
                {/* <TimelineSpecificContent typeValue={typeVal} value={types[typeVal]} content={content} /> */}

                <div className="timelineSpecificContent">
                    {currentContent}
                </div>
    
            </div>
        </>
        
    )


};

export default TimelineSpecific;