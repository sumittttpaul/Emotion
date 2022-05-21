import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface DatePickerStateInterface {
    show: boolean;
}

const DatePickerStateContext = createContext({
    DatePickerDialog: {} as Partial<DatePickerStateInterface>,
    setDatePickerDialog: {} as Dispatch<SetStateAction<Partial<DatePickerStateInterface>>>,
});

const DatePickerState = ({
    children,
    value = {} as DatePickerStateInterface,
}: {
    children: React.ReactNode;
    value?: Partial<DatePickerStateInterface>;
}) => {
    const [DatePickerDialog, setDatePickerDialog] = useState(value);
    return (
        <DatePickerStateContext.Provider value={{ DatePickerDialog, setDatePickerDialog }}>
        {children}
        </DatePickerStateContext.Provider>
    );
};

const useDatePickerState = () => {
    const context = useContext(DatePickerStateContext);
    if (!context) {
        throw new Error("useDatePickerState must be used within a DatePickerStateContext");
    }
    return context;
};

export { DatePickerState, useDatePickerState };