import React, { FC } from 'react';
import Image from 'next/image';
import { DiscoverTilesIProps } from '../../../contents/store/discover/Store.Discover.Tiles';
import { UnderlineButtonDark } from '../../button/UnderlineButtonDark';

export interface DiscoverTilesDesktopProps {
  ContentArray: DiscoverTilesIProps[];
}

/**
 * @author
 * @function @DiscoverTilesDesktop
 **/

export const DiscoverTilesDesktop: FC<DiscoverTilesDesktopProps> = (props) => {
  return (
    <div className="w-full hidden md-900:flex flex-col space-y-5">
      <h6 className="text-[18px] mx-5">What&apos;s new</h6>
      <div className="w-full hidden px-5 md-900:grid grid-cols-3 gap-5 relative">
        {props.ContentArray.map((value, index) => (
          <div
            key={index}
            className="flex w-full relative m-0 text-white overflow-hidden rounded-lg border border-solid border-[rgba(255,255,255,0.23)]"
          >
            <Image height={100} width={150} src={value.Image} />
            <div className="flex flex-col space-y-5 p-3 h-full w-full justify-between">
              <div className="space-y-1 flex flex-col">
                <h6>{value.Heading}</h6>
                <h6 className="text-xs opacity-70">
                  Plain t-shirt from different category
                </h6>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="text-xs flex space-x-1">
                  <h6 className="hidden lg-1100:block whitespace-nowrap">
                    Starts at
                  </h6>
                  <h6 className="whitespace-nowrap">{`₹${value.Price}`}</h6>
                </div>
                <UnderlineButtonDark label="View More" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
