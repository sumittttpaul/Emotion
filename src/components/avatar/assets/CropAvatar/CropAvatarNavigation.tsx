import React, { FC } from 'react';
import { SmallIconButtonDark } from '../../../button/SmallIconButtonDark';
import { Button } from '@mui/material';

interface IProps {
  Changed: boolean;
  ResetClick: () => void;
  RotateLeft: () => void;
  RotateRight: () => void;
  FlipX: () => void;
  FlipY: () => void;
}

/**
 * @author
 * @function @CropAvatarNavigation
 **/

export const CropAvatarNavigation: FC<IProps> = (props) => {
  return (
    <div className="w-full flex justify-center p-5 items-center">
      <div className="flex py-1 px-3 bg-white/10 h-[44px] items-center justify-center shadow-xl rounded-lg">
        <SmallIconButtonDark
          onClick={props.RotateLeft}
          tooltip="Rotate image 90 degrees anti-clockwise"
          content="Rotate left"
          iconURL="/icons/rotate-left.svg"
        />
        <SmallIconButtonDark
          onClick={props.RotateRight}
          tooltip="Rotate image 90 degrees clockwise"
          content="Rotate right"
          iconURL="/icons/rotate-right.svg"
        />
        <SmallIconButtonDark
          onClick={props.FlipX}
          tooltip="Flip image vertically"
          content="Flip vertical"
          iconURL="/icons/flip-x.svg"
        />
        <SmallIconButtonDark
          onClick={props.FlipY}
          tooltip="Flip image horizontally"
          content="Flip horizontal"
          iconURL="/icons/flip-y.svg"
        />
        <div className="h-7 mx-3 block w-[2px] bg-white/50" />
        <Button
          aria-label="small-icon-button"
          disableFocusRipple
          disabled={!props.Changed}
          onClick={props.ResetClick}
          className="disabled:opacity-50 disabled:text-white disabled:cursor-not-allowed button-text-lower text-white h-9 py-2 px-4 text-[13px] rounded-md cursor-default hover:bg-white/10"
          sx={{
            minWidth: 0,
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff80 !important',
            },
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
