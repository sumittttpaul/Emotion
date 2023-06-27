import React, { FC } from 'react';
import { DiscoverTilesContentProps } from '../../contents/home/discover/Home.Discover.Tiles';
import {
  DiscoverTilesBrowser,
  DiscoverTilesMobile,
} from './MultiScreen/DiscoverTiles.MultiScreen';

interface IProps {
  ContentArray: DiscoverTilesContentProps[];
  Label: string;
}

/**
 * @author
 * @function @DiscoverTiles
 **/
export const DiscoverTiles: FC<IProps> = (props) => {
  return (
    <div className="px-3 mt-5 flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      <DiscoverTilesBrowser
        Label={props.Label}
        ContentArray={props.ContentArray}
      />
      {/* <DiscoverTilesMobile ContentArray={props.ContentArray} /> */}
    </div>
  );
};
