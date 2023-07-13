'use client';

import SetupScreenMain from 'components/ui/SetupUI/Setup.Screen.Main';
import SetupScreenTitle from 'components/ui/SetupUI/Setup.Screen.Title';
import SetupScreenContent from 'components/ui/SetupUI/Setup.Screen.Content';
import { useState } from 'react';

function SetupScreen() {
  const [ResetCaptcha, setResetCaptcha] = useState(false);
  const [SkipDialog, setSkipDialog] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Screen, setScreen] = useState<AuthScreenType>(undefined);
  const [ErrorType, setErrorType] = useState<AuthErrorType>(undefined);
  const [MainScreen, setMainScreen] = useState<AuthMainScreenType>('CheckInfo'); // CheckInfo

  return (
    <SetupScreenMain
      MainClassName="h-full md:h-[652px]"
      MainScreen={MainScreen}
      ErrorType={ErrorType}
      Loading={Loading}
      Screen={Screen}
      setScreen={setScreen}
      SkipDialog={SkipDialog}
      setErrorType={setErrorType}
      setMainScreen={setMainScreen}
      setSkipDialog={setSkipDialog}
    >
      <SetupScreenTitle Screen={Screen} />
      <SetupScreenContent
        AnimationDivClassName="h-[350px]"
        ContentClassName="h-[300px]"
        Screen={Screen}
        setScreen={setScreen}
        setErrorType={setErrorType}
        ResetCaptcha={ResetCaptcha}
        setMainScreen={setMainScreen}
        setResetCaptcha={setResetCaptcha}
        setSkipDialog={setSkipDialog}
        setLoading={setLoading}
        Animation={{
          Initial: { x: 50, opacity: 0 },
          Final: { x: 0, opacity: 1 },
          Transition: { type: 'tween' },
        }}
      />
    </SetupScreenMain>
  );
}

export default SetupScreen;
