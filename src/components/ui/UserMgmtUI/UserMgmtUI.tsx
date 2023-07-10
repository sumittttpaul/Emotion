import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { FC, Fragment, useEffect, useState } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { AuthLoadingProps } from '../../loader/Loading.LinearProgress';
import { ToastDarkProps } from '../../toast/ToastDark';
import { UserMgmtResetPasswordAuthUIProps } from './UserMgmt.ResetPasswordAuthUI';
import { UserMgmtEmailVerifiedAuthUIProps } from './Screen/UserMgmt.EmailVerifiedAuthUI';
// import { useQuery } from 'react-query';
import {
  getUserProfile,
  _userProfileEndURL as cacheKey,
} from '../../../databases/helper/Helper.UserProfile';
import { IUserProfile } from '../../../databases/schema/Schema.UserProfile';
import { useAuth } from '../../../authentication/useClientAuth';
import { UserMgmtErrorAuthUIProps } from './UserMgmt.ErrorAuthUI';

const UserMgmtErrorAuthUI = dynamic<UserMgmtErrorAuthUIProps>(
  () => import('./UserMgmt.ErrorAuthUI').then((x) => x.UserMgmtErrorAuthUI),
  { ssr: false }
);
const UserMgmtResetPasswordAuthUI = dynamic<UserMgmtResetPasswordAuthUIProps>(
  () =>
    import('./UserMgmt.ResetPasswordAuthUI').then(
      (x) => x.UserMgmtResetPasswordAuthUI
    ),
  { ssr: false }
);
const UserMgmtEmailVerifiedAuthUI = dynamic<UserMgmtEmailVerifiedAuthUIProps>(
  () =>
    import('./Screen/UserMgmt.EmailVerifiedAuthUI').then(
      (x) => x.UserMgmtEmailVerifiedAuthUI
    ),
  { ssr: false }
);
const ToastDark = dynamic<ToastDarkProps>(
  () => import('../../toast/ToastDark').then((x) => x.ToastDark),
  { ssr: false }
);
const AuthLoading = dynamic<AuthLoadingProps>(
  () =>
    import('../../loader/Loading.LinearProgress').then((x) => x.AuthLoading),
  { ssr: false }
);

/**
 * @author
 * @function @UserMgmtUI
 **/

export const UserMgmtUI: FC = () => {
  const router = useRouter();
  const { mode, oobCode } = router.query;
  const { FirebaseUser } = useClientAuth();

  const [PasswordResetLoading, setPasswordResetLoading] = useState(false);
  const [Toast, setToast] = useState(false);
  const [LoadingMode, setLoadingMode] = useState(true); // true
  const [ToastSetting, setToastSetting] = useState({
    Title: '',
    Description: '',
    Type: '',
  });

  const { data } = useQuery(
    [cacheKey, FirebaseUser?.uid],
    () => getUserProfile(FirebaseUser?.uid),
    { staleTime: Infinity }
  );
  const userProfile = data as IUserProfile;

  // Class
  const BodyClassName = 'h-full md:h-[652px]';
  const ContainerClassName = 'h-[350px]';
  const ContentClassName = 'h-[300px]';

  // Animation
  const Animation = {
    Initial: { x: 50, opacity: 0 },
    Final: { x: 0, opacity: 1 },
    Transition: { type: 'tween' },
  };

  useEffect(() => {
    if (typeof window === 'object') setLoadingMode(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <Head>
        <meta name="theme-color" content="#202020" />
      </Head>
      <LazyMotion features={domAnimation} strict>
        <div className="md:bg-[#0f0f0f] flex md:p-[32px] items-start md:items-center justify-center h-full md:h-screen w-screen main-auth overflow-hidden">
          <div
            className={`${BodyClassName} relative bg-[#202020] md:rounded-xl w-full md:max-w-[1040px] flex flex-col md:flex-row items-center justify-center overflow-hidden`}
          >
            {mode === 'resetPassword' && (
              <UserMgmtResetPasswordAuthUI
                ContainerClassName={ContainerClassName}
                ContentClassName={ContentClassName}
                oobCode={oobCode}
                Animation={Animation}
                Loading={PasswordResetLoading}
                Toast={Toast}
                setLoading={setPasswordResetLoading}
                setToast={setToast}
                setToastSetting={setToastSetting}
              />
            )}
            {mode === 'verifyEmail' && (
              <UserMgmtEmailVerifiedAuthUI
                BodyClassName={BodyClassName}
                oobCode={oobCode}
                Animation={Animation}
                Toast={Toast}
                setToast={setToast}
                ToastSetting={ToastSetting}
                setToastSetting={setToastSetting}
                isEmailVerified={userProfile?._data.isVerified?.emailAddress}
              />
            )}
            {mode === undefined && !LoadingMode && <UserMgmtErrorAuthUI />}
            {PasswordResetLoading && <AuthLoading />}
          </div>
        </div>
        <ToastDark
          Toast={{
            Open: Toast,
            onClose: setToast,
            MessageTitle: ToastSetting.Title,
            MessageDescription: ToastSetting.Description,
            Type: ToastSetting.Type,
          }}
          SlideDirection="down"
          Vertical="top"
          Horizontal="center"
          HideDuration={6}
        />
      </LazyMotion>
    </Fragment>
  );
};
