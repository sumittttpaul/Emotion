import React, { FC } from 'react';
import { useDatePickerState } from '../../../providers/state/DatePickerState';
import { SelectDay } from '../../datepicker/SelectDay';
import { DatePickerContainerDialog } from '../../dialog/DatePickerContainerDialog';
import { SelectYear } from '../../datepicker/SelectYear';
import { Button } from '@mui/material';
import { SelectMonth } from '../../datepicker/SelectMonth';

interface IProps {
  Screen1: boolean;
  Screen2: boolean;
  month: number;
  year: number;
  setDay: (day:number) => void;
  setMonth: (month:number) => void;
  setYear: (year:number) => void;
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

  return (
    <DatePickerContainerDialog show={DatePickerDialog.show} close={closeModal}>
      <div className="text-white text-lg bg-[#151515] w-full relative block  whitespace-nowrap text-left">
        <h6 className="text-[10px] opacity-50 py-1 px-3 ">
          Choose your Date of Birth
        </h6>
        <h6 className="px-7 pb-4 text-2xl">Sun, May 22</h6>
      </div>

      {props.Screen1 ? (
        props.Screen2 ? (
          <SelectDay month={props.month} year={props.year} setDay={props.setDay}/>
        ) : (
          <SelectMonth setMonth={props.setMonth}/>
        )
      ) : (
        <SelectYear setYear={props.setYear}/>
      )}

      <div className="p-3 flex space-x-3 relative justify-end">
        <Button className="text-[rgba(255,255,255,0.8)] rounded-md font-normal text-[11px] h-8 w-[calc(100%/3)] border border-solid border-[rgba(255,255,255,0.2)] outline-none button-text-lower">
          Cancel
        </Button>
        <Button className="text-white rounded-md  text-[11px] h-8 w-[calc(100%/3)] bg-[#0074E4] hover:bg-[#0074E4] outline-none button-text-lower">
          Done
        </Button>
      </div>
    </DatePickerContainerDialog>
  );
};
