import React, { FC, Fragment, ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import SwiperCore from 'swiper';
import { m } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { ToastDarkProps } from '../../toast/ToastDark';
import { FinishAuthUIProps } from '../../ui/SetupUI/Screen/Setup.FinishScreen';
import { SkipDialogAuthUIProps } from '../../ui/SetupUI/Dialog/Setup.SkipDialog';
import { AuthSkeleton } from '../../ui/SetupUI/Screen/Setup.LoadingScreen';
import { AuthErrorProps } from '../../ui/SetupUI/Screen/Setup.ErrorScreen';
import { AuthLoadingProps } from '../../loader/Loading.LinearProgress';

const AuthLoading = dynamic<AuthLoadingProps>(
  () =>
    import('../../loader/Loading.LinearProgress').then((x) => x.AuthLoading),
  { ssr: false }
);

const AuthError = dynamic<AuthErrorProps>(
  () =>
    import('../../ui/SetupUI/Screen/Setup.ErrorScreen').then(
      (x) => x.AuthError
    ),
  { ssr: false }
);

const ToastDark = dynamic<ToastDarkProps>(
  () => import('../../toast/ToastDark').then((x) => x.ToastDark),
  { ssr: false }
);

const FinishAuthUI = dynamic<FinishAuthUIProps>(
  () =>
    import('../../ui/SetupUI/Screen/Setup.FinishScreen').then(
      (x) => x.FinishAuthUI
    ),
  { ssr: false }
);

const SkipDialogAuthUI = dynamic<SkipDialogAuthUIProps>(
  () =>
    import('../../ui/SetupUI/Dialog/Setup.SkipDialog').then(
      (x) => x.SkipDialogAuthUI
    ),
  { ssr: false }
);

type ServerProps = {
  color?: string;
};

interface IProps {
  children: ReactNode;
  ClassName: string;
  InitialSlide: number;
  Error: AuthErrorType;
  setError: Dispatch<AuthErrorType>;
  Loading: boolean;
  setLoading: Dispatch<boolean>;
  CheckInfoLoading: boolean;
  AuthScreen: AuthScreenType;
  setAuthScreen: Dispatch<AuthScreenType>;
  Finish: boolean;
  SkipDialogOpen: boolean;
  SkipDialogClose: () => void;
  Animation: AuthAnimationType;
  setToast: Dispatch<boolean>;
  ShowToast: boolean;
  ToastSetting: ToastSettingType;
  setToastSetting: Dispatch<ToastSettingType>;
  Toast: {
    Open: boolean;
    onClose: Dispatch<boolean>;
    MessageTitle: string;
    MessageDescription: string;
    Type: string;
  };
}

const Illustrations = [
  {
    Alt: 'login-phone',
    Image: '/vectors/login-register-phone.svg',
  },
  {
    Alt: 'login-email',
    Image: '/vectors/login-register-email.svg',
  },
  {
    Alt: 'login-others',
    Image: '/vectors/login-others.svg',
  },
  {
    Alt: 'login-otp',
    Image: '/vectors/login-register-otp-password.svg',
  },
  {
    Alt: 'login-password',
    Image: '/vectors/login-register-otp-password.svg',
  },
  {
    Alt: 'login-forgot-password',
    Image: '/vectors/login-forgot-password.svg',
  },
  {
    Alt: 'register-name',
    Image: '/vectors/register-name.svg',
  },
  {
    Alt: 'register-phone',
    Image: '/vectors/login-register-phone.svg',
  },
  {
    Alt: 'register-otp',
    Image: '/vectors/login-register-otp-password.svg',
  },
  {
    Alt: 'register-email',
    Image: '/vectors/login-register-email.svg',
  },
  {
    Alt: 'register-password',
    Image: '/vectors/login-register-otp-password.svg',
  },
  {
    Alt: 'register-verify-email',
    Image: '/vectors/register-verify-email.svg',
  },
  {
    Alt: 'register-profile-picture',
    Image: '/vectors/register-profile-picture.svg',
  },
  {
    Alt: 'register-date-of-birth',
    Image: '/vectors/register-date-of-birth.svg',
  },
  {
    Alt: 'register-gender',
    Image: '/vectors/register-gender.svg',
  },
];

/**
 * @author
 * @function @AuthOuterContainer
 **/

const AuthBodyContainer: FC<IProps & ServerProps> = (props) => {
  return (
    <LazyMotion features={domAnimation} strict>
      {props.Error.show && (
        <AuthError
          Type={props.Error.type}
          ClassName={props.ClassName}
          ToastTitle={props.Toast.MessageTitle}
          ToastDescription={props.Toast.MessageDescription}
        />
      )}
      {props.CheckInfoLoading && <AuthSkeleton ClassName={props.ClassName} />}
      {!props.Error.show && !props.CheckInfoLoading && (
        <main
          className={`${props.ClassName} relative items-center justify-center h-full w-full flex flex-col md:flex-row box-border`}
        >
          <div className="p-14 ml-14 relative hidden md:flex w-full h-full justify-center items-center">
            {Illustrations.map((value) => (
              <>
                {props.AuthScreen === value.Alt && (
                  <Image
                    height={370}
                    width={370}
                    src={value.Image}
                    alt={value.Alt}
                    className="text-white text-xs"
                  />
                )}
              </>
            ))}
          </div>
          <div className="md:p-9 md:min-w-[415px] md-1000:min-w-[500px] relative w-full flex items-center justify-center overflow-hidden">
            {props.children}
          </div>
        </main>
      )}
      {props.Finish && <FinishAuthUI ClassName={props.ClassName} />}
      {props.Loading && <AuthLoading />}
      <SkipDialogAuthUI
        Open={props.SkipDialogOpen}
        onClose={props.SkipDialogClose}
      />
      <ToastDark
        Toast={props.Toast}
        SlideDirection="down"
        Vertical="top"
        Horizontal="center"
        HideDuration={6}
      />
    </LazyMotion>
  );
};

export default AuthBodyContainer;
