import { Button } from '@mui/material';
import React, { FC, ReactEventHandler } from 'react';
import { LoadingButton } from '@mui/lab';

interface IProps {
  content: string;
  onClick: ReactEventHandler;
  Disabled: boolean;
}

/**
 * @author
 * @function @LargeButtonBlue
 **/

const LargeButtonBlue: FC<IProps> = (props) => {
  return (
    <Button
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
        },
      }}
      disabled={props.Disabled}
      onClick={props.onClick}
      className="bg-[#0074E4] hover:bg-[#0074E4] disabled:opacity-50 disabled:text-white rounded-md text-white h-[60px] w-full text-xs transition-all ease-in"
    >
      {props.content}
    </Button>
  );
};

export default LargeButtonBlue;
