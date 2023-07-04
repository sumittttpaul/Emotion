import React, { FC } from 'react';
import Image from 'next/image';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { AuthHeaderLabel } from '../../../label/AuthHeaderLabel';
import { useLoaderState } from '../../../../provider/LoadingState';
import router from 'next/router';
import {
  Home_Link,
  Manage_Your_Account_Link,
} from '../../../../routerLinks/RouterLinks';

export interface UserMgmtErrorAuthUIProps {}

/**
 * @author
 * @function @UserMgmtErrorAuthUI
 **/

export const UserMgmtErrorAuthUI: FC<UserMgmtErrorAuthUIProps> = (props) => {
  // Loading
  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => setLoader({ show: value });

  const handleBackToHome = () => {
    LoadingScreen(true);
    router.push(Home_Link);
  };

  const handleMoveToManageAccount = () => {
    LoadingScreen(true);
    router.push(Manage_Your_Account_Link);
  };

  return (
    <div className="md:h-[652px] px-5 pt-20 md:p-14 relative flex flex-col w-full h-full justify-center items-center">
      <Image
        height={100}
        width={100}
        className="opacity-30 pb-7 text-white text-xs"
        src="/vectors/emogi-face-error.svg"
        alt="setup-error"
      />
      <div className="max-w-[500px] space-y-5 relative w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="flex">
          <AuthHeaderLabel>Something went wrong</AuthHeaderLabel>
        </div>
        <h6 className="font-normal text-center w-full text-white/75 text-[15px]">
          We apologize for the inconvenience, but there seems to be an error
          with the mode process.
        </h6>
      </div>
      <div className="w-full flex-col space-y-2 mt-7 max-w-[750px]">
        <div className="w-full flex justify-start items-center">
          <SignInNextButton
            onClick={handleMoveToManageAccount}
            Label="Move to manage account"
          />
        </div>
        <div className="w-full flex justify-start items-center">
          <SignInBackButton onClick={handleBackToHome} Label="Back to home" />
        </div>
      </div>
    </div>
  );
};
