import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { IconButton } from '@mui/material';
import React, { FC } from 'react';

export interface DiscoverSliderTitleProps {
  label: string;
  slideLeft: () => void;
  slideRight: () => void;
  LeftDisabled: boolean;
  RightDisabled: boolean;
}

/**
 * @author
 * @function @DiscoverSliderTitle
 **/

export const DiscoverSliderTitle: FC<DiscoverSliderTitleProps> = (props) => {
  return (
    <div className="w-full px-5 flex text-white justify-between">
      <h6 className="text-[18px]">{props.label}</h6>
      <div className="hidden sm:flex space-x-2">
        <IconButton
          onClick={props.slideLeft}
          disabled={props.LeftDisabled}
          disableFocusRipple
          className="block disabled:opacity-40 opacity-80 transition-all duration-300 button-text-lower h-full p-1.5 bg-white hover:bg-white bg-opacity-10 hover:bg-opacity-10 disabled:bg-white disabled:bg-opacity-10"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
            },
          }}
        >
          <ChevronLeftIcon className="h-5 w-5 opacity-90 hover:opacity-100 header-icon-hover text-white" />
        </IconButton>
        <IconButton
          onClick={props.slideRight}
          disabled={props.RightDisabled}
          disableFocusRipple
          className="block disabled:opacity-40 opacity-80 transition-all duration-300 button-text-lower h-full p-1.5 bg-white hover:bg-white bg-opacity-10 hover:bg-opacity-10 disabled:bg-white disabled:bg-opacity-10"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
            },
          }}
        >
          <ChevronRightIcon className="h-5 w-5 opacity-90 hover:opacity-100 header-icon-hover text-white" />
        </IconButton>
      </div>
    </div>
  );
};
