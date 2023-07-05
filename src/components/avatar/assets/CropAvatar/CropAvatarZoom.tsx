import { ZoomInIcon, ZoomOutIcon } from '@heroicons/react/outline';
import { TooltipDark } from '../../../tooltip/TooltipDark';
import React, { FC, ReactNode } from 'react';
import { m } from 'framer-motion';

interface IProps {
  ZoomValue: number;
  onZoomOut: () => void;
  onZoomIn: () => void;
}

/**
 * @author
 * @function @CropAvatarZoom
 **/

export const CropAvatarZoom: FC<IProps> = (props) => {
  const toFixed = (x: string) => {
    return Number.parseFloat(x).toFixed(0);
  };

  const Zoom = parseInt(toFixed(`${props.ZoomValue * 100}`));

  return (
    <div className="flex w-full relative justify-between py-4 px-5 sm:max-w-[470px] mx-auto">
      <CustomButton
        Content="Zoom Out"
        Tooltip="Zoom out of the image"
        Disabled={Zoom === 0}
        onClick={props.onZoomOut}
        Icon={<ZoomOutIcon className="h-[18px] text-white" />}
      />
      {/* <TooltipDark
        title="Shows the zoom percentage of the image"
        placement="bottom"
        arrow
      >
        <div className="cursor-default h-[44px] w-[80px] border border-solid border-white/10 relative flex text-sm font-normal whitespace-nowrap text-white items-center justify-center">
          {Zoom} %
        </div>
      </TooltipDark> */}
      <CustomButton
        Content="Zoom In"
        Tooltip="Zoom into the image"
        Disabled={Zoom === 100}
        onClick={props.onZoomIn}
        Icon={<ZoomInIcon className="h-[18px] text-white" />}
      />
    </div>
  );
};

interface CustomButtonProps {
  Content: string;
  Tooltip: string;
  Icon: ReactNode;
  onClick: () => void;
  Disabled: boolean;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  return (
    <div className="h-[44px] w-full max-w-[110px] flex relative p-1 items-center justify-center">
      <TooltipDark title={props.Tooltip} placement="bottom" arrow>
        <m.button
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={props.Disabled ? () => {} : props.onClick}
          whileTap={{ scale: props.Disabled ? 1 : 0.9 }}
          className={`${
            props.Disabled ? 'opacity-50' : 'opacity-100'
          } bg-white/10 h-full w-full rounded-lg cursor-default relative flex items-center justify-center backdrop-blur-2xl`}
        >
          <div className="flex items-center">
            {props.Icon}
            {/* <h6 className="text-[13px] text-white font-normal font-sans whitespace-nowrap hidden md:block">
              {props.Content}
            </h6> */}
          </div>
        </m.button>
      </TooltipDark>
    </div>
  );
};
