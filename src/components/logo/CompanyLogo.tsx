import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/agewear_white.svg';
import Logo_Full from '../../../public/agewear_full_white.svg';

export const PageHeaderLogo = () => {
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

export const AuthHeaderLogo = () => {
  return (
    <Image
      height={45}
      width={45}
      className="opacity-70"
      src={Logo}
      alt="logo-svg"
      priority
    />
  );
};

export const FooterLogo = () => {
  return (
    <>
      <div className="hidden sm:block">
        <Image
          height={30}
          width={125}
          className="opacity-70"
          src={Logo_Full}
          alt="logo-svg"
          priority
        />
      </div>
      <div className="block sm:hidden">
        <Image
          height={25}
          width={100}
          className="opacity-70"
          src={Logo_Full}
          alt="logo-svg"
          priority
        />
      </div>
    </>
  );
};
