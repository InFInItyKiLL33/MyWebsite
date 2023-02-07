import React, { useState, useEffect } from "react";
import "./programming_animation.sass"

const TimelineProgrammingAnimation = () => {

    const displayTextCharsSpaceless = "ABCDEF12345678901234567890██";
    const displayTextChars = displayTextCharsSpaceless + "            ";
    const displayTextChoicesLength = displayTextChars.length;
    const displayTextChoicesSpacelessLength = displayTextCharsSpaceless.length;
    const textLimit = randomInt(Math.max(35, Math.round(120 * (window.innerWidth / 2160))), Math.min(235, Math.round(120 * (window.innerWidth / 2160)))) + 15;
    const textSize = Math.max(20, Math.round(40 * ((window.innerWidth * window.innerHeight) / (2160 * 1440))));
    const maxRecursionDepth = 20;
    const [randText, setRandomText] = useState(randomArray(false));
    const [randStyle, setRandomStyle] = useState(randomStyle());
    const [recursionDepth, setRecursionDepth] = useState(0);

    function randomInt(min: number, max: number): number { // inclusive of both min and max
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function randomiseText(): string {
        let newRandomText = "";
        for (let j = 0; j < textLimit; j++) {
            newRandomText += displayTextChars[randomInt(0, displayTextChoicesLength - 1)];
        };
        return newRandomText;
    };

    function randomiseExistingText(text: string): string {
        let newRandomText = text;
        for (let j = 0; j < newRandomText.length; j++) {
            if (newRandomText[j] !== " ") {
                if (randomInt(0, 4) === 0) {
                    newRandomText = newRandomText.substring(0, j) + displayTextCharsSpaceless[randomInt(0, displayTextChoicesSpacelessLength - 1)] + newRandomText.substring(j + 1);
                };
            };
        };
        return newRandomText;
    };

    function randomArray(randomiseChangeSome: boolean): any {
        return Array(textSize).fill("").map((eachPass: string, i: number): string => {
            switch (randomiseChangeSome) {
                case true:
                    return randomInt(0, 25) < 1 ? randText[i] : randomiseExistingText(randText[i]);
                case false:
                    return randomiseText();
            };
        });
    };

    function randomStyle(): any {
        return Array(textSize).fill("").map((eachPass: string, i: number): any => {
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
        if (recursionDepth > maxRecursionDepth) {
            clearTimeout(loopRandomiser);
        };
    }, [recursionDepth]);

    return(
        <div className="timelineProgrammingAnimWrapper">
            {
                Array(textSize).fill("").map((eachDisplayText: string, i: number): JSX.Element => {
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