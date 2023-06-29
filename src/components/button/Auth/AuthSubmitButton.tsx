import React, { FC, ReactNode } from 'react';
import { Button } from '@mui/material';

interface IProps {
  Disabled: boolean;
  onClick: () => void;
  ClassName?: string;
  children: ReactNode;
}

/**
 * @author
 * @function @AuthSubmitButton
 **/

export const AuthSubmitButton: FC<IProps> = (props) => {
  return (
    <div className="flex h-10">
      <Button
        disableFocusRipple
        disabled={props.Disabled}
        onClick={props.onClick}
        className={`${props.ClassName} relative text-[13px] rounded-lg bg-primary-blue-rgb hover:bg-primary-blue-rgb/70 disabled:bg-primary-blue-rgb/50 px-14 py-2 font-[600] text-white disabled:text-white/75 cursor-default tracking-wide button-text-lower`}
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff80 !important',
          },
        }}
      >
        {props.children}
      </Button>
    </div>
  );
};
