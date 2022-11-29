import React, { useState } from "react";
import "./design.css";
import TimelineDesignAnimationBoxes from "./design_boxes";
import TimelineDesignSVGText from "./design_svg_text";
import TimelineDesignSVGTextPath from "./design_svg_text_path";

function TimelineDesignAnimation(props) {

    const colourPalette = ["#111", "#222", "#666", "#777", "#FFF", "#f06f4f", "#d64e2d"];
    const designTextScale = String((window.innerHeight) / (1080));

    return(
        <div className="timelineDesignAnim">

            <div className="timelineDesignAnimContentWrapper">
                
                {/* Design Text itself */}

                <div className="timelineDesignAnimText flex-row" style={{scale: designTextScale}}>

                    {/* D */}
                    <TimelineDesignSVGText classname="designSVGTextD" w="89" h="124" vbox="89" margin="-5px -10px 0px -10px">
                        <TimelineDesignSVGTextPath d="M12 12L12 112" animKeyframe="svgAnimateD1" />
                        <TimelineDesignSVGTextPath d="M12.5 12H27C52 12 77 37 77 62C77 87 52 112 27 112H12" animKeyframe="svgAnimateD2" />
                    </TimelineDesignSVGText>
    
                    {/* E */}
                    <TimelineDesignSVGText classname="designSVGTextE" w="84" h="124" vbox="84" margin="-5px -10px 0px -10px">
                        <TimelineDesignSVGTextPath d="M12 12L12 112" animKeyframe="svgAnimateE1" />
                        <TimelineDesignSVGTextPath d="M12 12H72" animKeyframe="svgAnimateE2" />
                        <TimelineDesignSVGTextPath d="M12 62H57" animKeyframe="svgAnimateE3" animDelay="0.1s" setOpacity="0" />
                        <TimelineDesignSVGTextPath d="M12 112H72" animKeyframe="svgAnimateE2" animDelay="0.2s" setOpacity="0" />
                    </TimelineDesignSVGText>
    
                    {/* S */}
                    <TimelineDesignSVGText classname="designSVGTextS" w="84" h="124" vbox="84" margin="-5px -10px 0px -10px">
                        <TimelineDesignSVGTextPath d="M72 37C72 24.5 59.5 12 42 12C24.5 12 12 24.5 12 37C12 62 42 62 42 62C42 62 72 62 72 87C72 99.5 59.5 112 42 112C24.5 112 12 99.5 12 87" animKeyframe="svgAnimateS1" animTime="3.4s" />
                    </TimelineDesignSVGText>
        
                    {/* I */}
                    <TimelineDesignSVGText classname="designSVGTextI" w="54" h="124" vbox="54" margin="-5px -10px 0px 0px">
                        <TimelineDesignSVGTextPath d="M12 12.5V112" animKeyframe="svgAnimateI1" />
                    </TimelineDesignSVGText>
    
                    {/* G */}
                    <TimelineDesignSVGText classname="designSVGTextG" w="84" h="124" vbox="84" margin="-5px -10px 0px -10px">
                        <TimelineDesignSVGTextPath d="M72 37C72 37 72 12 42 12C12 12 12 37 12 37L12.5 87C12.5 87 12 112.5 42 112C72 111.5 72 87 72 87V67" animKeyframe="svgAnimateG1" />
                        <TimelineDesignSVGTextPath d="M71.5 67H49.5" animKeyframe="svgAnimateG2" />
                    </TimelineDesignSVGText>

                    {/* N */}
                    <TimelineDesignSVGText classname="designSVGTextN" w="84" h="124" vbox="84" margin="-5px -10px 0px -10px">
                        <TimelineDesignSVGTextPath d="M13 13L13 113" animKeyframe="svgAnimateN1" />
                        <TimelineDesignSVGTextPath d="M73 13L73 113" animKeyframe="svgAnimateN1" />
                        <TimelineDesignSVGTextPath d="M13 13L73 113" animKeyframe="svgAnimateN2" />
                    </TimelineDesignSVGText>

                </div>

                {/* Fake Searchbar */}

                <div className="timelineDesignAnimContent1">
                    <div className="timelineDesignAnimSearchbar flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="timelineDesignAnimSearchbarIcon">
                            <path d="M39.7 43.2 26.3 29.8q-1.5 1.15-3.425 1.8-1.925.65-4.225.65-5.75 0-9.675-3.925Q5.05 24.4 5.05 18.75q0-5.65 3.925-9.575Q12.9 5.25 18.55 5.25q5.65 0 9.575 3.925Q32.05 13.1 32.05 18.75q0 2.3-.65 4.175T29.5 26.5L43 39.9ZM18.55 27.7q3.8 0 6.375-2.575T27.5 18.75q0-3.75-2.575-6.35Q22.35 9.8 18.6 9.8q-3.85 0-6.425 2.6Q9.6 15 9.6 18.75q0 3.8 2.575 6.375T18.55 27.7Z"/>
                        </svg>
                    </div>
                </div>
                
                {/* Cards */}

                <div className="timelineDesignAnimContent2 flex-row">
    
                    <div className="timelineDesignAnimContent2Col1 flex-col"> 

                        {/* Profile looking card */}
    
                        <TimelineDesignAnimationBoxes width="20vw" height="30vh" ml="2.5vw" mt="7.5vh" br="10px" bgColour="rgb(35, 35, 35)" boxShadow="2px 2px 4px 2px rgba(60, 60, 60, 0.6)">

                            <div className="flex-row timelineDesignAnimCircle1">
                                <TimelineDesignAnimationBoxes width="max(30px, 2.5vw)" height="max(30px, 2.5vw)" ml="max(10px, 1.5vw)" mt="max(10px, 1.5vw)" bgColour={colourPalette[5]} br="50%" anim="0.6s col1box1Part1 ease 0s both, 0.6s col1box1Part2 ease 2.2s forwards" />
                                <TimelineDesignAnimationBoxes width="12.5vw" height="max(18px, 1.5vw)" ml="max(calc(40px), 6vw)" mt="max(6px, 0.5vw)" bgColour={colourPalette[3]} br="15px" anim="0.6s col1box2Part1 ease 0s both, 0.6s col1box2Part2 ease 2.2s forwards" />
                            </div>
    
                            <TimelineDesignAnimationBoxes width="max(50px, 100%)" height="5vh" ml="0" mt="calc(18vh + max(10px, 1.5vw))" br="10px" bgColour={colourPalette[6]} anim="0.6s col1box3Part1 ease 0s both, 0.6s col1box3Part2 ease 2.2s forwards" />

                        </TimelineDesignAnimationBoxes>

                        {/* Multi Pictures looking card */}

                        <TimelineDesignAnimationBoxes width="20vw" height="50vh" ml="2.5vw" mt="7.5vh" br="10px" bgColour={colourPalette[6]} boxShadow="2px 2px 4px 2px rgba(60, 60, 60, 0.6)">

                            <TimelineDesignAnimationBoxes width="100%" height="42.5vh" mt="7.5vh" bgColour={colourPalette[1]} anim="1s col1box4Part1 ease 0s both, 1s col1box4Part2 ease 2.4s forwards"> 

                                <div className="flex-row">
                                    <TimelineDesignAnimationBoxes width="50%" height="10vh" mt="3vh" ml="8%" bgColour={colourPalette[3]} br="15px" anim="1s col1box5Part1 ease 0.3s both, 1s col1box5Part2 ease 2.1s forwards"/>
                                    <TimelineDesignAnimationBoxes width="25%" height="10vh" mt="3vh" ml="8%" bgColour={colourPalette[3]} br="15px" anim="1s col1box6Part1 ease 0.3s both, 1s col1box6Part2 ease 2.1s forwards"/>
                                </div>

                                <TimelineDesignAnimationBoxes width="80%" height="7vh" mt="3vh" ml="10%" bgColour={colourPalette[3]} br="15px" anim="1s col1box7Part1 ease 0.3s both, 1s col1box7Part2 ease 2.1s forwards"/>
                                <TimelineDesignAnimationBoxes width="30%" height="3vh" mt="3vh" ml="10%" bgColour={colourPalette[3]} br="15px" anim="1s col1box8Part1 ease 0.3s both, 1s col1box8Part2 ease 2.1s forwards"/>

                            </TimelineDesignAnimationBoxes>

                        </TimelineDesignAnimationBoxes>
    
                    </div>
    
                    <div className="timelineDesignAnimContent2Col2 flex-col">

                        {/* Placeholder Picture card */}

                        <TimelineDesignAnimationBoxes width="max(150px, 20vw)" height="max(400px, 60vh)" ml="5vw" mt="17.5vh" br="10px" bgColour="rgb(35, 35, 35)" boxShadow="4px 4px 4px 2px rgba(60, 60, 60, 0.6)"> 
        
                            <TimelineDesignAnimationBoxes id="2" width="max(50px, 100%)" height="25vh" ml="0" mt="0" br="10px" bgColour={colourPalette[0]} textAlign="center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="timelineDesignAnimPlaceholderImg">
                                    <path d="M9.45 43.1q-1.85 0-3.2-1.35t-1.35-3.2V9.45q0-1.9 1.35-3.25t3.2-1.35h29.1q1.9 0 3.25 1.35t1.35 3.25v29.1q0 1.85-1.35 3.2t-3.25 1.35Zm1.8-8.6H36.8l-7.9-10.85-6.6 8.5-4.65-6.35Z"/>
                                </svg>
                            </TimelineDesignAnimationBoxes>
                            <TimelineDesignAnimationBoxes width="max(50px, 15vw)" height="30px" ml="3.5vw" mt="2vh" br="20px" bgColour={colourPalette[5]} anim="0.9s col2box1Part1 ease 0s both, 0.75s col2box1Part2 ease 2.6s forwards" />
                            <TimelineDesignAnimationBoxes width="max(50px, 14.5vw)" height="max(20px, 15vh)" ml="4vw" mt="2.5vh" br="20px" bgColour={colourPalette[2]} anim="0.9s col2box2Part1 ease 0.2s both, 0.8s col2box2Part2 ease 2.4s forwards" />
                            <TimelineDesignAnimationBoxes width="max(50px, 15vw)" height="20px" ml="3.5vw" mt="2.5vh" br="20px" bgColour={colourPalette[3]} anim="0.8s col2box1Part1 ease 0.6s both, 0.8s col2box1Part2 ease 2.2s forwards" />
                            <TimelineDesignAnimationBoxes width="max(50px, 13vw)" height="20px" ml="5.5vw" mt="1.5vh" br="20px" bgColour={colourPalette[5]} anim="0.8s col2box4Part1 ease 1s both, 0.8s col2box4Part2 ease 2s forwards" />
                            
                        </TimelineDesignAnimationBoxes>

                    </div>

                    <div className="timelineDesignAnimContent2Col3 flex-col">

                        {/* Pie Chart card */}

                        <TimelineDesignAnimationBoxes width="max(150px, 20vw)" height="40vh" ml="3vw" mt="-15vh" br="10px" bgColour={colourPalette[0]} boxShadow="4px 4px 4px 2px rgba(60, 60, 60, 0.6)">

                            <div className="pieChart"></div>

                            <div className="pageDots flex-row flex-jc-space-a">
                                <TimelineDesignAnimationBoxes br="50%" height="1vh" width="auto" ar="1" ml="40%" mt="3vh" bgColour={colourPalette[2]} anim="0.5s fadeIn ease 0s both, 0.5s fadeOut ease 1.8s forwards" />
                                <TimelineDesignAnimationBoxes br="50%" height="1vh" width="auto" ar="1" mt="3vh" bgColour={colourPalette[4]} anim="0.5s fadeIn ease 0.2s both, 0.5s fadeOut ease 2.0s forwards" />
                                <TimelineDesignAnimationBoxes br="50%" height="1vh" width="auto" ar="1" mr="40%" mt="3vh" bgColour={colourPalette[2]} anim="0.5s fadeIn ease 0.4s both, 0.5s fadeOut ease 2.2s forwards" />
                            </div>

                            <TimelineDesignAnimationBoxes br="15px" height="3vh" width="80%" ml="10%" mt="3vh" bgColour={colourPalette[2]} anim="0.8s col3box1Part1 ease 0s both, 0.8s col3box1Part2 ease 2.0s forwards" />

                        </TimelineDesignAnimationBoxes>

                        {/* Wave card */}

                        <TimelineDesignAnimationBoxes width="max(150px, 20vw)" height="27.5vh" ml="3vw" mt="5vh" overflow="hidden" br="15px" boxShadow="4px 4px 4px 2px rgba(60, 60, 60, 0.6)">
                            <div className="timelineDesignAnimContent2col3row2BG" style={{overflow: "hidden", transformOrigin: "0 0", scale: String(window.innerHeight/720)}}>
                                <svg viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" style={{scale: "0.325", transformOrigin: "0 0"}}>
                                    <rect x="0" y="0" width="900" height="600" fill={colourPalette[0]}></rect>
                                    <path d="M0 363L16.7 364C33.3 365 66.7 367 100 375.7C133.3 384.3 166.7 399.7 200 404.8C233.3 410 266.7 405 300 401.7C333.3 398.3 366.7 396.7 400 396.3C433.3 396 466.7 397 500 391.2C533.3 385.3 566.7 372.7 600 374C633.3 375.3 666.7 390.7 700 396C733.3 401.3 766.7 396.7 800 387.8C833.3 379 866.7 366 883.3 359.5L900 353L900 601L883.3 601C866.7 601 833.3 601 800 601C766.7 601 733.3 601 700 601C666.7 601 633.3 601 600 601C566.7 601 533.3 601 500 601C466.7 601 433.3 601 400 601C366.7 601 333.3 601 300 601C266.7 601 233.3 601 200 601C166.7 601 133.3 601 100 601C66.7 601 33.3 601 16.7 601L0 601Z" fill="#fa7268" style={{animation: "1.3s col3WavesPart1 linear 0s both, 1.3s col3WavesPart2 linear 1.3s forwards"}}></path>
                                    <path d="M0 424L16.7 426.5C33.3 429 66.7 434 100 435C133.3 436 166.7 433 200 430.7C233.3 428.3 266.7 426.7 300 423.8C333.3 421 366.7 417 400 411.3C433.3 405.7 466.7 398.3 500 398.2C533.3 398 566.7 405 600 407C633.3 409 666.7 406 700 410.3C733.3 414.7 766.7 426.3 800 429.8C833.3 433.3 866.7 428.7 883.3 426.3L900 424L900 601L883.3 601C866.7 601 833.3 601 800 601C766.7 601 733.3 601 700 601C666.7 601 633.3 601 600 601C566.7 601 533.3 601 500 601C466.7 601 433.3 601 400 601C366.7 601 333.3 601 300 601C266.7 601 233.3 601 200 601C166.7 601 133.3 601 100 601C66.7 601 33.3 601 16.7 601L0 601Z" fill="#f16367" style={{animation: "1.3s col3WavesPart3 linear 0s both, 1.3s col3WavesPart4 linear 1.3s forwards"}}></path>
                                    <path d="M0 466L16.7 467.5C33.3 469 66.7 472 100 471.2C133.3 470.3 166.7 465.7 200 465.5C233.3 465.3 266.7 469.7 300 472.3C333.3 475 366.7 476 400 476.8C433.3 477.7 466.7 478.3 500 471.5C533.3 464.7 566.7 450.3 600 442.8C633.3 435.3 666.7 434.7 700 434.7C733.3 434.7 766.7 435.3 800 439C833.3 442.7 866.7 449.3 883.3 452.7L900 456L900 601L883.3 601C866.7 601 833.3 601 800 601C766.7 601 733.3 601 700 601C666.7 601 633.3 601 600 601C566.7 601 533.3 601 500 601C466.7 601 433.3 601 400 601C366.7 601 333.3 601 300 601C266.7 601 233.3 601 200 601C166.7 601 133.3 601 100 601C66.7 601 33.3 601 16.7 601L0 601Z" fill="#e85467" style={{animation: "1.3s col3WavesPart1 linear 0s both, 1.3s col3WavesPart2 linear 1.3s forwards"}}></path>
                                    <path d="M0 470L16.7 473.3C33.3 476.7 66.7 483.3 100 483.3C133.3 483.3 166.7 476.7 200 473C233.3 469.3 266.7 468.7 300 469.5C333.3 470.3 366.7 472.7 400 472.8C433.3 473 466.7 471 500 471C533.3 471 566.7 473 600 475C633.3 477 666.7 479 700 482.3C733.3 485.7 766.7 490.3 800 494.2C833.3 498 866.7 501 883.3 502.5L900 504L900 601L883.3 601C866.7 601 833.3 601 800 601C766.7 601 733.3 601 700 601C666.7 601 633.3 601 600 601C566.7 601 533.3 601 500 601C466.7 601 433.3 601 400 601C366.7 601 333.3 601 300 601C266.7 601 233.3 601 200 601C166.7 601 133.3 601 100 601C66.7 601 33.3 601 16.7 601L0 601Z" fill="#de4467" style={{animation: "1.3s col3WavesPart3 linear 0s both, 1.3s col3WavesPart4 linear 1.3s forwards"}}></path>
                                    <path d="M0 532L16.7 533.5C33.3 535 66.7 538 100 537.8C133.3 537.7 166.7 534.3 200 533.2C233.3 532 266.7 533 300 528.8C333.3 524.7 366.7 515.3 400 515.7C433.3 516 466.7 526 500 530.5C533.3 535 566.7 534 600 528.8C633.3 523.7 666.7 514.3 700 512.3C733.3 510.3 766.7 515.7 800 521.3C833.3 527 866.7 533 883.3 536L900 539L900 601L883.3 601C866.7 601 833.3 601 800 601C766.7 601 733.3 601 700 601C666.7 601 633.3 601 600 601C566.7 601 533.3 601 500 601C466.7 601 433.3 601 400 601C366.7 601 333.3 601 300 601C266.7 601 233.3 601 200 601C166.7 601 133.3 601 100 601C66.7 601 33.3 601 16.7 601L0 601Z" fill="#d23467" style={{animation: "1.3s col3WavesPart1 linear 0s both, 1.3s col3WavesPart2 linear 1.3s forwards"}}></path>
                                    <path d="M0 550L16.7 551.7C33.3 553.3 66.7 556.7 100 559.5C133.3 562.3 166.7 564.7 200 564.5C233.3 564.3 266.7 561.7 300 560.7C333.3 559.7 366.7 560.3 400 562.7C433.3 565 466.7 569 500 565.7C533.3 562.3 566.7 551.7 600 551.3C633.3 551 666.7 561 700 562.8C733.3 564.7 766.7 558.3 800 558C833.3 557.7 866.7 563.3 883.3 566.2L900 569L900 601L883.3 601C866.7 601 833.3 601 800 601C766.7 601 733.3 601 700 601C666.7 601 633.3 601 600 601C566.7 601 533.3 601 500 601C466.7 601 433.3 601 400 601C366.7 601 333.3 601 300 601C266.7 601 233.3 601 200 601C166.7 601 133.3 601 100 601C66.7 601 33.3 601 16.7 601L0 601Z" fill="#c62368" style={{animation: "1.3s col3WavesPart3 linear 0s both, 1.3s col3WavesPart4 linear 1.3s forwards"}}></path>
                                </svg>
                            </div>
                        </TimelineDesignAnimationBoxes>

                    </div>

                    <div className="timelineDesignAnimContent2Col4 flex-col">

                        {/* Line Chart card */}

                        <TimelineDesignAnimationBoxes width="max(150px, 20vw)" height="40vh" ml="2.5vw" mt="0vh" br="10px" bgColour={colourPalette[0]} boxShadow="4px 4px 4px 2px rgba(60, 60, 60, 0.6)">

                            <div className="pageDots" style={{marginTop: "7.5vh"}}>

                                <div className="lineGraphSVG text-c" style={{scale: String(window.innerHeight/1440)}}>
                                    <svg width="192" height="100" viewBox="0 0 192 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{scale: "1.5"}}>
                                        <path d="M9 45L37 79L60 7L75 54L109 94L136 60L171 42" stroke={colourPalette[4]} stroke-width="4" stroke-linejoin="round" style={{animation: "2.5s lineGraph cubic-bezier(.5, 0, .5, 1) 0s both, 1s fadeIn cubic-bezier(.5, 0, .5, 1), 0.5s fadeOut cubic-bezier(.5, 0, .5, 1) 3.5s forwards"}}/>
                                        <circle cx="9" cy="45" r="6" fill={colourPalette[5]} style={{animation: "0.5s fadeIn ease 0s both, 0.5s fadeOut ease 1.4s forwards"}}/>
                                        <circle cx="37" cy="79" r="6" fill={colourPalette[5]} style={{animation: "0.5s fadeIn ease 0.2s both, 0.5s fadeOut ease 1.55s forwards"}}/>
                                        <circle cx="60" cy="7" r="7" fill={colourPalette[5]} style={{animation: "0.5s fadeIn ease 0.35s both, 0.75s fadeOut ease 1.8s forwards"}}/>
                                        <circle cx="75" cy="54" r="5" fill={colourPalette[5]} style={{animation: "0.5s fadeIn ease 0.45s both, 0.75s fadeOut ease 1.85s forwards"}}/>
                                        <circle cx="109" cy="94" r="6" fill={colourPalette[5]} style={{animation: "0.5s fadeIn ease 0.5s both, 0.5s fadeOut ease 1.875s forwards"}}/>
                                        <circle cx="136" cy="60" r="4" fill={colourPalette[5]} style={{animation: "0.5s fadeIn ease .625s both, 0.5s fadeOut ease 2s forwards"}}/>
                                        <circle cx="171" cy="42" r="6" fill={colourPalette[5]} style={{animation: "0.5s fadeIn ease 0.825s both, 0.4s fadeOut ease 2.25s forwards"}}/>
                                    </svg>
                                </div>

                                <TimelineDesignAnimationBoxes br="15px" height="3vh" width="60%" ml="20%" mt="7.5vh" bgColour={colourPalette[2]} anim="0.8s col4box1Part1 ease 0.2s both, 0.8s col4box1Part2 ease 2s forwards" />
                                <TimelineDesignAnimationBoxes br="15px" height="1.5vh" width="30%" ml="35%" mt="2vh" bgColour={colourPalette[2]} anim="0.8s col4box2Part1 ease 0.5s both, 0.8s col4box2Part2 ease 1.7s forwards" />

                            </div>

                        </TimelineDesignAnimationBoxes>

                    </div>
    
                </div>
            </div>

        </div>
    );

};

export default TimelineDesignAnimation;