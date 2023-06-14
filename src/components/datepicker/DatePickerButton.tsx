import React, { FC, Fragment, useState } from 'react';
import moment from 'moment';
import dynamic from 'next/dynamic';
import { DatePickerCustomButton } from './assets/DatePickerCustomButton';
import { DatePickerButtonDialogProps } from './DatePickerButtonDialog';

const DatePickerButtonDialog = dynamic<DatePickerButtonDialogProps>(
  () =>
    import('./DatePickerButtonDialog').then((x) => x.DatePickerButtonDialog),
  { ssr: false }
);

interface IProps {
  theme: string;
  getDOB: (value: string) => void;
  setSubmitDisabled: (value: boolean) => void;
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
  const [DOBScreen, setDOBScreen] = useState<'year' | 'month' | 'day'>('year');
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
    setDOBDayValue(MomentDay);
    setDOBMonthValue(MomentMonth);
    setDOBYearValue(MomentYear);
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
    setDOBMonthValue(GetDOBMonthName(month));
    setDOBScreen('day');
  };

  const GetDOBYear = (year: number) => {
    setDOBYear(year);
    setDOBYearValue(`${year}`);
    setDOBScreen('month');
  };

  // DOB handle
  const DOBOpenhandle = () => {
    setDOBScreen('year');
    setDOBSubmitDisabled(false);
    ShowDOBDialog();
    setDOBDayValue(MomentDay);
    setDOBMonthValue(MomentMonth);
    setDOBYearValue(MomentYear);
  };
  const DOBCancelhandle = () => {
    HideDOBDialog();
    setDOBDayValue(MomentDay);
    setDOBMonthValue(MomentMonth);
    setDOBYearValue(MomentYear);
  };
  const DOBSubmithandle = () => {
    props.getDOB(DOBDay + '-' + DOBMonth + '-' + DOBYear);
    props.setSubmitDisabled(false);
    setDOBDialog(false);
  };
  const DOBLabel = DOBDayValue + ' ' + DOBMonthValue + ' , ' + DOBYearValue;
  return (
    <Fragment>
      <DatePickerCustomButton
        theme={props.theme}
        label={`${DOBLabel}`}
        onClick={DOBOpenhandle}
      />
      <DatePickerButtonDialog
        DOBShow={DOBDialog}
        setDOBShow={HideDOBDialog}
        DOBScreen={DOBScreen}
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
    </Fragment>
  );
};
