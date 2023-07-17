import React, { useState, useEffect, useRef } from 'react';
import PlaceholderImage from "../../../images/placeholder-image.png";
import PlaceholderBlankImage from "../../../images/placeholder-blank.png";
import '../timeline.sass';
import TimelineHyperlink from './timeline_hyperlink';
import {TimelineSpecificContentProps} from "../../../declarations";
import axios from 'axios';

function makeRandomChars(entryString: string): string {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>+-';
    const BLACKLIST = [" ", "\n", "(", ")", ".", ","];
    let result = '';
    for (let i = 0; i < entryString.length; i++) {
        if (BLACKLIST.includes(entryString[i])) {
            result += entryString[i];
        } else {
            result += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
        };
    };
    return result;
};

function TimelineSpecificContent(props: TimelineSpecificContentProps): JSX.Element {
    
    const REVERSE_ROW = Math.floor(props.index % 2) !== 0 ? "flex-reverse-row" : "flex-row";
    // REVERSE_ROW = "flex-row"; // used for testing purposes
    const REVERSE_IMAGE = REVERSE_ROW === "flex-reverse-row" ? " eachContentImageReverse" : "";
    const REVERSE_TEXT = REVERSE_ROW === "flex-reverse-row" ? " eachContentTextReverse" : "";
    const ZOOM_REGION = 0.85; // 0.0 - 1.0
    const MAX_ZOOM_REGION = 0.75; // 0.0 - ZOOM_REGION
    const DEFAULT_ZOOM = 1.0; // default scale value
    const ZOOM = 1.1; // scale value
    const MIN_OPACITY = 0.2;
    const MAX_OPACITY = 1.0;
    const SCREEN_HEIGHT = window.innerHeight;
    const EACH_CONTENT_ORIGINAL_HEADER = props.content[props.typeValue][props.index][1];
    const EACH_CONTENT_ORIGINAL_DESCRIPTION = props.content[props.typeValue][props.index][3];
    const ERR_RETRIES = 10;

    const [clickStatus, changeClickStatus] = useState("");
    const [thisContentHeader, changeThisContentHeader] = useState("");
    const [thisContentDesc, changeThisContentDesc] = useState("");
    const [slideEffect, changeSlideEffect] = useState("");
    const [imageLoadingAnimationState, changeImageLoadingAnimationState] = useState(true); //true to show, false to hide
    const [failedImageLoading, setFailedImageLoading] = useState(false);
    // eslint-disable-next-line
    const [imagePos, setImagePos] = useState(0); // this is needed for the effect to work, don't know why
    const [contentOpacity, setContentOpacity] = useState(MIN_OPACITY);
    const [imageScale, setImageScale] = useState(DEFAULT_ZOOM);
    const [secondaryImageScale, setSecondaryImageScale] = useState(DEFAULT_ZOOM);
    const [hoveringStatus, setHoveringStatus] = useState(0); // 0 for no hover, any other value for hover additional ZOOM
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
                
            if (!rendered && boundingBox.top < SCREEN_HEIGHT * 0.875 && boundingBox.bottom > 0.0) {
                setRendered(true);
                let delay = [0, 15, 30, 45, 55, 65, 70, 75];
                let counter = 0;
                changeSlideEffect(REVERSE_ROW === "flex-reverse-row" ? " slideInInitial slideIn" : " slideInInitialR slideInR");
                setTimeout(() => {
                    changeSlideEffect("")
                }, 1000)
                while (counter < delay.length) {
                    setTimeout(() => {
                        changeThisContentHeader(makeRandomChars(EACH_CONTENT_ORIGINAL_HEADER));
                        changeThisContentDesc(makeRandomChars(EACH_CONTENT_ORIGINAL_DESCRIPTION));
                    }, delay[counter] * counter);
                    counter++;
                };
                setTimeout(() => {
                    changeThisContentHeader(EACH_CONTENT_ORIGINAL_HEADER);
                    changeThisContentDesc(EACH_CONTENT_ORIGINAL_DESCRIPTION);
                }, (counter + 0.5) * delay[counter - 1]);
            }; // This part is to randomise the content for effect before displaying the actual one
    
            if (clickStatus === "clicked" || clickStatus === "clicked clicked-end") {
                setContentOpacity(1);
            } else {
                // Fade in fade out content when not in focus
                if (offset > (0.5 - 0.5 * ZOOM_REGION) * SCREEN_HEIGHT && offset < (0.5 + 0.5 * ZOOM_REGION) * SCREEN_HEIGHT) {
                    if (offset < (0.5 - 0.5 * MAX_ZOOM_REGION) * SCREEN_HEIGHT || offset > (0.5 + 0.5 * MAX_ZOOM_REGION) * SCREEN_HEIGHT) {
                        // transition ZOOM region
                        let offsetScale = (Math.abs(offset - 0.5 * SCREEN_HEIGHT) - MAX_ZOOM_REGION * 0.5 * SCREEN_HEIGHT) / ((0.5 * (ZOOM_REGION - MAX_ZOOM_REGION)) * SCREEN_HEIGHT); // goes from 0.0 to 1.0 based on scroll position inside gradient range
                        setImageScale(ZOOM - (ZOOM - DEFAULT_ZOOM) * (offsetScale));
                        setSecondaryImageScale(ZOOM - (ZOOM - DEFAULT_ZOOM) * (offsetScale));
                        setContentOpacity(Math.min(0.99, MAX_OPACITY - (MAX_OPACITY - MIN_OPACITY) * (offsetScale)));
                    } else {
                        // max ZOOM region
                        setImageScale(ZOOM);
                        setSecondaryImageScale(ZOOM);
                        setContentOpacity(Math.min(0.99, MAX_OPACITY)); // 0.99 is dumb cause github has display issues with 1.0
                    };
                } else {
                    // min ZOOM region
                    setImageScale(DEFAULT_ZOOM);
                    setSecondaryImageScale(DEFAULT_ZOOM);
                    setContentOpacity(MIN_OPACITY);
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
        <div className={"eachContent " + REVERSE_ROW + slideEffect} key={props.index} style={{"opacity": String(contentOpacity)}} ref={contentRef} onScroll={scrollEffect()}>
            <div className={"arrowDecoration arrowDecoration" + REVERSE_ROW === "flex-reverse-row" ? "R" : "L"}></div>
            <div className="eachContentLeftWrapper">
                <div className="eachContentImageWrapper flex-row" onMouseOver={(event) => setHoveringStatus(0.05)} onMouseLeave={(event) => setHoveringStatus(0)}>
                    {
                        imageLoadingAnimationState ? 
                            <div className="loadingIcon"></div>
                        : 
                            <></>
                    }
                    <img src={img} className={"eachContentImage " + clickStatus + REVERSE_IMAGE + (props.carouselState ? " disable-pointer" : "")} onClick={handleClick} alt={props.content[props.typeValue][props.index][1]} style={{"scale": String(imageScale + hoveringStatus)}}></img>
                    <img src={img} className={"eachContentImage2" + REVERSE_IMAGE} alt={props.content[props.typeValue][props.index][1]} style={{"scale": String(secondaryImageScale + hoveringStatus)}}></img>
                </div>
                <p className="eachContentYear bolded">{props.content[props.typeValue][props.index][2]}</p>
            </div>
            <p className={"closeAnywhere " + props.clickAnywhereStatus}>Click on the image to close</p>
            <div className="eachContentDecorationDot"></div>
            <div className="eachContentRightWrapper">
                <h1 className={"eachContentHeader" + REVERSE_TEXT}>{thisContentHeader}</h1>
                <p className={"eachContentDescription" + REVERSE_TEXT}>{thisContentDesc}</p>
                <TimelineHyperlink content={props.content[props.typeValue][props.index]} />
            </div>
        </div>
    )

};

export default TimelineSpecificContent;