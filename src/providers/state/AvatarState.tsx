import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface AvatarStateInterface {
    setShow: boolean;
}

const AvatarStateContext = createContext({
    AvatarState: {} as Partial<AvatarStateInterface>,
    setAvatarState: {} as Dispatch<SetStateAction<Partial<AvatarStateInterface>>>,
});

const AvatarState = ({
    children,
    value = {} as AvatarStateInterface,
}: {
    children: React.ReactNode;
    value?: Partial<AvatarStateInterface>;
}) => {
    const [AvatarState, setAvatarState] = useState(value);
    return (
        <AvatarStateContext.Provider value={{ AvatarState, setAvatarState }}>
        {children}
        </AvatarStateContext.Provider>
    );
};

const useAvatarState = () => {
    const context = useContext(AvatarStateContext);
    if (!context) {
        throw new Error("useAvatarState must be used within a AvatarStateContext");
    }
    return context;
};

export { AvatarState, useAvatarState };