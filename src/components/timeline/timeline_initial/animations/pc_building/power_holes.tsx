import {PowerHolesProps} from "../../../../../declarations";

function PowerHoles(props: PowerHolesProps): JSX.Element {
    
    return(
        <>
            {
                Array(props.width).fill("").map((each1: string, index1: number): JSX.Element => {
                    return (
                        <div className="flex-col powerHolesCol">
                            {
                                Array(props.height).fill("").map((each2: string, index2: number): JSX.Element => {
                                    return(<div className="powerHolesRow">•</div>)
                                })
                            }
                        </div>
                    );
                })
            }
        </>
    );

};

export default PowerHoles;