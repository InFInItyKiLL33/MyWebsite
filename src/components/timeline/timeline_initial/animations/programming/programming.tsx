import React, { useState, useEffect } from "react";
import "./programming_animation.sass"

const TimelineProgrammingAnimation = () => {

    const SPACELESS_CHARS = "ABCDEF12345678901234567890██";
    const TEXT_CHAR = SPACELESS_CHARS + "            ";
    const TEXT_CHAR_LEN = TEXT_CHAR.length;
    const SPACELSS_CHARS_LEN = SPACELESS_CHARS.length;
    const TEXT_LIMIT = randomInt(Math.max(35, Math.round(120 * (window.innerWidth / 2160))), Math.min(235, Math.round(120 * (window.innerWidth / 2160)))) + 15;
    const TEXT_SIZE = Math.max(20, Math.round(40 * ((window.innerWidth * window.innerHeight) / (2160 * 1440))));
    const MAX_RECUR_DEPTH = 20;
    const [randText, setRandomText] = useState(randomArray(false));
    // eslint-disable-next-line
    const [randStyle, setRandomStyle] = useState(randomStyle()); // required to be a state for the animation to work properly
    const [recursionDepth, setRecursionDepth] = useState(0);
    
    function randomInt(min: number, max: number): number { // inclusive of both min and max
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function randomiseText(): string {
        let newRandomText = "";
        for (let j = 0; j < TEXT_LIMIT; j++) {
            newRandomText += TEXT_CHAR[randomInt(0, TEXT_CHAR_LEN - 1)];
        };
        return newRandomText;
    };

    function randomiseExistingText(text: string): string {
        let newRandomText = text;
        for (let j = 0; j < newRandomText.length; j++) {
            if (newRandomText[j] !== " ") {
                if (randomInt(0, 4) === 0) {
                    newRandomText = newRandomText.substring(0, j) + SPACELESS_CHARS[randomInt(0, SPACELSS_CHARS_LEN - 1)] + newRandomText.substring(j + 1);
                };
            };
        };
        return newRandomText;
    };

    function randomArray(randomiseChangeSome: boolean): any {
        return Array(TEXT_SIZE).fill("").map((eachPass: string, i: number): string => {
            return randomiseChangeSome ? (randomInt(0, 25) < 1 ? randText[i] : randomiseExistingText(randText[i])) : randomiseText();
        });
    };

    function randomStyle(): any {
        return Array(TEXT_SIZE).fill("").map((eachPass: string, i: number): any => {
            let randomFontAndBlurVal = randomInt(0, 20)/10;
            return {
                opacity: String(randomInt(0, 75)/100 + 0.25),
                animation: 
                    (
                        "programmingAnimAppear " + String(randomInt(0,75)/100 + 0.75) + "s ease " + String(randomInt(0, 10)/10) + "s, " 
                        + "programmingAnim" + (randomInt(0, 1) === 0 ? "LeftRight" : "RightLeft") + String(randomInt(0, 3) + 1) + " " + String(randomInt(0, 20)/10 + 7.0) + "s linear"
                    ),
                fontSize: String(randomFontAndBlurVal + 0.6) + "em",
                filter: "blur(" + 1.5 * (2.0 - randomFontAndBlurVal) + "px)",
                fontWeight: String(randomInt(0, 600) + 300),
                marginTop: String(randomInt(0, 1800)/10 - 90) + "vh",
                marginLeft: String(randomInt(0, 1700)/10 - 85) + "vw",
                color: randomInt(0, 1) === 0 ? "#f06f4fff" : "#f06f4f77"
            };
        });
    };


    useEffect(() => {
        
        let loopRandomiser = setTimeout(() => {
            // randomises array
            setRecursionDepth((prevRecursionDepth: number): number => (prevRecursionDepth + 1));
            setRandomText(randomArray(true)); 
        }, randomInt(0, 125) + 100);

        if (recursionDepth > MAX_RECUR_DEPTH) {
            clearTimeout(loopRandomiser);
        };
        
    }, [recursionDepth]); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="timelineProgrammingAnimWrapper">
            {
                Array(TEXT_SIZE).fill("").map((eachDisplayText: string, i: number): JSX.Element => {
                    return (
                        <div className={"timelineProgrammingAnimTextWrapper "} style={randStyle[i]} key={i} >
                            <p className="timelineProgrammingAnimText">{randText[i]}</p>
                        </div>
                    );
                })
            }
        </div>
    )
};

export default TimelineProgrammingAnimation;