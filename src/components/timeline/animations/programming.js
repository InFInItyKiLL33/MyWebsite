import React, { useState, useEffect } from "react";
import "./programming_animation.css"

function TimelineProgrammingAnimation(props) {

    const displayTextChoices = "ABCDEF12345678901234567890            ";
    const displayTextChoicesSpaceless = "ABCDEF12345678901234567890";
    const animClassChoices = ["programmingAnimLeftRight1", "programmingAnimLeftRight2", "programmingAnimLeftRight3", "programmingAnimRightLeft1", "programmingAnimRightLeft2", "programmingAnimRightLeft3"];
    const displayTextChoicesLength = displayTextChoices.length;
    const randTextSize = 60;
    let displayTexts = [];
    const [randText, setRandomText] = useState(randomArray(false));
    const [randAnim, setRandomAnim] = useState(randomAnimation());
    const [randStyle, setRandomStyle] = useState(randomStyle());

    function randomiseText() {
        let newRandomText = "";
        let textLimit = parseInt(Math.random() * 120) + 15;
        for (let j = 0; j < textLimit; j++) {
            newRandomText += displayTextChoices[parseInt(Math.random() * displayTextChoicesLength)];
        };
        return newRandomText;
    };

    function randomiseExistingText(text) {
        let newRandomText = "";
        for (let j = 0; j < text.length; j++) {
            if (text[j] == " ") {
                newRandomText += " ";
            } else {
                if (Math.random() < 0.25) {
                    newRandomText += displayTextChoicesSpaceless[parseInt(Math.random() * displayTextChoicesSpaceless.length)];
                } else {
                    newRandomText += text[j];
                };
            }
        };
        return newRandomText;
    };

    function randomArray(randomiseIfChange) {
        let finalArr = [];
        if (randomiseIfChange === true) {
            for (let i = 0; i < randTextSize; i++) {
                if (Math.random() < 0.3) {
                    finalArr.push(randText[i]);
                } else {
                    finalArr.push(randomiseExistingText(randText[i]));
                };
            };
        } else {
            for (let i = 0; i < randTextSize; i++) {
                finalArr.push(randomiseText());
            };
        };
        return finalArr;
    };

    function randomAnimation() {
        let finalArr = [];
        for (let i = 0; i < randTextSize; i++) {
            finalArr.push(animClassChoices[parseInt(Math.random() * animClassChoices.length)]);
        };
        return finalArr;
    }; 

    function randomStyle() {
        let finalArr = [];
        for (let i = 0; i < randTextSize; i++) {
            finalArr.push({
                opacity: String(parseFloat((Math.random() * 0.75).toFixed(1)) + 0.25),
                animation: 
                    (
                        "programmingAnimAppear " + String(parseFloat((Math.random() * 0.75).toFixed(1)) + 0.75) + "s ease " + String((Math.random() * 1).toFixed(1)) + "s, " 
                        + animClassChoices[parseInt(Math.random() * animClassChoices.length)] + " " + String(parseFloat((Math.random() * 2).toFixed(1)) + 7.0) + "s linear"
                    ),
                fontSize: String(parseFloat((Math.random() * 2).toFixed(1)) + 0.5) + "em",
                fontWeight: String(parseInt(Math.random() * 600) + 300),
                marginTop: String(parseFloat((Math.random() * 200).toFixed(1)) - 100) + "vh",
                marginLeft: String(parseFloat((Math.random() * 200).toFixed(1)) - 100) + "vw",
                color: parseInt(Math.random().toFixed(0)) === 0 ? "#f06f4fff" : "#f06f4f77"
            })
        };

        return finalArr;
        
    };

    function keepRandomisingArray(delay = (Math.random() * 75) + 40, recursionDepth = 0) {
        setTimeout(function() {
            setRandomText(randomArray(true));
            if (recursionDepth < 30) {
                keepRandomisingArray(delay, recursionDepth + 1);
            };
        }, delay);
    };
    
    for (let i = 0; i < randTextSize; i++) {
        displayTexts.push(
            <div className={"timelineProgrammingAnimTextWrapper "} style={randStyle[i]}>
                <p className="timelineProgrammingAnimText">{randText[i]}</p>
            </div>
        );
    };

    useEffect(function() {
        if (props.firstAnimationRender === 1) {
            keepRandomisingArray();
            props.changeFirstAnimationRender(0);
            console.log("a");
        };
    });

    return(
        <>
            <div className="timelineProgrammingAnimWrapper">
                {displayTexts}
            </div>
        </>
    )
};

export default TimelineProgrammingAnimation;