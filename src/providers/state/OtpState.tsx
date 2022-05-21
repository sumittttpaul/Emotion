import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface OtpStateInterface {
    show: boolean;
}

const OtpStateContext = createContext({
    OtpDialog: {} as Partial<OtpStateInterface>,
    setOtpDialog: {} as Dispatch<SetStateAction<Partial<OtpStateInterface>>>,
});

const OtpState = ({
    children,
    value = {} as OtpStateInterface,
}: {
    children: React.ReactNode;
    value?: Partial<OtpStateInterface>;
}) => {
    const [OtpDialog, setOtpDialog] = useState(value);
    return (
        <OtpStateContext.Provider value={{ OtpDialog, setOtpDialog }}>
        {children}
        </OtpStateContext.Provider>
    );
};

const useOtpState = () => {
    const context = useContext(OtpStateContext);
    if (!context) {
        throw new Error("useOtpState must be used within a OtpStateContext");
    }
    return context;
};

export { OtpState, useOtpState };