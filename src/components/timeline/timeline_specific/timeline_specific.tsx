import React, { useState, useEffect } from 'react';
import TimelineSpecificContent from './timeline_specific_content';
import TypeButtons from './type_buttons';
import ImageCarousel from '../image_carousel/image_carousel';
import '../timeline.sass';
import ProgrammingImgDefault from '../../../images/programming_icon_default.png';
import ProgrammingImgHover from '../../../images/programming_icon_hover.png';
import ProgrammingImgActive from '../../../images/programming_icon_active.png';
import AviationImgDefault from '../../../images/aviation_icon_default.png';
import AviationImgHover from '../../../images/aviation_icon_hover.png';
import AviationImgActive from '../../../images/aviation_icon_active.png';
import DesignImgDefault from '../../../images/design_icon_default.png';
import DesignImgHover from '../../../images/design_icon_hover.png';
import DesignImgActive from '../../../images/design_icon_active.png';
import PCBuildingImgDefault from '../../../images/pc_building_icon_default.png';
import PCBuildingImgHover from '../../../images/pc_building_icon_hover.png';
import PCBuildingImgActive from '../../../images/pc_building_icon_active.png';
import {displayableContent} from './content';
import {TimelineSpecificProps} from "../../../declarations";

function TimelineSpecific(props: TimelineSpecificProps): JSX.Element {

    const defaultIcons = [ProgrammingImgDefault, AviationImgDefault, PCBuildingImgDefault, DesignImgDefault];
    const hoverIcons = [ProgrammingImgHover, AviationImgHover, PCBuildingImgHover, DesignImgHover];
    const activeIcons = [ProgrammingImgActive, AviationImgActive, PCBuildingImgActive, DesignImgActive];
    const timelineChangerOrange = "timelineChangerOrange";
    const infiniteScrollerInitialAmount = 5;
    const infiniteScrollerLoadAmount = 2;
    const [content, setContent] = useState(displayableContent); // For each content, the order is as such: 0 -> image file, 1 -> Title, 2 -> Date, 3 -> Description, 4 (Optional) -> Hyperlink
    const [fadeoutContent, status] = useState("active");
    const [sortText, setSortText] = useState("Newest");
    const [loadedContent, setLoadedContent] = useState([]);
    const [lastLoadedIndex, setLastLoadedIndex] = useState(infiniteScrollerInitialAmount - infiniteScrollerLoadAmount);
    const [carouselState, setCarouselState] = useState(false); // false for hide, true for show
    const [carouselCurrentImages, setCarouselCurrentImages] = useState([]);
    const [clickAnywhereStatus, changeClickAnywhereStatus] = useState("fadeInitialOpacity");
    
    // set whichever type value is active to the right image
    let tempTypeImage = [...defaultIcons];
    tempTypeImage[props.typeVal] = activeIcons[props.typeVal];
    const [typeImage, setTypeImage] = useState(tempTypeImage); // this needs to be here instead of TypeButtons component as I need to unactive the previous active type

    // the header options for timeline
    let skillButtons = Object.keys(props.types).map((currentKey: string, i: number): JSX.Element => {
        let toOrange = props.typeVal === i ? timelineChangerOrange : "";
        return(
            <TypeButtons index={i} key={i} toOrange={toOrange} typeVal={props.typeVal} changeType={changeType} types={props.types} defaultIcons={defaultIcons} hoverIcons={hoverIcons} activeIcons={activeIcons} typeImage={typeImage} setTypeImage={setTypeImage} />
        );
    });

    function changeType(e: any): void { // click on type header
        let newType = parseInt(e.target.getAttribute("data-index"));
        props.fadeImage("fadeOutImage");
        status("disablePointer fadeOutTimelineContent");
        setTimeout(() => {
            status("disablePointer fadeInitialOpacity"); // for smoother transition
            props.setTypeVal(newType);
            props.changeImage(props.imageOptions[newType]);
            emptyLoadedContent();
        }, 400);
        setTimeout(() => {
            props.fadeImage("active");
            status("active");
        }, 800);
    };

    function changeSortDirection(): void { // sort

        // changes display text of sort & rerenders content
        sortText === "Newest" ? setSortText("Oldest") : setSortText("Newest");

        // reverses content
        let newContent: any = content;
        Object.keys(newContent).forEach((key) => {
            newContent[key].reverse();
        });
        setContent(newContent);

        // empty current content
        emptyLoadedContent();
    };

    function emptyLoadedContent(): void {
        setLoadedContent([]);
        setLastLoadedIndex(infiniteScrollerInitialAmount);
    };

    function showHideCarousel() {
        changeClickAnywhereStatus(carouselState ? "fadeInitialOpacity" : "fadeOutInitialOpacity");
        setTimeout(() => {
            setCarouselState((prevState: boolean): boolean => {return !prevState})
        }, carouselState ? 300 : 0);
    };

    useEffect(() => {
    
        function loadMoreContent(): void {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 300) {
                
                if (content[props.typeVal].length === loadedContent.length) return; // case if no more to load
                
                setLastLoadedIndex(prevIndex => Math.min(prevIndex + infiniteScrollerLoadAmount, content[props.typeVal].length));
            };
        };

        window.addEventListener('scroll', loadMoreContent);
        
        // gets new content
        (async () => {
            const newData = await content[props.typeVal].slice(loadedContent.length, lastLoadedIndex); // apparently async and await is needed even though it's not api, if not it doesn't work
            setLoadedContent((prevLoadedContent: any): any => [...prevLoadedContent, ...newData]);
        })()

        return () => window.removeEventListener('scroll', loadMoreContent);

    }, [lastLoadedIndex, sortText, props.typeVal]);
    
    return(

        <>
            {/* <button onClick={changeType} className={"timelineChanger fade bolded " + fadeoutContent}>{type}</button> */}
            <div className={"skillsButtonNavbar flex-row " + fadeoutContent}>
                {skillButtons}
                <button onClick={changeSortDirection} className="timelineChanger timelineSorter slideInInitial slideIn flex-row">
                    <span className="material-symbols-outlined m-auto">Sort by:&nbsp;</span>
                    <i className="center m-auto">
                        {sortText}
                    </i>
                </button>
            </div>
            
            <div className={"timeline fade flex-row " + fadeoutContent}>
    
                <div className="timelineUI">
                    <div className="timelineLine"></div>
                </div>

                {
                    carouselState ? 
                        <ImageCarousel images={carouselCurrentImages} exitHandler={showHideCarousel}/>
                    :
                        <></>
                }

                <div className="timelineSpecificContent">
                    {   
                        loadedContent.length > 0 && loadedContent.map((thisContent: string, i: number): JSX.Element => (
                            <TimelineSpecificContent typeValue={props.typeVal} content={content} index={i} key={i} showHideCarousel={showHideCarousel} carouselState={carouselState} setCarouselCurrentImages={setCarouselCurrentImages} clickAnywhereStatus={clickAnywhereStatus} changeClickAnywhereStatus={changeClickAnywhereStatus} />
                        ))
                        
                    }
                </div>
    
            </div>
            <div className="endSpace"></div>
        </>
        
    )


};

export default TimelineSpecific;