import React, { useState, useEffect } from 'react';
import MyWebsite from "../../../images/mywebsite.png";
import ReactImg from "../../../images/react.png";
import NHWSSImg1 from "../../../images/nhwss1.png";
import NHWSSImg2 from "../../../images/nhwss2.png";
import ThatAquariumImg from "../../../images/thataquarium.png";
import TimelineSpecificContent from './timeline_specific_content';
import TypeButtons from './type_buttons';
import '../timeline.css';
import ProgrammingImgDefault from '../../../images/programming_icon_default.png';
import ProgrammingImgHover from '../../../images/programming_icon_hover.png';
import ProgrammingImgActive from '../../../images/programming_icon_active.png';
import AviationImgDefault from '../../../images/aviation_icon_default.png';
import AviationImgHover from '../../../images/aviation_icon_hover.png';
import AviationImgActive from '../../../images/aviation_icon_active.png';
import DesignImgDefault from '../../../images/design_icon_default.png';
import DesignImgHover from '../../../images/design_icon_hover.png';
import DesignImgActive from '../../../images/design_icon_active.png';
import PCBuildingImgDefault from '../../../images/pc_building_icon_default.png';
import PCBuildingImgHover from '../../../images/pc_building_icon_hover.png';
import PCBuildingImgActive from '../../../images/pc_building_icon_active.png';

function TimelineSpecific(props) {

    const defaultIcons = [ProgrammingImgDefault, AviationImgDefault, DesignImgDefault, PCBuildingImgDefault];
    const hoverIcons = [ProgrammingImgHover, AviationImgHover, DesignImgHover, PCBuildingImgHover];
    const activeIcons = [ProgrammingImgActive, AviationImgActive, DesignImgActive, PCBuildingImgActive];
    const timelineChangerOrange = "timelineChangerOrange";
    const infiniteScrollerInitialAmount = 3;
    const infiniteScrollerLoadAmount = 2;
    const [content, setContent] = useState({
        0: [
            [
                MyWebsite, 
                "My Personal Website (v2)", 
                "Oct 2022", 
                "After coming back from my trip to the USA, I had a lot of free time in the Army before I finish my service. That's where I decided to make use of my newly learnt knowledge on React to rebuild a second version of my website."
            ], [
                ReactImg, 
                "Learning React", 
                "Sep 2022", 
                "During my National Service trip to USA, I decided to learn React, specifically ReactJS, to further expand my Web Programming knowledge."
            ], [
                NHWSSImg2, 
                "NHWSS Rebuild", 
                "May 2022", 
                `The Charity Traditional Chinese Medicine (TCM) organisation that I was an intern of before my enlistment in the Army, was hacked and vandalised all over. A backup was restored by them but the owners decided it was best to rebuild the site as the one and only backup was partially corrupted. They hired me again to help restore the website, using Wordpress once again. It was a lengthy process but it was fully completed in about 2 to 3 weeks. \n
                The hardest part about the process was to keep the use of custom CSS/Javascript to a minimum. With this restriction, I managed to learn how to rebuild it to how it was before without the use of Javascript. Although the challenge was not required by them, it was a good opportunity to challenge my skills. Not only that, I felt that it was better to do so as the interns they hired were generally new to programming, and it would make their life easier to edit by keeping it simpler.`
            ], [
                ThatAquariumImg, 
                "That Aquarium Website", 
                "Dec 2020 - Jan 2021", 
                `My friend and I wanted to use our web building skill to not only build our portfolio, but to earn money as well. We then found a company called That Aquarium to build their website. However, to be upfront, this was ultimately a failure. Fortunately, it gave me a large insight on how to outside world works and what I should expect in the future.
                \n
                In summary, we managed to convince them to have a website built, but due to their lack of and delayed responses, and that it was mostly a one-way communication, we decided to drop this project with them.
                \n
                It was quite disheartening as I managed to design almost every page of the website, and was about 75% of the way done coding. However, we failed to account that in trying to keep the project efficient in terms of time, we didn't sign a contract or discuss in detail the pay or the final design. Although I did send them a copy of the designs, they took weeks to reply and when they said it was not fully what they wanted, nor were they interested in paying what we expected.
                \n
                On the bright side, it gave me an insight on how the commercial sector works, use Django as a backend server, and allowed me to sharpen my skills on both design and web application building.`
            ], [
                NHWSSImg1, 
                "Nam Hong Welfare Service Society (NHWSS) Internship", 
                "Dec 2020 - Mar 2021", 
                `I had a classmate in Junior College who knew I was good at coding, and their family member, who's working at NHWSS, required an intern to maintain their website. I was recommended and join them as an intern for 4 Months, before my enlistment into the Army. This was a good opportunity for me to learn how to use a website building app, Wordpress in this case, instead of only knowing how to create websites with pure HTML/CSS/JS with jQuery.
                \n
                Through this internship, I realised how much easier and restrictive website building apps are, as they make elements super easy to create through the drag and drop experience. However, the ability to customise the styles and elements is quite limited, unless I decide to inject custom code into it. Most of the website was luckily, already done by the previous intern, which only gave me the chance to design and create a few pages (specifically the Get Involved page, picture beside, which does not show hover effects).
                \n
                I would have definitely continued the internship with how heartwarming and welcome the management was, if it wasn't for the conscription into the Army in April. This would, however, not be the end of working with them as they hired me as a freelancer the next year.
                \n
                If you would like to check it out, and if it hasn't changed, you may view it live at`, "https://namhongwelfare.org.sg/get-involved/"
            ], [
                NHWSSImg1, 
                "Nam Hong Welfare Service Society (NHWSS) Internship", 
                "Dec 2020 - Mar 2021", 
                `I had a classmate in Junior College who knew I was good at coding, and their family member, who's working at NHWSS, required an intern to maintain their website. I was recommended and join them as an intern for 4 Months, before my enlistment into the Army. This was a good opportunity for me to learn how to use a website building app, Wordpress in this case, instead of only knowing how to create websites with pure HTML/CSS/JS with jQuery.
                \n
                Through this internship, I realised how much easier and restrictive website building apps are, as they make elements super easy to create through the drag and drop experience. However, the ability to customise the styles and elements is quite limited, unless I decide to inject custom code into it. Most of the website was luckily, already done by the previous intern, which only gave me the chance to design and create a few pages (specifically the Get Involved page, picture beside, which does not show hover effects).
                \n
                I would have definitely continued the internship with how heartwarming and welcome the management was, if it wasn't for the conscription into the Army in April. This would, however, not be the end of working with them as they hired me as a freelancer the next year.
                \n
                If you would like to check it out, and if it hasn't changed, you may view it live at`, "https://namhongwelfare.org.sg/get-involved/"
            ], [
                NHWSSImg1, 
                "Nam Hong Welfare Service Society (NHWSS) Internship", 
                "Dec 2020 - Mar 2021", 
                `I had a classmate in Junior College who knew I was good at coding, and their family member, who's working at NHWSS, required an intern to maintain their website. I was recommended and join them as an intern for 4 Months, before my enlistment into the Army. This was a good opportunity for me to learn how to use a website building app, Wordpress in this case, instead of only knowing how to create websites with pure HTML/CSS/JS with jQuery.
                \n
                Through this internship, I realised how much easier and restrictive website building apps are, as they make elements super easy to create through the drag and drop experience. However, the ability to customise the styles and elements is quite limited, unless I decide to inject custom code into it. Most of the website was luckily, already done by the previous intern, which only gave me the chance to design and create a few pages (specifically the Get Involved page, picture beside, which does not show hover effects).
                \n
                I would have definitely continued the internship with how heartwarming and welcome the management was, if it wasn't for the conscription into the Army in April. This would, however, not be the end of working with them as they hired me as a freelancer the next year.
                \n
                If you would like to check it out, and if it hasn't changed, you may view it live at`, "https://namhongwelfare.org.sg/get-involved/"
            ], [
                NHWSSImg1, 
                "Nam Hong Welfare Service Society (NHWSS) Internship", 
                "Dec 2020 - Mar 2021", 
                `I had a classmate in Junior College who knew I was good at coding, and their family member, who's working at NHWSS, required an intern to maintain their website. I was recommended and join them as an intern for 4 Months, before my enlistment into the Army. This was a good opportunity for me to learn how to use a website building app, Wordpress in this case, instead of only knowing how to create websites with pure HTML/CSS/JS with jQuery.
                \n
                Through this internship, I realised how much easier and restrictive website building apps are, as they make elements super easy to create through the drag and drop experience. However, the ability to customise the styles and elements is quite limited, unless I decide to inject custom code into it. Most of the website was luckily, already done by the previous intern, which only gave me the chance to design and create a few pages (specifically the Get Involved page, picture beside, which does not show hover effects).
                \n
                I would have definitely continued the internship with how heartwarming and welcome the management was, if it wasn't for the conscription into the Army in April. This would, however, not be the end of working with them as they hired me as a freelancer the next year.
                \n
                If you would like to check it out, and if it hasn't changed, you may view it live at`, "https://namhongwelfare.org.sg/get-involved/"
            ], [
                NHWSSImg1, 
                "Nam Hong Welfare Service Society (NHWSS) Internship", 
                "Dec 2020 - Mar 2021", 
                `I had a classmate in Junior College who knew I was good at coding, and their family member, who's working at NHWSS, required an intern to maintain their website. I was recommended and join them as an intern for 4 Months, before my enlistment into the Army. This was a good opportunity for me to learn how to use a website building app, Wordpress in this case, instead of only knowing how to create websites with pure HTML/CSS/JS with jQuery.
                \n
                Through this internship, I realised how much easier and restrictive website building apps are, as they make elements super easy to create through the drag and drop experience. However, the ability to customise the styles and elements is quite limited, unless I decide to inject custom code into it. Most of the website was luckily, already done by the previous intern, which only gave me the chance to design and create a few pages (specifically the Get Involved page, picture beside, which does not show hover effects).
                \n
                I would have definitely continued the internship with how heartwarming and welcome the management was, if it wasn't for the conscription into the Army in April. This would, however, not be the end of working with them as they hired me as a freelancer the next year.
                \n
                If you would like to check it out, and if it hasn't changed, you may view it live at`, "https://namhongwelfare.org.sg/get-involved/"
            ]
        ],
        1: [

        ],
        2: [

        ],
        3: [

        ]
    }); // For each content, the order is as such: 0 -> image file, 1 -> Title, 2 -> Date, 3 -> Description, 4 (Optional) -> Hyperlink
    const [fadeoutContent, status] = useState("active");
    const [sortText, setSortText] = useState("Newest");
    const [loadedContent, setLoadedContent] = useState([]);
    const [lastLoadedIndex, setLastLoadedIndex] = useState(infiniteScrollerInitialAmount - infiniteScrollerLoadAmount);
    
    // set whichever type value is active to the right image
    let tempTypeImage = [...defaultIcons];
    tempTypeImage[props.typeVal] = activeIcons[props.typeVal];
    const [typeImage, setTypeImage] = useState(tempTypeImage); // this needs to be here instead of TypeButtons component as I need to unactive the previous active type

    // the header options for timeline
    let skillButtons = Object.keys(props.types).map((currentKey, i) => {
        let toOrange = props.typeVal === i ? timelineChangerOrange : "";
        return(
            <TypeButtons index={i} key={i} toOrange={toOrange} typeVal={props.typeVal} changeType={changeType} types={props.types} defaultIcons={defaultIcons} hoverIcons={hoverIcons} activeIcons={activeIcons} typeImage={typeImage} setTypeImage={setTypeImage} />
        );
    });

    function changeType(e) { // click on type header
        let newType = parseInt(e.target.getAttribute("data-index"));
        props.fadeImage("fadeOutImage");
        status("disablePointer fadeOutTimelineContent");
        setTimeout(() => {
            status("disablePointer fadeInitialOpacity"); // for smoother transition
            props.setTypeVal(newType);
            props.changeImage(props.imageOptions[newType]);
            emptyLoadedContent();
        }, 400);
        setTimeout(() => {
            props.fadeImage("active");
            status("active");
        }, 800);
    };

    function changeSortDirection() { // sort

        // changes display text of sort & rerenders content
        sortText === "Newest" ? setSortText("Oldest") : setSortText("Newest");

        // reverses content
        let newContent = content;
        Object.keys(newContent).forEach((key) => {
            newContent[key].reverse();
        });
        setContent(newContent);

        // empty current content
        emptyLoadedContent();
    };

    function emptyLoadedContent() {
        setLoadedContent([]);
        setLastLoadedIndex(infiniteScrollerInitialAmount);
    };
    
    function loadMoreContent() {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 300) {
            
            if (content[props.typeVal].length === loadedContent.length) return; // case if no more to load
            
            setLastLoadedIndex(prevIndex => Math.min(prevIndex + infiniteScrollerLoadAmount, content[props.typeVal].length));
        };
    };

    async function getNewContent() {
        const newData = await content[props.typeVal].slice(loadedContent.length, lastLoadedIndex); // apparently async and await is needed even though it's not api, if not it doesn't work
        setLoadedContent(prevLoadedContent => [...prevLoadedContent, ...newData]);
    };

    useEffect(() => {
        window.addEventListener('scroll', loadMoreContent);
        getNewContent();
        return () => window.removeEventListener('scroll', loadMoreContent);
    }, [lastLoadedIndex, sortText, props.typeVal]);
    
    return(

        <>
            {/* <button onClick={changeType} className={"timelineChanger fade bolded " + fadeoutContent}>{type}</button> */}
            <div className={"skillsButtonNavbar flex-row fade " + fadeoutContent}>
                {skillButtons}
                <button onClick={changeSortDirection} className="timelineChanger timelineSorter slideInInitial slideIn flex-row">
                    <i className="center m-auto">
                        {sortText}
                    </i>
                    <span className="material-symbols-outlined m-auto">sort</span>
                </button>
            </div>
            
            <div className={"timeline fade flex-row " + fadeoutContent}>
    
                <div className="timelineUI">
                    <div className="timelineLine"></div>
                </div>

                <div className={"timelineSpecificContent"}>
                    {   
                        loadedContent.length > 0 && loadedContent.map((thisContent, i) => (
                            <TimelineSpecificContent typeValue={props.typeVal} value={props.types[props.typeVal]} content={content} index={i} key={i} />
                        ))
                        
                    }
                </div>
    
            </div>
            <div className="endSpace"></div>
        </>
        
    )


};

export default TimelineSpecific;