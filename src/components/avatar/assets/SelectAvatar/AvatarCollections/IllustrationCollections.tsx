import { FilmIcon } from '@heroicons/react/solid';
import { Button } from '@mui/material';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Poster_BlurDataURL } from '../../../../loader/BlurDataURL';
import { m } from 'framer-motion';
import Image from 'next/image';
import Illustration1 from '../../../../../../public/images/avatar/illustration/1.png';
import Illustration2 from '../../../../../../public/images/avatar/illustration/2.png';
import Illustration3 from '../../../../../../public/images/avatar/illustration/3.png';
import Illustration4 from '../../../../../../public/images/avatar/illustration/4.png';
import Illustration5 from '../../../../../../public/images/avatar/illustration/5.png';
import Illustration6 from '../../../../../../public/images/avatar/illustration/6.png';
import Illustration7 from '../../../../../../public/images/avatar/illustration/7.png';
import Illustration8 from '../../../../../../public/images/avatar/illustration/8.png';
import Illustration9 from '../../../../../../public/images/avatar/illustration/9.png';
import Illustration10 from '../../../../../../public/images/avatar/illustration/10.png';
import Illustration11 from '../../../../../../public/images/avatar/illustration/11.png';
import Illustration12 from '../../../../../../public/images/avatar/illustration/12.png';
import Illustration13 from '../../../../../../public/images/avatar/illustration/13.png';
import Illustration14 from '../../../../../../public/images/avatar/illustration/14.png';
import Illustration15 from '../../../../../../public/images/avatar/illustration/15.png';
import Illustration16 from '../../../../../../public/images/avatar/illustration/16.png';
import Illustration17 from '../../../../../../public/images/avatar/illustration/17.png';
import Illustration18 from '../../../../../../public/images/avatar/illustration/18.png';
import Illustration19 from '../../../../../../public/images/avatar/illustration/19.png';
import Illustration20 from '../../../../../../public/images/avatar/illustration/20.png';
import Illustration21 from '../../../../../../public/images/avatar/illustration/21.png';
import Illustration22 from '../../../../../../public/images/avatar/illustration/22.png';
import Illustration23 from '../../../../../../public/images/avatar/illustration/23.png';
import Illustration24 from '../../../../../../public/images/avatar/illustration/24.png';
import Illustration25 from '../../../../../../public/images/avatar/illustration/25.png';
import Illustration26 from '../../../../../../public/images/avatar/illustration/26.png';
import Illustration27 from '../../../../../../public/images/avatar/illustration/27.png';

interface IProps {
  show: () => void;
  getURL: (value: string) => void;
  backBool: (value: boolean) => void;
}

const Illustrations = [
  Illustration1.src,
  Illustration2.src,
  Illustration3.src,
  Illustration4.src,
  Illustration5.src,
  Illustration6.src,
  Illustration7.src,
  Illustration8.src,
  Illustration9.src,
  Illustration10.src,
  Illustration11.src,
  Illustration12.src,
  Illustration13.src,
  Illustration14.src,
  Illustration15.src,
  Illustration16.src,
  Illustration17.src,
  Illustration18.src,
  Illustration19.src,
  Illustration20.src,
  Illustration21.src,
  Illustration22.src,
  Illustration23.src,
  Illustration24.src,
  Illustration25.src,
  Illustration26.src,
  Illustration27.src,
];

const blurDataURL = Poster_BlurDataURL;

const LeftVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -50,
  },
};

const RightVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: 50,
  },
};

/**
 * @author
 * @function @IllustrationCollections
 **/

export const IllustrationCollections: FC<IProps> = (props) => {
  const sliderRef = useRef<HTMLElement>(null);
  const [LeftAnimate, setLeftAnimate] = useState('closed');
  const [RightAnimate, setRightAnimate] = useState('closed');
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
  const ListenToIllustrationScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      if (slider.scrollLeft === 0) {
        setLeftAnimate('closed');
      } else {
        setLeftAnimate('open');
      }
      let maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft === 0) {
        return;
      }
      if (slider.scrollLeft === maxScroll) {
        setRightAnimate('closed');
      } else {
        setRightAnimate('open');
      }
    }
  };
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', ListenToIllustrationScroll);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', ListenToIllustrationScroll);
      }
    };
  });
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      let maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft === maxScroll) setRightAnimate('closed');
      else setRightAnimate('open');
    }
  }, []);
  return (
    <div className="text-white relative flex flex-col space-y-2 pb-1 box-border w-full">
      {/* Heading */}
      <div className="flex space-x-2 items-center pl-3">
        <FilmIcon className="h-6" />
        <h6 className="text-sm font-medium text-center">
          Explore Illustrations
        </h6>
      </div>
      {/* Main */}
      <ScrollContainer
        vertical={false}
        horizontal={true}
        hideScrollbars={true}
        component="ul"
        innerRef={sliderRef}
        className="px-3 relative box-border h-full w-full space-x-[6px] whitespace-nowrap scroll-smooth overflow-x-scroll scroll scrollbar-hide"
      >
        {Illustrations.map((illustrationURL) => (
          <Button
            aria-label="all-illustration-button"
            component="li"
            disableFocusRipple
            key={illustrationURL}
            onClick={() => {
              props.getURL(illustrationURL);
              props.show();
              props.backBool(true);
            }}
            className="p-0 inline-block w-[150px] cursor-default rounded-md"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: '#ffffff80 !important',
              },
            }}
          >
            <Image
              width={2143}
              height={3012}
              className="rounded-md"
              src={illustrationURL}
              blurDataURL={blurDataURL}
              placeholder="blur"
              alt=""
            />
          </Button>
        ))}
      </ScrollContainer>
      <m.button
        onClick={() => slideLeft()}
        whileTap={{ scale: 0.9 }}
        variants={LeftVariants}
        initial={{ x: -50 }}
        animate={LeftAnimate}
        className="bg-black/80 backdrop-blur-lg hover:bg-black/80 group cursor-default rounded-[50%] absolute h-9 w-9 p-0 left-3 z-[1] top-[calc(50%-15px)] Custom-DropShadow"
      >
        <div className="h-full w-full flex items-center justify-center">
          <ChevronLeftIcon className="h-5 group-hover:h-6" />
        </div>
      </m.button>
      <m.button
        onClick={() => slideRight()}
        whileTap={{ scale: 0.9 }}
        variants={RightVariants}
        initial={{ x: 50 }}
        animate={RightAnimate}
        className="bg-black/80 backdrop-blur-lg hover:bg-black/80 group cursor-default rounded-[50%] absolute h-9 w-9 p-0 right-3 z-[1] top-[calc(50%-15px)] Custom-DropShadow"
      >
        <div className="h-full w-full flex items-center justify-center">
          <ChevronRightIcon className="h-5 group-hover:h-6" />
        </div>
      </m.button>
    </div>
  );
};
