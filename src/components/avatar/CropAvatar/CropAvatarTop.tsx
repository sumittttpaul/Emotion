import { ArrowLeftIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { IconButton } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  back?: () => void;
  moreInfo?: () => void;
}

/**
 * @author
 * @function @CropAvatarTop
 **/

export const CropAvatarTop: FC<IProps> = (props) => {
  return (
    <div className="flex w-full justify-between items-center p-1">
      <IconButton
        disableFocusRipple
        onClick={props.back}
        className="hover:bg-[rgba(255,255,255,0.1)] p-3"
      >
        <ArrowLeftIcon className="h-5 text-white" />
      </IconButton>
      <h6 className="text-white font-normal pt-1">Crop & Rotate</h6>
      <IconButton
        disableFocusRipple
        onClick={props.moreInfo}
        className="hover:bg-[rgba(255,255,255,0.1)] p-3"
      >
        <DotsVerticalIcon className="h-5 text-white" />
      </IconButton>
    </div>
  );
};
