import React, { useState, useEffect } from 'react';
import BackgroundImage0 from "../../images/programmingbg.png";
import BackgroundImage1 from "../../images/aviationbg.jpg";
import BackgroundImage1Alt from "../../images/aviationbg2.png";
import BackgroundImage2 from "../../images/pcbuildingbg5.jpg";
import BackgroundImage2Alt from "../../images/pcbuildingbg4.jpg";
import BackgroundImage3 from "../../images/designbg.png";
import BackgroundImage3Alt from "../../images/jpjcinfocomm1-16_9.jpg";
import './timeline.sass';
import Navbar from "../navbar/navbar";
import TimelineInitial from "./timeline_initial/timeline_initial";
import TimelineSpecific from './timeline_specific/timeline_specific';
import TimelineProgrammingAnimation from "./timeline_initial/animations/programming/programming";
import TimelineAviationAnimation from "./timeline_initial/animations/aviation/aviation";
import TimelineDesignAnimation from "./timeline_initial/animations/design/design";
import TimelinePCBuildingAnimation from './timeline_initial/animations/pc_building/pc_building';
import {TimelineProps} from "../../declarations";

function Timeline(props: TimelineProps): JSX.Element {
    const INITIAL_TIMELINE = 0;

    const imageOptions = [BackgroundImage0, BackgroundImage1Alt, BackgroundImage2Alt, BackgroundImage3Alt];
    const imageInitialOptions = [BackgroundImage0, BackgroundImage1, BackgroundImage2, BackgroundImage3];
    const [typeVal, setTypeVal] = useState(INITIAL_TIMELINE); // 0 - 3
    const [fadeoutTimelineImage, setFadeoutTimelineImage] = useState("backgroundImage active")
    const [imageType, changeImageType] = useState(imageOptions[typeVal]);
    const [timelineState, changeTimelineState] = useState(0); // 0 - Initial, 1 - Specific
    const [transitionAnimation, changeTransitionAnimationState] = useState(0); // 0 - Disable, 1 - Run animation for type 1, 2 - for 2, etc..

    function renderAnimation() {
        switch(transitionAnimation) {
            case 1:
                return <TimelineProgrammingAnimation />

            case 2:
                return <TimelineAviationAnimation /> 

            case 3:
                return <TimelinePCBuildingAnimation></TimelinePCBuildingAnimation>
                
            case 4:
                return <TimelineDesignAnimation /> 

            default:
                return <></>
        };
    };

    useEffect(function(): void {
        // changeTransitionAnimationState(4); // For testing
    }, []);

    return(
        
        <div className="App">

            <div>

                <div className="timelineAnimationWrapper">
                    {renderAnimation()}
                </div>

                {
                    timelineState === 0 ? 
                        <div className="timelineInitialWrapper">
                            <Navbar page={props.page} />
                            {
                                props.allowedContentTypes.includes(-2) ? 
                                    <div className="loadingIconMain"></div>
                                : props.allowedContentTypes.includes(-3) ? 
                                    <div className="errorContactingServer flex-col flex-jc-centre">There was an error contacting the backend server. Refresh and try again.</div>
                                :
                                    <TimelineInitial types={props.types} imageOptions={imageOptions} imageInitialOptions={imageInitialOptions} setTypeVal={setTypeVal} changeTimelineState={changeTimelineState} changeImage={changeImageType} changeTransitionAnimationState={changeTransitionAnimationState} allowedContent={props.allowedContentTypes} />
                            }
                        </div>
                    : 
                        <>
                            <img src={imageType} className={"backgroundImage " + fadeoutTimelineImage} alt="timeline bg img" style={{"objectFit": typeVal === 3 ? "contain" : "cover"}}></img>
                            <Navbar page={props.page} />
                            <TimelineSpecific type="Programming" changeImage={changeImageType} fadeImage={setFadeoutTimelineImage} imageOptions={imageOptions} initialTimeline={INITIAL_TIMELINE} typeVal={typeVal} setTypeVal={setTypeVal} types={props.types} retrievedContent={props.retrievedContent} allowedContent={props.allowedContentTypes} getCookie={props.getCookie} />
                        </>
                }
                
            </div>

        </div>

    )

};

export default Timeline;