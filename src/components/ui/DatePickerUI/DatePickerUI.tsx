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

  const openModal = () => {
    setDatePickerDialog({ show: true });
  };
  return (
    <>
      <DatePickerButtonDark onClick={openModal} />
      <DatePickerDialogUI />
    </>
  );
};
