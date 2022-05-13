import { Avatar, Button } from '@mui/material';
import React, { FC, useState } from 'react';
import ShowAvatar from '../../avatar/ShowAvatar';

interface IProps {}

/**
 * @author
 * @function @AvatarUI
 **/

const AvatarUI: FC<IProps> = (props) => {
  // Initail State for Show Avatar Screen
  const [ShowAvatarScreen, setShowAvatarScreen] = useState<boolean>(true);

  const HideAvatarScreen = (Status: boolean): void => {
    setShowAvatarScreen(Status);
  };

  const handleClick = () => {
    setTimeout(() => {
      setShowAvatarScreen(true);
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

      <ShowAvatar setShow={ShowAvatarScreen} setHide={HideAvatarScreen} />
    </>
  );
};

export default AvatarUI;
