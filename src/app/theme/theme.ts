export interface Theme{
    name: string;
    properties:any;
}


export const dark: Theme={
    name: "dark",
    properties: {
        "--mainbackground-default": "#161c23",
        "--maintextcolor-default":" #ddd",
        "--mainsubtitle":"#80bdff",
    
        "--inputBoxColor":"#9ecdff",
    
        "--primaryColor":"#5294e2",
        "--primaryDark":"#5294e2",
    
        "--SmallBoxShadow":"-2px -2px 3px #2b3744 ,2px 2px 3px #090d10" ,
        "--LargeBoxShadow":"-4px -4px 5px #2b3744 ,4px 4px 5px #090d10 ",
        "--MediumBoxShadow":"-3px -3px 4px #2b3744 ,3px 3px 4px #090d10" ,
    
        "--inputBoxInsetShadow":"inset 2px 2px 3px #090d10, inset  -2px -2px 3px #2b3744",
        "--lightThemeBoxShadow":"-2px -2px 3px #2b3744 ,2px 2px 3px #090d10 ",
        "--darkThemeBoxShadow":"inset 2px 2px 3px #090d10, inset  -2px -2px 3px #2b3744"  ,

    }
}

export const light: Theme={
    name: "light",
    properties: {
        "--mainbackground-default": "#eee",
        "--maintextcolor-default":" #161c23",
        "--mainsubtitle":"#007aff",
    
        "--inputBoxColor":"#007cff",
    
        "--primaryColor":"#5294e2",
        "--primaryDark":"#2a8cff",
    
        "--SmallBoxShadow":"-2px -2px 3px #ffffff ,2px 2px 3px #c8c8c8" ,
        "--LargeBoxShadow":"-4px -4px 5px #ffffff ,4px 4px 5px #c8c8c8 ",
        "--MediumBoxShadow":"-3px -3px 4px #ffffff ,3px 3px 4px #c8c8c8" ,
    
        "--inputBoxInsetShadow":"inset 2px 2px 3px #c8c8c8, inset  -2px -2px 3px #ffffff",
        "--lightThemeBoxShadow":"inset 2px 2px 3px #c8c8c8, inset  -2px -2px 3px #ffffff",
        "--darkThemeBoxShadow":"-2px -2px 3px #ffffff ,2px 2px 3px #c8c8c8",

    }
}


export const coloredDark: Theme={
    name: "coloredDark",
    properties: {
        "--imageColorFilter":"none",
        "--coloredBoxShadow":"inset 2px 2px 3px #090d10, inset  -2px -2px 3px #2b3744",
        "--filteredBoxShadow":"-2px -2px 3px #2b3744 ,2px 2px 3px #090d10 "
    }
}
export const coloredLight: Theme={
    name: "coloredLight",
    properties: {
        "--imageColorFilter":"none",
        "--coloredBoxShadow":"inset 2px 2px 3px  #ffffff, inset  -2px -2px 3px #c8c8c8",
        "--filteredBoxShadow":"-2px -2px 3px #c8c8c8 ,2px 2px 3px  #ffffff "
    }
}

export const filteredDark: Theme={
    name: "filteredDark",
    properties: {
        "--imageColorFilter":"sepia(0.8) hue-rotate(180deg) brightness(0.8) contrast(1.3)",
        "--coloredBoxShadow":"-2px -2px 3px #2b3744 ,2px 2px 3px #090d10 ",
        "--filteredBoxShadow":"inset 2px 2px 3px #090d10, inset  -2px -2px 3px #2b3744"
    }
}

export const filteredLight: Theme={
    name: "filteredLight",
    properties: {
        "--imageColorFilter":"sepia(0.8) hue-rotate(180deg) brightness(0.8) contrast(1.3)",
        "--coloredBoxShadow":"-2px -2px 3px #c8c8c8 ,2px 2px 3px #ffffff ",
        "--filteredBoxShadow":"inset 2px 2px 3px #ffffff, inset  -2px -2px 3px #c8c8c8"
    }
}