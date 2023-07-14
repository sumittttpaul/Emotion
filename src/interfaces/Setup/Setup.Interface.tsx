'use client'

import SetupScreenMain from 'interfaces/Setup/Screen/Setup.Screen.Main';
import SetupScreenTitle from 'interfaces/Setup/Screen/Setup.Screen.Title';
import SetupScreenContent from 'interfaces/Setup/Screen/Setup.Screen.Content';
import { SetupPageHook } from 'hooks/target/Hooks.Page.Setup';

function SetupInterface() {
  const ResetCaptcha = SetupPageHook.getState().ResetCaptcha;
  const SkipDialog = SetupPageHook.getState().SkipDialog;
  const Loading = SetupPageHook.getState().Loading;
  const Screen = SetupPageHook.getState().Screen;
  const ErrorType = SetupPageHook.getState().ErrorType;
  const MainScreen = SetupPageHook.getState().MainScreen;

  const setResetCaptcha = async (value: boolean) => {
    SetupPageHook.setState({
      ResetCaptcha: value,
      SkipDialog: SkipDialog,
      Loading: Loading,
      Screen: Screen,
      ErrorType: ErrorType,
      MainScreen: MainScreen,
    });
  };
  const setSkipDialog = async (value: boolean) => {
    SetupPageHook.setState({
      ResetCaptcha: ResetCaptcha,
      SkipDialog: value,
      Loading: Loading,
      Screen: Screen,
      ErrorType: ErrorType,
      MainScreen: MainScreen,
    });
  };
  const setLoading = async (value: boolean) => {
    SetupPageHook.setState({
      ResetCaptcha: ResetCaptcha,
      SkipDialog: SkipDialog,
      Loading: value,
      Screen: Screen,
      ErrorType: ErrorType,
      MainScreen: MainScreen,
    });
  };
  const setScreen = (value: AuthScreenType) => {
    SetupPageHook.setState({
      // ResetCaptcha: ResetCaptcha,
      // SkipDialog: SkipDialog,
      // Loading: Loading,
      Screen: value,
      // ErrorType: ErrorType,
      // MainScreen: MainScreen,
    });
  };
  const setErrorType = async (value: AuthErrorType) => {
    SetupPageHook.setState({
      ResetCaptcha: ResetCaptcha,
      SkipDialog: SkipDialog,
      Loading: Loading,
      Screen: Screen,
      ErrorType: value,
      MainScreen: MainScreen,
    });
  };
  const setMainScreen = (value: AuthMainScreenType) => {
    SetupPageHook.setState({
      // ResetCaptcha: ResetCaptcha,
      // SkipDialog: SkipDialog,
      // Loading: Loading,
      // Screen: Screen,
      // ErrorType: ErrorType,
      MainScreen: value,
    });
  };

  const Animation = {
    Initial: { x: 50, opacity: 0 },
    Final: { x: 0, opacity: 1 },
    Transition: { type: 'tween' },
  };

  return (
    <SetupScreenMain
      MainClassName="h-full md:h-[652px]"
      MainScreen={MainScreen}
      ErrorType={ErrorType}
      Screen={Screen}
      setScreen={setScreen}
      SkipDialog={SkipDialog}
      setErrorType={setErrorType}
      setMainScreen={setMainScreen}
      setSkipDialog={setSkipDialog}
    >
      <SetupScreenTitle Screen={Screen} Loading={Loading} />
      <SetupScreenContent
        AnimationDivClassName="h-[350px]"
        ContentClassName="h-[300px]"
        Screen={Screen}
        Loading={Loading}
        setScreen={setScreen}
        setErrorType={setErrorType}
        ResetCaptcha={ResetCaptcha}
        setMainScreen={setMainScreen}
        setResetCaptcha={setResetCaptcha}
        setSkipDialog={setSkipDialog}
        setLoading={setLoading}
        Animation={Animation}
      />
    </SetupScreenMain>
  );
}

export default SetupInterface;
