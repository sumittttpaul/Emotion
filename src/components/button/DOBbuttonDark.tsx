import { Button } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  onClick?: () => void;
  label: string;
}

/**
 * @author
 * @function @DOBbuttonDark
 **/

export const DOBbuttonDark: FC<IProps> = (props) => {
  return (
    <Button
      onClick={props.onClick}
      className="rounded-md p-3 button-text-lower text-white bg-[#121212] hover:bg-[#121212]"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: 'rgba(225, 225, 255, 0.2) !important',
        },
      }}
    >
      <div className="flex space-x-2">
        <Image
          height={20}
          width={20}
          className="opacity-50"
          src="/icons/balloon.svg"
          alt="balloon icon"
        />
        <h6 className="text-white text-[11px] font-normal">{props.label}</h6>
      </div>
    </Button>
  );
};
