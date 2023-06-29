import { CheckIcon } from '@heroicons/react/solid';
import { Button } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  back: () => void;
  submitClick?: () => void;
}

/**
 * @author
 * @function @CropAvatarBottom
 **/

export const CropAvatarBottom: FC<IProps> = (props) => {
  return (
    <div className="flex w-full justify-center sm:justify-between px-5 pb-5 sm:px-6 sm:pb-6 relative box-border">
      <div className="hidden sm:flex w-full h-[40px] justify-center items-center relative sm:max-w-[165px]">
        <Button
          disableFocusRipple
          onClick={props.back}
          aria-label="cancel-image-button"
          className="cursor-default button-text-lower py-2 text-red-400 text-sm font-[600]  w-full rounded-lg bg-white/5 hover:bg-white/[0.03] backdrop-blur-2xl"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff80 !important',
            },
          }}
        >
          Cancel
        </Button>
      </div>
      <div className="flex w-full h-[40px] justify-center items-center relative sm:max-w-[165px]">
        <Button
          aria-label="set-image-button"
          disableFocusRipple
          onClick={props.submitClick}
          className="cursor-default bg-dark-blue hover:bg-dark-blue/70 text-sky-400 h-full w-full rounded-lg button-text-lower"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#38bdf880 !important',
            },
          }}
        >
          <div className="flex space-x-2 items-center justify-center">
            <CheckIcon className="h-5 block" />
            <h6 className="text-sm flex truncate pt-[2px] font-[700]">Set</h6>
          </div>
        </Button>
      </div>
    </div>
  );
};
