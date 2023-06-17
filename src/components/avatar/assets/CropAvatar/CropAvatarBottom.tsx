import { Button, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  back: () => void;
  submitLoading: boolean;
  submitClick?: () => void;
}

/**
 * @author
 * @function @CropAvatarBottom
 **/

export const CropAvatarBottom: FC<IProps> = (props) => {
  return (
    <div className="flex w-full justify-center sm:justify-between px-5 pb-5 sm:px-6 sm:pb-6 relative box-border">
      <div className="hidden sm:flex w-full h-[40px] justify-center items-center relative sm:max-w-[195px]">
        <Button
          aria-label="crop-image-button"
          disableFocusRipple
          onClick={props.back}
          className="cursor-default bg-white/5 hover:bg-white/5 font-[600] text-red-400 h-full w-full rounded-lg button-text-lower text-[13px] transition-colors"
          sx={{
            minWidth: 0,
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff80 !important',
            },
          }}
        >
          Cancel
        </Button>
      </div>
      <div className="flex w-full h-[40px] justify-center items-center relative sm:max-w-[195px]">
        <Button
          aria-label="crop-image-button"
          disableFocusRipple
          onClick={props.submitClick}
          className="cursor-default bg-dark-blue hover:bg-dark-blue font-[700] text-sky-400 h-full w-full rounded-lg button-text-lower text-[13px] transition-colors"
          sx={{
            minWidth: 0,
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff80 !important',
            },
          }}
        >
          Next
        </Button>
        {props.submitLoading && (
          <div className="absolute h-full w-full bottom-0 bg-dark-blue transition-all ease-in rounded-lg flex items-center justify-center">
            <CircularProgress className="text-sky-400" size={20} />
          </div>
        )}
      </div>
    </div>
  );
};
