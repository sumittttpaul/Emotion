import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface DOBStateInterface {
    day:number;
    month:number;
    year:number;
}

const DOBStateContext = createContext({
    DOBValue: {} as Partial<DOBStateInterface>,
    setDOBValue: {} as Dispatch<SetStateAction<Partial<DOBStateInterface>>>,
});

const DOBState = ({
    children,
    value = {} as DOBStateInterface,
}: {
    children: React.ReactNode;
    value?: Partial<DOBStateInterface>;
}) => {
    const [DOBValue, setDOBValue] = useState(value);
    return (
        <DOBStateContext.Provider value={{ DOBValue, setDOBValue }}>
        {children}
        </DOBStateContext.Provider>
    );
};

const useDOBState = () => {
    const context = useContext(DOBStateContext);
    if (!context) {
        throw new Error("useDOBState must be used within a DOBStateContext");
    }
    return context;
};

export { DOBState, useDOBState };