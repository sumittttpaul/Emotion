import React, { FC } from 'react';
import { Square_BlurDataURL } from '../../loader/BlurDataURL';
import Image from 'next/image';

interface IProps {}

/**
 * @author
 * @function @HeaderLogo
 **/

export const HeaderLogo: FC<IProps> = (props) => {
  return (
    <div className="flex relative py-[5px] sm:px-[12px]">
      <Image
        height={35}
        width={35}
        className="opacity-70"
        src="/agewear.svg"
        alt="logo-svg"
        placeholder="blur"
        blurDataURL={Square_BlurDataURL}
      />
    </div>
  );
};
