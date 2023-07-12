'use client';

import { ToastDarkProps } from 'components/toast/ToastDark';
import { SetupSkipDialogProps } from 'components/ui/SetupUI/Dialog/Setup.SkipDialog';
import { SetupErrorScreenProps } from 'components/ui/SetupUI/Screen/Setup.ErrorScreen';
import { SetupFinishScreenProps } from 'components/ui/SetupUI/Screen/Setup.FinishScreen';
import { SetupLoadingScreen } from './Screen/Setup.LoadingScreen';
import { LazyMotion, domAnimation } from 'framer-motion';
import { SetupImages } from 'contents/setup/Setup.Image';
import { SetupHook } from 'hooks/Hooks.Setup';
import { ToastHook } from 'hooks/Hooks.Toast';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import ImageFadeTransition from 'components/transition/ImageFadeTransition';

const LoadingLinearProgress = dynamic(
  () => import('components/loader/Loading.LinearProgress'),
  { ssr: false }
);
const ToastDark = dynamic<ToastDarkProps>(
  () => import('components/toast/ToastDark'),
  { ssr: false }
);
const SetupErrorScreen = dynamic<SetupErrorScreenProps>(
  () => import('components/ui/SetupUI/Screen/Setup.ErrorScreen'),
  { ssr: false }
);
const SetupFinishScreen = dynamic<SetupFinishScreenProps>(
  () => import('components/ui/SetupUI/Screen/Setup.FinishScreen'),
  { ssr: false }
);
const SetupSkipDialog = dynamic<SetupSkipDialogProps>(
  () => import('components/ui/SetupUI/Dialog/Setup.SkipDialog'),
  { ssr: false }
);

interface IProps {
  children: React.ReactNode;
  MainClassName: string;
  userProfileError?: IError;
}

function SetupScreenMain({
  children,
  MainClassName,
  userProfileError,
}: IProps) {
  const {
    MainScreen,
    ErrorType,
    Screen,
    Loading,
    SkipDialog,
    setSkipDialog,
    setMainScreen,
  } = SetupHook();
  const { Toast, setToast } = ToastHook();

  const ActiveImageSrc =
    SetupImages.find((value) => Screen === value.Alt)?.Image || '';
  const ActiveImageAlt =
    SetupImages.find((value) => Screen === value.Alt)?.Alt || '';

  useEffect(() => {
    if (userProfileError) {
      setMainScreen('Error');
      setToast({
        Title: userProfileError.name,
        Description: userProfileError.message,
        Type: 'Error',
        Show: false,
      });
    }
  }, [userProfileError]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LazyMotion features={domAnimation} strict>
      {MainScreen === 'Error' && (
        <SetupErrorScreen
          Type={ErrorType}
          ClassName={MainClassName}
          ToastTitle={Toast.Title}
          ToastDescription={Toast.Description}
        />
      )}
      {MainScreen === 'CheckInfo' && (
        <SetupLoadingScreen ClassName={MainClassName} />
      )}
      {MainScreen === 'Setup' && (
        <main
          className={`${MainClassName} relative items-center justify-center h-full w-full flex flex-col md:flex-row box-border`}
        >
          <div className="p-14 ml-14 relative hidden md:flex w-full h-full justify-center items-center">
            {Screen !== null ? (
              <ImageFadeTransition
                height={370}
                width={370}
                src={ActiveImageSrc}
                alt={ActiveImageAlt}
              />
            ) : (
              <div className="h-[370px] w-[370px] flex" />
            )}
          </div>
          <div className="p-5 md:p-14 md:min-w-[415px] md-1000:min-w-[500px] space-y-5 relative w-full flex flex-col items-center justify-center box-border overflow-hidden">
            {children}
          </div>
        </main>
      )}
      {MainScreen === 'Finish' && (
        <SetupFinishScreen ClassName={MainClassName} />
      )}
      {Loading && <LoadingLinearProgress />}
      <SetupSkipDialog Open={SkipDialog} onClose={() => setSkipDialog(false)} />
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

export default SetupScreenMain;
