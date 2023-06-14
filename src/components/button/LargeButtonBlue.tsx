import { Button, CircularProgress } from '@mui/material';
import React, { FC, ReactEventHandler } from 'react';

export interface LargeButtonBlueProps {
  content: string;
  onClick: ReactEventHandler;
  Disabled: boolean;
  Loading: boolean;
}

/**
 * @author
 * @function @LargeButtonBlue
 **/

const LargeButtonBlue: FC<LargeButtonBlueProps> = (props) => {
  return (
    <div className="w-full relative">
      <Button
        aria-label="all-purpose-blue-button"
        disableFocusRipple
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff80 !important',
          },
        }}
        disabled={props.Disabled}
        onClick={props.onClick}
        className="bg-primary-blue hover:bg-primary-blue disabled:cursor-not-allowed disabled:opacity-50 disabled:text-white rounded-md text-white h-[60px] w-full text-xs transition-all ease-in"
      >
        {props.content}
      </Button>
      {props.Loading && (
        <div className="absolute h-full w-full top-0 bg-[#104A82] transition-all ease-in rounded-md flex items-center justify-center">
          <CircularProgress
            className="text-white opacity-75"
            size={20}
            thickness={3}
          />
        </div>
      )}
    </div>
  );
};

export default LargeButtonBlue;
