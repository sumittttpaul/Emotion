import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface SelectAvatarStateInterface {
    setShow: boolean;
}

const SelectAvatarStateContext = createContext({
    SelectAvatar: {} as Partial<SelectAvatarStateInterface>,
    setSelectAvatar: {} as Dispatch<SetStateAction<Partial<SelectAvatarStateInterface>>>,
});

const SelectAvatarState = ({
    children,
    value = {} as SelectAvatarStateInterface,
}: {
    children: React.ReactNode;
    value?: Partial<SelectAvatarStateInterface>;
}) => {
    const [SelectAvatar, setSelectAvatar] = useState(value);
    return (
        <SelectAvatarStateContext.Provider value={{ SelectAvatar, setSelectAvatar }}>
        {children}
        </SelectAvatarStateContext.Provider>
    );
};

const useSelectAvatarState = () => {
    const context = useContext(SelectAvatarStateContext);
    if (!context) {
        throw new Error("useSelectAvatarState must be used within a SelectAvatarStateContext");
    }
    return context;
};

export { SelectAvatarState, useSelectAvatarState };