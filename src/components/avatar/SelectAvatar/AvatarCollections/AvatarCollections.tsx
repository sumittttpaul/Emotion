import React, { FC } from 'react';
import { PhotographIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Button } from '@mui/material';

interface IProps {
  AnimalClick: () => void;
  EmojiClick: () => void;
  FestivalClick: () => void;
  HandDrawingClick: () => void;
  FlatClick: () => void;
  HispterClick: () => void;
  PaintClick: () => void;
  MinimalClick: () => void;
  PlainClick: () => void;
}

/**
 * @author
 * @function @AvatarCollections
 **/

const BlurDataUrl = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAH0CAYAAADcwTArAAAACXBIWXMAAAsTAAALEwEAmpwYAAATLUlEQVR4nO3ZQQ3AMBDAsK78gR2rjcSkqpGNIP88M/MuAAAAAAAAAK63TwcAAAAAAAAA8A8DGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACIMIABAAAAAAAAIgxgAAAAAAAAgAgDGAAAAAAAACDCAAYAAAAAAACI+ACg2wc/edOtmQAAAABJRU5ErkJggg==`;

export const AvatarCollections: FC<IProps> = (props) => {
  return (
    <div className="relative flex flex-col space-y-3 box-border w-full">
      {/* Heading */}
      <div className="flex space-x-2 items-center">
        <PhotographIcon className="h-6 opacity-60" />
        <h6 className="text-sm font-medium text-center">Start exploring</h6>
      </div>
      {/* Main */}
      <div className="relative box-border w-full space-y-[7px]">
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            onClick={props.AnimalClick}
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
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
          <Button
            onClick={props.EmojiClick}
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
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
        </div>
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            onClick={props.FestivalClick}
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
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
          <Button
            onClick={props.HandDrawingClick}
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
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
        </div>
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            onClick={props.FlatClick}
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
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
          <Button
            onClick={props.HispterClick}
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
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
        </div>
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            onClick={props.PaintClick}
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
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
          <Button
            onClick={props.MinimalClick}
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
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
        </div>
        <div className="sm:flex relative w-full">
          <Button
            onClick={props.PlainClick}
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
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
