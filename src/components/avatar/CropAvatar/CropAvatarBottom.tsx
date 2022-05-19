import { Button } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  changed: boolean;
  resetClick?: () => void;
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
        disabled={!props.changed}
        onClick={props.resetClick}
        className="disabled:text-[rgba(255,255,255,0.5)] font-normal max-w-[200px] border border-solid bg-transparent border-[rgba(255,255,255,0.25)] hover:bg-transparent h-[40px] rounded-md button-text-lower text-white text-xs transition-colors w-full"
      >
        Reset to default
      </Button>
      <Button onClick={props.submitClick} className="max-w-[200px] bg-[#0074E4] hover:bg-[#0074E4] h-[40px] rounded-md button-text-lower text-white text-xs transition-colors w-full">
        Set profile picture
      </Button>
    </div>
  );
};
