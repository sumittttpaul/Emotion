import React, { FC } from 'react';
import { DatePickerButtonDark } from '../buttonUI/DatePickerButtonDark';
import { DatePickerDialogUI } from './DatePickerDialogUI';

interface IProps {
  DOBShow: boolean;
  setDOBShow: () => void;
  DOBScreen1: boolean;
  DOBScreen2: boolean;
  DOBDay: number;
  DOBMonth: number;
  DOBYear: number;
  DOBDayValue: string;
  DOBMonthValue: string;
  DOBYearValue: string;
  GetDOBDay: (value: number) => void;
  GetDOBMonth: (value: number) => void;
  GetDOBYear: (value: number) => void;
  DOBCancel: () => void;
  DOBSubmit: () => void;
  DOBClick: () => void;
  DOBLabel: string;
  DOBSubmitDisabled: boolean;
}

/**
 * @author
 * @function @DatePickerUI
 **/

export const DatePickerUI: FC<IProps> = (props) => {
  return (
    <>
      <DatePickerButtonDark onClick={props.DOBClick} label={props.DOBLabel} />
      <DatePickerDialogUI
        ShowDialog={props.DOBShow}
        CloseDialog={props.setDOBShow}
        day={props.DOBDay}
        month={props.DOBMonth}
        year={props.DOBYear}
        Screen1={props.DOBScreen1}
        Screen2={props.DOBScreen2}
        getDay={props.DOBDayValue}
        getMonth={props.DOBMonthValue}
        getYear={props.DOBYearValue}
        setDay={props.GetDOBDay}
        setMonth={props.GetDOBMonth}
        setYear={props.GetDOBYear}
        cancel={props.DOBCancel}
        submit={props.DOBSubmit}
        submitActive={props.DOBSubmitDisabled}
      />
    </>
  );
};
