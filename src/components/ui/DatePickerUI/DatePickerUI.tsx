import React, { FC, useState } from 'react';
import { useDatePickerState } from '../../../providers/state/DatePickerState';
import { DatePickerButtonDark } from '../../button/DatePickerButtonDark';
import { DatePickerDialogUI } from './DatePickerDialogUI';
import moment from 'moment';

interface IProps {}

/**
 * @author
 * @function @DatePickerUI
 **/

export const DatePickerUI: FC<IProps> = (props) => {
  const { setDatePickerDialog } = useDatePickerState();

  const [Screen1, setScreen1] = useState<boolean>(false);
  const [Screen2, setScreen2] = useState<boolean>(false);

  const [DayValue, setDayValue] = useState<string>(
    moment().endOf('day').format('D')
  );
  const [MonthValue, setMonthValue] = useState<string>(
    moment().endOf('month').format('MMM')
  );
  const [YearValue, setYearValue] = useState<string>(
    moment().endOf('year').format('YYYY')
  );

  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  const openModal = () => {
    setDatePickerDialog({ show: true });
    setScreen1(false);
    setScreen2(false);
    setDayValue(moment().endOf('day').format('D'));
    setMonthValue(moment().endOf('month').format('MMM'));
    setYearValue(moment().endOf('year').format('YYYY'));
  };

  const getMonthName = (month: number) => {
    const date = new Date();
    date.setMonth(month - 1);

    return date.toLocaleString('en-IN', {
      month: 'short',
    });
  };

  const getDay = (day: number) => {
    setDay(day);
    setDayValue(`${day}`);
  };

  const getMonth = (month: number) => {
    setMonth(month);
    setTimeout(() => {
      setScreen1(true);
      setScreen2(true);
      setMonthValue(getMonthName(month));
    }, 500);
  };

  const getYear = (year: number) => {
    setYear(year);
    setTimeout(() => {
      setScreen1(true);
      setScreen2(false);
      setYearValue(`${year}`);
    }, 500);
  };

  const Cancelhandle = () => {
    setTimeout(() => {
      setDatePickerDialog({ show: false });
    }, 250);
  };

  const Submithandle = () => {};

  return (
    <>
      <DatePickerButtonDark onClick={openModal} />
      <DatePickerDialogUI
        day={day}
        month={month}
        year={year}
        Screen1={Screen1}
        Screen2={Screen2}
        getDay={DayValue}
        getMonth={MonthValue}
        getYear={YearValue}
        setDay={getDay}
        setMonth={getMonth}
        setYear={getYear}
        cancel={Cancelhandle}
        submit={Submithandle}
      />
    </>
  );
};
