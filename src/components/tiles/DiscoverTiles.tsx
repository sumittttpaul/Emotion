import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { DiscoverTilesIProps } from '../../contents/store/discover/Store.Discover.Tiles';
import {
  DiscoverTilesDesktopProps,
  DiscoverTilesMobileProps,
  DiscoverTilesTabletProps,
} from './MultiScreen/DiscoverTiles.MultiScreen';
import { LoadingDiscoverTiles } from '../loader/LoadingSkeleton';
import useScreenSize from '../../algorithms/ScreenSizeDetection';

const DiscoverTilesDesktop = dynamic<DiscoverTilesDesktopProps>(
  () =>
    import('./MultiScreen/DiscoverTiles.MultiScreen').then(
      (x) => x.DiscoverTilesDesktop
    ),
  {
    loading: () => <LoadingDiscoverTiles />,
    ssr: true,
  }
);
const DiscoverTilesTablet = dynamic<DiscoverTilesTabletProps>(
  () =>
    import('./MultiScreen/DiscoverTiles.MultiScreen').then(
      (x) => x.DiscoverTilesTablet
    ),
  {
    loading: () => <LoadingDiscoverTiles />,
    ssr: true,
  }
);
const DiscoverTilesMobile = dynamic<DiscoverTilesMobileProps>(
  () =>
    import('./MultiScreen/DiscoverTiles.MultiScreen').then(
      (x) => x.DiscoverTilesMobile
    ),
  {
    loading: () => <LoadingDiscoverTiles />,
    ssr: true,
  }
);

interface IProps {
  ContentArray: DiscoverTilesIProps[];
}

/**
 * @author
 * @function @DiscoverTiles
 **/

export const DiscoverTiles: FC<IProps> = (props) => {
  const { LargeScreen, MediumScreen, SmallScreen } = useScreenSize();
  return (
    <div className="mt-[30px] flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      {LargeScreen && (
        <DiscoverTilesDesktop ContentArray={props.ContentArray} />
      )}
      {MediumScreen && (
        <DiscoverTilesTablet ContentArray={props.ContentArray} />
      )}
      {SmallScreen && <DiscoverTilesMobile ContentArray={props.ContentArray} />}
    </div>
  );
};
