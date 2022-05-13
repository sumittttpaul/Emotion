import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface ShowAvatarStateInterface {
    setShow: boolean;
}

const ShowAvatarStateContext = createContext({
    ShowAvatar: {} as Partial<ShowAvatarStateInterface>,
    setShowAvatar: {} as Dispatch<SetStateAction<Partial<ShowAvatarStateInterface>>>,
});

const ShowAvatarState = ({
    children,
    value = {} as ShowAvatarStateInterface,
}: {
    children: React.ReactNode;
    value?: Partial<ShowAvatarStateInterface>;
}) => {
    const [ShowAvatar, setShowAvatar] = useState(value);
    return (
        <ShowAvatarStateContext.Provider value={{ ShowAvatar, setShowAvatar }}>
        {children}
        </ShowAvatarStateContext.Provider>
    );
};

const useShowAvatarState = () => {
    const context = useContext(ShowAvatarStateContext);
    if (!context) {
        throw new Error("useShowAvatarState must be used within a ShowAvatarStateContext");
    }
    return context;
};

export { ShowAvatarState, useShowAvatarState };