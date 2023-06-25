import { ZoomInIcon, ZoomOutIcon } from '@heroicons/react/outline';
import React, { FC, ReactNode } from 'react';
import { m } from 'framer-motion';
import { TooltipDark } from '../../../tooltip/TooltipDark';

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
    <div className="flex w-full relative justify-center py-4 px-5">
      <CustomButton
        Content="Zoom Out"
        Tooltip="Zoom out of the image"
        Disabled={Zoom === 0}
        onClick={props.onZoomOut}
        ButtonClassName="rounded-l-md"
        ContainerClassName="rounded-l-lg border-r-0"
        Icon={<ZoomOutIcon className="h-[18px] text-white" />}
      />
      <TooltipDark
        title="Shows the zoom percentage of the image"
        placement="bottom"
        arrow
      >
        <div className="cursor-default h-[44px] w-[80px] border border-solid border-white/10 relative flex text-sm font-normal whitespace-nowrap text-white items-center justify-center">
          {Zoom} %
        </div>
      </TooltipDark>
      <CustomButton
        Content="Zoom In"
        Tooltip="Zoom into the image"
        Disabled={Zoom === 100}
        onClick={props.onZoomIn}
        ButtonClassName="rounded-r-md"
        ContainerClassName="rounded-r-lg border-l-0"
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
  ContainerClassName: string;
  ButtonClassName: string;
  Disabled: boolean;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  return (
    <div
      className={`${props.ContainerClassName} h-[44px] w-full max-w-[100px] md:max-w-[140px] border border-solid border-white/10 flex relative p-1 items-center justify-center`}
    >
      <TooltipDark title={props.Tooltip} placement="bottom" arrow>
        <m.button
          onClick={props.Disabled ? () => {} : props.onClick}
          whileTap={{ scale: props.Disabled ? 1 : 0.9 }}
          className={`${props.ButtonClassName} ${
            props.Disabled ? 'opacity-50' : 'opacity-100'
          } bg-white/10 h-full w-full cursor-default relative flex items-center justify-center`}
        >
          <div className="flex sm:space-x-2 items-center">
            {props.Icon}
            <h6 className="text-[13px] text-white font-normal font-sans whitespace-nowrap hidden md:block">
              {props.Content}
            </h6>
          </div>
        </m.button>
      </TooltipDark>
    </div>
  );
};
