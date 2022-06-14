import React, { FC } from 'react';
import Image from 'next/image';
import Logo from '../../../../../public/agewear.svg';

interface IProps {}

/**
 * @author
 * @function @TopHeaderLogo
 **/

export const TopHeaderLogo: FC<IProps> = (props) => {
  return (
    <div className="flex relative py-[7px] sm:px-[12px]">
      <Image
        height={35}
        width={35}
        className="opacity-70"
        src={Logo}
        alt="logo-svg"
        priority
      />
    </div>
  );
};
