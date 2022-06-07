import { IconButton } from '@mui/material';
import { CameraIcon } from '@heroicons/react/solid';
import React, { FC } from 'react';
import Image from 'next/image';

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
      className="p-0 flex-grow-0 flex-shrink-0"
      sx={{ borderRadius: '50%' }}
    >
      <div className="relative block rounded-[50%]">
        <Image
          height={100}
          width={100}
          className="rounded-[50%]"
          src={props.ImageURL}
          priority={true}
          alt="choose user profile photo"
          placeholder="blur"
          blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPM/A8AAdcBav6SYsIAAAAASUVORK5CYII=`}
        />
        <div className="absolute bg-[rgb(32,32,32)] opacity-70 flex justify-center items-center h-[35%] left-0 right-0 bottom-0">
          <CameraIcon className="text-white h-[25px] w-[25px] mb-2.5" />
        </div>
      </div>
    </IconButton>
  );
};
