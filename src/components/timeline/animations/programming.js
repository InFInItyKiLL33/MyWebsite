import React, { useState, useEffect } from "react";
import "./programming_animation.css"

function TimelineProgrammingAnimation(props) {

    const displayTextChoicesSpaceless = "ABCDEF12345678901234567890";
    const displayTextChoices = displayTextChoicesSpaceless + "            ";
    const displayTextChoicesLength = displayTextChoices.length;
    const displayTextChoicesSpacelessLength = displayTextChoicesSpaceless.length;
    const textLimit = randomInt(Math.max(35, parseInt(120 * (window.innerWidth / 2160))), Math.min(235, parseInt(120 * (window.innerWidth / 2160)))) + 15;
    const textSize = Math.max(20, parseInt(40 * ((window.innerWidth * window.innerHeight) / (2160 * 1440))));
    let displayTexts = [];  
    const [randText, setRandomText] = useState(randomArray(false));
    const [randStyle, setRandomStyle] = useState(randomStyle());

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function randomiseText() {
        let newRandomText = "";
        for (let j = 0; j < textLimit; j++) {
            newRandomText += displayTextChoices[randomInt(0, displayTextChoicesLength - 1)];
        };
        return newRandomText;
    };

    function randomiseExistingText(text) {
        let newRandomText = text;
        for (let j = 0; j < newRandomText.length; j++) {
            if (newRandomText[j] !== " ") {
                if (randomInt(0, 3) === 0) {
                    newRandomText = newRandomText.substring(0, j) + displayTextChoicesSpaceless[randomInt(0, displayTextChoicesSpacelessLength - 1)] + newRandomText.substring(j + 1);
                };
            }
        };
        return newRandomText;
    };

    function randomArray(randomiseChangeSome) {
        let finalArr = [];
        if (randomiseChangeSome === true) {
            for (let i = 0; i < textSize; i++) {
                if (randomInt(0, 9) < 5) {
                    finalArr.push(randText[i]);
                } else {
                    finalArr.push(randomiseExistingText(randText[i]));
                };
            };
        } else {
            for (let i = 0; i < textSize; i++) {
                finalArr.push(randomiseText());
            };
        };
        return finalArr;
    };

    function randomStyle() {
        let finalArr = [];
        for (let i = 0; i < textSize; i++) {
            finalArr.push({
                opacity: String(parseFloat(randomInt(0, 75)/100) + 0.25),
                animation: 
                    (
                        "programmingAnimAppear " + String(randomInt(0,75)/100 + 0.75) + "s ease " + String(randomInt(0, 10)/10) + "s, " 
                        + "programmingAnim" + (randomInt(0, 1) === 0 ? "LeftRight" : "RightLeft") + String(randomInt(0, 3) + 1) + " " + String(randomInt(0, 20)/10 + 7.0) + "s linear"
                    ),
                fontSize: String(randomInt(0, 20)/10 + 0.5) + "em",
                fontWeight: String(randomInt(0, 600) + 300),
                marginTop: String(randomInt(0, 2000)/10 - 100) + "vh",
                marginLeft: String(randomInt(0, 1700)/10 - 85) + "vw",
                color: randomInt(0, 1) === 0 ? "#f06f4fff" : "#f06f4f77"
            })
        };

        return finalArr;
        
    };

    function keepRandomisingArray(recursionDepth = 0) {
        setTimeout(function() {
            if (recursionDepth < 20) {
                setRandomText(randomArray(true));
                keepRandomisingArray(recursionDepth + 1);
            };
        }, randomInt(0, 125) + 125);
    };
    
    for (let i = 0; i < textSize; i++) {
        displayTexts.push(
            <div className={"timelineProgrammingAnimTextWrapper "} style={randStyle[i]}>
                <p className="timelineProgrammingAnimText">{randText[i]}</p>
            </div>
        );
    };

    useEffect(function() {
        keepRandomisingArray();
        // if (props.firstAnimationRender === 1) {
        //     props.changeFirstAnimationRender(0);
        // };
    }, []);

    return(
        <div className="timelineProgrammingAnimWrapper">
            {displayTexts}
        </div>
    )
};

export default TimelineProgrammingAnimation;