import React, { FC } from 'react';
import Image from 'next/image';
import Logo from '../../../../../public/agewear_white.svg';

interface IProps {}

/**
 * @author
 * @function @TopHeaderLogo
 **/

export const TopHeaderLogo: FC<IProps> = (props) => {
  return (
    <div className="flex relative py-[8.4px] sm:px-[12px]">
      <Image
        height={32.5}
        width={32.5}
        className="opacity-70"
        src={Logo}
        alt="logo-svg"
        priority
      />
    </div>
  );
};
