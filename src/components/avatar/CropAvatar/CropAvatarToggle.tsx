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
    'transition ease-in rounded-full p-2 px-4 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.15)] outline-none button-text-lower text-xs font-normal font-sans whitespace-nowrap text-white';

  return (
    <div className="flex w-full justify-center space-x-2 p-6">
      <Button
        disableFocusRipple
        onClick={props.Rotataion}
        className={props.Active ? InActiveClass : ActiveClass}
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: 'rgba(225, 225, 255, 0.1) !important',
          },
        }}
      >
        Rotation
      </Button>
      <Button
        disableFocusRipple
        onClick={props.Zoom}
        className={props.Active ? ActiveClass : InActiveClass}
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: 'rgba(225, 225, 255, 0.1) !important',
          },
        }}
      >
        Zoom
      </Button>
    </div>
  );
};
