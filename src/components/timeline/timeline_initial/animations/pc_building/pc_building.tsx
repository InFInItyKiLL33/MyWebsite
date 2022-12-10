import React from "react";
import "./pc_building.css";

function TimelinePCBuildingAnimation() {
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
                <div className="CPUSlot"></div>
                <div className="RAMSlot">
                    <div className="RAMSlot-1"></div>
                    <div className="RAMSlot-2"></div>
                    <div className="RAMSlot-3"></div>
                    <div className="RAMSlot-4"></div>
                </div>
                <div className="PCIESlots">
                    <div className="PCIESlots-1"></div>
                    <div className="PCIESlots-2"></div>
                    <div className="PCIESlots-3"></div>
                    <div className="PCIESlots-4"></div>
                    <div className="PCIESlots-5"></div>
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