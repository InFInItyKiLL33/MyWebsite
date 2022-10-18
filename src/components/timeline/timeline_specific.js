import React, { useState, useEffect } from 'react';
import MyWebsite from "../../images/mywebsite.png";
import ReactImg from "../../images/react.png";
import NHWSSImg1 from "../../images/nhwss1.png";
import NHWSSImg2 from "../../images/nhwss2.png";
import ThatAquariumImg from "../../images/thataquarium.png";
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
    let reverseRow = Math.floor(props.index % 2) !== 0 ? "flex-reverse-row" : "flex-row";
    // reverseRow = "flex-row";
    const reverseImage = reverseRow === "flex-reverse-row" ? " eachContentImageReverse" : "";
    const reverseText = reverseRow === "flex-reverse-row" ? " eachContentTextReverse" : "";
    const [imagePos, setImagePos] = useState(0);
    const zoomRegion = 0.75; // 0.0 - 1.0
    const maxZoomRegion = 0.4; // 0.0 - zoomRegion
    const defaultZoom = 1.0; // default scale value
    const zoom = 1.1; // scale value
    const minOpacity = 0.15;
    const maxOpacity = 1.0;
    const screenHeight = window.innerHeight;
    
    function scrollZoom() {
        const eachContentElem = document.getElementsByClassName("eachContent")[props.index];
        const imgElem = eachContentElem.getElementsByClassName("eachContentImage")[0];
        const backImgElem = eachContentElem.getElementsByClassName("eachContentImage2")[0];
        const offset = 0.5 * eachContentElem.getBoundingClientRect().top + 0.5 * eachContentElem.getBoundingClientRect().bottom;
        if (offset > (0.5 - 0.5 * zoomRegion) * screenHeight && offset < (0.5 + 0.5 * zoomRegion) * screenHeight) {
            let finalOffset = zoom;
            let opacityOffset = maxOpacity;
            if (offset < (0.5 - 0.5 * maxZoomRegion) * screenHeight || offset > (0.5 + 0.5 * maxZoomRegion) * screenHeight) {
                let offsetScale = (Math.abs(offset - 0.5 * screenHeight) - maxZoomRegion * 0.5 * screenHeight) / ((0.5 * (zoomRegion - maxZoomRegion)) * screenHeight); // goes from 0.0 to 1.0 based on scroll position inside gradient range
                finalOffset = zoom - (zoom - defaultZoom) * (offsetScale);
                opacityOffset = maxOpacity - (maxOpacity - minOpacity) * (offsetScale);
            };
            imgElem.style.transform = "scale(" + String(finalOffset) + ")";
            backImgElem.style.transform = "scale(" + String(finalOffset) + ")";
            eachContentElem.style.opacity = opacityOffset;
        } else {
            imgElem.style.transform = "scale(" + defaultZoom + ")";
            backImgElem.style.transform = "scale(" + defaultZoom + ")";
            eachContentElem.style.opacity = minOpacity;
        };
        setImagePos(offset);
    };

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

    function scrollEffect() {
        const onScroll = () => {
            window.removeEventListener('scroll', onScroll);
            scrollZoom();
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    };

    useEffect(() => {
        scrollZoom();
    });

    return(
        <div className={"eachContent " + reverseRow} key={props.index} onScroll={scrollEffect()}>
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
            [
                MyWebsite, 
                "My Personal Website (v2)", 
                "Oct 2022", 
                "After coming back from my trip to the USA, I had a lot of free time in the Army before I finish my service. That's where I decided to make use of my newly learnt knowledge on React to rebuild a second version of my website."
            ], [
                ReactImg, 
                "Learning React", 
                "Sep 2022", 
                "During my National Service trip to USA, I decided to learn React, specifically ReactJS, to further expand my Web Programming knowledge."
            ], [
                NHWSSImg2, 
                "NHWSS Rebuild", 
                "May 2022", 
                `The Charity Traditional Chinese Medicine (TCM) organisation that I was an intern of before my enlistment in the Army, was hacked and vandalised all over. A backup was restored by them but the owners decided it was best to rebuild the site as the one and only backup was partially corrupted. They hired me again to help restore the website, using Wordpress once again. It was a lengthy process but it was fully completed in about 2 to 3 weeks. \n
                The hardest part about the process was to keep the use of custom CSS/Javascript to a minimum. With this restriction, I managed to learn how to rebuild it to how it was before without the use of Javascript. Although the challenge was not required by them, it was a good opportunity to challenge my skills. Not only that, I felt that it was better to do so as the interns they hired were generally new to programming, and it would make their life easier to edit by keeping it simpler.`
            ], [
                ThatAquariumImg, 
                "That Aquarium Website", 
                "Dec 2020 - Jan 2021", 
                `My friend and I wanted to use our web building skill to not only build our portfolio, but to earn money as well. We then found a company called That Aquarium to build their website. However, to be upfront, this was ultimately a failure. Fortunately, it gave me a large insight on how to outside world works and what I should expect in the future.
                \n
                In summary, we managed to convince them to have a website built, but due to their lack of and delayed responses, and that it was mostly a one-way communication, we decided to drop this project with them.
                \n
                It was quite disheartening as I managed to design almost every page of the website, and was about 75% of the way done coding. However, we failed to account that in trying to keep the project efficient in terms of time, we didn't sign a contract or discuss in detail the pay or the final design. Although I did send them a copy of the designs, they took weeks to reply and when they said it was not fully what they wanted, nor were they interested in paying what we expected.
                \n
                On the bright side, it gave me an insight on how the commercial sector works, use Django as a backend server, and allowed me to sharpen my skills on both design and web application building.`
            ], [
                NHWSSImg1, 
                "Nam Hong Welfare Service Society (NHWSS) Internship", 
                "Dec 2020 - Mar 2021", 
                `I had a classmate in Junior College who knew I was good at coding, and their family member, who's working at NHWSS, required an intern to maintain their website. I was recommended and join them as an intern for 4 Months, before my enlistment into the Army. This was a good opportunity for me to learn how to use a website building app, Wordpress in this case, instead of only knowing how to create websites with pure HTML/CSS/JS with jQuery.
                \n
                Through this internship, I realised how much easier and restrictive website building apps are, as they make elements super easy to create through the drag and drop experience. However, the ability to customise the styles and elements is quite limited, unless I decide to inject custom code into it. Most of the website was luckily, already done by the previous intern, which only gave me the chance to design and create a few pages (specifically the Get Involved page, picture beside, which does not show hover effects).
                \n
                I would have definitely continued the internship with how heartwarming and welcome the management was, if it wasn't for the conscription into the Army in April. This would, however, not be the end of working with them as they hired me as a freelancer the next year.
                \n
                If you would like to check it out, and if it hasn't changed, you may view it live `, "https://namhongwelfare.org.sg/get-involved/"
            ]
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