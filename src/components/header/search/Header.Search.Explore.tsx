import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { FC } from 'react';
import useScreenSize from '../../../algorithms/ScreenSizeDetection';
import { StoreDiscoverExploreSearchIProps } from '../../../contents/store/discover/Store.Discover.Search';
import { Rectangle_BlurDataURL } from '../../loader/BlurDataURL';
import { HeaderSearchExploreSmallProps } from './Header.Search.Explore.SmallBanner';

const HeaderSearchExploreSmallMobile = dynamic<HeaderSearchExploreSmallProps>(
  () =>
    import('./Header.Search.Explore.SmallBanner').then(
      (x) => x.HeaderSearchExploreSmallMobile
    )
);
const HeaderSearchExploreSmallDesktop = dynamic<HeaderSearchExploreSmallProps>(
  () =>
    import('./Header.Search.Explore.SmallBanner').then(
      (x) => x.HeaderSearchExploreSmallDesktop
    )
);

export interface HeaderSearchExploreProps {
  ContentArray: StoreDiscoverExploreSearchIProps;
}

/**
 * @author
 * @function @HeaderSearchExplore
 **/

export const HeaderSearchExplore: FC<HeaderSearchExploreProps> = (props) => {
  const { SmallScreen } = useScreenSize();
  return (
    <div className="flex flex-col w-full px-3 sm:px-3 space-y-3.5">
      <h6 className="font-[400] text-sm text-white w-full text-left">
        Explore
      </h6>
      <ul className="w-full flex flex-row sm:flex-col md-900:flex-row space-x-3 sm:space-y-3 sm:space-x-0 md-900:space-y-0 md-900:space-x-3">
        {props.ContentArray.LargeBanner.map((value, index) => (
          <li key={index} className="w-full flex">
            <motion.button className="group cursor-default w-full flex p-0 m-0 rounded-xl overflow-hidden relative box-border button-text-lower bg-transparent">
              <div className="w-full h-full flex flex-col relative">
                <div className="w-full h-[100px] flex relative">
                  <Image
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={Rectangle_BlurDataURL}
                    src={value.Image}
                    alt=""
                  />
                </div>
                <div className="w-full h-full absolute bg-gradient-to-t from-[#000000b3] transition-colors duration-300 ease-linear">
                  <div className="flex w-full h-full items-end justify-between">
                    <h6 className="group-hover:underline underline-offset-2 text-[14px] p-3.5 text-center text-white font-[400] tracking-[0.3px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {value.Label}
                    </h6>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="hidden sm:block m-1.5 p-2 group bg-white rounded-md bg-opacity-[0.15] text-[10px] text-white font-normal whitespace-nowrap"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.button>
          </li>
        ))}
      </ul>
      {SmallScreen ? (
        <HeaderSearchExploreSmallMobile ContentArray={props.ContentArray} />
      ) : (
        <HeaderSearchExploreSmallDesktop ContentArray={props.ContentArray} />
      )}
    </div>
  );
};
