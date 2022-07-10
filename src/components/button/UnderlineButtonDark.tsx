import { Button } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  label: string;
}

/**
 * @author
 * @function @UnderlineButtonDark
 **/

export const UnderlineButtonDark: FC<IProps> = (props) => {
  return (
    <Button
      className="text-white block whitespace-nowrap p-0 m-0 text-[14px] hover:underline underline-offset-4 font-sans font-normal button-text-lower"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff00 !important',
        },
      }}
    >
      {props.label}
    </Button>
  );
};
