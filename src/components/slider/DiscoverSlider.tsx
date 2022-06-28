import dynamic from 'next/dynamic';
import React, { FC, useEffect, useRef, useState } from 'react';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
import { DiscoverSliderIProps } from '../../contents/store/discover/Store.Discover.Slider';
import { LoadingDiscoverSlider } from '../loader/LoadingSkeleton';
import {
  DiscoverSliderDesktopAndTabletProps,
  DiscoverSliderMobileProps,
} from './DiscoverSlider/DiscoverSlider.MultiScreen';
import { DiscoverSliderTitleProps } from './DiscoverSlider/DiscoverSliderTitle';
// import { DiscoverSliderDesktop } from './DiscoverSlider/DiscoverSliderDesktop';
// import { DiscoverSliderMobile } from './DiscoverSlider/DiscoverSliderMobile';
// import { DiscoverSliderTitle } from './DiscoverSlider/DiscoverSliderTitle';

const DiscoverSliderDesktop = dynamic<DiscoverSliderDesktopAndTabletProps>(
  () =>
    import('./DiscoverSlider/DiscoverSlider.MultiScreen').then(
      (x) => x.DiscoverSliderDesktopAndTablet
    ),
  {
    loading: () => <LoadingDiscoverSlider />,
    ssr: false,
  }
);
const DiscoverSliderMobile = dynamic<DiscoverSliderMobileProps>(
  () =>
    import('./DiscoverSlider/DiscoverSlider.MultiScreen').then(
      (x) => x.DiscoverSliderMobile
    ),
  {
    loading: () => <LoadingDiscoverSlider />,
    ssr: false,
  }
);
const DiscoverSliderTitle = dynamic<DiscoverSliderTitleProps>(
  () =>
    import('./DiscoverSlider/DiscoverSliderTitle').then(
      (x) => x.DiscoverSliderTitle
    ),
  { ssr: false }
);

interface IProps {
  ContentArray: DiscoverSliderIProps[];
}

/**
 * @author
 * @function @DiscoverSlider
 **/

export const DiscoverSlider: FC<IProps> = (props) => {
  const { LargeScreen, MediumScreen, SmallScreen } = useScreenSize();
  const [LeftDisabled, setLeftDisabled] = useState(false);
  const [RightDisabled, setRightDisabled] = useState(false);
  const [Wishlist, setWishlist] = useState(-1);
  const sliderRef = useRef<HTMLElement>(null);

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

  const ListenToSliderScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      if (slider.scrollLeft === 0) {
        setLeftDisabled(true);
      } else {
        setLeftDisabled(false);
      }
      let maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft === 0) {
        return;
      }
      if (slider.scrollLeft === maxScroll) {
        setRightDisabled(true);
      } else {
        setRightDisabled(false);
      }
    }
  };
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', ListenToSliderScroll);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', ListenToSliderScroll);
      }
    };
  });
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      let maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft === maxScroll) setRightDisabled(true);
      else setRightDisabled(false);
    }
  }, []);

  return (
    <div className="flex flex-col space-y-5 overflow-x-hidden overflow-y-visible mt-[50px]">
      <DiscoverSliderTitle
        label="Trending winter collections"
        slideLeft={slideLeft}
        slideRight={slideRight}
        LeftDisabled={LeftDisabled}
        RightDisabled={RightDisabled}
      />
      {LargeScreen || MediumScreen ? (
        <DiscoverSliderDesktop
          ContentArray={props.ContentArray}
          sliderRef={sliderRef}
          Wishlist={Wishlist}
          setWishlist={setWishlist}
        />
      ) : (
        <></>
      )}
      {SmallScreen ? (
        <DiscoverSliderMobile
          ContentArray={props.ContentArray}
          Wishlist={Wishlist}
          setWishlist={setWishlist}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
