import React, { useEffect, useState } from "react";
import PowerCables from "./power_cables";
import PowerHoles from "./power_holes";
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

    const [rescaleValue, setRescaleValue] = useState(window.innerWidth / 2560);
    const [marginValues, setMarginValues] = useState(["25vh", "24vw"]);

    const checkCPUEmptyHole = (index1: number, index2: number): boolean => {
        // center holes
        if (index1 >= 13 && index2 >= 13 && index1 <= 25 && index2 <= 25) return true;
        // other holes
        for (let i = 0; i < ignoredCPUHoles.length; i++) {
            if (index1 === ignoredCPUHoles[i][0] && index2 === ignoredCPUHoles[i][1]) return true;
        };

        return false;
    };

    const getPowerCable = (quantity:number, width: number, height: number, marginTop: number, marginLeft: number): JSX.Element => {
        return(
            <>
                {
                    Array(quantity).fill("").map((each2: string, index2: number): JSX.Element => {
                        return(
                            <PowerCables width={width} height={height} marginTop={marginTop} marginLeft={marginLeft}></PowerCables>
                        );
                    })
                }
            </>
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const rescaleTimeout = setTimeout(() => {
            setMarginValues(["-710.4px", "0px"]);
            setRescaleValue(rescaleValue * 5.12);
            clearTimeout(rescaleTimeout);
        }, 3050)
    }, []);

    return (
        <div className="wholeSetup" style={{"transform": "translateX(" + marginValues[1] + ") translateY(" + marginValues[0] + ") scale(" + String(rescaleValue) + ")"}}>

            <div className="wholePC">
                <div className="case">
    
                    <div className="caseBack"></div>
    
                    <div className="caseFansTop flex-row">
                        <div className="caseFans fan-1">
                            <div className="caseFanTopSides"></div>
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="caseFanTop">
                                <g filter="url(#filter0_d_106_14)">
                                <g className="rotatableFan">
                                    <g filter="url(#filter1_d_106_14)">
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" fill="#888888"/>
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter2_d_106_14)">
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" fill="#888888"/>
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter3_d_106_14)">
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" fill="#888888"/>
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter4_d_106_14)">
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" fill="#888888"/>
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter5_d_106_14)">
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" fill="#888888"/>
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter6_d_106_14)">
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" fill="#888888"/>
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter7_d_106_14)">
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" fill="#888888"/>
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" stroke="black"/>
                                    </g>
                                    <circle cx="150" cy="150" r="47.5" fill="#666666" stroke="#AAAAAA" stroke-width="5"/>
                                </g>
                                <g filter="url(#filter8_d_106_14)">
                                <circle cx="150" cy="150" r="107.5" stroke="#555555" stroke-width="15" shape-rendering="crispEdges"/>
                                </g>
                                <rect x="37.5" y="37.5" width="225" height="225" stroke="#444444" stroke-width="15" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_106_14" x="0" y="0" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter1_d_106_14" x="143" y="51.5" width="79.5" height="81.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter2_d_106_14" x="181.849" y="102.412" width="76.3913" height="73.9913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter3_d_106_14" x="164.542" y="155.209" width="83.9596" height="83.3386" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter4_d_106_14" x="115.929" y="188.974" width="68.9089" height="70.9686" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter5_d_106_14" x="57.0227" y="154.89" width="84.0219" height="83.2221" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter6_d_106_14" x="47.4405" y="101.113" width="76.084" height="74.1274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter7_d_106_14" x="83.1015" y="51.5418" width="79.3052" height="81.4736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter8_d_106_14" x="5" y="5" width="290" height="290" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_106_14"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="10"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
        
                        <div className="caseFans fan-2">
                            <div className="caseFanTopSides"></div>
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="caseFanTop">
                                <g filter="url(#filter0_d_106_14)">
                                <g className="rotatableFan">
                                    <g filter="url(#filter1_d_106_14)">
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" fill="#888888"/>
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter2_d_106_14)">
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" fill="#888888"/>
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter3_d_106_14)">
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" fill="#888888"/>
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter4_d_106_14)">
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" fill="#888888"/>
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter5_d_106_14)">
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" fill="#888888"/>
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter6_d_106_14)">
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" fill="#888888"/>
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter7_d_106_14)">
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" fill="#888888"/>
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" stroke="black"/>
                                    </g>
                                    <circle cx="150" cy="150" r="47.5" fill="#666666" stroke="#AAAAAA" stroke-width="5"/>
                                </g>
                                <g filter="url(#filter8_d_106_14)">
                                <circle cx="150" cy="150" r="107.5" stroke="#555555" stroke-width="15" shape-rendering="crispEdges"/>
                                </g>
                                <rect x="37.5" y="37.5" width="225" height="225" stroke="#444444" stroke-width="15" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_106_14" x="0" y="0" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter1_d_106_14" x="143" y="51.5" width="79.5" height="81.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter2_d_106_14" x="181.849" y="102.412" width="76.3913" height="73.9913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter3_d_106_14" x="164.542" y="155.209" width="83.9596" height="83.3386" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter4_d_106_14" x="115.929" y="188.974" width="68.9089" height="70.9686" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter5_d_106_14" x="57.0227" y="154.89" width="84.0219" height="83.2221" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter6_d_106_14" x="47.4405" y="101.113" width="76.084" height="74.1274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter7_d_106_14" x="83.1015" y="51.5418" width="79.3052" height="81.4736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter8_d_106_14" x="5" y="5" width="290" height="290" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_106_14"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="10"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
        
                        <div className="caseFans fan-3">
                            <div className="caseFanTopSides"></div>
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="caseFanTop">
                                <g filter="url(#filter0_d_106_14)">
                                <g className="rotatableFan">
                                    <g filter="url(#filter1_d_106_14)">
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" fill="#888888"/>
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter2_d_106_14)">
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" fill="#888888"/>
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter3_d_106_14)">
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" fill="#888888"/>
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter4_d_106_14)">
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" fill="#888888"/>
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter5_d_106_14)">
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" fill="#888888"/>
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter6_d_106_14)">
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" fill="#888888"/>
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter7_d_106_14)">
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" fill="#888888"/>
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" stroke="black"/>
                                    </g>
                                    <circle cx="150" cy="150" r="47.5" fill="#666666" stroke="#AAAAAA" stroke-width="5"/>
                                </g>
                                <g filter="url(#filter8_d_106_14)">
                                <circle cx="150" cy="150" r="107.5" stroke="#555555" stroke-width="15" shape-rendering="crispEdges"/>
                                </g>
                                <rect x="37.5" y="37.5" width="225" height="225" stroke="#444444" stroke-width="15" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_106_14" x="0" y="0" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter1_d_106_14" x="143" y="51.5" width="79.5" height="81.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter2_d_106_14" x="181.849" y="102.412" width="76.3913" height="73.9913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter3_d_106_14" x="164.542" y="155.209" width="83.9596" height="83.3386" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter4_d_106_14" x="115.929" y="188.974" width="68.9089" height="70.9686" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter5_d_106_14" x="57.0227" y="154.89" width="84.0219" height="83.2221" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter6_d_106_14" x="47.4405" y="101.113" width="76.084" height="74.1274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter7_d_106_14" x="83.1015" y="51.5418" width="79.3052" height="81.4736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter8_d_106_14" x="5" y="5" width="290" height="290" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_106_14"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="10"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
    
                    <div className="caseFansRight flex-col">
                        <div className="caseFans fan-4">
                            <div className="caseFanRightSides"></div>
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="caseFanRight">
                                <g filter="url(#filter0_d_106_14)">
                                <g className="rotatableFan">
                                    <g filter="url(#filter1_d_106_14)">
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" fill="#888888"/>
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter2_d_106_14)">
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" fill="#888888"/>
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter3_d_106_14)">
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" fill="#888888"/>
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter4_d_106_14)">
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" fill="#888888"/>
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter5_d_106_14)">
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" fill="#888888"/>
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter6_d_106_14)">
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" fill="#888888"/>
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter7_d_106_14)">
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" fill="#888888"/>
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" stroke="black"/>
                                    </g>
                                    <circle cx="150" cy="150" r="47.5" fill="#666666" stroke="#AAAAAA" stroke-width="5"/>
                                </g>
                                <g filter="url(#filter8_d_106_14)">
                                <circle cx="150" cy="150" r="107.5" stroke="#555555" stroke-width="15" shape-rendering="crispEdges"/>
                                </g>
                                <rect x="37.5" y="37.5" width="225" height="225" stroke="#444444" stroke-width="15" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_106_14" x="0" y="0" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter1_d_106_14" x="143" y="51.5" width="79.5" height="81.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter2_d_106_14" x="181.849" y="102.412" width="76.3913" height="73.9913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter3_d_106_14" x="164.542" y="155.209" width="83.9596" height="83.3386" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter4_d_106_14" x="115.929" y="188.974" width="68.9089" height="70.9686" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter5_d_106_14" x="57.0227" y="154.89" width="84.0219" height="83.2221" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter6_d_106_14" x="47.4405" y="101.113" width="76.084" height="74.1274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter7_d_106_14" x="83.1015" y="51.5418" width="79.3052" height="81.4736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter8_d_106_14" x="5" y="5" width="290" height="290" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_106_14"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="10"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
    
                        <div className="caseFans fan-5">
                            <div className="caseFanRightSides"></div>
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="caseFanRight">
                                <g filter="url(#filter0_d_106_14)">
                                <g className="rotatableFan">
                                    <g filter="url(#filter1_d_106_14)">
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" fill="#888888"/>
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter2_d_106_14)">
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" fill="#888888"/>
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter3_d_106_14)">
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" fill="#888888"/>
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter4_d_106_14)">
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" fill="#888888"/>
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter5_d_106_14)">
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" fill="#888888"/>
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter6_d_106_14)">
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" fill="#888888"/>
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter7_d_106_14)">
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" fill="#888888"/>
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" stroke="black"/>
                                    </g>
                                    <circle cx="150" cy="150" r="47.5" fill="#666666" stroke="#AAAAAA" stroke-width="5"/>
                                </g>
                                <g filter="url(#filter8_d_106_14)">
                                <circle cx="150" cy="150" r="107.5" stroke="#555555" stroke-width="15" shape-rendering="crispEdges"/>
                                </g>
                                <rect x="37.5" y="37.5" width="225" height="225" stroke="#444444" stroke-width="15" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_106_14" x="0" y="0" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter1_d_106_14" x="143" y="51.5" width="79.5" height="81.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter2_d_106_14" x="181.849" y="102.412" width="76.3913" height="73.9913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter3_d_106_14" x="164.542" y="155.209" width="83.9596" height="83.3386" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter4_d_106_14" x="115.929" y="188.974" width="68.9089" height="70.9686" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter5_d_106_14" x="57.0227" y="154.89" width="84.0219" height="83.2221" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter6_d_106_14" x="47.4405" y="101.113" width="76.084" height="74.1274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter7_d_106_14" x="83.1015" y="51.5418" width="79.3052" height="81.4736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter8_d_106_14" x="5" y="5" width="290" height="290" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_106_14"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="10"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
    
                        <div className="caseFans fan-6">
                            <div className="caseFanRightSides"></div>
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="caseFanRight">
                                <g filter="url(#filter0_d_106_14)">
                                <g className="rotatableFan">
                                    <g filter="url(#filter1_d_106_14)">
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" fill="#888888"/>
                                    <path d="M171 57.5C171 72.5 160 93 150 100C173.5 104.5 189 119 189 119C206 106 209.5 87.5 209.5 76C195.833 61 171 57.5 171 57.5Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter2_d_106_14)">
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" fill="#888888"/>
                                    <path d="M235.165 108.412C223.442 117.77 200.558 121.963 188.849 118.515C199.993 139.688 198.331 160.848 198.331 160.848C219.097 166.023 235.739 157.217 244.726 150.042C247.923 130.003 235.165 108.412 235.165 108.412Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter3_d_106_14)">
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" fill="#888888"/>
                                    <path d="M235.501 191.103C220.874 187.78 203.321 172.512 198.71 161.209C189.115 183.128 171.542 195.031 171.542 195.031C180.452 214.488 197.717 222 208.931 224.548C226.586 214.544 235.501 191.103 235.501 191.103Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter4_d_106_14)">
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" fill="#888888"/>
                                    <path d="M171.429 242.509C164.901 229.005 165.882 205.761 171.838 195.106C148.722 201.283 128.457 194.974 128.457 194.974C118.809 214.077 123.71 232.256 128.715 242.61C147.548 250.167 171.429 242.509 171.429 242.509Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter5_d_106_14)">
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" fill="#888888"/>
                                    <path d="M90.6915 224.112C97.1963 210.596 115.998 196.894 128.045 194.923C108.821 180.677 101.142 160.89 101.142 160.89C80.1862 165.232 69.0098 180.384 64.0227 190.746C69.8325 210.189 90.6915 224.112 90.6915 224.112Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter6_d_106_14)">
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" fill="#888888"/>
                                    <path d="M54.5951 150.258C69.2166 146.909 91.6549 153.055 100.711 161.24C99.8508 137.329 110.524 118.983 110.524 118.983C94.0573 105.314 75.2428 106.032 64.0331 108.6C52.4628 125.27 54.5951 150.258 54.5951 150.258Z" stroke="black"/>
                                    </g>
                                    <g filter="url(#filter7_d_106_14)">
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" fill="#888888"/>
                                    <path d="M90.1015 76.0885C101.824 85.4467 110.983 106.833 110.215 119.015C128.393 103.457 149.395 100.39 149.395 100.39C149.841 78.9935 137.566 64.7164 128.579 57.5418C108.33 58.8644 90.1015 76.0885 90.1015 76.0885Z" stroke="black"/>
                                    </g>
                                    <circle cx="150" cy="150" r="47.5" fill="#666666" stroke="#AAAAAA" stroke-width="5"/>
                                </g>
                                <g filter="url(#filter8_d_106_14)">
                                <circle cx="150" cy="150" r="107.5" stroke="#555555" stroke-width="15" shape-rendering="crispEdges"/>
                                </g>
                                <rect x="37.5" y="37.5" width="225" height="225" stroke="#444444" stroke-width="15" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_106_14" x="0" y="0" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter1_d_106_14" x="143" y="51.5" width="79.5" height="81.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter2_d_106_14" x="181.849" y="102.412" width="76.3913" height="73.9913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter3_d_106_14" x="164.542" y="155.209" width="83.9596" height="83.3386" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter4_d_106_14" x="115.929" y="188.974" width="68.9089" height="70.9686" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter5_d_106_14" x="57.0227" y="154.89" width="84.0219" height="83.2221" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter6_d_106_14" x="47.4405" y="101.113" width="76.084" height="74.1274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter7_d_106_14" x="83.1015" y="51.5418" width="79.3052" height="81.4736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3" dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                <filter id="filter8_d_106_14" x="5" y="5" width="290" height="290" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_106_14"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="10"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_14"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_14" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
    
                    <div className="caseAccessoryShroud"></div>
                    <div className="caseTop"></div>
                    <div className="caseLeft"></div>
                    <div className="caseRight"></div>
                    <div className="caseRightSide"></div>
                    <div className="caseBottom"></div>
    
                    <div className="caseGlassCover"></div>
    
                </div>
    
                <div className="motherboard"> {/* Anything connected on it, not just the mobo */}
    
                    {/* Initial parts */}
    
                    <div className="heatsinks">
                        {/* Due to the way filter in css renders, 2 has to be before 1 to be under 1 */}
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
                        <div className="heatsinkSSD-1">
                            <div className="heatsinkSSD-1-streak-1 streaks"></div>
                            <div className="heatsinkSSD-1-streak-2 streaks"></div>
                            <div className="heatsinkSSD-1-streak-3 streaks"></div>
                        </div>
                        <div className="heatsinkSSD-2">
                            <div className="heatsinkSSD-2-streak-1 streaks"></div>
                            <div className="heatsinkSSD-2-streak-2 streaks"></div>
                            <div className="heatsinkSSD-2-streak-3 streaks"></div>
                        </div>
                        <div className="heatsinkController">
                            <div className="heatsinkController-streak-1 streaks"></div>
                            <div className="heatsinkController-streak-2 streaks"></div>
                        </div>
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
                        
                        {/* Power Holes */}
                        <div className="CPUPower flex-row">
                            <PowerHoles width={4} height={2} />
                        </div>
                        <div className="motherboardPower flex-row">
                            <PowerHoles width={2} height={12} />
                        </div>
    
                        {/* Power Cabling Holes for cables to go through */}
                        <div className="MoboPowerCablingHole"></div>
                        <div className="GPUPowerCablingHole"></div>
    
                        {/* Power Cables */}
                        <div className="CPUPowerCable">
                            <div className="flex-row">
                                {getPowerCable(4, 3, 20, -21, 1)}
                            </div>
                            <div className="flex-row">
                                {getPowerCable(4, 3, 20, -21, 1)}
                            </div>
                        </div>
    
                        <div className="MoboPowerCable">
                            <div className="flex-row">
                                <div className="flex-col index3">
                                    {getPowerCable(12, 30, 3, -4, 1)}
                                </div>
                                <div className="flex-col index2">
                                    {getPowerCable(12, 20, 3, -4, 1)}
                                </div>
                            </div>
                        </div>
                        
                        <div className="GPUPowerCable index5 flex-row">
                            <div className="flex-col GPUPowerCableEach">
                                <div className="flex-row">
                                    {getPowerCable(4, 3, 170, -4, 1)}
                                </div>
                                <div className="flex-row">
                                    {getPowerCable(4, 3, 190, -4, 1)}
                                </div>
                            </div>
                            <div className="flex-col GPUPowerCableEach">
                                <div className="flex-row">
                                    {getPowerCable(4, 3, 170, -4, 1)}
                                </div>
                                <div className="flex-row">
                                    {getPowerCable(4, 3, 190, -4, 1)}
                                </div>
                            </div>
                            <div className="flex-col GPUPowerCableEach">
                                <div className="flex-row">
                                    {getPowerCable(4, 3, 170, -4, 1)}
                                </div>
                                <div className="flex-row">
                                    {getPowerCable(4, 3, 190, -4, 1)}
                                </div>
                            </div>
                        </div>
    
                    </div>
    
                    {/* Animated parts below */}
    
                    <div className="CPU"></div>
    
                    <div className="RAM flex-row">
                        <div className="RAM-1 RAMS"></div>
                        <div className="RAM-2 RAMS"></div>
                        <div className="RAM-3 RAMS"></div>
                        <div className="RAM-4 RAMS"></div>
                    </div>
    
                    <div className="CPU-Cooler">
                        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_0_1)">
                            <path d="M146 32.5C146 47.5 135 68 125 75C148.5 79.5 164 94 164 94C181 81 184.5 62.5 184.5 51C170.833 36 146 32.5 146 32.5Z" fill="black"/>
                            <path d="M146 32.5C146 47.5 135 68 125 75C148.5 79.5 164 94 164 94C181 81 184.5 62.5 184.5 51C170.833 36 146 32.5 146 32.5Z" stroke="black"/>
                            </g>
                            <g filter="url(#filter1_d_0_1)">
                            <path d="M210.165 83.4119C198.442 92.7701 175.558 96.9629 163.849 93.5149C174.993 114.688 173.331 135.848 173.331 135.848C194.097 141.023 210.739 132.217 219.726 125.042C222.923 105.003 210.165 83.4119 210.165 83.4119Z" fill="black"/>
                            <path d="M210.165 83.4119C198.442 92.7701 175.558 96.9629 163.849 93.5149C174.993 114.688 173.331 135.848 173.331 135.848C194.097 141.023 210.739 132.217 219.726 125.042C222.923 105.003 210.165 83.4119 210.165 83.4119Z" stroke="black"/>
                            </g>
                            <g filter="url(#filter2_d_0_1)">
                            <path d="M210.501 166.103C195.874 162.78 178.321 147.512 173.71 136.209C164.115 158.128 146.542 170.031 146.542 170.031C155.452 189.488 172.717 197 183.931 199.548C201.586 189.544 210.501 166.103 210.501 166.103Z" fill="black"/>
                            <path d="M210.501 166.103C195.874 162.78 178.321 147.512 173.71 136.209C164.115 158.128 146.542 170.031 146.542 170.031C155.452 189.488 172.717 197 183.931 199.548C201.586 189.544 210.501 166.103 210.501 166.103Z" stroke="black"/>
                            </g>
                            <g filter="url(#filter3_d_0_1)">
                            <path d="M146.429 217.509C139.901 204.005 140.882 180.761 146.838 170.106C123.722 176.283 103.457 169.974 103.457 169.974C93.8091 189.077 98.7098 207.256 103.715 217.61C122.548 225.167 146.429 217.509 146.429 217.509Z" fill="black"/>
                            <path d="M146.429 217.509C139.901 204.005 140.882 180.761 146.838 170.106C123.722 176.283 103.457 169.974 103.457 169.974C93.8091 189.077 98.7098 207.256 103.715 217.61C122.548 225.167 146.429 217.509 146.429 217.509Z" stroke="black"/>
                            </g>
                            <g filter="url(#filter4_d_0_1)">
                            <path d="M65.6915 199.112C72.1964 185.596 90.9982 171.894 103.045 169.923C83.8208 155.677 76.1421 135.89 76.1421 135.89C55.1862 140.232 44.0098 155.384 39.0227 165.746C44.8325 185.189 65.6915 199.112 65.6915 199.112Z" fill="black"/>
                            <path d="M65.6915 199.112C72.1964 185.596 90.9982 171.894 103.045 169.923C83.8208 155.677 76.1421 135.89 76.1421 135.89C55.1862 140.232 44.0098 155.384 39.0227 165.746C44.8325 185.189 65.6915 199.112 65.6915 199.112Z" stroke="black"/>
                            </g>
                            <g filter="url(#filter5_d_0_1)">
                            <path d="M29.5951 125.258C44.2166 121.909 66.6549 128.055 75.7107 136.24C74.8508 112.329 85.5244 93.9826 85.5244 93.9826C69.0573 80.3139 50.2428 81.0324 39.0331 83.5998C27.4628 100.27 29.5951 125.258 29.5951 125.258Z" fill="black"/>
                            <path d="M29.5951 125.258C44.2166 121.909 66.6549 128.055 75.7107 136.24C74.8508 112.329 85.5244 93.9826 85.5244 93.9826C69.0573 80.3139 50.2428 81.0324 39.0331 83.5998C27.4628 100.27 29.5951 125.258 29.5951 125.258Z" stroke="black"/>
                            </g>
                            <g filter="url(#filter6_d_0_1)">
                            <path d="M65.1015 51.0885C76.8243 60.4467 85.9828 81.833 85.2146 94.0154C103.393 78.4571 124.395 75.3898 124.395 75.3898C124.841 53.9935 112.566 39.7164 103.579 32.5418C83.3298 33.8644 65.1015 51.0885 65.1015 51.0885Z" fill="black"/>
                            <path d="M65.1015 51.0885C76.8243 60.4467 85.9828 81.833 85.2146 94.0154C103.393 78.4571 124.395 75.3898 124.395 75.3898C124.841 53.9935 112.566 39.7164 103.579 32.5418C83.3298 33.8644 65.1015 51.0885 65.1015 51.0885Z" stroke="black"/>
                            </g>
                            <circle cx="125" cy="125" r="50" fill="#303030"/>
                            <path d="M105.79 130L110.425 119.5H113.35L118 130H114.91L111.28 120.955H112.45L108.82 130H105.79ZM108.325 127.96L109.09 125.77H114.22L114.985 127.96H108.325ZM118.842 130V119.5H121.287L125.637 126.64H124.347L128.577 119.5H131.022L131.052 130H128.322L128.292 123.655H128.757L125.592 128.965H124.272L121.017 123.655H121.587V130H118.842ZM133.154 130V119.5H138.119C139.279 119.5 140.299 119.715 141.179 120.145C142.059 120.575 142.744 121.18 143.234 121.96C143.734 122.74 143.984 123.67 143.984 124.75C143.984 125.82 143.734 126.75 143.234 127.54C142.744 128.32 142.059 128.925 141.179 129.355C140.299 129.785 139.279 130 138.119 130H133.154ZM136.124 127.63H137.999C138.599 127.63 139.119 127.52 139.559 127.3C140.009 127.07 140.359 126.74 140.609 126.31C140.859 125.87 140.984 125.35 140.984 124.75C140.984 124.14 140.859 123.62 140.609 123.19C140.359 122.76 140.009 122.435 139.559 122.215C139.119 121.985 138.599 121.87 137.999 121.87H136.124V127.63Z" fill="black"/>
                            <g filter="url(#filter7_d_0_1)">
                            <circle cx="125" cy="125" r="100" stroke="#0C0C0C" strokeWidth="10" shapeRendering="crispEdges"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_0_1" x="118" y="26.5" width="79.5" height="81.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="3" dy="4"/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            <filter id="filter1_d_0_1" x="156.849" y="77.4119" width="76.3913" height="73.9913" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="3" dy="4"/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            <filter id="filter2_d_0_1" x="139.542" y="130.209" width="83.9596" height="83.3386" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="3" dy="4"/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            <filter id="filter3_d_0_1" x="90.9295" y="163.974" width="68.9089" height="70.9686" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="3" dy="4"/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            <filter id="filter4_d_0_1" x="32.0227" y="129.89" width="84.0219" height="83.2221" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="3" dy="4"/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            <filter id="filter5_d_0_1" x="22.4405" y="76.1126" width="76.084" height="74.1274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="3" dy="4"/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            <filter id="filter6_d_0_1" x="58.1015" y="26.5418" width="79.3052" height="81.4736" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="3" dy="4"/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            <filter id="filter7_d_0_1" x="0" y="0" width="250" height="250" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
    
                    <div className="GPU">
                        <div className="GPUPCB"></div>
                        <div className="GPUHeatsink flex-row">
                            {
                                Array(100).fill("").map((eachVal: string, eachIndex: number): JSX.Element => {
                                    return(<div className="GPUIndividualHeatsink"></div>);
                                })
                            }
                        </div>
                        <div className="GPUPowerConnectors flex-row">
                            {
                                Array(3).fill("").map((eachVal: string, eachIndex: number): JSX.Element => {
                                    return(
                                        <div className="GPUPowerConnector flex-row">
                                            <PowerHoles width={4} height={2} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="GPUDecorativeShell">
                            <div className="GPUDecorativeShell1"></div> {/* behind PCB + bottom right of heatsink */}
                            <div className="GPUDecorativeShell2"></div> {/* GeForce RTX BG */}
                            <p className="GPUDecorativeShell2Text">GEFORCE RTX</p>
                            <div className="GPUDecorativeShell3"></div>  {/* right of PCB to right of heatsink */}
                            <div className="GPUDecorativeShell4"></div>  {/* crosses whole heatsink */}
                            <div className="GPUDecorativeShell5"></div>  {/* left of heatsink */}
                            <div className="GPUDecorativeShell6"></div>  {/* centre of heatsink to centre of lights */}
                            <div className="GPUDecorativeShell7"></div>  {/* LED Area */}
                            <div className="GPULEDs flex-row">
                                {
                                    Array(30).fill("").map((eachVal: string, eachIndex: number): JSX.Element => {
                                        return(
                                            <div className="GPULED" style={{"animation": "0.3s GPU-Lightup ease both " + String(eachIndex * -0.005 + 2.55) + "s"}}></div>
                                        );
                                    })
                                }
                            </div>
                            <div className="GPULEDCover1"></div>
                            <div className="GPULEDCover2"></div>
                            <div className="GPUDecorativeShell8"></div>  {/* Metal Bracket */}
                        </div>
                    </div>
    
                </div>
            </div>

            <div className="monitor">

                <div className="monitorScreen">
                    <div className="monitorScreenPanel flex-col">
                        <div className="loadingScreen"></div>
                    </div>
                </div>
                
                <div className="monitorStand"></div>

                <div className="monitorCable"></div>

            </div>

            <div className="table">
                <svg width="362" height="45" viewBox="0 0 362 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.76393 41.118C4.18741 41.965 5.05307 42.5 6 42.5H356C356.947 42.5 357.813 41.965 358.236 41.118C359.072 39.4459 358.999 37.5884 358.856 36.4399C358.778 35.8172 358.662 35.2784 358.566 34.8937C358.518 34.6997 358.473 34.5405 358.439 34.4245C358.421 34.3664 358.407 34.3187 358.395 34.2826L358.381 34.2371L358.376 34.221L358.374 34.2147L358.373 34.2119L358.372 34.2107C358.372 34.2101 358.372 34.2095 356 35L358.372 34.2095C358.032 33.1886 357.076 32.5 356 32.5H6C4.92392 32.5 3.96858 33.1886 3.62829 34.2094L6 35C3.62829 34.2094 3.62809 34.21 3.62789 34.2106L3.62747 34.2119L3.62656 34.2146L3.62446 34.221L3.61921 34.2371L3.60467 34.2826C3.59329 34.3187 3.57861 34.3663 3.56144 34.4244C3.52716 34.5405 3.48252 34.6997 3.43402 34.8937C3.33785 35.2783 3.22215 35.8172 3.14431 36.4399C3.00074 37.5884 2.92787 39.4459 3.76393 41.118Z" stroke="#AAAAAA" stroke-width="5" stroke-linejoin="round"/>
                    <path d="M31 2.5C30.2581 2.5 29.5544 2.82956 29.0794 3.39954L4.07945 33.3995C3.45844 34.1447 3.32458 35.1819 3.73603 36.0604C4.14748 36.9389 5.02996 37.5 6 37.5H356C356.97 37.5 357.853 36.9389 358.264 36.0604C358.675 35.1819 358.542 34.1447 357.921 33.3995L332.921 3.39954C332.446 2.82956 331.742 2.5 331 2.5H31Z" fill="#888888" stroke="#888888" stroke-width="5" stroke-linejoin="round"/>
                </svg>
            </div>

        </div>
    );
};

export default TimelinePCBuildingAnimation;