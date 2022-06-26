import dynamic from 'next/dynamic';
import React, { FC, useEffect, useRef, useState } from 'react';
import { DiscoverSliderIProps } from '../../contents/store/discover/Store.Discover.Slider';
import { LoadingDiscoverSlider } from '../loader/LoadingSkeleton';
import { DiscoverSliderDesktopProps } from './DiscoverSlider/DiscoverSliderDesktop';
import { DiscoverSliderMobileProps } from './DiscoverSlider/DiscoverSliderMobile';
import { DiscoverSliderTitleProps } from './DiscoverSlider/DiscoverSliderTitle';
// import { DiscoverSliderDesktop } from './DiscoverSlider/DiscoverSliderDesktop';
// import { DiscoverSliderMobile } from './DiscoverSlider/DiscoverSliderMobile';
// import { DiscoverSliderTitle } from './DiscoverSlider/DiscoverSliderTitle';

const DiscoverSliderDesktop = dynamic<DiscoverSliderDesktopProps>(
  () =>
    import('./DiscoverSlider/DiscoverSliderDesktop').then(
      (x) => x.DiscoverSliderDesktop
    ),
  {
    loading: () => <LoadingDiscoverSlider />,
  }
);
const DiscoverSliderMobile = dynamic<DiscoverSliderMobileProps>(
  () =>
    import('./DiscoverSlider/DiscoverSliderMobile').then(
      (x) => x.DiscoverSliderMobile
    ),
  {
    // loading: () => <LoadingDiscoverSlider />,
  }
);
const DiscoverSliderTitle = dynamic<DiscoverSliderTitleProps>(() =>
  import('./DiscoverSlider/DiscoverSliderTitle').then(
    (x) => x.DiscoverSliderTitle
  )
);

interface IProps {
  ContentArray: DiscoverSliderIProps[];
}

/**
 * @author
 * @function @DiscoverSlider
 **/

export const DiscoverSlider: FC<IProps> = (props) => {
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

  const ScrollRight = () => {
    const slider = sliderRef.current;
    if (slider) {
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

  const ListenToScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      let maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft === 0) setLeftDisabled(true);
      else setLeftDisabled(false);
      if (slider.scrollLeft === maxScroll) setRightDisabled(true);
      else setRightDisabled(false);
      ScrollRight();
    }
  };

  useEffect(() => {
    if (window.innerWidth) {
      if (window.innerWidth > 640) {
        const slider = sliderRef.current;
        if (slider) {
          slider.addEventListener('scroll', ListenToScroll);
        }
        return () => {
          if (slider) {
            slider.removeEventListener('scroll', ListenToScroll);
          }
        };
      }
    }
  });
  return (
    <div className="flex flex-col space-y-5 overflow-x-hidden overflow-y-visible mt-[50px]">
      <DiscoverSliderTitle
        slideLeft={slideLeft}
        slideRight={slideRight}
        LeftDisabled={LeftDisabled}
        RightDisabled={RightDisabled}
      />
      <DiscoverSliderDesktop
        ContentArray={props.ContentArray}
        sliderRef={sliderRef}
        Wishlist={Wishlist}
        setWishlist={setWishlist}
      />
      <DiscoverSliderMobile
        ContentArray={props.ContentArray}
        Wishlist={Wishlist}
        setWishlist={setWishlist}
      />
    </div>
  );
};
