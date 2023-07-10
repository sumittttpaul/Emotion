'use client';

import { m } from 'framer-motion';
import { SetupHook } from 'hooks/Hooks.Setup';
import { SetupSkipAllButton } from 'components/button/Setup/RegisterSkipAllButton';
import { SetupSubmitButton } from 'components/button/Setup/SetupSubmitButton';
import { SignInBackButton } from 'components/button/Setup/SignInBackButton';
import { SignInNextButton } from 'components/button/Setup/SignInNextButton';
import AvatarButton from 'components/avatar/AvatarButton';

export interface SetupRegisterProfilePictureScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
}

function SetupRegisterProfilePictureScreen(
  props: SetupRegisterProfilePictureScreenProps
) {
  const { setScreen, setSkipDialog } = SetupHook();

  // Screen
  const BackToEmail = () => {
    setScreen('register-email');
  };
  const MoveToBirthday = () => {
    setScreen('register-date-of-birth');
  };

  return (
    <m.div
      className={`${props.AnimationDivClassName} w-full relative`}
      initial={props.Animation.Initial}
      animate={props.Animation.Final}
      transition={props.Animation.Transition}
    >
      <div
        className={`${props.ContentClassName} w-full flex flex-col space-y-4`}
      >
        <div className="w-full flex items-start justify-center pt-2">
          <AvatarButton />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={props.CheckInfoHandler}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton Label="Back" onClick={BackToEmail} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <SetupSkipAllButton onClick={() => setSkipDialog(true)}>
            Skip all
          </SetupSkipAllButton>
          <SetupSubmitButton Disabled={false} onClick={MoveToBirthday}>
            Next
          </SetupSubmitButton>
        </div>
      </div>
    </m.div>
  );
}

export default SetupRegisterProfilePictureScreen;
