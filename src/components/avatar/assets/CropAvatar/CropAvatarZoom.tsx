import { ZoomInIcon, ZoomOutIcon } from '@heroicons/react/outline';
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
    <div className="flex w-full relative justify-center py-4 px-5">
      <CustomButton
        Content="Zoom Out"
        Disabled={Zoom === 0}
        onClick={props.onZoomOut}
        ButtonClassName="rounded-l-md"
        ContainerClassName="rounded-l-lg border-r-0"
        Icon={<ZoomOutIcon className="h-[18px] text-white" />}
      />
      <div className="cursor-default h-[44px] w-[80px] border border-solid border-white/10 relative flex text-sm font-normal whitespace-nowrap text-white items-center justify-center">
        {Zoom} %
      </div>
      <CustomButton
        Content="Zoom In"
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
      <m.button
        onClick={props.onClick}
        whileTap={{ scale: props.Disabled ? 1 : 0.9 }}
        disabled={props.Disabled}
        className={`${props.ButtonClassName} disabled:opacity-50 bg-white/10 h-full w-full cursor-default relative flex items-center justify-center`}
      >
        <div className="flex sm:space-x-2 items-center">
          {props.Icon}
          <h6 className="text-[13px] text-white font-normal font-sans whitespace-nowrap hidden md:block">
            {props.Content}
          </h6>
        </div>
      </m.button>
    </div>
  );
};
