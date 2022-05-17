import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface CropAvatarStateInterface {
    setShow: boolean;
}

const CropAvatarStateContext = createContext({
    CropAvatar: {} as Partial<CropAvatarStateInterface>,
    setCropAvatar: {} as Dispatch<SetStateAction<Partial<CropAvatarStateInterface>>>,
});

const CropAvatarState = ({
    children,
    value = {} as CropAvatarStateInterface,
}: {
    children: React.ReactNode;
    value?: Partial<CropAvatarStateInterface>;
}) => {
    const [CropAvatar, setCropAvatar] = useState(value);
    return (
        <CropAvatarStateContext.Provider value={{ CropAvatar, setCropAvatar }}>
        {children}
        </CropAvatarStateContext.Provider>
    );
};

const useCropAvatarState = () => {
    const context = useContext(CropAvatarStateContext);
    if (!context) {
        throw new Error("useCropAvatarState must be used within a CropAvatarStateContext");
    }
    return context;
};

export { CropAvatarState, useCropAvatarState };