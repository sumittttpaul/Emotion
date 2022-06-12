import React, { FC } from 'react';
import { PhotographIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Button } from '@mui/material';
import {
  Banner_BlurDataURL,
  Square_BlurDataURL,
} from '../../../loader/BlurDataURL';

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
  getURL: (value: string) => void;
  backBool: (value: boolean) => void;
  show: () => void;
}

/**
 * @author
 * @function @AvatarCollections
 **/

const BlurDataUrl = Banner_BlurDataURL;
const BlurDataUrlSquare = Square_BlurDataURL;

const PopularImage1 = '/images/avatar/popular/1.png';
const PopularImage2 = '/images/avatar/popular/2.png';
const PopularImage3 = '/images/avatar/popular/3.png';
const PopularImage4 = '/images/avatar/popular/4.png';

export const AvatarCollections: FC<IProps> = (props) => {
  // Banner
  const AnimalClick = () => {
    props.AnimalClick();
    props.backBool(false);
  };
  const EmojiClick = () => {
    props.EmojiClick();
    props.backBool(false);
  };
  const FestivalClick = () => {
    props.FestivalClick();
    props.backBool(false);
  };
  const HandDrawingClick = () => {
    props.HandDrawingClick();
    props.backBool(false);
  };
  const FlatClick = () => {
    props.FlatClick();
    props.backBool(false);
  };
  const HispterClick = () => {
    props.HispterClick();
    props.backBool(false);
  };
  const PaintClick = () => {
    props.PaintClick();
    props.backBool(false);
  };
  const MinimalClick = () => {
    props.MinimalClick();
    props.backBool(false);
  };
  const PlainClick = () => {
    props.PlainClick();
    props.backBool(false);
  };
  // Popular
  const Popular1Click = () => {
    props.getURL(PopularImage1);
    props.backBool(true);
    props.show();
  };
  const Popular2Click = () => {
    props.getURL(PopularImage2);
    props.backBool(true);
    props.show();
  };
  const Popular3Click = () => {
    props.getURL(PopularImage3);
    props.backBool(true);
    props.show();
  };
  const Popular4Click = () => {
    props.getURL(PopularImage4);
    props.backBool(true);
    props.show();
  };
  return (
    <div className="relative flex flex-col p-3 space-y-2 box-border w-full">
      {/* Heading */}
      <div className="flex space-x-2 items-center">
        <PhotographIcon className="h-6 opacity-60" />
        <h6 className="text-sm font-medium text-center">Start exploring</h6>
      </div>
      {/* Main */}
      <div className="relative box-border w-full space-y-[7px]">
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            disableFocusRipple
            onClick={AnimalClick}
            className="p-0 relative w-full flex cursor-default rounded-md"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              className="rounded-md"
              src="/images/avatar/banner/animal.png"
              alt="avatar-collection-banner"
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
          <Button
            disableFocusRipple
            onClick={EmojiClick}
            className="p-0 relative w-full flex cursor-default rounded-md"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              className="rounded-md"
              src="/images/avatar/banner/emoji.png"
              alt="avatar-collection-banner"
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
        </div>
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            disableFocusRipple
            onClick={FestivalClick}
            className="p-0 relative w-full flex cursor-default rounded-md"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              className="rounded-md"
              src="/images/avatar/banner/festival.png"
              alt="avatar-collection-banner"
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
          <Button
            disableFocusRipple
            onClick={HandDrawingClick}
            className="p-0 relative w-full flex cursor-default rounded-md"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              className="rounded-md"
              src="/images/avatar/banner/hand-drawing.png"
              alt="avatar-collection-banner"
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
        </div>
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            disableFocusRipple
            onClick={FlatClick}
            className="p-0 relative w-full flex cursor-default rounded-md"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              className="rounded-md"
              src="/images/avatar/banner/flat.png"
              alt="avatar-collection-banner"
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
          <Button
            disableFocusRipple
            onClick={HispterClick}
            className="p-0 relative w-full flex cursor-default rounded-md"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              className="rounded-md"
              src="/images/avatar/banner/hipster.png"
              alt="avatar-collection-banner"
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
        </div>
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            disableFocusRipple
            onClick={PaintClick}
            className="p-0 relative w-full flex cursor-default rounded-md"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              className="rounded-md"
              src="/images/avatar/banner/paint.png"
              alt="avatar-collection-banner"
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
          <Button
            disableFocusRipple
            onClick={MinimalClick}
            className="p-0 relative w-full flex cursor-default rounded-md"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              className="rounded-md"
              src="/images/avatar/banner/minimal.png"
              alt="avatar-collection-banner"
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
        </div>
        <div className="sm:flex relative space-y-[7px] sm:space-y-0 sm:space-x-[6px] w-full">
          <Button
            disableFocusRipple
            onClick={PlainClick}
            className="p-0 relative w-full flex cursor-default rounded-md"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              width={1920}
              height={500}
              className="rounded-md"
              src="/images/avatar/banner/plain.png"
              alt="avatar-collection-banner"
              placeholder="blur"
              blurDataURL={BlurDataUrl}
            />
          </Button>
          <div className="flex w-full relative sm:max-w-[50%] space-x-[6px]">
            <Button
              disableFocusRipple
              onClick={Popular1Click}
              className="p-0 relative w-full flex cursor-default rounded-md"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                },
              }}
            >
              <Image
                width={500}
                height={550}
                className="rounded-md"
                src={PopularImage1}
                alt="avatar-popular-collection"
                placeholder="blur"
                blurDataURL={BlurDataUrlSquare}
              />
            </Button>
            <Button
              disableFocusRipple
              onClick={Popular2Click}
              className="p-0 relative w-full flex cursor-default rounded-md"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                },
              }}
            >
              <Image
                width={500}
                height={550}
                className="rounded-md"
                src={PopularImage2}
                alt="avatar-popular-collection"
                placeholder="blur"
                blurDataURL={BlurDataUrlSquare}
              />
            </Button>
            <Button
              disableFocusRipple
              onClick={Popular3Click}
              className="p-0 relative w-full flex cursor-default rounded-md"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                },
              }}
            >
              <Image
                width={500}
                height={550}
                className="rounded-md"
                src={PopularImage3}
                alt="avatar-popular-collection"
                placeholder="blur"
                blurDataURL={BlurDataUrlSquare}
              />
            </Button>
            <Button
              disableFocusRipple
              onClick={Popular4Click}
              className="p-0 relative w-full flex cursor-default rounded-md"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                },
              }}
            >
              <Image
                width={500}
                height={550}
                className="rounded-md"
                src={PopularImage4}
                alt="avatar-popular-collection"
                placeholder="blur"
                blurDataURL={BlurDataUrlSquare}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
