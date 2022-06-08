import { Button } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { Square_BlurDataURL } from '../loader/BlurDataURL';

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
      className="rounded-md py-3 px-4 button-text-lower text-white bg-[#121212] hover:bg-[#121212]"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: 'rgba(225, 225, 255, 0.2) !important',
        },
      }}
    >
      <div className="flex space-x-3">
        <Image
          height={20}
          width={20}
          className="opacity-70"
          src="/icons/candle.svg"
          alt="balloon icon"
          placeholder="blur"
          blurDataURL={Square_BlurDataURL}
        />
        <h6 className="text-white text-[13px] font-normal">{props.label}</h6>
      </div>
    </Button>
  );
};
