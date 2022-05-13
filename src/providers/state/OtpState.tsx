import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface OtpStateInterface {
    setShow: boolean;
}

const OtpStateContext = createContext({
    OtpState: {} as Partial<OtpStateInterface>,
    setOtpState: {} as Dispatch<SetStateAction<Partial<OtpStateInterface>>>,
});

const OtpState = ({
    children,
    value = {} as OtpStateInterface,
}: {
    children: React.ReactNode;
    value?: Partial<OtpStateInterface>;
}) => {
    const [OtpState, setOtpState] = useState(value);
    return (
        <OtpStateContext.Provider value={{ OtpState, setOtpState }}>
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