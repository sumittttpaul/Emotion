import { FilmIcon } from '@heroicons/react/solid';
import { Button, IconButton } from '@mui/material';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import ScrollContainer from 'react-indiana-drag-scroll';
import Image from 'next/image';
import { Poster_BlurDataURL } from '../../../loader/BlurDataURL';

interface IProps {
  show: () => void;
  getURL: (value: string) => void;
  backBool: (value: boolean) => void;
}

const Illustrations = [
  '/images/avatar/illustration/1.png',
  '/images/avatar/illustration/2.png',
  '/images/avatar/illustration/3.png',
  '/images/avatar/illustration/4.png',
  '/images/avatar/illustration/5.png',
  '/images/avatar/illustration/6.png',
  '/images/avatar/illustration/7.png',
  '/images/avatar/illustration/8.png',
  '/images/avatar/illustration/9.png',
  '/images/avatar/illustration/10.png',
  '/images/avatar/illustration/11.png',
  '/images/avatar/illustration/12.png',
  '/images/avatar/illustration/13.png',
  '/images/avatar/illustration/14.png',
  '/images/avatar/illustration/15.png',
  '/images/avatar/illustration/16.png',
  '/images/avatar/illustration/17.png',
  '/images/avatar/illustration/18.png',
  '/images/avatar/illustration/19.png',
  '/images/avatar/illustration/20.png',
  '/images/avatar/illustration/21.png',
  '/images/avatar/illustration/22.png',
  '/images/avatar/illustration/23.png',
  '/images/avatar/illustration/24.png',
  '/images/avatar/illustration/25.png',
  '/images/avatar/illustration/26.png',
  '/images/avatar/illustration/27.png',
];

/**
 * @author
 * @function @IllustrationCollections
 **/

const blurDataURL = Poster_BlurDataURL;

export const IllustrationCollections: FC<IProps> = (props) => {
  const sliderRef = useRef<HTMLElement>(null);
  const [LeftButton, setLeftButton] = useState(false);
  const [RightButton, setRightButton] = useState(true);
  const slideLeft = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - slider.offsetWidth;
    }
  };
  const slideRight = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + slider.offsetWidth;
    }
  };
  const ListenToScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      if (slider.scrollLeft === 0) {
        setLeftButton(false);
        ScrollRight();
      } else {
        setLeftButton(true);
        ScrollRight();
      }
    }
  };
  const ScrollRight = () => {
    const slider = sliderRef.current;
    if (slider) {
      let maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft === 0) {
        return;
      }
      if (slider.scrollLeft === maxScroll) {
        setRightButton(false);
      } else {
        setRightButton(true);
      }
    }
  };
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', ListenToScroll);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', ListenToScroll);
      }
    };
  });
  return (
    <div className="relative flex flex-col space-y-2 pb-1 box-border w-full">
      {/* Heading */}
      <div className="flex space-x-2 items-center pl-3">
        <FilmIcon className="h-6 opacity-60" />
        <h6 className="text-sm font-medium text-center">
          Explore Illustrations
        </h6>
      </div>
      {/* Main */}
      <ScrollContainer
        vertical={false}
        hideScrollbars={true}
        component="div"
        innerRef={sliderRef}
        className="px-3 relative box-border h-full w-full space-x-[6px] whitespace-nowrap scroll-smooth overflow-x-scroll scroll scrollbar-hide"
      >
        {Illustrations.map((illustrationURL) => {
          return (
            <Button
              aria-label="all-illustration-button"
              disableFocusRipple
              key={illustrationURL}
              onClick={() => {
                props.getURL(illustrationURL);
                props.show();
                props.backBool(true);
              }}
              className="p-0 inline-block w-[130px] cursor-default rounded-md"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                },
              }}
            >
              <Image
                width={2143}
                height={3012}
                className="rounded-md"
                src={illustrationURL}
                alt="avatar-collection-banner"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </Button>
          );
        })}
      </ScrollContainer>
      {LeftButton ? (
        <IconButton
          onClick={() => {
            setTimeout(() => {
              slideLeft();
            }, 100);
          }}
          className="bg-white hover:bg-white rounded-[50%] absolute h-9 w-9 p-0 left-3 z-[1] top-[calc(50%-20px)] Custom-DropShadow"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(0, 0, 0, 0.25) !important',
            },
          }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <ChevronLeftIcon className="h-5" />
          </div>
        </IconButton>
      ) : (
        <></>
      )}
      {RightButton ? (
        <IconButton
          onClick={() => {
            setTimeout(() => {
              slideRight();
            }, 100);
          }}
          className="absolute p-0 right-3 z-[1] top-[calc(50%-20px)] h-9 w-9 bg-white hover:bg-white rounded-[50%] Custom-DropShadow"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(0, 0, 0, 0.25) !important',
            },
          }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <ChevronRightIcon className="h-5" />
          </div>
        </IconButton>
      ) : (
        <></>
      )}
    </div>
  );
};
