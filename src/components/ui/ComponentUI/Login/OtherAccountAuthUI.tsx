import React, { FC } from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';
import { Square_BlurDataURL } from '../../../loader/BlurDataURL';

interface IProps {
  FacebookSignInButton: () => void;
  GoogleSignInButton: () => void;
  AppleSignInButton: () => void;
}

/**
 * @author
 * @function @OtherAccountAuthUI
 **/

const buttonDesign =
  'bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] text-white h-[50px] justify-center items-center flex w-full rounded-md focus:outline-none';

const OtherAccountAuthUI: FC<IProps> = (props) => {
  return (
    <div className="flex space-x-3 w-full">
      <Button
        aria-label="facebook-sign-in-button"
        disableFocusRipple
        onClick={props.FacebookSignInButton}
        className={buttonDesign}
      >
        <Image
          height={18}
          width={9}
          src="/icons/facebook.svg"
          alt=""
          placeholder="blur"
          loading="lazy"
          blurDataURL={Square_BlurDataURL}
        />
      </Button>
      <Button
        aria-label="google-sign-in-button"
        disableFocusRipple
        onClick={props.GoogleSignInButton}
        className={buttonDesign}
      >
        <Image
          height={17}
          width={17}
          src="/icons/google.svg"
          alt=""
          placeholder="blur"
          loading="lazy"
          blurDataURL={Square_BlurDataURL}
        />
      </Button>
      <Button
        aria-label="apple-sign-in-button"
        disableFocusRipple
        onClick={props.AppleSignInButton}
        className={buttonDesign}
      >
        <Image
          height={18}
          width={18}
          src="/icons/apple.svg"
          alt=""
          placeholder="blur"
          loading="lazy"
          blurDataURL={Square_BlurDataURL}
        />
      </Button>
    </div>
  );
};

export default OtherAccountAuthUI;
