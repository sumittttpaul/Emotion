import React, { FC } from 'react';
import Image from 'next/image';
import { UnderlineButtonDark } from '../button/UnderlineButtonDark';

interface IProps {}

/**
 * @author
 * @function @DiscoverTiles
 **/

export const DiscoverTiles: FC<IProps> = (props) => {
  return (
    <div className='space-y-5 mt-[50px] flex flex-col text-white px-5 m-0 box-border overflow-y-visible overflow-x-hidden'>
      <h6 className="text-[18px]">What's new</h6>
      <div className="w-full grid grid-cols-3 gap-5 relative">
        {[...Array(3)].map((value, index) => (
          <div
            key={index}
            className="flex w-full relative m-0 text-white overflow-hidden rounded-lg border border-solid border-[rgba(255,255,255,0.23)]"
          >
            <Image
              height={100}
              width={150}
              src="/images/avatar/illustration/6.png"
            />
            <div className="flex flex-col space-y-5 p-3 h-full w-full justify-between">
              <div>
                <h6>Plain t-shirt from different category</h6>
                <h6 className="text-xs opacity-70">
                  Plain t-shirt from different category
                </h6>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="text-xs flex space-x-1">
                  <h6>Starts at</h6>
                  <h6>Rs.499.00</h6>
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
