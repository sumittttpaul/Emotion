import Image from 'next/image';
import React, {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { AuthHeaderLabel } from '../../../label/AuthHeaderLabel';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { AuthAnimationType } from '../AuthType';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { ConfirmVerifyEmailAddress } from '../../../../algorithms/AuthAlgorithms';
import { useQueryClient, useMutation } from 'react-query';
import { useAuth } from '../../../../firebase/useAuth';
import {
  _userProfileEndURL as cacheKey,
  putUserProfile,
  getUserProfile,
} from '../../../../mongodb/helper/Helper.UserProfile';
import { IUserProfileDataUpdate } from '../../../../mongodb/schema/Schema.UserProfile';
import { AuthConfirmEmailVerifySkeleton } from '../../../loader/Auth/AuthSkeleton';
import { useLoaderState } from '../../../../provider/LoadingState';
import router from 'next/router';
import {
  Home_Link,
  Manage_Your_Account_Link,
  Setup_Link,
} from '../../../../routerLinks/RouterLinks';

export interface UserMgmtEmailVerifiedAuthUIProps {
  BodyClassName: string;
  oobCode: string | string[] | undefined;
  isEmailVerified: boolean | undefined;
  Animation: AuthAnimationType;
  Toast: boolean;
  setToast: Dispatch<SetStateAction<boolean>>;
  ToastSetting: { Title: string; Description: string; Type: string };
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
}

/**
 * @author
 * @function @UserMgmtEmailVerifiedAuthUI
 **/

export const UserMgmtEmailVerifiedAuthUI: FC<
  UserMgmtEmailVerifiedAuthUIProps
> = (props) => {
  const { FirebaseUser } = useAuth();
  const queryClient = useQueryClient();
  const updateUserProfile = useMutation(
    (data: IUserProfileDataUpdate) => putUserProfile(FirebaseUser?.uid, data),
    {
      onSuccess: async () => {
        await queryClient.prefetchQuery([cacheKey, FirebaseUser?.uid], () =>
          getUserProfile(FirebaseUser?.uid)
        );
        setLoading(false);
        setScreen('Success');
      },
      onError: (error: any) => {
        setLoading(false);
        setScreen('Error');
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      },
    }
  );

  // State
  const [Loading, setLoading] = useState(true); // true
  const [Screen, setScreen] = useState<'Success' | 'Error' | null>(null);

  // Loading
  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };

  // Toast
  const ShowToast = (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => {
    props.setToastSetting({
      Title: title,
      Description: description,
      Type: type,
    });
    props.setToast(show);
  };
  const handleShowToast = (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => {
    props.setToastSetting({
      Title: title,
      Description: description,
      Type: type,
    });
    props.setToast(false);
  };

  const handleBackToHome = () => {
    LoadingScreen(true);
    router.push(Home_Link);
  };

  const handleMoveToManageAccount = () => {
    LoadingScreen(true);
    router.push(Manage_Your_Account_Link);
  };

  const handleContinueWithSetup = () => {
    LoadingScreen(true);
    router.push(Setup_Link);
  };

  // Database
  const UpdateDataBase = () => {
    if (FirebaseUser) {
      try {
        const _data: IUserProfileDataUpdate = {
          '_data.isVerified.emailAddress': true,
        };
        updateUserProfile.mutate(_data);
      } catch (error: any) {
        setLoading(false);
        setScreen('Error');
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
        console.error('User profile data not updated because ' + error.message);
      }
    } else {
      setLoading(false);
      setScreen('Error');
      ShowToast(
        'Something went wrong',
        'It seems like user is not exist.',
        'Error',
        true
      );
    }
  };

  useEffect(() => {
    if (props.oobCode && props.isEmailVerified === false) {
      ConfirmVerifyEmailAddress({
        oobCode: props.oobCode.toString(),
        Screen: setScreen,
        Loading: setLoading,
        ShowToast: handleShowToast,
        UpdateDataBase: UpdateDataBase,
      });
    } else {
      if (props.isEmailVerified !== undefined) setLoading(false);
      if (props.isEmailVerified === true) setScreen('Success');
      if (props.isEmailVerified === false) setScreen('Error');
    }
  }, [props.oobCode, props.isEmailVerified]);

  return (
    <Fragment>
      {Loading && (
        <AuthConfirmEmailVerifySkeleton ClassName={props.BodyClassName} />
      )}
      {Screen === 'Success' && (
        <Fragment>
          <div className="pt-20 pb-7 md:p-14 md:ml-14 relative flex w-full h-full justify-center items-center">
            <div className="flex h-[125px] md:h-auto">
              <Image
                height={370}
                width={370}
                src="/vectors/register-verify-email.svg"
                alt="verify-email-success"
              />
            </div>
          </div>
          <div className="md:p-9 space-y-5 relative w-full md:min-w-[400px] md-1000:min-w-[500px] flex flex-col items-center justify-center overflow-hidden">
            <div className="px-5 relative flex space-x-5 items-start justify-center">
              <Image
                height={30}
                width={30}
                className="mt-1.5"
                src="/icons/check-circle-green.svg"
                alt=""
              />
              <AuthHeaderLabel>Your email is verified</AuthHeaderLabel>
            </div>
            <h6 className="font-normal text-center w-full text-white/75 text-[15px] px-5">
              Congratulations! Your email has been successfully verified.
              You&apos;re now few step closer to unlocking a world of
              possibilities.
            </h6>
            <BottomLinkButton
              ManageAccountClick={handleMoveToManageAccount}
              SetupClick={handleContinueWithSetup}
              HomeClick={handleBackToHome}
            />
          </div>
        </Fragment>
      )}
      {Screen === 'Error' && (
        <Fragment>
          <div className="pt-20 pb-7 md:p-14 md:ml-14 relative flex w-full h-full justify-center items-center">
            <div className="flex h-[125px] md:h-auto">
              <Image
                height={370}
                width={370}
                src="/vectors/register-verify-email-error.svg"
                alt="verify-email-error"
              />
            </div>
          </div>
          <div className="md:p-9 space-y-5 relative w-full md:min-w-[400px] md-1000:min-w-[500px] flex flex-col items-center justify-center overflow-hidden">
            <div className="px-5 relative flex space-x-5 items-start justify-center">
              <Image
                height={30}
                width={30}
                className="mt-[7px]"
                src="/icons/x-circle-red.svg"
                alt=""
              />
              <AuthHeaderLabel>
                {props.ToastSetting?.Title
                  ? props.ToastSetting.Title
                  : 'Something went wrong'}
              </AuthHeaderLabel>
            </div>
            <h6 className="font-normal text-center w-full text-white/75 text-[15px] px-5">
              {props.ToastSetting?.Description
                ? props.ToastSetting.Description
                : 'We apologize for the inconvenience, but there seems to be an error with the email verification process.'}
            </h6>
            <BottomLinkButton
              ManageAccountClick={handleMoveToManageAccount}
              SetupClick={handleContinueWithSetup}
              HomeClick={handleBackToHome}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const BottomLinkButton = (props: {
  ManageAccountClick: () => void;
  SetupClick: () => void;
  HomeClick: () => void;
}) => {
  return (
    <div className="w-full flex-col space-y-2">
      <div className="px-5 w-full flex justify-start items-center">
        <SignInNextButton
          onClick={props.ManageAccountClick}
          Label="Move to manage account"
        />
      </div>
      <div className="px-5 w-full flex justify-start items-center">
        <SignInNextButton
          onClick={props.SetupClick}
          Label="Continue with setup"
        />
      </div>
      <div className="px-5 w-full flex justify-start items-center">
        <SignInBackButton onClick={props.HomeClick} Label="Back to home" />
      </div>
    </div>
  );
};
