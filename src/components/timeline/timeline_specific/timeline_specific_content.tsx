import React, { useState, useEffect, useRef } from 'react';
import PlaceholderImage from "../../../images/placeholder-image.png";
import PlaceholderBlankImage from "../../../images/placeholder-blank.png";
import '../timeline.sass';
import TimelineHyperlink from './timeline_hyperlink';
import {TimelineSpecificContentProps} from "../../../declarations";
import axios from 'axios';

function makeRandomChars(entryString: string): string {
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

function TimelineSpecificContent(props: TimelineSpecificContentProps): JSX.Element {
    
    const reverseRow = Math.floor(props.index % 2) !== 0 ? "flex-reverse-row" : "flex-row";
    // reverseRow = "flex-row"; // used for testing purposes
    const reverseImage = reverseRow === "flex-reverse-row" ? " eachContentImageReverse" : "";
    const reverseText = reverseRow === "flex-reverse-row" ? " eachContentTextReverse" : "";
    const zoomRegion = 0.85; // 0.0 - 1.0
    const maxZoomRegion = 0.75; // 0.0 - zoomRegion
    const defaultZoom = 1.0; // default scale value
    const zoom = 1.1; // scale value
    const minOpacity = 0.2;
    const maxOpacity = 1.0;
    const screenHeight = window.innerHeight;
    const eachContentOriginalHeader = props.content[props.typeValue][props.index][1];
    const eachContentOriginalDesc = props.content[props.typeValue][props.index][3];
    const ERR_RETRIES = 10;

    const [clickStatus, changeClickStatus] = useState("");
    const [thisContentHeader, changeThisContentHeader] = useState("");
    const [thisContentDesc, changeThisContentDesc] = useState("");
    const [slideEffect, changeSlideEffect] = useState("");
    const [imageLoadingAnimationState, changeImageLoadingAnimationState] = useState(true); //true to show, false to hide
    const [failedImageLoading, setFailedImageLoading] = useState(false);
    // eslint-disable-next-line
    const [imagePos, setImagePos] = useState(0); // this is needed for the effect to work, don't know why
    const [contentOpacity, setContentOpacity] = useState(minOpacity);
    const [imageScale, setImageScale] = useState(defaultZoom);
    const [secondaryImageScale, setSecondaryImageScale] = useState(defaultZoom);
    const [hoveringStatus, setHoveringStatus] = useState(0); // 0 for no hover, any other value for hover additional zoom
    const [rendered, setRendered] = useState(false);
    const [img, setImg]:any = useState();
    
    const contentRef = useRef<HTMLInputElement>(null);

    const {
        carouselState, changeClickAnywhereStatus
    } = props; // this is just to avoid eslint error for useeffect

    async function getThumbnail(retries: number = 0): Promise<void> {

        let imageSrc;
        if (typeof(props.content[props.typeValue][props.index][0]) === "string") {
            imageSrc = props.content[props.typeValue][props.index][0];
        } else {
            imageSrc = props.content[props.typeValue][props.index][0][0];
        }

        const requestData = await axios({
            method: 'GET', 
            url: props.backendURL + "image?img=" + imageSrc + "&uuid=" + props.getCookie("uuid"),
            responseType: 'blob'
        })
        .then((res) => {
            if (res.data !== 404 && res.data !== 403 && res.status === 200) {
                const imageBlob = new File([res.data], ""); 
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImg(imageObjectURL);
                changeImageLoadingAnimationState(false);
            } else {
                if (retries < ERR_RETRIES) {
                    getThumbnail(retries + 1);
                } else {
                    setImg(PlaceholderImage);
                    changeImageLoadingAnimationState(false);
                    setFailedImageLoading(true);
                };
            };
        })
        .catch((error) => {
            if (retries < ERR_RETRIES) {
                getThumbnail(retries + 1);
            } else {
                setImg(PlaceholderImage);
                changeImageLoadingAnimationState(false);
                setFailedImageLoading(true);
            };
        });

    };

    function scrollingEffects() {

        if (contentRef.current) {
    
            window.removeEventListener('scroll', scrollingEffects);
            let boundingBox = contentRef?.current?.getBoundingClientRect();
            const offset = 0.5 * boundingBox.top + 0.5 * boundingBox.bottom;
                
            if (!rendered && boundingBox.top < screenHeight * 0.875 && boundingBox.bottom > 0.0) {
                setRendered(true);
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
                setContentOpacity(1);
            } else {
                // Fade in fade out content when not in focus
                if (offset > (0.5 - 0.5 * zoomRegion) * screenHeight && offset < (0.5 + 0.5 * zoomRegion) * screenHeight) {
                    if (offset < (0.5 - 0.5 * maxZoomRegion) * screenHeight || offset > (0.5 + 0.5 * maxZoomRegion) * screenHeight) {
                        // transition zoom region
                        let offsetScale = (Math.abs(offset - 0.5 * screenHeight) - maxZoomRegion * 0.5 * screenHeight) / ((0.5 * (zoomRegion - maxZoomRegion)) * screenHeight); // goes from 0.0 to 1.0 based on scroll position inside gradient range
                        setImageScale(zoom - (zoom - defaultZoom) * (offsetScale));
                        setSecondaryImageScale(zoom - (zoom - defaultZoom) * (offsetScale));
                        setContentOpacity(Math.min(0.99, maxOpacity - (maxOpacity - minOpacity) * (offsetScale)));
                    } else {
                        // max zoom region
                        setImageScale(zoom);
                        setSecondaryImageScale(zoom);
                        setContentOpacity(Math.min(0.99, maxOpacity)); // 0.99 is dumb cause github has display issues with 1.0
                    };
                } else {
                    // min zoom region
                    setImageScale(defaultZoom);
                    setSecondaryImageScale(defaultZoom);
                    setContentOpacity(minOpacity);
                };
            };
            
            setImagePos(offset);
        };

    };

    function scrollEffect() {
        window.addEventListener('scroll', scrollingEffects, { passive: true });
        return () => window.removeEventListener('scroll', scrollingEffects);
    };

    useEffect(() => {
        scrollingEffects();
        setImg(PlaceholderBlankImage);
        getThumbnail();
        // console.log(props.content)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {

        //click event
        try {
            if (!carouselState) {
                changeClickStatus("unclick");
                changeClickAnywhereStatus("fadeInitialOpacity");
            };
        } catch (error) {
        }

    }, [carouselState, changeClickAnywhereStatus])

    function handleClick(event: any): void {

        if (!failedImageLoading && !imageLoadingAnimationState) {

            changeClickStatus("clicked disable-pointer");
            if (typeof(props.content[props.typeValue][props.index][0]) === "string") {
                props.setCarouselCurrentImages([props.content[props.typeValue][props.index][0]]);
            } else {
                props.setCarouselCurrentImages(props.content[props.typeValue][props.index][0]);
            };
            props.showHideCarousel();
            setTimeout(() => {
                changeClickStatus("clicked clicked-end");
            }, 300)

        } else {
            changeImageLoadingAnimationState(true);
            setFailedImageLoading(false);
            setImg(PlaceholderBlankImage);
            getThumbnail();
        };
    };

    return(
        <div className={"eachContent " + reverseRow + slideEffect} key={props.index} style={{"opacity": String(contentOpacity)}} ref={contentRef} onScroll={scrollEffect()}>
            <div className={"arrowDecoration arrowDecoration" + reverseRow === "flex-reverse-row" ? "R" : "L"}></div>
            <div className="eachContentLeftWrapper">
                <div className="eachContentImageWrapper flex-row" onMouseOver={(event) => setHoveringStatus(0.05)} onMouseLeave={(event) => setHoveringStatus(0)}>
                    {
                        imageLoadingAnimationState ? 
                            <div className="loadingIcon"></div>
                        : 
                            <></>
                    }
                    <img src={img} className={"eachContentImage " + clickStatus + reverseImage + (props.carouselState ? " disable-pointer" : "")} onClick={handleClick} alt={props.content[props.typeValue][props.index][1]} style={{"scale": String(imageScale + hoveringStatus)}}></img>
                    <img src={img} className={"eachContentImage2" + reverseImage} alt={props.content[props.typeValue][props.index][1]} style={{"scale": String(secondaryImageScale + hoveringStatus)}}></img>
                </div>
                <p className="eachContentYear bolded">{props.content[props.typeValue][props.index][2]}</p>
            </div>
            <p className={"closeAnywhere " + props.clickAnywhereStatus}>Click on the image to close</p>
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