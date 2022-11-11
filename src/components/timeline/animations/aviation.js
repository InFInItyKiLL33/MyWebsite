import "./animations.css";
import AviationAnimationImg from "../../../images/aviation.svg";

function TimelineAviationAnimation(props) {



    return(
        <>
            <div className="timelineAviationAnimImgWrapper">
                <img src={AviationAnimationImg} className="timelineAviationAnimImg"></img>
            </div>
        </>
    );

};

export default TimelineAviationAnimation;