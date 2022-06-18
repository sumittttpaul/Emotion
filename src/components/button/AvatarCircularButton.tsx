import { IconButton } from '@mui/material';
import { CameraIcon } from '@heroicons/react/solid';
import React, { FC } from 'react';
import Image from 'next/image';
import { Circle_BlurDataURL } from '../loader/BlurDataURL';

interface IProps {
  onClick?: () => void;
  ImageURL: string;
}

/**
 * @author
 * @function @AvatarCircularButton
 **/

export const AvatarCircularButton: FC<IProps> = (props) => {
  return (
    <IconButton
      onClick={props.onClick}
      disableRipple
      disableFocusRipple
      disableTouchRipple
      className="p-0 flex-grow-0 flex-shrink-0 rounded-[50%] overflow-hidden"
      sx={{ borderRadius: '50%' }}
    >
      <div className="relative flex rounded-[50%] overflow-hidden">
        <Image
          height={100}
          width={100}
          className="rounded-[50%]"
          src={props.ImageURL}
          priority={true}
          alt="choose user profile photo"
          placeholder="blur"
          blurDataURL={Circle_BlurDataURL}
        />
        <div className="absolute bg-[rgb(32,32,32)] opacity-70 flex justify-center items-center h-[33%] left-0 right-0 bottom-0">
          <CameraIcon className="text-white h-[25px] w-[25px] mb-[2px]" />
        </div>
      </div>
    </IconButton>
  );
};
