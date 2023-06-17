import { Button } from '@mui/material';
import React, { FC, ReactEventHandler } from 'react';
import Image from 'next/image';
import { TooltipDark } from '../tooltip/TooltipDark';

interface IProps {
  tooltip?: string;
  content: string;
  iconURL: string;
  onClick: ReactEventHandler;
}

/**
 * @author
 * @function @SmallIconButtonDark
 **/

export const SmallIconButtonDark: FC<IProps> = (props) => {
  return (
    <TooltipDark title={props.tooltip} placement="bottom" arrow>
      <Button
        aria-label="small-icon-button"
        disableFocusRipple
        onClick={props.onClick}
        className="button-text-lower h-9 py-2 px-3 rounded-md cursor-default hover:bg-white/10"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff80 !important',
          },
        }}
      >
        <div className="flex sm:space-x-2 items-center">
          <div className="flex min-w-[18px] max-w-[18px] min-h-[18px] max-h-[18px]">
            <Image height={18} width={18} src={props.iconURL} alt="" />
          </div>
          <h6 className="text-[13px] text-white font-normal font-sans whitespace-nowrap hidden md:block">
            {props.content}
          </h6>
        </div>
      </Button>
    </TooltipDark>
  );
};
