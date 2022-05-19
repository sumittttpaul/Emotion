import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface AvatarStateInterface {
    show: boolean;
}

const AvatarStateContext = createContext({
    AvatarDialog: {} as Partial<AvatarStateInterface>,
    setAvatarDialog: {} as Dispatch<SetStateAction<Partial<AvatarStateInterface>>>,
});

const AvatarState = ({
    children,
    value = {} as AvatarStateInterface,
}: {
    children: React.ReactNode;
    value?: Partial<AvatarStateInterface>;
}) => {
    const [AvatarDialog, setAvatarDialog] = useState(value);
    return (
        <AvatarStateContext.Provider value={{ AvatarDialog, setAvatarDialog }}>
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