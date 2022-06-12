import { Button } from '@mui/material';
import React, { FC, ReactEventHandler } from 'react';
import Image from 'next/image';
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
      disableFocusRipple
      onClick={props.onClick}
      className="button-text-lower text-white p-2 rounded-full outline-none hover:border-[rgba(255,255,255,0.2)]"
      sx={{
        border: '1px solid rgba(255,255,255,0)',
        '.MuiTouchRipple-child': {
          backgroundColor: 'rgba(225, 225, 255, 0.1) !important',
        },
      }}
    >
      <div className="flex space-x-2 items-center opacity-80">
        <Image
          layout="fixed"
          height={15}
          width={15}
          src={props.iconURL}
          alt="crop-avatar-navigation-button-icon"
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
