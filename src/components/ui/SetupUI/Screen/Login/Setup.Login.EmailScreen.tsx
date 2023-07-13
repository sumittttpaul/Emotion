'use client';

import { m } from 'framer-motion';
import { ToastHook } from 'hooks/Hooks.Toast';
import { userProfileHook } from 'hooks/Hooks.UserProfile';
import SignInNextButton from 'components/button/Setup/SignInNextButton';
import SetupFooter from 'components/footer/SetupFooter';
import YellowBulbHint from 'components/hint/YellowBulbHint';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SetupIconTextField from 'components/ui/SetupUI/Input/Setup.IconTextField';

export interface SetupLoginEmailScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  setScreen: Dispatch<AuthScreenType>;
}

function SetupLoginEmailScreen(props: SetupLoginEmailScreenProps) {
  const { EmailAddress, setEmailAddress } = userProfileHook();
  const { setToast } = ToastHook();

  // Validation
  const emailExpression =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const ValidateEmailAddress =
    (EmailAddress.toLowerCase().match(emailExpression) &&
      EmailAddress.length > 1) ||
    false;

  // Screens
  const MoveToPasswordScreen = () => {
    props.setScreen('login-password');
  };
  const BackToSignInWithPhoneNumber = () => {
    props.setScreen('login-phone');
  };
  const MoveToOtherSignInOptions = () => {
    props.setScreen('login-others');
  };

  // Submit
  const EmailSubmitClick = () => {
    if (ValidateEmailAddress) {
      MoveToPasswordScreen();
    } else {
      setToast({
        Title: 'Incorrect email',
        Description: 'Please enter a valid email address.',
        Type: 'Error',
        Show: true,
      });
    }
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
        <SetupIconTextField
          Type="Email"
          Value={EmailAddress}
          setValue={setEmailAddress}
          HandleSubmit={EmailSubmitClick}
          ValidateValue={ValidateEmailAddress}
        />
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="Sign in with phone number"
              onClick={BackToSignInWithPhoneNumber}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="Sign-in options"
              onClick={MoveToOtherSignInOptions}
            />
          </div>
        </div>
        <div className="flex justify-start">
          <YellowBulbHint
            Tooltip
            TooltipPlacement="top"
            ToottipTitle="
            When it comes to signing in, it is important to note that the option to sign in with an email address is exclusively available for existing users, meaning that individuals who have previously created an account on the Emotion platform can utilize this method as their primary or secondary means of authentication."
            Label="Sign-in with email address only works for existing user."
          />
        </div>
        <SetupFooter ButtonLabel="Next" />
      </div>
      <div className="flex w-full justify-end">
        <SetupSubmitButton
          Disabled={!ValidateEmailAddress}
          onClick={EmailSubmitClick}
        >
          Next
        </SetupSubmitButton>
      </div>
    </m.div>
  );
}

export default SetupLoginEmailScreen;
