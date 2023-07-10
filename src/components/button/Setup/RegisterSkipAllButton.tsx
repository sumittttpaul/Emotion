import { Button } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface IProps {
  onClick: () => void;
  ClassName?: string;
  children: ReactNode;
}

export const SetupSkipAllButton: FC<IProps> = (props) => {
  return (
    <div className="flex h-10">
      <Button
        disableFocusRipple
        onClick={props.onClick}
        className={`${props.ClassName} text-[13px] truncate text-sky-400 bg-transparent hover:bg-sky-400/10 rounded-lg px-14 py-2 font-medium cursor-default tracking-wide button-text-lower transition-all`}
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#38bdf880 !important',
          },
        }}
      >
        {props.children}
      </Button>
    </div>
  );
};
