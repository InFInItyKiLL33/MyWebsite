import React, { useState, useEffect } from "react";
import { getGPUTier } from "detect-gpu";
import TimelineInitialTypes from "./timeline_initial_type";
import "./animations/timeline_initial_animation.sass";
import "./timeline_initial.sass"
import {TimelineInitialProps} from "../../../declarations";

function TimelineInitial(props: TimelineInitialProps): JSX.Element {
    
    const [timelineToFadeOut, setToFadeOut] = useState(Array(Object.keys(props.types).length).fill(""));
    const [dataStateChanger, setDataState] = useState(0);
    const [hwaEnabled, setHWAEnabled] = useState(true);

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
            const gpuTier = await getGPUTier();
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
                    Object.keys(props.types).map((thisKey: string, i: number): JSX.Element => {
                        return(
                            <TimelineInitialTypes index={i} key={i} imageOptions={props.imageOptions} imageInitialOptions={props.imageInitialOptions} types={props.types} setTypeVal={props.setTypeVal} changeTimelineState={props.changeTimelineState} changeImage={props.changeImage} changeTransitionAnimationState={props.changeTransitionAnimationState} timelineToFadeOut={timelineToFadeOut} staggeredFadeout={staggeredFadeout} />
                        );
                    })
                }
            </div>
        </>
    );
};

export default TimelineInitial;