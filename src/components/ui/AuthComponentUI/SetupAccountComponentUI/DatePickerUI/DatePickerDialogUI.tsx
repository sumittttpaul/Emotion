import React, { FC } from 'react';
import { SelectDay } from '../../../../datepicker/SelectDay';
import { DatePickerContainerDialog } from '../../../../dialog/DatePickerContainerDialog';
import { SelectYear } from '../../../../datepicker/SelectYear';
import { SelectMonth } from '../../../../datepicker/SelectMonth';
import { DatePickerDialogHeader } from '../../../../datepicker/Dialog/DatePickerDialogHeader';
import { DatePickerDialogBottom } from '../../../../datepicker/Dialog/DatePickerDialogBottom';

interface IProps {
  DOBShow: boolean;
  setDOBShow: () => void;
  DOBDay: number;
  DOBMonth: number;
  DOBYear: number;
  DOBScreen1: boolean;
  DOBScreen2: boolean;
  DOBDayValue: string;
  DOBMonthValue: string;
  DOBYearValue: string;
  GetDOBDay: (day: number) => void;
  GetDOBMonth: (month: number) => void;
  GetDOBYear: (year: number) => void;
  DOBCancel: () => void;
  DOBSubmit: () => void;
  DOBSubmitDisabled: boolean;
}

/**
 * @author
 * @function @DatePickerDialogUI
 **/

export const DatePickerDialogUI: FC<IProps> = (props) => {
  const setHeaderDates = () => {
    return props.DOBYearValue + ', ' + props.DOBMonthValue + ' ' + props.DOBDayValue;
  };

  return (
    <DatePickerContainerDialog show={props.DOBShow} close={props.setDOBShow}>
      <DatePickerDialogHeader setHeaderDates={setHeaderDates()} />
      {props.DOBScreen1 ? (
        props.DOBScreen2 ? (
          <SelectDay
            day={props.DOBDay}
            month={props.DOBMonth}
            year={props.DOBYear}
            setDay={props.GetDOBDay}
            setMonth={props.GetDOBMonth}
          />
        ) : (
          <SelectMonth setMonth={props.GetDOBMonth} />
        )
      ) : (
        <SelectYear setYear={props.GetDOBYear} />
      )}
      <DatePickerDialogBottom
        cancel={props.DOBCancel}
        submit={props.DOBSubmit}
        submitActive={props.DOBSubmitDisabled}
      />
    </DatePickerContainerDialog>
  );
};
