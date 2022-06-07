import React, { FC } from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';

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
      <Button onClick={props.FacebookSignInButton} className={buttonDesign}>
        <Image
          height={18}
          width={9}
          src="/icons/facebook.svg"
          alt="facebook-logo-svg"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 156.6 310'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M81.7,165.11h34V305a5,5,0,0,0,5,5H178.3a5,5,0,0,0,5-5V165.76h39.06a5,5,0,0,0,5-4.42l5.93-51.51a5,5,0,0,0-5-5.57h-45V72c0-9.73,5.24-14.67,15.58-14.67H228.3a5,5,0,0,0,5-5V5a5,5,0,0,0-5-5H187.75c-.28,0-.92,0-1.85,0-7,0-31.49,1.38-50.81,19.15-21.4,19.69-18.43,43.27-17.71,47.36v37.75H81.7a5,5,0,0,0-5,5v50.85A5,5,0,0,0,81.7,165.11Z' transform='translate(-76.7)'/%3E%3C/svg%3E`}
        />
      </Button>
      <Button onClick={props.GoogleSignInButton} className={buttonDesign}>
        <Image
          height={17}
          width={17}
          src="/icons/google.svg"
          alt="google-logo-svg"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.45 24'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M5.27,9.76A7.07,7.07,0,0,1,12,4.91a7,7,0,0,1,4.42,1.58L19.91,3A12,12,0,0,0,1.24,6.65Z'/%3E%3Cpath class='cls-1' d='M16,18a7.33,7.33,0,0,1-4,1.08,7.07,7.07,0,0,1-6.72-4.82l-4,3.06A12,12,0,0,0,12,24a11.4,11.4,0,0,0,7.83-3Z'/%3E%3Cpath class='cls-1' d='M19.83,21a12,12,0,0,0,3.62-9,9.56,9.56,0,0,0-.27-2.18H12v4.63h6.44A5.41,5.41,0,0,1,16,18Z'/%3E%3Cpath class='cls-1' d='M5.28,14.27A7.11,7.11,0,0,1,4.91,12a7,7,0,0,1,.36-2.24l-4-3.11a12.12,12.12,0,0,0,0,10.68Z'/%3E%3C/svg%3E`}
        />
      </Button>
      <Button onClick={props.AppleSignInButton} className={buttonDesign}>
        <Image
          height={18}
          width={18}
          src="/icons/apple.svg"
          alt="apple-logo-svg"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 249.25 305'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M40.74,112.12C15,156.86,31.34,224.77,59.86,265.94,74.09,286.52,88.5,305,108.24,305l1.13,0c9.27-.37,16-3.23,22.45-6,7.27-3.1,14.8-6.3,26.6-6.3,11.22,0,18.39,3.1,25.31,6.1s13.87,6,24.26,5.81c22.23-.41,35.88-20.35,47.92-37.94a168,168,0,0,0,21-43l.09-.27a2.5,2.5,0,0,0-1.33-3.06l-.19-.08c-3.91-1.6-38.25-16.84-38.61-58.36-.34-33.74,25.76-51.6,31-54.84l.25-.15a2.53,2.53,0,0,0,1.09-1.61,2.49,2.49,0,0,0-.38-1.91C250.8,77,223.19,73,212.08,72.56c-1.62-.16-3.28-.24-5-.24-13.06,0-25.57,4.93-35.61,8.89-6.94,2.74-12.93,5.1-17.06,5.1-4.65,0-10.67-2.39-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9h-.79C78.89,73.64,54.3,88.54,40.74,112.12Z' transform='translate(-27.88 0)'/%3E%3Cpath class='cls-1' d='M212.1,0c-15.76.64-34.67,10.35-46,23.59-9.61,11.12-19,29.67-16.52,48.37a2.51,2.51,0,0,0,2.28,2.17q1.61.12,3.24.12c15.41,0,32-8.52,43.39-22.25,11.95-14.5,18-33.11,16.17-49.77A2.52,2.52,0,0,0,212.1,0Z' transform='translate(-27.88 0)'/%3E%3C/svg%3E`}
        />
      </Button>
    </div>
  );
};

export default OtherAccountAuthUI;
