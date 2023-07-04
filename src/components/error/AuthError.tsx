import Image from 'next/image';
import React, { FC } from 'react';
import router from 'next/router';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';
import { SignInBackButton } from '../button/Auth/SignInBackButton';
import { SignInNextButton } from '../button/Auth/SignInNextButton';
import { YellowBulbHint } from '../hint/YellowBulbHint';
import {
  Home_Link,
  Manage_Your_Account_Link,
} from '../../routerLinks/RouterLinks';
import { useLoaderState } from '../../provider/LoadingState';

export interface AuthErrorProps {
  Type: 'database-not-created' | 'get-user-failed' | undefined;
  ToastTitle: string;
  ToastDescription: string;
  ClassName?: string;
}

/**
 * @author
 * @function @AuthError
 **/

export const AuthError: FC<AuthErrorProps> = (props) => {
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

  const handleReloadThePage = () => {
    router.reload();
  };

  return (
    <div
      className={`${props.ClassName}  px-5 pt-20 md:p-14 relative flex flex-col w-full justify-center items-center`}
    >
      <Image
        height={100}
        width={100}
        className="opacity-30 pb-7"
        src="/vectors/emogi-face-error.svg"
        alt="setup-error"
      />
      <div className="max-w-[500px] space-y-5 relative w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="flex">
          <AuthHeaderLabel>
            {props.Type === 'database-not-created' && 'Something went wrong'}
            {props.Type === 'get-user-failed' && 'Something went wrong'}
            {props.Type === undefined && props.ToastTitle}
          </AuthHeaderLabel>
        </div>
        <h6 className="font-normal text-center w-full text-white/75 text-[15px]">
          {props.Type === 'database-not-created' &&
            'We apologize for the inconvenience, but there seems to be an error with the process of creation of database.'}
          {props.Type === 'get-user-failed' &&
            'We apologize for the inconvenience, but there seems to be an error with the validating process.'}
          {props.Type === undefined && props.ToastDescription}
        </h6>
        {props.Type !== undefined && (
          <div className="flex">
            <YellowBulbHint
              Tooltip
              TooltipPlacement="top"
              ToottipTitle={
                (props.Type === 'get-user-failed' &&
                  'Encountered a content loading failure. To resolve the issue, we recommend refreshing the page for a fresh attempt at loading the content.') ||
                (props.Type === 'database-not-created' &&
                  'To resolve the issue, please refresh your page to delete your account and then proceed to authenticate again. This will ensure a secure user experience.') ||
                ''
              }
              Label={
                (props.Type === 'get-user-failed' &&
                  'Pick up where you left off by simply reloading the page.') ||
                (props.Type === 'database-not-created' &&
                  'Proceed a fresh start by simply reloading the page.') ||
                ''
              }
            />
          </div>
        )}
      </div>
      <div className="w-full flex-col space-y-2 mt-7 max-w-[750px]">
        {props.Type !== undefined && (
          <div className="w-full flex justify-start items-center">
            <SignInNextButton
              onClick={handleReloadThePage}
              Label="Reload the page"
            />
          </div>
        )}
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
