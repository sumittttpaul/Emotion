import { IconButton } from '@mui/material';
import React, { FC, RefObject } from 'react';
import Image from 'next/image';
import { BannerTitleButton } from '../../button/banner/Banner.TitleButton';

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
    <div className="w-full px-3 flex space-y-2.5 text-white items-center justify-between">
      <div className="flex justify-start">
        <BannerTitleButton Label={props.label} onClick={() => {}} />
      </div>
      <div className="flex space-x-2">
        <NavigationButton
          Direction="left"
          onClick={slideLeft}
          Disabled={props.LeftDisabled}
        />
        <NavigationButton
          Direction="right"
          onClick={slideRight}
          Disabled={props.RightDisabled}
        />
      </div>
    </div>
  );
};

interface NavigationButtonProps {
  onClick: () => void;
  Disabled: boolean;
  Direction: string;
}

const ArrowIconClasses =
  'relative h-[10px] w-[10px] group-hover:h-[12px] group-hover:w-[12px] flex items-center justify-center opacity-75 group-hover:opacity-90';

const NavigationButton: FC<NavigationButtonProps> = (props) => {
  return (
    <IconButton
      onClick={props.onClick}
      disabled={props.Disabled}
      disableFocusRipple
      className="flex group transition-all duration-300 button-text-lower h-[35px] w-[35px] bg-white/5 hover:bg-white/5 disabled:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 opacity-100 cursor-default"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff80 !important',
        },
      }}
    >
      {props.Direction === 'left' && (
        <div className={ArrowIconClasses}>
          <Image src="/icons/left-arrow-fill-white.svg" fill alt="" />
        </div>
      )}
      {props.Direction === 'right' && (
        <div className={ArrowIconClasses}>
          <Image src="/icons/right-arrow-fill-white.svg" fill alt="" />
        </div>
      )}
    </IconButton>
  );
};
