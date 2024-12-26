'use client';

import dynamic from 'next/dynamic';
import { ToastHook } from 'hooks/global/Hooks.Toast';
import { useEffect, useState } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

const UserMgmtErrorScreen = dynamic(
  () => import('./Screen/UserMgmt.Screen.Error'),
  { ssr: false },
);
const UserMgmtResetPasswordScreen = dynamic<UserMgmtResetPasswordScreenProps>(
  () => import('./Screen/UserMgmt.Screen.ResetPassword'),
  { ssr: false },
);
const UserMgmtEmailVerifiedScreen = dynamic<UserMgmtEmailVerifiedScreenProps>(
  () => import('./Screen/UserMgmt.Screen.EmailVerified'),
  { ssr: false },
);
const ToastDark = dynamic<ToastDarkProps>(
  () => import('components/toast/ToastDark'),
  { ssr: false },
);
const LinearProgressLoading = dynamic(
  () => import('components/loading/Loading.LinearProgress'),
  { ssr: false },
);

interface IProps {
  userProfile?: IUserProfile;
  MainClassName: string;
  ParentDivClassName: string;
  ContentClassName: string;
  Animation: AuthAnimationType;
}

function UserMgmtInterface({
  userProfile,
  MainClassName,
  ParentDivClassName,
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
        className={`${MainClassName} relative box-border flex h-full w-full flex-col items-center justify-center md:flex-row`}
      >
        {mode === 'resetPassword' && (
          <UserMgmtResetPasswordScreen
            ParentDivClassName={ParentDivClassName}
            ContentClassName={ContentClassName}
            oobCode={oobCode}
            Animation={Animation}
            Loading={PasswordResetLoading}
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
        {PasswordResetLoading && <LinearProgressLoading />}
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

export default UserMgmtInterface;
