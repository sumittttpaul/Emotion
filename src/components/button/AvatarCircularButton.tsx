import { IconButton } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  onClick?: () => void;
  profileURL: string;
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
          src={props.profileURL}
          alt="choose user profile photo"
        />
        <div className="absolute bg-[rgb(32,32,32)] opacity-50 flex justify-center items-center h-[35%] left-0 right-0 bottom-0">
          <Image
            height={25}
            width={25}
            className="h-full"
            alt='camera icon'
            src="https://www.gstatic.com/images/icons/material/system/2x/photo_camera_white_24dp.png"
          />
        </div>
      </div>
    </IconButton>
  );
};
