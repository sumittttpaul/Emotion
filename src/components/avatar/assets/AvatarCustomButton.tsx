import { IconButton } from '@mui/material';
import { CameraIcon } from '@heroicons/react/solid';
import React, { FC } from 'react';
import Image from 'next/legacy/image';
import { Circle_BlurDataURL } from '../../loader/BlurDataURL';

interface IProps {
  onClick?: () => void;
  ImageURL: string;
}

/**
 * @author
 * @function @AvatarCustomButton
 **/

export const AvatarCustomButton: FC<IProps> = (props) => {
  return (
    <IconButton
      onClick={props.onClick}
      disableRipple
      disableFocusRipple
      disableTouchRipple
      className="p-0 flex-grow-0 hover:opacity-50 opacity-100 transition-opacity flex-shrink-0 rounded-[50%] cursor-default"
      sx={{ borderRadius: '50%' }}
    >
      <div className="relative flex">
        <div className="relative flex rounded-[50%] overflow-hidden">
          <Image
            height={125}
            width={125}
            className="rounded-[50%]"
            src={props.ImageURL}
            blurDataURL={Circle_BlurDataURL}
            placeholder="blur"
            alt=""
          />
        </div>
        <div className="absolute bg-secondary-theme flex justify-center items-center right-0 bottom-0 p-1.5 rounded-[50%]">
          <CameraIcon className="text-white h-[25px] w-[25px]" />
        </div>
      </div>
    </IconButton>
  );
};
