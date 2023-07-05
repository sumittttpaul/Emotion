import Image from 'next/image';
import React, { FC, useRef } from 'react';
import { TrendingBadge } from '../badge/TrendingBadge';
import { Button } from '@mui/material';
import ScrollContainer from 'react-indiana-drag-scroll';
import { DiscoverBannerTop5ContentProps } from '../../contents/home/discover/Home.Discover.Banner';

interface IProps {
  ContentArray: DiscoverBannerTop5ContentProps[];
}
/**
 * @author
 * @function @DiscoverBannerTop5
 **/

export const DiscoverBannerTop5: FC<IProps> = (props) => {
  const sliderRef = useRef<HTMLElement>(null);
  // const [LeftAnimate, setLeftAnimate] = useState('closed');
  // const [RightAnimate, setRightAnimate] = useState('closed');

  // const slideLeft = () => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     slider.scrollLeft = slider.scrollLeft - slider.offsetWidth;
  //   }
  // };
  // const slideRight = () => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     slider.scrollLeft = slider.scrollLeft + slider.offsetWidth;
  //   }
  // };

  // const ListenToSliderScroll = () => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     if (slider.scrollLeft === 0) {
  //       setLeftAnimate('closed');
  //     } else {
  //       setLeftAnimate('open');
  //     }
  //     let maxScroll = slider.scrollWidth - slider.offsetWidth;
  //     if (slider.scrollLeft === maxScroll) {
  //       setRightAnimate('closed');
  //     } else {
  //       setRightAnimate('open');
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     slider.addEventListener('scroll', ListenToSliderScroll);
  //   }
  //   return () => {
  //     if (slider) slider.removeEventListener('scroll', ListenToSliderScroll);
  //   };
  // });

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     if (slider.scrollLeft === 0) setLeftAnimate('closed');
  //     else setLeftAnimate('open');
  //   }
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative flex w-full p-3">
      <div className="relative w-full items-center space-x-5 flex bg-white/5 rounded-xl overflow-hidden">
        {/* Title */}
        <div className="flex flex-col space-y-4 text-white min-w-[300px] max-w-[300px] cursor-default py-10 pl-10">
          <div className="flex justify-start">
            <TrendingBadge />
          </div>
          <div className="text-[30px] text-white tracking-wide font-[500] leading-[35px]">
            Top 5 - Trends of the week
          </div>
          <div className="text-[13px] text-white tracking-wide font-[300] opacity-[0.85]">
            Make your creative vision a reality with these AI-powered effects
          </div>
        </div>
        {/* Content */}
        <ScrollContainer
          innerRef={sliderRef}
          vertical={false}
          hideScrollbars={true}
          component="ul"
          className="relative w-full h-full flex"
          style={{
            paddingLeft: 40,
            paddingRight: 25,
            paddingTop: 25,
            paddingBottom: 25,
          }}
        >
          {props.ContentArray.map((value, idx) => (
            <li
              key={idx}
              className="relative flex button-text-lower min-w-[299px] cursor-default"
            >
              <div className="flex items-center relative -ml-[15px] -mr-[45px] z-[2]">
                <div
                  className={`bg-${value.Color}-50 backdrop-blur-xl group flex h-[75px] w-[75px] min-w-[75px] min-h-[75px] rounded-full items-center justify-center font-[500] text-[25px] tracking-wide text-white`}
                >
                  {idx + 1}
                </div>
              </div>
              <Button
                disableFocusRipple
                className={`bg-${value.Color}-shadow p-0 m-0 min-w-[285px] min-h-[200px] cursor-default relative flex h-full w-full overflow-hidden button-text-lower rounded-[15px]`}
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: '#ffffff95 !important',
                  },
                }}
              >
                <Image
                  height={150}
                  width={300}
                  src={value.Image}
                  sizes="(max-width: 285px) 285px"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    maxWidth: 285,
                    maxHeight: 200,
                    borderRadius: 15,
                  }}
                  alt=""
                />
                <div className="absolute flex pl-14 items-center justify-start h-full w-full bg-gradient-to-r from-primary-theme/80 z-[1]">
                  <div className="block max-w-[75%] text-[16px] font-[500] text-white text-start tracking-wide">
                    Trends of the week Heading 1
                  </div>
                </div>
              </Button>
            </li>
          ))}
        </ScrollContainer>
        <div className="absolute left-[300px] z-[2] top-0 bottom-0 h-full bg-gradient-to-r from-[#242424] w-[30px]" />
      </div>
    </div>
  );
};
