import Image from 'next/legacy/image';
import React, { FC } from 'react';

export interface ProductDetailProps {}

/**
 * @author
 * @function @ProductDetailUI
 **/

export const ProductDetailUI: FC<ProductDetailProps> = (props) => {
  return (
    <div className="relative z-10">
      <div className="flex pr-3 items-center justify-between w-full h-full relative overflow-x-hidden overflow-y-visible">
        <div>
          <Image
            priority
            height={1080}
            width={1920}
            src="/images/avatar/illustration/4.png"
            alt=""
          />
        </div>
        <div className="flex flex-col w-full h-full items-center justify-center max-w-[30%]">
          <div className="flex relative">
            <Image
              priority
              height={260}
              width={200}
              src="/images/avatar/illustration/5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
