import React, { FC } from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';

interface IProps {}

/**
 * @author
 * @function @OtherAccountAuthUI
 **/

const OtherAccountAuthUI: FC<IProps> = (props) => {
  return (
    <div className="flex space-x-3 w-full">
      <Button className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] text-white h-[50px] justify-center items-center flex w-full focus:outline-none">
        <Image
          height={18}
          width={9}
          src="/icons/facebook.svg"
          alt="facebook-logo-svg"
        />
      </Button>
      <Button className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] text-white h-[50px] justify-center items-center flex w-full focus:outline-none">
        <Image
          height={17}
          width={17}
          src="/icons/google.svg"
          alt="google-logo-svg"
        />
      </Button>
      <Button className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] text-white -mt-[2px] h-[55px] justify-center items-center flex w-full focus:outline-none">
        <Image
          height={18}
          width={18}
          src="/icons/apple.svg"
          alt="apple-logo-svg"
        />
      </Button>
    </div>
  );
};

export default OtherAccountAuthUI;
