import React, { FC } from 'react';
import { useDatePickerState } from '../../../../providers/state/DatePickerState';
import { SelectDay } from '../../../datepicker/SelectDay';
import { DatePickerContainerDialog } from '../../../dialog/DatePickerContainerDialog';
import { SelectYear } from '../../../datepicker/SelectYear';
import { SelectMonth } from '../../../datepicker/SelectMonth';
import { DatePickerDialogHeader } from '../../../datepicker/Dialog/DatePickerDialogHeader';
import { DatePickerDialogBottom } from '../../../datepicker/Dialog/DatePickerDialogBottom';

interface IProps {
  Screen1: boolean;
  Screen2: boolean;
  day: number;
  month: number;
  year: number;
  getYear: string;
  getMonth: string;
  getDay: string;
  setDay: (day: number) => void;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  cancel: () => void;
  submit: () => void;
  submitActive: boolean;
}

/**
 * @author
 * @function @DatePickerDialogUI
 **/

export const DatePickerDialogUI: FC<IProps> = (props) => {
  const { DatePickerDialog, setDatePickerDialog } = useDatePickerState();

  const closeModal = () => {
    setDatePickerDialog({ show: false });
  };

  const setHeaderDates = () => {
    return props.getYear + ', ' + props.getMonth + ' ' + props.getDay;
  };

  return (
    <DatePickerContainerDialog show={DatePickerDialog.show} close={closeModal}>
      <DatePickerDialogHeader setHeaderDates={setHeaderDates()}/>
      {props.Screen1 ? (
        props.Screen2 ? (
          <SelectDay
          day={props.day}
            month={props.month}
            year={props.year}
            setDay={props.setDay}
            setMonth={props.setMonth}
          />
        ) : (
          <SelectMonth setMonth={props.setMonth} />
        )
      ) : (
        <SelectYear setYear={props.setYear} />
      )}
      <DatePickerDialogBottom cancel={props.cancel} submit={props.submit} submitActive={props.submitActive}/>
    </DatePickerContainerDialog>
  );
};
