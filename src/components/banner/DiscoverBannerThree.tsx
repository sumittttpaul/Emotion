import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
import { DiscoverBannerThreeIProps } from '../../contents/store/discover/Store.Discover.Banner';
import {
  DiscoverBannerThreeDesktopProps,
  DiscoverBannerThreeTabletProps,
  DiscoverBannerThreeMobileProps,
} from './MultiScreen/DiscoverBannerThree.MultiScreen';

const DiscoverBannerThreeDesktop = dynamic<DiscoverBannerThreeDesktopProps>(
  () =>
    import('./MultiScreen/DiscoverBannerThree.MultiScreen').then(
      (x) => x.DiscoverBannerThreeDesktop
    ),
  { ssr: false }
);
const DiscoverBannerThreeTablet = dynamic<DiscoverBannerThreeTabletProps>(
  () =>
    import('./MultiScreen/DiscoverBannerThree.MultiScreen').then(
      (x) => x.DiscoverBannerThreeTablet
    ),
  { ssr: false }
);
const DiscoverBannerThreeMobile = dynamic<DiscoverBannerThreeMobileProps>(
  () =>
    import('./MultiScreen/DiscoverBannerThree.MultiScreen').then(
      (x) => x.DiscoverBannerThreeMobile
    ),
  { ssr: false }
);

interface IProps {
  ContentArray: DiscoverBannerThreeIProps[];
}

/**
 * @author
 * @function @DiscoverBannerThree
 **/

export const DiscoverBannerThree: FC<IProps> = (props) => {
  const { LargeScreen, MediumScreen, SmallScreen } = useScreenSize();
  return (
    <div className="flex w-full overflow-x-hidden overflow-y-visible mt-[50px] sm:mt-[75px]">
      {LargeScreen && (
        <DiscoverBannerThreeDesktop ContentArray={props.ContentArray} />
      )}
      {MediumScreen && (
        <DiscoverBannerThreeTablet ContentArray={props.ContentArray} />
      )}
      {SmallScreen && (
        <DiscoverBannerThreeMobile ContentArray={props.ContentArray} />
      )}
    </div>
  );
};
