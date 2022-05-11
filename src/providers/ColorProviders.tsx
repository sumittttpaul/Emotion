import * as React from "react";

export interface LayoutProps  { 
    children: React.ReactNode
}

export const ColorContext = React.createContext({
    bodyColor: "#ffffff",
    setbodyColor: (arg: string) => {}
});

export const ColorProvider = (props:LayoutProps) => {
    const [bodyColor, setbodyColor] = React.useState<string>('#ffffff');
    const value = {bodyColor, setbodyColor}
    return(
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    )
}

export const getBodyColor = () => React.useContext(ColorContext);