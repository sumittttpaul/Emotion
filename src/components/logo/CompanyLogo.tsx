import React from 'react';
import Image from 'next/legacy/image';
import Logo from '../../../public/agewear_white.svg';
import Logo_Full from '../../../public/agewear_full_white.svg';

interface Iprops {
  onValueChange: (value: string) => void;
}

export const HeaderLogo = (props: Iprops) => {
  return (
    <div className="flex relative py-[8.4px] sm:px-[12px]">
      <Image
        height={32.5}
        width={32.5}
        onClick={() => props.onValueChange('Discover')}
        className="opacity-90 hover:opacity-100 hover:cursor-pointer transition-all duration-300"
        src={Logo}
        alt=""
      />
    </div>
  );
};

export const AuthHeaderLogo = () => {
  return (
    <Image
      height={45}
      width={45}
      className="opacity-90"
      src={Logo}
      alt=""
    />
  );
};

export const FooterLogo = (props: Iprops) => {
  return (
    <>
      <div className="hidden sm:block">
        <Image
          height={30}
          width={125}
          onClick={() => props.onValueChange('Discover')}
          className="opacity-90 hover:opacity-100 hover:cursor-pointer transition-all duration-300"
          src={Logo_Full}
          alt=""
        />
      </div>
      <div className="block sm:hidden">
        <Image
          height={25}
          width={100}
          onClick={() => props.onValueChange('Discover')}
          className="opacity-90 hover:opacity-100 hover:cursor-pointer transition-all duration-300"
          src={Logo_Full}
          alt=""
        />
      </div>
    </>
  );
};
