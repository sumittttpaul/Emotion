import { ArrowLeftIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import { IconButton } from '@mui/material';
import React, { FC, MouseEvent } from 'react';
import { TooltipDark } from '../../../tooltip/TooltipDark';

interface IProps {
  back: () => void;
  moreInfo: (event: MouseEvent<HTMLElement>) => void;
  heading: string;
}

/**
 * @author
 * @function @CropAvatarTop
 **/

export const CropAvatarTop: FC<IProps> = (props) => {
  return (
    <div className="flex w-full z-10 justify-between items-center p-1">
      <TooltipDark placement="bottom" title="Back" arrow>
        <IconButton
          disableFocusRipple
          onClick={props.back}
          className="hover:bg-white/5 p-3"
        >
          <ArrowLeftIcon className="h-5 text-white" />
        </IconButton>
      </TooltipDark>
      <div className="flex items-center justify-start sm:justify-center w-full px-1 space-x-1.5">
        <h6 className="text-white text-lg tracking-wide font-normal">
          {props.heading}
        </h6>
      </div>
      <TooltipDark placement="bottom" title="Menu" arrow>
        <IconButton
          disableFocusRipple
          onClick={props.moreInfo}
          className="hover:bg-white/5 p-3"
        >
          <DotsVerticalIcon className="h-5 text-white" />
        </IconButton>
      </TooltipDark>
    </div>
  );
};
