import React, { FC } from 'react';
import { DiscoverBannerFourContentProps } from '../../contents/store/discover/Store.Discover.Banner';
import {
  DiscoverBannerFourBrowser,
  DiscoverBannerFourMobile,
} from './MultiScreen/DiscoverBannerFour.MultiScreen';

interface IProps {
  ContentArray: DiscoverBannerFourContentProps[];
}

/**
 * @author
 * @function @DiscoverBannerFour
 **/
export const DiscoverBannerFour: FC<IProps> = (props) => {
  return (
    <div className="flex w-full overflow-x-hidden overflow-y-visible mt-[30px]">
      <DiscoverBannerFourBrowser ContentArray={props.ContentArray} />
      {/* <DiscoverBannerFourMobile ContentArray={props.ContentArray} /> */}
    </div>
  );
};
