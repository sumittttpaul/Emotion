import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
import { DiscoverBannerFourIProps } from '../../contents/store/discover/Store.Discover.Banner';
import {
  DiscoverBannerFourDesktopProps,
  DiscoverBannerFourTabletProps,
  DiscoverBannerFourMobileProps,
} from './MultiScreen/DiscoverBannerFour.MultiScreen';

const DiscoverBannerFourDesktop = dynamic<DiscoverBannerFourDesktopProps>(
  () =>
    import('./MultiScreen/DiscoverBannerFour.MultiScreen').then(
      (x) => x.DiscoverBannerFourDesktop
    ),
  { ssr: false }
);
const DiscoverBannerFourTablet = dynamic<DiscoverBannerFourTabletProps>(
  () =>
    import('./MultiScreen/DiscoverBannerFour.MultiScreen').then(
      (x) => x.DiscoverBannerFourTablet
    ),
  { ssr: false }
);
const DiscoverBannerFourMobile = dynamic<DiscoverBannerFourMobileProps>(
  () =>
    import('./MultiScreen/DiscoverBannerFour.MultiScreen').then(
      (x) => x.DiscoverBannerFourMobile
    ),
  { ssr: false }
);

interface IProps {
  ContentArray: DiscoverBannerFourIProps[];
}

/**
 * @author
 * @function @DiscoverBannerFour
 **/

export const DiscoverBannerFour: FC<IProps> = (props) => {
  const { LargeScreen, MediumScreen, SmallScreen } = useScreenSize();
  return (
    <div className="mt-[50px] sm:mt-[75px] flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      {LargeScreen && (
        <DiscoverBannerFourDesktop ContentArray={props.ContentArray} />
      )}
      {MediumScreen && (
        <DiscoverBannerFourTablet ContentArray={props.ContentArray} />
      )}
      {SmallScreen && (
        <DiscoverBannerFourMobile ContentArray={props.ContentArray} />
      )}
    </div>
  );
};
