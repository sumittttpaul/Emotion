import { Button } from '@mui/material';
import React, { FC, ReactEventHandler } from 'react';
import Image from 'next/legacy/image';
import { Square_BlurDataURL } from '../loader/BlurDataURL';

interface IProps {
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
    <Button
      aria-label="small-icon-button"
      disableFocusRipple
      onClick={props.onClick}
      className="button-text-lower text-white p-2 rounded-full outline-none hover:border-[#ffffff33]"
      sx={{
        border: '1px solid #ffffff00',
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff80 !important',
        },
      }}
    >
      <div className="flex space-x-2 items-center opacity-90">
        <Image
          layout="fixed"
          height={15}
          width={15}
          src={props.iconURL}
          loading="lazy"
          alt=""
          placeholder="blur"
          blurDataURL={Square_BlurDataURL}
        />
        <h6 className="text-xs font-normal font-sans whitespace-nowrap hidden xs-435:block">
          {props.content}
        </h6>
      </div>
    </Button>
  );
};
