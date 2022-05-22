import React, { FC, useState } from 'react';
import { useDatePickerState } from '../../../providers/state/DatePickerState';
import { DatePickerButtonDark } from '../../button/DatePickerButtonDark';
import { DatePickerDialogUI } from './DatePickerDialogUI';

interface IProps {}

/**
 * @author
 * @function @DatePickerUI
 **/

export const DatePickerUI: FC<IProps> = (props) => {
  const { setDatePickerDialog } = useDatePickerState();

  const [Screen1, setScreen1] = useState<boolean>(false);
  const [Screen2, setScreen2] = useState<boolean>(false);

  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  const openModal = () => {
    setDatePickerDialog({ show: true });
  };

  const getDay = (day: number) => {
    setDay(day);
  };

  const getMonth = (month: number) => {
    setMonth(month);
    setTimeout(() => {
      setScreen1(true);
      setScreen2(true);
    }, 500);
  };

  const getYear = (year: number) => {
    setYear(year);
    setTimeout(() => {
      setScreen1(true);
      setScreen2(false);
    }, 500);
  };

  return (
    <>
      <DatePickerButtonDark onClick={openModal} />
      <DatePickerDialogUI
        month={month}
        year={year}
        Screen1={Screen1}
        Screen2={Screen2}
        setDay={getDay}
        setMonth={getMonth}
        setYear={getYear}
      />
    </>
  );
};
