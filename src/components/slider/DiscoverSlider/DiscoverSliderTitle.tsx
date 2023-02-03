import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { IconButton } from '@mui/material';
import React, { FC, RefObject } from 'react';

export interface DiscoverSliderTitleProps {
  label: string;
  sliderRef: RefObject<HTMLElement>;
  LeftDisabled: boolean;
  RightDisabled: boolean;
}

/**
 * @author
 * @function @DiscoverSliderTitle
 **/

export const DiscoverSliderTitle: FC<DiscoverSliderTitleProps> = (props) => {
  const slideLeft = () => {
    const slider = props.sliderRef.current;
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - slider.offsetWidth;
    }
  };
  const slideRight = () => {
    const slider = props.sliderRef.current;
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + slider.offsetWidth;
    }
  };
  return (
    <div className="w-full pr-3 flex text-white justify-between">
      <h6 className="text-[18px]">{props.label}</h6>
      <div className="flex space-x-2">
        <IconButton
          onClick={slideLeft}
          disabled={props.LeftDisabled}
          disableFocusRipple
          className="block disabled:opacity-40 opacity-100 transition-all duration-300 button-text-lower h-full p-2 bg-[#202020] hover:bg-[#303030] disabled:bg-white disabled:bg-opacity-10"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff80 !important',
            },
          }}
        >
          <ChevronLeftIcon className="h-4 w-4 opacity-90 hover:opacity-100 header-icon-hover text-white" />
        </IconButton>
        <IconButton
          onClick={slideRight}
          disabled={props.RightDisabled}
          disableFocusRipple
          className="block disabled:opacity-40 opacity-100 transition-all duration-300 button-text-lower h-full p-2 bg-[#202020] hover:bg-[#303030] disabled:bg-white disabled:bg-opacity-10"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff80 !important',
            },
          }}
        >
          <ChevronRightIcon className="h-4 w-4 opacity-90 hover:opacity-100 header-icon-hover text-white" />
        </IconButton>
      </div>
    </div>
  );
};
