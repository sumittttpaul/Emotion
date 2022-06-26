import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { DiscoverTilesIProps } from '../../contents/store/discover/Store.Discover.Tiles';
import { DiscoverTilesDesktopProps } from './DiscoverTiles/DiscoverTilesDesktop';
import { DiscoverTilesTabletProps } from './DiscoverTiles/DiscoverTilesTablet';
import { DiscoverTilesMobileProps } from './DiscoverTiles/DiscoverTilesMobile';
import { LoadingDiscoverTiles } from '../loader/LoadingSkeleton';
// import { DiscoverTilesDesktop } from './DiscoverTiles/DiscoverTilesDesktop';
// import { DiscoverTilesTablet } from './DiscoverTiles/DiscoverTilesTablet';
// import { DiscoverTilesMobile } from './DiscoverTiles/DiscoverTilesMobile';

const DiscoverTilesDesktop = dynamic<DiscoverTilesDesktopProps>(
  () =>
    import('./DiscoverTiles/DiscoverTilesDesktop').then(
      (x) => x.DiscoverTilesDesktop
    ),
  {
    // loading: () => <LoadingDiscoverTiles />,
    ssr: false,
  }
);
const DiscoverTilesTablet = dynamic<DiscoverTilesTabletProps>(
  () =>
    import('./DiscoverTiles/DiscoverTilesTablet').then(
      (x) => x.DiscoverTilesTablet
    ),
  {
    // loading: () => <LoadingDiscoverTiles />,
    ssr: false,
  }
);
const DiscoverTilesMobile = dynamic<DiscoverTilesMobileProps>(
  () =>
    import('./DiscoverTiles/DiscoverTilesMobile').then(
      (x) => x.DiscoverTilesMobile
    ),
  {
    loading: () => <LoadingDiscoverTiles />,
    ssr: false,
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
  return (
    <div className="mt-[50px] flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      <DiscoverTilesDesktop ContentArray={props.ContentArray} />
      <DiscoverTilesTablet ContentArray={props.ContentArray} />
      <DiscoverTilesMobile ContentArray={props.ContentArray} />
    </div>
  );
};
