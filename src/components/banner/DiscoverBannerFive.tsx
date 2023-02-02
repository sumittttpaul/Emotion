import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
import { DiscoverBannerFiveIProps } from '../../contents/store/discover/Store.Discover.Banner';
import {
  DiscoverBannerFiveDesktopProps,
  DiscoverBannerFiveTabletProps,
  DiscoverBannerFiveMobileProps,
} from './MultiScreen/DiscoverBannerFive.MultiScreen';

const DiscoverBannerFiveDesktop = dynamic<DiscoverBannerFiveDesktopProps>(
  () =>
    import('./MultiScreen/DiscoverBannerFive.MultiScreen').then(
      (x) => x.DiscoverBannerFiveDesktop
    ),
  { ssr: true }
);
const DiscoverBannerFiveTablet = dynamic<DiscoverBannerFiveTabletProps>(
  () =>
    import('./MultiScreen/DiscoverBannerFive.MultiScreen').then(
      (x) => x.DiscoverBannerFiveTablet
    ),
  { ssr: true }
);
const DiscoverBannerFiveMobile = dynamic<DiscoverBannerFiveMobileProps>(
  () =>
    import('./MultiScreen/DiscoverBannerFive.MultiScreen').then(
      (x) => x.DiscoverBannerFiveMobile
    ),
  { ssr: true }
);

interface IProps {
  ContentArray: DiscoverBannerFiveIProps[];
}

/**
 * @author
 * @function @DiscoverBannerFive
 **/

export const DiscoverBannerFive: FC<IProps> = (props) => {
  const { LargeScreen, MediumScreen, SmallScreen } = useScreenSize();
  return (
    <div className="mt-[30px] flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      {LargeScreen && (
        <DiscoverBannerFiveDesktop ContentArray={props.ContentArray} />
      )}
      {MediumScreen && (
        <DiscoverBannerFiveTablet ContentArray={props.ContentArray} />
      )}
      {SmallScreen && (
        <DiscoverBannerFiveMobile ContentArray={props.ContentArray} />
      )}
    </div>
  );
};
