import { Button } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { Square_BlurDataURL } from '../loader/BlurDataURL';

interface IProps {
  onClick?: () => void;
  label: string;
  theme: string;
}

/**
 * @author
 * @function @DOBbutton
 **/

export const DOBbutton: FC<IProps> = (props) => {
  if (props.theme.toLowerCase() === 'light') {
    return (
      <Button
        aria-label="select-dob-button"
        disableFocusRipple
        onClick={props.onClick}
        className="rounded-md py-3 px-4 button-text-lower text-black bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.1)]"
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
          <h6 className="text-black text-[13px] font-normal">{props.label}</h6>
        </div>
      </Button>
    );
  }
  if (props.theme.toLowerCase() === 'dark') {
    return (
      <Button
        aria-label="select-dob-button"
        disableFocusRipple
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
  } else {
    return null;
  }
};
