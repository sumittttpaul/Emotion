import React, { FC } from 'react';
import { useDatePickerState } from '../../../providers/state/DatePickerState';
import { DialogContainerDark } from '../../dialog/DialogContainerDark';
import { SelectDay } from '../../datepicker/SelectDay';
import { DatePickerContainerDialog } from '../../dialog/DatePickerContainerDialog';

interface IProps {}

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
      <SelectDay />
    </DatePickerContainerDialog>
  );
};
