import React, { useState, useEffect } from 'react';
import './timeline.css';

function makeRandomChars(entryString) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>+-';
    let blacklist = [" ", "\n", "(", ")", ".", ","];
    for (let i = 0; i < entryString.length; i++) {
        if (blacklist.includes(entryString[i])) {
            result += entryString[i];
        } else {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        };
    };
    return result;
};

function TimelineHyperlink(props) {
    if (props.content.length === 5) {
        return(
            <a href={props.content[4]} className="hyperlink">{props.content[4]}</a>
        )
    } else {
        return(<></>)
    }
};

function TimelineSpecificContent(props) {
    
    const [clickStatus, changeClickStatus] = useState("");
    const [clickAnywhereStatus, changeClickAnywhereStatus] = useState("fadeInitialOpacity");
    const [thisContentHeader, changeThisContentHeader] = useState("");
    const [thisContentDesc, changeThisContentDesc] = useState("");
    const [slideEffect, changeSlideEffect] = useState("");
    const [indexOverlay, changeIndexOverlay] = useState("");
    const eachContentOriginalHeader = props.content[props.typeValue][props.index][1];
    const eachContentOriginalDesc = props.content[props.typeValue][props.index][3];
    const reverseRow = Math.floor(props.index % 2) !== 0 ? "flex-reverse-row" : "flex-row";
    // reverseRow = "flex-row";
    const reverseImage = reverseRow === "flex-reverse-row" ? " eachContentImageReverse" : "";
    const reverseText = reverseRow === "flex-reverse-row" ? " eachContentTextReverse" : "";
    const reverseBlock = reverseRow === "flex-reverse-row" ? "R" : "L";
    const [imagePos, setImagePos] = useState(0);
    const zoomRegion = 0.6; // 0.0 - 1.0
    const maxZoomRegion = 0.45; // 0.0 - zoomRegion
    const defaultZoom = 1.0; // default scale value
    const zoom = 1.1; // scale value
    const minOpacity = 0.15;
    const maxOpacity = 1.0;
    const screenHeight = window.innerHeight;
    let finalOffset = 0;
    let opacityOffset = 0;
    
    function scrollZoom() {
        
        const eachContentElem = document.getElementsByClassName("eachContent")[props.index];
        const imgElem = eachContentElem.getElementsByClassName("eachContentImage")[0];
        const backImgElem = eachContentElem.getElementsByClassName("eachContentImage2")[0];
        const offset = 0.5 * eachContentElem.getBoundingClientRect().top + 0.5 * eachContentElem.getBoundingClientRect().bottom;
        
        if ((thisContentDesc.length === 0 && eachContentElem.getElementsByClassName("eachContentDescription")[0].innerHTML.length === 0) && eachContentElem.getBoundingClientRect().top < screenHeight * 0.875 && eachContentElem.getBoundingClientRect().bottom > 0.0) { // The first && to double check is dumb, without it the effect triggers twice on initial load
            let delay = [0, 15, 30, 45, 55, 65, 70, 75];
            let counter = 0;
            changeSlideEffect(reverseRow === "flex-reverse-row" ? " slideInInitial slideIn" : " slideInInitialR slideInR");
            setTimeout(() => {
                changeSlideEffect("")
            }, 1000)
            while (counter < delay.length) {
                setTimeout(() => {
                    changeThisContentHeader(makeRandomChars(eachContentOriginalHeader));
                    changeThisContentDesc(makeRandomChars(eachContentOriginalDesc));
                }, delay[counter] * counter);
                counter++;
            };
            setTimeout(() => {
                changeThisContentHeader(eachContentOriginalHeader);
                changeThisContentDesc(eachContentOriginalDesc);
            }, (counter + 0.5) * delay[counter - 1]);
        }; // This part is to randomise the content for effect before displaying the actual one

        if (clickStatus === "clicked" || clickStatus === "clicked clicked-end") {
            eachContentElem.style.opacity = 1;
        } else {
            // Fade in fade out content when not in focus
            if (offset > (0.5 - 0.5 * zoomRegion) * screenHeight && offset < (0.5 + 0.5 * zoomRegion) * screenHeight) {
                if (offset < (0.5 - 0.5 * maxZoomRegion) * screenHeight || offset > (0.5 + 0.5 * maxZoomRegion) * screenHeight) {
                    let offsetScale = (Math.abs(offset - 0.5 * screenHeight) - maxZoomRegion * 0.5 * screenHeight) / ((0.5 * (zoomRegion - maxZoomRegion)) * screenHeight); // goes from 0.0 to 1.0 based on scroll position inside gradient range
                    finalOffset = zoom - (zoom - defaultZoom) * (offsetScale);
                    opacityOffset = maxOpacity - (maxOpacity - minOpacity) * (offsetScale);
                } else {
                    finalOffset = zoom;
                    opacityOffset = maxOpacity;
                };
            } else {
                finalOffset = defaultZoom;
                opacityOffset = minOpacity;
            };
            imgElem.style.transform = "scale(" + String(finalOffset) + ")";
            backImgElem.style.transform = "scale(" + String(finalOffset) + ")";
            eachContentElem.style.opacity = opacityOffset;
        };

        setImagePos(offset);
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
        return;
    });

    function handleClick(e) {
        if (clickStatus === "" || clickStatus === "unclick") {
            changeClickStatus("clicked");
            changeIndexOverlay(" indexHigh");
            setTimeout(() => {
                changeClickStatus("clicked clicked-end");
            }, 250);
        } else {
            changeClickStatus("unclick");
            changeIndexOverlay("");
        };

        if (clickAnywhereStatus === "fadeInitialOpacity") {
            changeClickAnywhereStatus("fadeInitialOpacity disable-pointer");
            setTimeout(() => {
                changeClickAnywhereStatus("fadeOutInitialOpacity");
            }, 250);
        } else {
            changeClickAnywhereStatus("fadeInitialOpacity");
        };
    };

    return(
        <div className={"eachContent " + reverseRow + slideEffect + indexOverlay} key={props.index} onScroll={scrollEffect()}>
            <div className={"arrowDecoration arrowDecoration" + reverseBlock}></div>
            <div className="eachContentLeftWrapper">
                <div className="eachContentImageWrapper flex-row">
                    <img src={props.content[props.typeValue][props.index][0]} className={"eachContentImage " + clickStatus + reverseImage} onClick={handleClick}alt={props.content[props.typeValue][props.index][1]}></img>
                    <img src={props.content[props.typeValue][props.index][0]} className={"eachContentImage2" + reverseImage} alt={props.content[props.typeValue][props.index][1]}></img>
                </div>
                <p className="eachContentYear bolded">{props.content[props.typeValue][props.index][2]}</p>
            </div>
            <p className={"closeAnywhere " + clickAnywhereStatus}>Click on the image to close</p>
            <div className="eachContentDecorationDot"></div>
            <div className="eachContentRightWrapper">
                <h1 className={"eachContentHeader" + reverseText}>{thisContentHeader}</h1>
                <p className={"eachContentDescription" + reverseText}>{thisContentDesc}</p>
                <TimelineHyperlink content={props.content[props.typeValue][props.index]} />
            </div>
        </div>
    )

};

export default TimelineSpecificContent;