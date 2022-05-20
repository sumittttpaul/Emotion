import { Button } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  onClick?: () => void;
  profileURL: string;
}

/**
 * @author
 * @function @AvatarButton
 **/

export const AvatarButton: FC<IProps> = (props) => {
  return (
    <Button
      onClick={props.onClick}
      sx={{
        color: 'rgba(255, 255, 255, 0.70)',
        border: '1px solid rgba(255, 255, 255, 0.23)',
      }}
      className="
        button-text-lower 
        text-xs 
        font-normal 
        hover:border
        bg-transparent
        w-full
        p-2
        rounded-r-md
        rounded-l-full"
    >
      <div className="flex space-x-4 items-center w-full">
        <Image
          height={50}
          width={50}
          className="rounded-[50%]"
          src={props.profileURL}
          alt="choose user profile photo"
        />
        <div className="flex flex-col text-left">
          <h6 className="text-xs">Choose your profile photo</h6>
          <h6 className="text-[10px] opacity-60 font-normal">
            Try our new avatar collections for women & men
          </h6>
        </div>
      </div>
    </Button>
  );
};
