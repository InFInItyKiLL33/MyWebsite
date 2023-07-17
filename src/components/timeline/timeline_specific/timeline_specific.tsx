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
import {TimelineSpecificProps} from "../../../declarations";

function TimelineSpecific(props: TimelineSpecificProps): JSX.Element {

    const DEFAULT_ICONS: Array<string> = [ProgrammingImgDefault, AviationImgDefault, PCBuildingImgDefault, DesignImgDefault];
    const HOVER_ICONS: Array<string> = [ProgrammingImgHover, AviationImgHover, PCBuildingImgHover, DesignImgHover];
    const ACTIVE_ICONS: Array<string>= [ProgrammingImgActive, AviationImgActive, PCBuildingImgActive, DesignImgActive];
    const INF_SCROLLER_INITIAL_AMT: number = 5;
    const INF_SCROLLER_LOAD_AMT: number = 2;
    const [content, setContent] = useState<any>(props.retrievedContent); // For each content, the order is as such: 0 -> image file, 1 -> Title, 2 -> Date, 3 -> Description, 4 (Optional) -> Hyperlink
    const [fadeoutContent, status] = useState<string>("active");
    const [sortText, setSortText] = useState<string>("Newest");
    const [loadedContent, setLoadedContent] = useState<Array<any>>([]);
    const [lastLoadedIndex, setLastLoadedIndex] = useState<number>(INF_SCROLLER_INITIAL_AMT - INF_SCROLLER_LOAD_AMT);
    const [carouselState, setCarouselState] = useState<boolean>(false); // false for hide, true for show
    const [carouselCurrentImages, setCarouselCurrentImages] = useState<Array<string>>([]);
    const [clickAnywhereStatus, changeClickAnywhereStatus] = useState<string>("fadeInitialOpacity");
    
    // set whichever type value is active to the right image
    let tempTypeImage: Array<string> = [...DEFAULT_ICONS];
    tempTypeImage[props.typeVal] = ACTIVE_ICONS[props.typeVal];
    const [typeImage, setTypeImage] = useState<Array<string>>(tempTypeImage); // this needs to be here instead of TypeButtons component as I need to unactive the previous active type

    // the header options for timeline
    let skillButtons: Array<JSX.Element> = Object.keys(props.types).map((currentKey: string, i: number): JSX.Element => {
        let toOrange: string = props.typeVal === i ? "timelineChangerOrange" : "";
        if (props.allowedContent[i] !== 0) {
            return(
                <TypeButtons index={i} key={i} toOrange={toOrange} typeVal={props.typeVal} changeType={changeType} types={props.types} defaultIcons={DEFAULT_ICONS} hoverIcons={HOVER_ICONS} activeIcons={ACTIVE_ICONS} typeImage={typeImage} setTypeImage={setTypeImage} />
            );
        } else {
            return(<></>);
        };
    });

    function changeType(e: any): void { // click on type header
        let newType: number = parseInt(e.target.getAttribute("data-index"));
        props.fadeImage("fadeOutImage");
        status("disablePointer fadeOutTimelineContent");

        setTimeout(() => {
            props.changeImage(props.imageOptions[newType]);

            setTimeout(() => {
                status("disablePointer fadeInitialOpacity"); // for smoother transition
                props.setTypeVal(newType);
                emptyLoadedContent();

                setTimeout(() => {
                    props.fadeImage("active");
                    status("active");
                }, 400);

            }, 200);
            
        }, 200)
    };

    function changeSortDirection(): void { // sort

        // changes display text of sort & rerenders content
        sortText === "Newest" ? setSortText("Oldest") : setSortText("Newest");

        // reverses content
        let newContent: any = content;
        Object.keys(newContent).forEach((key) => {
            if (newContent[key] !== undefined) {
                newContent[key].reverse();
            };
        });
        setContent(newContent);

        // empty current content
        emptyLoadedContent();
    };

    function emptyLoadedContent(): void {
        setLoadedContent([]);
        setLastLoadedIndex(INF_SCROLLER_INITIAL_AMT);
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
                
                setLastLoadedIndex(prevIndex => Math.min(prevIndex + INF_SCROLLER_LOAD_AMT, content[props.typeVal].length));
            };
        };

        window.addEventListener('scroll', loadMoreContent);
        
        // gets new content
        (async () => {
            const newData: any = await content[props.typeVal].slice(loadedContent.length, lastLoadedIndex); // apparently async and await is needed even though it's not api, if not it doesn't work
            setLoadedContent((prevLoadedContent: any): any => [...prevLoadedContent, ...newData]);
        })()

        return () => window.removeEventListener('scroll', loadMoreContent);

    }, [lastLoadedIndex, sortText, props.typeVal]);  // eslint-disable-line react-hooks/exhaustive-deps
    
    return(

        <>
            {/* <button onClick={changeType} className={"timelineChanger fade bolded " + fadeoutContent}>{type}</button> */}
            <div className={"skillsButtonNavbar flex-row " + fadeoutContent} style={{"filter": "blur(" + (carouselState === true ? "4" : "0") + "px"}}>
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
                        <ImageCarousel images={carouselCurrentImages} exitHandler={showHideCarousel} getCookie={props.getCookie} />
                    :
                        <></>
                }

                <div className={"timelineSpecificContent " + (fadeoutContent !== "active" ? "fadeOutTimelineContent" : "")} style={{"filter": "blur(" + (carouselState === true ? "4" : "0") + "px"}}>
                    {   
                        loadedContent.length > 0 && loadedContent.map((thisContent: string, i: number): JSX.Element => (
                            <TimelineSpecificContent typeValue={props.typeVal} content={props.retrievedContent} index={i} key={i} showHideCarousel={showHideCarousel} carouselState={carouselState} setCarouselCurrentImages={setCarouselCurrentImages} clickAnywhereStatus={clickAnywhereStatus} changeClickAnywhereStatus={changeClickAnywhereStatus} retrievedContent={props.retrievedContent} getCookie={props.getCookie} />
                        ))
                        
                    }
                </div>
    
            </div>
            <div className="endSpace"></div>
        </>
        
    )


};

export default TimelineSpecific;