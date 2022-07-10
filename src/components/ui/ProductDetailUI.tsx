import Image from 'next/image';
import React, { FC } from 'react';
import { Rectangle_BlurDataURL } from '../loader/BlurDataURL';

export interface ProductDetailProps {}

/**
 * @author
 * @function @ProductDetailUI
 **/

export const ProductDetailUI: FC<ProductDetailProps> = (props) => {
  return (
    <div className="relative z-10">
      <div className="flex px-5 items-center justify-between w-full h-full relative overflow-x-hidden overflow-y-visible">
        <div>
          <Image
            height={1080}
            width={1920}
            src="/images/avatar/illustration/4.png"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="flex flex-col w-full h-full items-center justify-center max-w-[30%]">
          <div className="flex relative">
            <Image
              height={260}
              width={200}
              src="/images/avatar/illustration/5.png"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
