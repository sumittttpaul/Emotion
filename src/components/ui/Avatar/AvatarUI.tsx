import { Button } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import ShowAvatar from '../../avatar/ShowAvatar';
import { useAvatarState } from '../../../providers/state/AvatarState';

interface IProps {}

/**
 * @author
 * @function @AvatarUI
 **/

const AvatarUI: FC<IProps> = (props) => {

  const { setAvatarState } = useAvatarState();

  const handleClick = () => {
    setTimeout(() => {
      setAvatarState({ setShow: true });
    }, 250);
  };

  return (
    <>
      <Button
        onClick={handleClick}
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
        py-5
        rounded-md"
      >
        Select your profile photo
      </Button>

      <ShowAvatar />
    </>
  );
};

export default AvatarUI;
