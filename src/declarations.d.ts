// Ordering
// Navbar
// Home Page
// Timeline
//   TimelineInitial
//   TimelineAnimations
//   TimelineSpecific
// About Me
// Contact

// Navbar
export declare interface NavbarProps {
    page: string;
}

export declare interface LinkCustomProps {
    dir: string;
    currentIndex: string;
    index: string;
    value: string;
}

// Home
export declare interface HomeProps {
    page: string;
}

// Timeline
export declare interface TimelineProps {
    page: string;
}

export declare interface TimelineInitialProps {
    types: object;
    imageOptions: any;
    imageInitialOptions: any;
    setTypeVal: any;
    changeTimelineState: any;
    changeImage: any;
    changeTransitionAnimationState: any;
}

export declare interface TimelineInitialTypesProps {
    imageOptions: any;
    types: any;
    index: number;
    changeTransitionAnimationState: any;
    setTypeVal: any;
    staggeredFadeout: any;
    changeTimelineState: any;
    changeImage: any;
    timelineToFadeOut: any;
    imageInitialOptions: any;
}

export declare interface TimelineDesignSVGTextProps {
    classname?: string;
    w?: string;
    h?: string;
    vbox?: string;
    margin?: string;
    children?: any;
}

export declare interface TimelineDesignSVGTextPathProps {
    animTime?: undefined | string;
    animDelay?: undefined | string;
    opacity?: undefined | string;
    d?: string;
    animKeyframe?: string;
}

export declare interface TimelineHyperlinkProps {
    content: any;
}

export declare interface TimelineSpecificProps {
    typeVal: number;
    type: string;
    initialTimeline: number;
    types: any;
    fadeImage: any;
    setTypeVal: any;
    changeImage: any;
    imageOptions: any;
}

export declare interface TimelineSpecificContentProps {
    typeValue: number;
    index: number;
    content: any;
}

export declare interface TypeButtonsProps {
    typeVal: number;
    types: any;
    index: number;
    typeImage: any;
    hoverIcons: any;
    defaultIcons: any;
    activeIcons: any;
    setTypeImage: any;
    changeType: any;
    toOrange: any;
}

//Timeline Initial
export declare interface PowerCablesProps {
    height: number;
    width: number;
    marginTop: number;
    marginLeft: number;
}

export declare interface PowerHolesProps {
    height: number;
    width: number;
}



//Timeline Animations
export declare interface CustomRectStyle {
    id?: string | undefined;
    extraClasses?: string | undefined;
    children?: any | undefined;
    width?: string | undefined;
    height?: string | undefined;
    mt?: string | undefined;
    marginTop?: string | undefined;
    mr?: string | undefined;
    marginRight?: string | undefined;
    ml?: string | undefined;
    marginLeft?: string | undefined;
    br?: string | undefined;
    borderRadius?: string | undefined;
    bgColour?: string | undefined;
    backgroundColor?: string | undefined;
    boxShadow?: string | undefined;
    textAlign?: string | undefined;
    pt?: string | undefined;
    paddingTop?: string | undefined;
    ar?: string | undefined;
    aspectRatio?: string | undefined;
    overflow?: string | undefined;
    pos?: string | undefined;
    position?: string | undefined;
    rotate?: string | undefined;
    zindex?: string | undefined;
    zIndex?: string | undefined;
    anim?: string | undefined;
    animation?: string | undefined;
    opacity?: string | undefined;
    transform?: string | undefined;
    transformOrigin?: string | undefined;
};

// About Me
export declare interface AboutMeProps {
    page: string;
}

export declare interface AboutMeContentWrappersProps {
    type: string;
}

export declare interface OrangeSpanProps {
    text: string;
    className?: string;
};

export declare interface LineBreakProps {
    count: string;
    className?: string;
};

