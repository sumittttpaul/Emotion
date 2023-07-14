'use client';

import SetupScreenMain from 'interfaces/Setup/Screen/Setup.Screen.Main';
import SetupScreenTitle from 'interfaces/Setup/Screen/Setup.Screen.Title';
import SetupScreenContent from 'interfaces/Setup/Screen/Setup.Screen.Content';
import { useState } from 'react';

function SetupInterface() {
  const [ResetCaptcha, setResetCaptcha] = useState(false);
  const [SkipDialog, setSkipDialog] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Screen, setScreen] = useState<AuthScreenType>(undefined);
  const [ErrorType, setErrorType] = useState<AuthErrorType>(undefined);
  const [MainScreen, setMainScreen] = useState<AuthMainScreenType>('CheckInfo'); // CheckInfo

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
