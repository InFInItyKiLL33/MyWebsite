import {PowerCablesProps} from "../../../../../declarations";

function PowerCables(props: PowerCablesProps): JSX.Element {
    
    return(
        <>
            {
                <div className="powerCableEach">
                    <div className="powerCablePin"></div>
                    <div className={"powerCable " + (props.width > 100 || props.height > 100 ? "powerCableLong" : "")} style={{"marginTop": props.marginTop, "marginLeft": props.marginLeft, "width": props.width, "height": props.height}}></div>
                </div>
            }
        </>
    )

};

export default PowerCables;