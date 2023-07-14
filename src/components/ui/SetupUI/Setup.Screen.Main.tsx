import { ToastDarkProps } from 'components/toast/ToastDark';
import { SetupSkipDialogProps } from 'components/ui/SetupUI/Dialog/Setup.SkipDialog';
import { SetupErrorScreenProps } from 'components/ui/SetupUI/Screen/Setup.ErrorScreen';
import { SetupFinishScreenProps } from 'components/ui/SetupUI/Screen/Setup.FinishScreen';
import { LazyMotion, domAnimation } from 'framer-motion';
import { SetupImages } from 'contents/setup/Setup.Image';
import { ToastHook } from 'hooks/Hooks.Toast';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import SetupLoadingScreen from './Screen/Setup.LoadingScreen';
import CheckInfoHandler from 'functions/CheckInfoHandler';
import useClientAuth from 'authentication/useClientAuth';

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
  MainScreen: AuthMainScreenType;
  setMainScreen: Dispatch<AuthMainScreenType>;
  ErrorType: AuthErrorType;
  setErrorType: Dispatch<AuthErrorType>;
  Screen: AuthScreenType;
  setScreen: Dispatch<AuthScreenType>;
  SkipDialog: boolean;
  setSkipDialog: Dispatch<boolean>;
  Loading: boolean;
}

function SetupScreenMain({
  children,
  MainClassName,
  MainScreen,
  setMainScreen,
  ErrorType,
  setErrorType,
  Screen,
  setScreen,
  SkipDialog,
  setSkipDialog,
  Loading,
}: IProps) {
  const { FirebaseUser, FirebaseLoading, FirebaseError } = useClientAuth();
  const { Toast, setToast } = ToastHook();

  const ActiveImageSrc =
    SetupImages.find((value) => Screen === value.Alt)?.Image || '';
  const ActiveImageAlt =
    SetupImages.find((value) => Screen === value.Alt)?.Alt || '';

  const CheckInfoData = {
    FirebaseUser: FirebaseUser,
    FirebaseLoading: FirebaseLoading,
    FirebaseError: FirebaseError,
    setErrorType: setErrorType,
    setScreen: setScreen,
    setMainScreen: setMainScreen,
    setToast: setToast,
  };

  const SetCheckInfo = (Screen: ICheckInfoScreen) => {
    CheckInfoHandler({ ...CheckInfoData, Screen: Screen });
  };

  const ProceedLogin = () => {
    setMainScreen('Setup');
    setScreen('login-phone');
  };

  useEffect(() => {
    if (!FirebaseUser) ProceedLogin();
    else SetCheckInfo('initial-login-load');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
            {Screen && (
              <Image
                height={370}
                width={370}
                src={ActiveImageSrc}
                alt={ActiveImageAlt}
              />
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
