import React, { FC } from 'react';
import { DiscoverTilesContentProps } from '../../contents/store/discover/Store.Discover.Tiles';
import {
  DiscoverTilesBrowser,
  DiscoverTilesMobile,
} from './MultiScreen/DiscoverTiles.MultiScreen';

interface IProps {
  ContentArray: DiscoverTilesContentProps[];
}

/**
 * @author
 * @function @DiscoverTiles
 **/
export const DiscoverTiles: FC<IProps> = (props) => {
  return (
    <div className="mt-[30px] flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      <DiscoverTilesBrowser ContentArray={props.ContentArray} />
      {/* <DiscoverTilesMobile ContentArray={props.ContentArray} /> */}
    </div>
  );
};
