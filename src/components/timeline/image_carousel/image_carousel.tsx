import React, { useEffect, useState } from 'react';
import PlaceholderImage from "../../../images/placeholder-image.png";
import "./image_carousel.sass";
import {ImageCarouselProps} from "../../../declarations";
import axios from 'axios';
import ImageCarouselSpecific from './image_carousel_specific';

function ImageCarousel(props: ImageCarouselProps): JSX.Element {

    const pageCount = props.images.length;
    const [translateCarousel, setTranslateCarousel] = useState(50 * (pageCount - 1)); // 0 based index
    const [fadeInOpacity, setFadeInOpacity] = useState(0);
    const [clickable, setClickable] = useState(0);
    const translateCarouselEnds = [-50 * (pageCount - 1), 50 * (pageCount - 1)];

    const IAMGECONTENT: any = useState(
        Array(pageCount).fill("").map((eachImage: any, eachIndex: number): JSX.Element => {
            return(
                <ImageCarouselSpecific thisImage={props.images[eachIndex]} backendURL={props.backendURL} getCookie={props.getCookie} placeholderImage={PlaceholderImage} />
            );
        })
    );

    function leftRight() {
        setTranslateCarousel((prevTranslateVal: number): number => {
            return prevTranslateVal + 100 > translateCarouselEnds[1] ? translateCarouselEnds[0] : prevTranslateVal + 100;
        });
    };

    function rightLeft() {
        setTranslateCarousel((prevTranslateVal: number): number => {
            return prevTranslateVal - 100 < translateCarouselEnds[0] ? translateCarouselEnds[1] : prevTranslateVal - 100;
        });
    };

    function clickExit() {
        setFadeInOpacity(0);
        setClickable(0);
        props.exitHandler();
    };

    useEffect(() => {
        let fadeIn = setTimeout(() => {
            setFadeInOpacity(1);
            clearTimeout(fadeIn);
        }, 10);
        let clickableInitial = setTimeout(() => {
            setClickable(1);
            clearTimeout(clickableInitial);
        }, 300);
    }, []);

    return(
        <div className="imageCarousel" style={{"opacity": String(fadeInOpacity), "pointerEvents": clickable ? "initial" : "none"}}>

            <div className='carouselButtons flex-row flex-jc-center' data-pages={pageCount}>
                <button className="carouselPreviousButton" onClick={leftRight}>&lt;</button> 
                <button className="carouselNextButton" onClick={rightLeft}>&gt;</button> 
            </div>

            <div className="carouselImagesWrapper flex-row" style={{"transform": "translateX(" + String(translateCarousel) + "vw)"}} onClick={clickExit}>
                {IAMGECONTENT}
            </div>

            <svg className="carouselCloseIcon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" onClick={clickExit}><path d="m480-432 118 117q9 10 23 10.5t25-10.847q11-10.346 11-23.746 0-13.4-11-24.907L528-480l118-118q9-9 10-23t-9.839-25q-11.25-11-24.5-11T598-646L480-528 363-646q-10-9-23.5-10t-23.5 9.839q-12 11.25-12 24.5T316-598l116 118-117 117q-10 10-10.5 23.5t10.847 23.5q10.346 12 23.746 12 13.4 0 24.907-12l116-116Zm.138 373Q393.36-59 316.02-91.52q-77.34-32.52-134.66-89.84-57.32-57.32-89.84-134.522T59-479.862q0-87.034 32.579-164.099 32.579-77.066 90.004-134.579 57.426-57.513 134.438-90.486Q393.033-902 479.779-902q87.107 0 164.328 32.879 77.221 32.88 134.644 90.245t90.336 134.534Q902-567.173 902-479.917q0 87.193-32.974 164.015-32.973 76.822-90.486 134.283-57.513 57.461-134.441 90.04Q567.172-59 480.138-59Zm-.367-91q136.742 0 233.485-96.387Q810-342.773 810-479.771q0-136.742-96.515-233.485Q616.971-810 479.729-810q-136.242 0-232.985 96.515Q150-616.971 150-479.729q0 136.242 96.387 232.985Q342.773-150 479.771-150ZM480-480Z"/></svg>

        </div>
    );
};

export default ImageCarousel;