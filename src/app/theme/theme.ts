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
        "--lightThemeBoxShadow":"none",
        "--darkThemeBoxShadow":"inset 2px 2px 3px #090d10, inset  -2px -2px 3px #2b3744"  ,

        "--footerImageFilter":  "none"
    }
}

export const light: Theme={
    name: "light",
    properties: {
        "--mainbackground-default": "#ddd",
        "--maintextcolor-default":" #161c23",
        "--mainsubtitle":"#007aff",
    
        "--inputBoxColor":"#007cff",
    
        "--primaryColor":"#5294e2",
        "--primaryDark":"#2a8cff",
    
        "--SmallBoxShadow":"-2px -2px 3px #ffffff ,2px 2px 3px #bfbfbf" ,
        "--LargeBoxShadow":"-4px -4px 5px #ffffff ,4px 4px 5px #bfbfbf ",
        "--MediumBoxShadow":"-3px -3px 4px #ffffff ,3px 3px 4px #bfbfbf" ,
    
        "--inputBoxInsetShadow":"inset 2px 2px 3px #bfbfbf, inset  -2px -2px 3px #ffffff",
        "--lightThemeBoxShadow":"inset 2px 2px 3px #bfbfbf, inset  -2px -2px 3px #ffffff",
        "--darkThemeBoxShadow":"none",

        "--footerImageFilter":  "invert(1) brightness(0.5) drop-shadow(2px 4px 6px white)"
    }
}