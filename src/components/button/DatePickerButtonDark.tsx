import { Button } from '@mui/material';
import React, { FC } from 'react';
import { BorderContainerDark } from '../container/BorderContainerDark';

interface IProps {
  onClick?: () => void;
}

/**
 * @author
 * @function @DatePickerButtonDark
 **/

export const DatePickerButtonDark: FC<IProps> = (props) => {
  return (
    <BorderContainerDark>
      <Button
        onClick={props.onClick}
        className="text-white text-xs font-normal button-text-lower"
      >
        Date of Birth
      </Button>
    </BorderContainerDark>
  );
};
