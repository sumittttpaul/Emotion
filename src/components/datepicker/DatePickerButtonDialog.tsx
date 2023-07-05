import React, { FC } from 'react';
import { DatePickerContainerDialog } from '../dialog/DatePickerContainerDialog';
import { DatePickerDialogBottom } from './assets/Dialog/DatePickerDialogBottom';
import { DatePickerDialogHeader } from './assets/Dialog/DatePickerDialogHeader';
import { SelectDay } from './assets/SelectDay';
import { SelectMonth } from './assets/SelectMonth';
import { SelectYear } from './assets/SelectYear';

export interface DatePickerButtonDialogProps {
  DOBScreen: 'year' | 'month' | 'day';
  DOBShow: boolean;
  setDOBShow: () => void;
  DOBDay: string;
  DOBMonth: string;
  DOBYear: string;
  GetDOBDay: (day: string) => void;
  GetDOBMonth: (month: string) => void;
  GetDOBYear: (year: string) => void;
  DOBCancel: () => void;
  DOBSubmit: () => void;
  DOBSubmitDisabled: boolean;
}

/**
 * @author
 * @function @DatePickerButtonDialog
 **/

export const DatePickerButtonDialog: FC<DatePickerButtonDialogProps> = (
  props
) => {
  const setHeaderDates = () => {
    return props.DOBYear + ', ' + props.DOBMonth + ' ' + props.DOBDay;
  };

  return (
    <DatePickerContainerDialog
      show={props.DOBShow}
      onClose={props.setDOBShow}
      disableClickAwayClose
    >
      <div className="flex flex-col w-[330px] h-[525px]">
        <DatePickerDialogHeader setHeaderDates={setHeaderDates()} />
        {props.DOBScreen === 'year' && (
          <SelectYear setYear={props.GetDOBYear} />
        )}
        {props.DOBScreen === 'month' && (
          <SelectMonth setMonth={props.GetDOBMonth} />
        )}
        {props.DOBScreen === 'day' && (
          <SelectDay
            day={props.DOBDay}
            month={props.DOBMonth}
            year={props.DOBYear}
            setDay={props.GetDOBDay}
            setMonth={props.GetDOBMonth}
            setYear={props.GetDOBYear}
          />
        )}
        <DatePickerDialogBottom
          cancel={props.DOBCancel}
          submit={props.DOBSubmit}
          submitActive={props.DOBSubmitDisabled}
        />
      </div>
    </DatePickerContainerDialog>
  );
};
