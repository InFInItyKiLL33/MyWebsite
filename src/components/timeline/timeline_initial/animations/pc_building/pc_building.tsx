import React from "react";
import "./pc_building.css";

function TimelinePCBuildingAnimation() {

    const ignoredCPUHoles = [
        // corners
        [0, 0],
        [0, 1],
        [1, 0],
        [0, 37],
        [0, 38],
        [1, 38],
        [37, 0],
        [38, 0],
        [38, 1],
        [37, 38],
        [38, 37],
        [38, 38],
        // special
        [14, 9],
        [15, 9],
        [22, 9],
        [23, 9],
        [14, 29],
        [15, 29],
        [22, 29],
        [23, 29],
    ];

    const checkCPUEmptyHole = (index1: number, index2: number): boolean => {
        // center holes
        if (index1 >= 13 && index2 >= 13 && index1 <= 25 && index2 <= 25) {
            return true;
        };
        // other holes
        for (let i = 0; i < ignoredCPUHoles.length; i++) {
            if (index1 === ignoredCPUHoles[i][0] && index2 === ignoredCPUHoles[i][1]) {
                return true;
            };
        };
        return false;
    };

    return (
        <>
            <div className="motherboard">

                <div className="heatsinks">
                    {/* Due to the way filter renders, 2 has to be before 1 to be under 1 */}
                    <div className="heatsink-2">
                        <div className="heatsink-2-streak-1 streaks"></div>
                        <div className="heatsink-2-streak-2 streaks"></div>
                        <div className="heatsink-2-streak-3 streaks"></div>
                        <div className="heatsink-2-streak-4 streaks"></div>
                        <div className="heatsink-2-streak-5 streaks"></div>
                    </div>
                    <div className="heatsink-1">
                        <div className="heatsink-1-streak-1 streaks"></div>
                        <div className="heatsink-1-streak-2 streaks"></div>
                        <div className="heatsink-1-streak-3 streaks"></div>
                    </div>
                    <div className="heatsink-3">
                        <div className="heatsink-3-streak-1 streaks"></div>
                        <div className="heatsink-3-streak-2 streaks"></div>
                        <div className="heatsink-3-streak-3 streaks"></div>
                        <div className="heatsink-3-streak-4 streaks"></div>
                    </div>
                    <div className="heatsinkSSD-1"></div>
                    <div className="heatsinkController"></div>
                    <div className="heatsinkSSD-2"></div>
                </div>

                <div className="CPUSlot">
                    <div className="CPUGrid">
                        {
                            Array(39).fill("").map((each1: string, index1: number): JSX.Element => {
                                return(
                                    <div className="flex-row">
                                        {
                                            Array(39).fill("").map((each2: string, index2: number): JSX.Element => {
                                                return checkCPUEmptyHole(index1, index2) ? <div className="CPUHole emptyCPUHole"></div> : <div className="CPUHole"></div>
                                            })
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="RAMSlots flex-row">
                    <div className="RAMSlot RAMSlot-1"></div>
                    <div className="RAMSlot RAMSlot-2"></div>
                    <div className="RAMSlot RAMSlot-3"></div>
                    <div className="RAMSlot RAMSlot-4"></div>
                </div>

                <div className="PCIESlots">
                    <div className="PCIESlot x16 PCIESlot-1"></div>
                    <div className="PCIESlot x1 PCIESlot-2"></div>
                    <div className="PCIESlot x16 PCIESlot-3"></div>
                    <div className="PCIESlot x1 PCIESlot-4"></div>
                    <div className="PCIESlot x1 PCIESlot-5"></div>
                </div>

                <div className="powerConnectors">
                    <div className="CPUPower"></div>
                    <div className="motherboardPower"></div>
                </div>

            </div>
        </>
    );
};

export default TimelinePCBuildingAnimation;