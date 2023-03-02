import React, { useEffect, useState } from 'react';
import "./image_carousel.sass";
import {ImageCarouselProps} from "../../../declarations";

function ImageCarousel(props: ImageCarouselProps): JSX.Element {

    const pageCount = props.images.length;
    // const [prevPageNumber, setPrevPageNumber] = useState(0); // 0 based index
    // const [pageNumber, setPageNumber] = useState(0); // 0 based index
    const [translateCarousel, setTranslateCarousel] = useState(50 * (pageCount - 1)); // 0 based index
    const [fadeInOpacity, setFadeInOpacity] = useState(0);
    const [clickable, setClickable] = useState(0);
    const translateCarouselEnds = [-50 * (pageCount - 1), 50 * (pageCount - 1)];

    let imageContent = Array(pageCount).fill("").map((eachImage: any, eachIndex: number): JSX.Element => {
        return(
            <div className="carouselImagesDirectWrapper flex-row flex-jc-center">
                <img src={props.images[eachIndex]} alt="carousel content" className="carouselImages"></img>
            </div>
        );
    })

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
        // console.log(props.images, imageContent, pageCount);
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
                {imageContent}
            </div>

        </div>
    );
};

export default ImageCarousel;