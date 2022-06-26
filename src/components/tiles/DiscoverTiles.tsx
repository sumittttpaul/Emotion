import React, { FC } from 'react';
import { DiscoverTilesIProps } from '../../contents/store/discover/Store.Discover.Tiles';
import { DiscoverTilesDesktop } from './DiscoverTiles/DiscoverTilesDesktop';
import { DiscoverTilesTablet } from './DiscoverTiles/DiscoverTilesTablet';
import { DiscoverTilesMobile } from './DiscoverTiles/DiscoverTilesMobile';

interface IProps {
  ContentArray: DiscoverTilesIProps[];
}

/**
 * @author
 * @function @DiscoverTiles
 **/

export const DiscoverTiles: FC<IProps> = (props) => {
  return (
    <div className="space-y-5 mt-[50px] flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      <h6 className="text-[18px] mx-5">What's new</h6>
      <DiscoverTilesDesktop ContentArray={props.ContentArray} />
      <DiscoverTilesTablet ContentArray={props.ContentArray} />
      <DiscoverTilesMobile ContentArray={props.ContentArray} />
    </div>
  );
};
