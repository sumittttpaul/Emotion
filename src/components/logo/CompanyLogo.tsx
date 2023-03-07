import React from 'react';
import Image from 'next/legacy/image';
import Logo from '../../../public/agewear_white.svg';
import Logo_Full from '../../../public/agewear_full_white.svg';

interface IProps {
  onValueChange: (value: string) => void;
}

export const HeaderLogo = (props: IProps) => {
  return (
    <div className="flex relative">
      <Image
        height={32.5}
        width={32.5}
        layout="fixed"
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
    <Image height={45} width={45} className="opacity-90" src={Logo} alt="" />
  );
};

export const MobileLogo = (props: IProps) => {
  return (
    <Image
      height={30}
      width={30}
      layout="fixed"
      onClick={() => props.onValueChange('Discover')}
      className="opacity-90 hover:opacity-100 hover:cursor-pointer transition-all duration-300"
      src={Logo}
      alt=""
    />
  );
};

export const FooterLogo = (props: IProps) => {
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
