import React, { FC } from 'react';
import { PhotographIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Button } from '@mui/material';

interface IProps {}

/**
 * @author
 * @function @AvatarCollections
 **/

const BlurDataUrl = ``;

export const AvatarCollections: FC<IProps> = (props) => {
  return (
    <div className="relative flex flex-col space-y-3 box-border w-full">
      {/* Heading */}
      <div className="flex space-x-1 items-center">
        <PhotographIcon className="h-6 opacity-60" />
        <h6 className="text-sm font-medium text-center">Avatar collections</h6>
      </div>
      {/* Main */}
      <div className="relative box-border w-full space-y-[7px]">
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            className="p-0 relative w-full flex cursor-default"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              src="/images/avatar/banner/animal.png"
              alt="avatar-collection-banner"
            />
          </Button>
          <Button
            className="p-0 relative w-full flex cursor-default"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              src="/images/avatar/banner/emoji.png"
              alt="avatar-collection-banner"
            />
          </Button>
        </div>
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            className="p-0 relative w-full flex cursor-default"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              src="/images/avatar/banner/festival.png"
              alt="avatar-collection-banner"
            />
          </Button>
          <Button
            className="p-0 relative w-full flex cursor-default"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              src="/images/avatar/banner/hand-drawing.png"
              alt="avatar-collection-banner"
            />
          </Button>
        </div>
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            className="p-0 relative w-full flex cursor-default"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              src="/images/avatar/banner/flat.png"
              alt="avatar-collection-banner"
            />
          </Button>
          <Button
            className="p-0 relative w-full flex cursor-default"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              src="/images/avatar/banner/hipster.png"
              alt="avatar-collection-banner"
            />
          </Button>
        </div>
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            className="p-0 relative w-full flex cursor-default"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              src="/images/avatar/banner/paint.png"
              alt="avatar-collection-banner"
            />
          </Button>
          <Button
            className="p-0 relative w-full flex cursor-default"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              src="/images/avatar/banner/minimal.png"
              alt="avatar-collection-banner"
            />
          </Button>
        </div>
        <div className="sm:flex relative w-full">
          <Button
            className="p-0 relative w-full flex cursor-default sm:max-w-[50%] sm:pr-[3px] sm:mx-auto"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              src="/images/avatar/banner/plain.png"
              alt="avatar-collection-banner"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
