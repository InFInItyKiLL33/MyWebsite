import React, { useState, useEffect } from "react";
import { getGPUTier } from "detect-gpu";
import TimelineInitialTypes from "./timeline_initial_type";
import "./animations/timeline_initial_animation.sass";
import "./timeline_initial.sass"
import {TimelineInitialProps} from "../../../declarations";

function TimelineInitial(props: TimelineInitialProps): JSX.Element {
    
    const [timelineToFadeOut, setToFadeOut] = useState<Array<string>>(Array(Object.keys(props.types).length).fill(""));
    const [dataStateChanger, setDataState] = useState<number>(0);
    const [hwaEnabled, setHWAEnabled] = useState<boolean>(true);

    function staggeredFadeout(timerIndex: number, finalDelay: number): void {
        setTimeout(() => {
            setToFadeOut((prevTimelineFadeout) => {
                let timelineFadeoutSetter = prevTimelineFadeout;
                timelineFadeoutSetter[timerIndex] = "timelineFadeout " + (timerIndex % 2 === 0 ? "timelineUnloadTopDown" : "timelineUnloadBottomUp");
                return timelineFadeoutSetter;
            });
            setDataState(timerIndex + 1);
        }, finalDelay);
    };

    useEffect(() => {

        async function checkHWA(): Promise<void> {
            const gpuTier: any = await getGPUTier();
            setHWAEnabled(gpuTier["tier"] >= 2);
        };

        checkHWA();

    }, []);

    return(
        <>
            { hwaEnabled ? 
                <></> 
            :
                <div className="enableHWA">
                    <p>For the best experience, enable Hardware Acceleration and use a Laptop/Desktop</p>
                </div>
            }
            <div className="timelineInitialWrapper flex-row" data-state-changer={dataStateChanger}>
                {
                    props.allowedContent.reduce((partialSum: number, a: number): number => partialSum + a, 0) === 0 ? // checks if access are all 0
                        <div className="invalidUUID">
                            <p>You will need a valid UUID to view my content. Request one from me and include it in the URL parameters.</p>
                            {/* <p>You will need to accept Cookies to view this content. Click on the given link with UUID again to accept Cookies.</p> */}
                        </div>
                    : props.allowedContent.reduce((partialSum: number, a: number): number => partialSum + a, 0) === -8 ?
                            <></>
                    : Object.keys(props.types).map((thisKey: string, i: number): JSX.Element => {
                        return(
                            props.allowedContent[i] != 0 ?
                                <TimelineInitialTypes index={i} key={i} imageOptions={props.imageOptions} imageInitialOptions={props.imageInitialOptions} types={props.types} setTypeVal={props.setTypeVal} changeTimelineState={props.changeTimelineState} changeImage={props.changeImage} changeTransitionAnimationState={props.changeTransitionAnimationState} timelineToFadeOut={timelineToFadeOut} staggeredFadeout={staggeredFadeout} allowedContent={props.allowedContent} />
                            :
                                <div key={i}></div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default TimelineInitial;