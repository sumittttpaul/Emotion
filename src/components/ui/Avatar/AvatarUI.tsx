import { Button } from '@mui/material';
import React, { FC } from 'react';
import ShowAvatar from '../../avatar/ShowAvatar';
import { useShowAvatarState } from '../../../providers/state/ShowAvatarState';
import SelectAvatar from '../../avatar/SelectAvatar';

interface IProps {}

/**
 * @author
 * @function @AvatarUI
 **/

const AvatarUI: FC<IProps> = (props) => {
  const { setShowAvatar } = useShowAvatarState();

  const handleClick = () => {
    setTimeout(() => {
      setShowAvatar({ setShow: true });
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
      <SelectAvatar />
    </>
  );
};

export default AvatarUI;
