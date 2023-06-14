import { Button } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  Rotataion?: () => void;
  Zoom?: () => void;
  Active: boolean;
}

/**
 * @author
 * @function @CropAvatarToggle
 **/

export const CropAvatarToggle: FC<IProps> = (props) => {
  const InActiveClass =
    'transition ease-in rounded-full p-2 px-4 outline-none button-text-lower text-xs font-normal font-sans whitespace-nowrap text-white';

  const ActiveClass =
    'transition ease-in rounded-full p-2 px-4 bg-[#ffffff26] hover:bg-[#ffffff26] outline-none button-text-lower text-xs font-normal font-sans whitespace-nowrap text-white';

  return (
    <div className="flex w-full justify-center space-x-2 p-6">
      <Button
      aria-label="rotate-button"
        disableFocusRipple
        onClick={props.Rotataion}
        className={props.Active ? InActiveClass : ActiveClass}
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff1a !important',
          },
        }}
      >
        Rotation
      </Button>
      <Button
      aria-label="zoom-button"
        disableFocusRipple
        onClick={props.Zoom}
        className={props.Active ? ActiveClass : InActiveClass}
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff1a !important',
          },
        }}
      >
        Zoom
      </Button>
    </div>
  );
};
