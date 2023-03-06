import { Button } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/legacy/image';
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
        className="rounded-md py-3 px-4 button-text-lower text-black bg-[#00000013] hover:bg-[#00000013]"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff80 !important',
          },
        }}
      >
        <div className="flex space-x-3">
          <Image
            height={20}
            width={20}
            className="opacity-70"
            src="/icons/candle-black.svg"
            alt=""
            loading="lazy"
            placeholder="blur"
            blurDataURL={Square_BlurDataURL}
          />
          <h6 className="text-black text-[13px] font-medium">{props.label}</h6>
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
        className="rounded-md py-3 px-4 button-text-lower text-white bg-[#0f0f0f] hover:bg-[#0f0f0f]"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff80 !important',
          },
        }}
      >
        <div className="flex space-x-3">
          <Image
            height={20}
            width={20}
            className="opacity-70"
            src="/icons/candle-white.svg"
            alt=""
            loading="lazy"
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
