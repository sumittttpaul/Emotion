import { Button, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  changed: boolean;
  resetClick?: () => void;
  submitLoading: boolean;
  submitClick?: () => void;
}

/**
 * @author
 * @function @CropAvatarBottom
 **/

export const CropAvatarBottom: FC<IProps> = (props) => {
  return (
    <div className="flex w-full justify-between space-x-5 px-6 pb-6">
      <Button
        disableFocusRipple
        aria-label="reset-crop-image-button"
        disabled={!props.changed}
        onClick={props.resetClick}
        className="disabled:text-[#ffffff80] disabled:cursor-not-allowed font-normal max-w-[200px] border border-solid bg-transparent border-[#ffffff40] hover:bg-transparent h-[40px] rounded-md button-text-lower text-white text-xs transition-colors w-full"
      >
        Reset to default
      </Button>
      <div className="relative w-full max-w-[200px] flex">
        <Button
          aria-label="crop-image-button"
          disableFocusRipple
          onClick={props.submitClick}
          className="bg-primary-blue hover:bg-primary-blue h-[40px] rounded-md button-text-lower text-white text-xs transition-colors w-full"
        >
          Set profile picture
        </Button>
        {props.submitLoading ? (
          <div className="absolute h-full w-full top-0 bg-[#104A82] transition-all ease-in rounded-md flex items-center justify-center">
            <CircularProgress
              className="text-white opacity-75"
              size={20}
              thickness={3}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
