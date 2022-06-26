import React, { FC, useState } from 'react';
import moment from 'moment';
import { DOBbutton } from '../../../../button/DOBbutton';
import dynamic from 'next/dynamic';
import { DatePickerDialogUIProps } from '../DatePickerUI/DatePickerDialogUI';
// import { DatePickerDialogUI } from '../DatePickerUI/DatePickerDialogUI';

const DatePickerDialogUI = dynamic<DatePickerDialogUIProps>(
  () =>
    import('../DatePickerUI/DatePickerDialogUI').then(
      (x) => x.DatePickerDialogUI
    ),
  { ssr: false }
);

interface IProps {
  theme: string;
  getDOBValue: (value: string) => void;
  getHandleBoolValue: (value: boolean) => void;
}

/**
 * @author
 * @function @DatePickerButton
 **/

export const DatePickerButton: FC<IProps> = (props) => {
  var MomentDay = moment().endOf('day').format('DD');
  var MomentMonth = moment().endOf('month').format('MMM');
  var MomentYear = moment().endOf('year').format('YYYY');

  // State
  const [DOBDialog, setDOBDialog] = useState(false);
  const [DOBScreen1, setDOBScreen1] = useState(false);
  const [DOBScreen2, setDOBScreen2] = useState(false);
  const [DOBSubmitDisabled, setDOBSubmitDisabled] = useState(false);
  const [DOBDay, setDOBDay] = useState(0);
  const [DOBMonth, setDOBMonth] = useState(0);
  const [DOBYear, setDOBYear] = useState(0);
  const [DOBDayValue, setDOBDayValue] = useState(MomentDay);
  const [DOBMonthValue, setDOBMonthValue] = useState(MomentMonth);
  const [DOBYearValue, setDOBYearValue] = useState(MomentYear);

  // Handle Dialog
  const ShowDOBDialog = () => {
    setDOBDialog(true);
  };
  const HideDOBDialog = () => {
    setDOBDialog(false);
    setTimeout(() => {
      setDOBDayValue(MomentDay);
      setDOBMonthValue(MomentMonth);
      setDOBYearValue(MomentYear);
    }, 250);
  };

  // DOB Get
  const GetDOBMonthName = (month: number) => {
    const date = new Date();
    date.setMonth(month - 1);
    return date.toLocaleString('en-IN', {
      month: 'short',
    });
  };
  const GetDOBDay = (day: number) => {
    setDOBDay(day);
    setDOBDayValue(`${day}`);
    setDOBSubmitDisabled(true);
  };
  const GetDOBMonth = (month: number) => {
    setDOBMonth(month);
    setTimeout(() => {
      setDOBScreen1(true);
      setDOBScreen2(true);
      setDOBMonthValue(GetDOBMonthName(month));
    }, 500);
  };
  const GetDOBYear = (year: number) => {
    setDOBYear(year);
    setTimeout(() => {
      setDOBScreen1(true);
      setDOBScreen2(false);
      setDOBYearValue(`${year}`);
    }, 500);
  };

  // DOB handle
  const DOBOpenhandle = () => {
    setDOBSubmitDisabled(false);
    setDOBScreen1(false);
    setDOBScreen2(false);
    setTimeout(() => {
      ShowDOBDialog();
      setDOBDayValue(MomentDay);
      setDOBMonthValue(MomentMonth);
      setDOBYearValue(MomentYear);
    }, 200);
  };
  const DOBCancelhandle = () => {
    setTimeout(() => {
      HideDOBDialog();
      setDOBDayValue(MomentDay);
      setDOBMonthValue(MomentMonth);
      setDOBYearValue(MomentYear);
    }, 200);
  };
  const DOBSubmithandle = () => {
    setTimeout(() => {
      props.getDOBValue(DOBDay + '-' + DOBMonth + '-' + DOBYear);
      props.getHandleBoolValue(false);
      setDOBDialog(false);
    }, 200);
  };
  const DOBLabel = DOBDayValue + ' ' + DOBMonthValue + ' , ' + DOBYearValue;
  return (
    <>
      <DOBbutton
        theme={props.theme}
        label={`${DOBLabel}`}
        onClick={DOBOpenhandle}
      />
      <DatePickerDialogUI
        DOBShow={DOBDialog}
        setDOBShow={HideDOBDialog}
        DOBScreen1={DOBScreen1}
        DOBScreen2={DOBScreen2}
        DOBDay={DOBDay}
        DOBMonth={DOBMonth}
        DOBYear={DOBYear}
        DOBDayValue={DOBDayValue}
        DOBMonthValue={DOBMonthValue}
        DOBYearValue={DOBYearValue}
        GetDOBDay={GetDOBDay}
        GetDOBMonth={GetDOBMonth}
        GetDOBYear={GetDOBYear}
        DOBCancel={DOBCancelhandle}
        DOBSubmit={DOBSubmithandle}
        DOBSubmitDisabled={DOBSubmitDisabled}
      />
    </>
  );
};
