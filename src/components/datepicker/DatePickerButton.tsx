import React, { FC, Fragment, useEffect, useState } from 'react';
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
  DOB: string;
  getDOB: (value: string) => void;
  SubmitDisabled: boolean;
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

  const _dataDay = props.DOB.split('-')[0];
  const _dataMonth = props.DOB.split('-')[1];
  const _dataYear = props.DOB.split('-')[2];

  // State
  const [DOBDialog, setDOBDialog] = useState(false);
  const [DOBScreen, setDOBScreen] = useState<'year' | 'month' | 'day'>('year');
  const [DOBSubmitDisabled, setDOBSubmitDisabled] = useState(false);
  const [DOBDay, setDOBDay] = useState(MomentDay);
  const [DOBMonth, setDOBMonth] = useState(MomentMonth);
  const [DOBYear, setDOBYear] = useState(MomentYear);

  // Handle Dialog
  const ShowDOBDialog = () => {
    setDOBDialog(true);
  };
  const HideDOBDialog = () => {
    setDOBDialog(false);
    setTimeout(() => {
      setDOBDay(MomentDay);
      setDOBMonth(MomentMonth);
      setDOBYear(MomentYear);
    }, 200);
  };

  // DOB Get
  const GetDOBDay = (day: string) => {
    setDOBDay(day);
    setDOBSubmitDisabled(true);
  };
  const GetDOBMonth = (month: string) => {
    setDOBMonth(month);
    setDOBScreen('day');
  };

  const GetDOBYear = (year: string) => {
    setDOBYear(year);
    setDOBScreen('month');
  };

  // DOB handle
  const DOBOpenhandle = () => {
    setDOBScreen('year');
    setDOBSubmitDisabled(false);
    setDOBDay(MomentDay);
    setDOBMonth(MomentMonth);
    setDOBYear(MomentYear);
    ShowDOBDialog();
  };
  const DOBCancelhandle = () => {
    HideDOBDialog();
  };
  const DOBSubmithandle = () => {
    props.getDOB(DOBDay + '-' + DOBMonth + '-' + DOBYear);
    props.setSubmitDisabled(false);
    setDOBDialog(false);
  };
  const DOBLabel = DOBDay + ' ' + DOBMonth + ' , ' + DOBYear;

  useEffect(() => {
    if (props.DOB) {
      setDOBDay(_dataDay);
      setDOBMonth(_dataMonth);
      setDOBYear(_dataYear);
    }
  }, [props.DOB]);

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
