import React, { Component, useState } from 'react';
import MyWebsite from "../../images/mywebsite.png";
import ReactImg from "../../images/react.png";
import NHWSSImg1 from "../../images/nhwss1.png";
import NHWSSImg2 from "../../images/nhwss2.png";
import './timeline.css';

function TimelineHyperlink(props) {
    if (props.content.length === 5) {
        return(
            <a href={props.content[4]} className="hyperlink">here</a>
        )
    } else {
        return(<></>)
    }
};

function TimelineSpecificContent(props) {

    const [clickStatus, changeClickStatus] = useState("");
    const [clickAnywhereStatus, changeClickAnywhereStatus] = useState("fadeInitialOpacity");
    const reverseRow = Math.floor(props.index % 2) !== 0 ? "flex-reverse-row" : "flex-row";
    const reverseImage = reverseRow === "flex-reverse-row" ? " eachContentImageReverse" : "";
    const reverseText = reverseRow === "flex-reverse-row" ? " eachContentTextReverse" : "";
    function handleClick(e) {
        if (clickStatus === "" || clickStatus === "unclick") {
            changeClickStatus("clicked");
            setTimeout(function() {
                changeClickStatus("clicked clicked-end");
            }, 250);
        } else {
            changeClickStatus("unclick");
        };

        if (clickAnywhereStatus === "fadeInitialOpacity") {
            changeClickAnywhereStatus("fadeInitialOpacity disable-pointer");
            setTimeout(function() {
                changeClickAnywhereStatus("fadeOutInitialOpacity");
            }, 250);
        } else {
            changeClickAnywhereStatus("fadeInitialOpacity");
        };
    };

    return(
        <div className={"eachContent " + reverseRow} key={props.index}>
            <div className="eachContentLeftWrapper">
                <div className="eachContentImageWrapper flex-row">
                    <img src={props.content[props.typeValue][props.index][0]} className={"eachContentImage " + clickStatus + reverseImage} onClick={handleClick}alt={props.content[props.typeValue][props.index][1]}></img>
                    <img src={props.content[props.typeValue][props.index][0]} className={"eachContentImage2" + reverseImage} alt={props.content[props.typeValue][props.index][1]}></img>
                </div>
                <p className="eachContentYear bolded">{props.content[props.typeValue][props.index][2]}</p>
            </div>
            <p className={"closeAnywhere " + clickAnywhereStatus}>Click anywhere to close</p>
            <div className="eachContentDecorationDot"></div>
            <div className="eachContentRightWrapper">
                <h1 className={"eachContentHeader" + reverseText}>{props.content[props.typeValue][props.index][1]}</h1>
                <p className={"eachContentDescription" + reverseText}>{props.content[props.typeValue][props.index][3]} 
                    <TimelineHyperlink content={props.content[props.typeValue][props.index]} />
                </p>
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
            [ReactImg, "Learning React", "Sep 2022", "During my National Service trip to USA, I decided to learn React, specifically ReactJS, to further expand my Web Programming knowledge."],
            [NHWSSImg2, "NHWSS Rebuild", "May 2022", `The Charity Traditional Chinese Medicine (TCM) organisation that I was an intern of before my enlistment in the Army, was hacked and vandalised all over. A backup was restored by them but the owners decided it was best to rebuild the site as the one and only backup was partially corrupted. They hired me again to help restore the website, using Wordpress once again. It was a lengthy process but it was fully completed in about 2 to 3 weeks. \n
            The hardest part about the process was to keep the use of custom CSS/Javascript to a minimum. With this restriction, I managed to learn how to rebuild it to how it was before without the use of Javascript. Although the challenge was not required by them, it was a good opportunity to challenge my skills. Not only that, I felt that it was better to do so as the interns they hired were generally new to programming, and it would make their life easier to edit by keeping it simpler.`],
            [NHWSSImg1, "Nam Hong Welfare Service Society (NHWSS) Internship", "Dec 2020 - Mar 2021", `I had a classmate in Junior College who knew I was good at coding, and their mother, who's working at NHWSS, required an intern to maintain their website. I was recommended and join them as an intern for 4 Months, before my enlistment into the Army. This was a good opportunity for me to learn how to use a website building app, Wordpress in this case, instead of only knowing how to create websites with pure HTML/CSS/JS with jQuery.
            \n
            Through this internship, I realised how much easier and restrictive website building apps are, as they make elements super easy to create through the drag and drop experience. However, the ability to customise the styles and elements is quite limited, unless I decide to inject custom code into it. Most of the website was luckily, already done by the previous intern, which only gave me the chance to design and create a few pages (specifically the Get Involved page, picture beside, which does not show hover effects).
            \n
            If you would like to check it out, and it hasn't been reworked, you may view it live `, "https://namhongwelfare.org.sg/get-involved/"]
        ],
        1: [

        ],
        2: [

        ],
        3: [

        ]
    }; // For each content, 0 -> image file, 1 -> Title, 2 -> Date, 3 -> Description, 4 (Optional) -> Hyperlink

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