import dynamic from 'next/dynamic';
import React, { FC, useRef, useState } from 'react';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
import { DiscoverSliderIProps } from '../../contents/store/discover/Store.Discover.Slider';
import { LoadingDiscoverSlider } from '../loader/LoadingSkeleton';
import {
  DiscoverSliderDesktopAndTabletProps,
  DiscoverSliderMobileProps,
} from './DiscoverSlider/DiscoverSlider.MultiScreen';
// import { DiscoverSliderDesktop } from './DiscoverSlider/DiscoverSliderDesktop';
// import { DiscoverSliderMobile } from './DiscoverSlider/DiscoverSliderMobile';
import { DiscoverSliderTitle } from './DiscoverSlider/DiscoverSliderTitle';

const DiscoverSliderDesktop = dynamic<DiscoverSliderDesktopAndTabletProps>(
  () =>
    import('./DiscoverSlider/DiscoverSlider.MultiScreen').then(
      (x) => x.DiscoverSliderDesktopAndTablet
    ),
  {
    loading: () => <LoadingDiscoverSlider />,
    ssr: true,
  }
);
const DiscoverSliderMobile = dynamic<DiscoverSliderMobileProps>(
  () =>
    import('./DiscoverSlider/DiscoverSlider.MultiScreen').then(
      (x) => x.DiscoverSliderMobile
    ),
  {
    loading: () => <LoadingDiscoverSlider />,
    ssr: true,
  }
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
  return (
    <div className="flex flex-col space-y-5 overflow-x-hidden overflow-y-visible mt-[30px]">
      <DiscoverSliderTitle
        label="Trending winter collections"
        sliderRef={sliderRef}
        LeftDisabled={LeftDisabled}
        RightDisabled={RightDisabled}
      />
      {LargeScreen || MediumScreen ? (
        <DiscoverSliderDesktop
          ContentArray={props.ContentArray}
          sliderRef={sliderRef}
          Wishlist={Wishlist}
          setWishlist={setWishlist}
          setLeftDisabled={setLeftDisabled}
          setRightDisabled={setRightDisabled}
        />
      ) : (
        <></>
      )}
      {SmallScreen && (
        <DiscoverSliderMobile
          ContentArray={props.ContentArray}
          Wishlist={Wishlist}
          setWishlist={setWishlist}
        />
      )}
    </div>
  );
};
