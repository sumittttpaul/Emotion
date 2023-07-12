'use client';

import dynamic from 'next/dynamic';
import { ToastHook } from 'hooks/Hooks.Toast';
import { useEffect, useState } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ToastDarkProps } from 'components/toast/ToastDark';
import { UserMgmtResetPasswordScreenProps } from './Screen/UserMgmt.ResetPasswordScreen';
import { UserMgmtEmailVerifiedScreenProps } from './Screen/UserMgmt.EmailVerifiedScreen';
import { useSearchParams } from 'next/navigation';

const UserMgmtErrorScreen = dynamic(
  () => import('./Screen/UserMgmt.ErrorScreen'),
  { ssr: false }
);
const UserMgmtResetPasswordScreen = dynamic<UserMgmtResetPasswordScreenProps>(
  () => import('./Screen/UserMgmt.ResetPasswordScreen'),
  { ssr: false }
);
const UserMgmtEmailVerifiedScreen = dynamic<UserMgmtEmailVerifiedScreenProps>(
  () => import('./Screen/UserMgmt.EmailVerifiedScreen'),
  { ssr: false }
);
const ToastDark = dynamic<ToastDarkProps>(
  () => import('../../toast/ToastDark'),
  { ssr: false }
);
const LinearProgressLaoding = dynamic(
  () => import('components/loader/Loading.LinearProgress'),
  { ssr: false }
);

interface IProps {
  userProfile?: IUserProfile;
  MainClassName: string;
  AnimationDivClassName: string;
  ContentClassName: string;
  Animation: AuthAnimationType;
}

function UserMgmtScreen({
  userProfile,
  MainClassName,
  AnimationDivClassName,
  ContentClassName,
  Animation,
}: IProps) {
  const [PasswordResetLoading, setPasswordResetLoading] = useState(false);
  const [LoadingMode, setLoadingMode] = useState(true); // true
  const params = useSearchParams();
  const mode = params ? params.get('mode') : null;
  const oobCode = params ? params.get('oobCode') : null;
  const { Toast, setToast } = ToastHook();

  useEffect(() => {
    if (typeof window === 'object') {
      setLoadingMode(false);
      setToast({ ...Toast, Title: '', Description: '', Show: false });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LazyMotion features={domAnimation} strict>
      <main
        className={`${MainClassName} relative items-center justify-center h-full w-full flex flex-col md:flex-row box-border`}
      >
        {mode === 'resetPassword' && (
          <UserMgmtResetPasswordScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            oobCode={oobCode}
            Animation={Animation}
            setLoading={(value) => setPasswordResetLoading(value)}
          />
        )}
        {mode === 'verifyEmail' && (
          <UserMgmtEmailVerifiedScreen
            MainClassName={MainClassName}
            oobCode={oobCode}
            Animation={Animation}
            isEmailVerified={userProfile?._data.isVerified?.emailAddress}
          />
        )}
        {!mode && !LoadingMode && <UserMgmtErrorScreen />}
        {PasswordResetLoading && <LinearProgressLaoding />}
      </main>
      <ToastDark
        Toast={{
          Open: Toast.Show,
          onClose: (value) => setToast({ ...Toast, Show: value }),
          MessageTitle: Toast.Title,
          MessageDescription: Toast.Description,
          Type: Toast.Type,
        }}
        SlideDirection="down"
        Vertical="top"
        Horizontal="center"
        HideDuration={6}
      />
    </LazyMotion>
  );
}

export default UserMgmtScreen;
