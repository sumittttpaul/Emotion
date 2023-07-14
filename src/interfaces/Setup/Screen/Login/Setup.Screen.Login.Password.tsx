import Image from 'next/image';
import { m } from 'framer-motion';
import { useState } from 'react';
import { LoaderHook } from 'hooks/Hooks.Loader';
import { ToastHook } from 'hooks/Hooks.Toast';
import { userProfileHook } from 'hooks/Hooks.UserProfile';
import { SignInWithEmailAndPassword } from 'functions/AuthAlgorithms';
import SignInBackButton from 'components/button/Setup/SignInBackButton';
import SignInNextButton from 'components/button/Setup/SignInNextButton';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SetupIconPasswordTextField from 'interfaces/Setup/Input/Setup.Input.IconPassword';

export interface SetupLoginPasswordScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  setScreen: Dispatch<AuthScreenType>;
  setLoading: Dispatch<boolean>;
  Loading: boolean;
}

function SetupLoginPasswordScreen(props: SetupLoginPasswordScreenProps) {
  const [Password, setPassword] = useState('');
  const { EmailAddress } = userProfileHook();
  const { setLoader } = LoaderHook();
  const { setToast } = ToastHook();

  // Validation
  const passwordExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const ValidatePassword =
    passwordExpression.test(Password) && Password.length > 7;

  const EmptyPassword = () => {
    setPassword('');
  };

  // Screens
  const BackToEmailScreen = () => {
    props.setScreen('login-email');
  };
  const MoveToForgotPassword = () => {
    props.setScreen('login-forgot-password');
  };

  // Submit
  const PasswordSubmitClick = () => {
    if (ValidatePassword) {
      SignInWithEmailAndPassword({
        EmailAddress: EmailAddress,
        Password: Password,
        EmptyPasswordTextField: EmptyPassword,
        Loading: props.setLoading,
        BackToEmailScreen: BackToEmailScreen,
        LoadingScreen: (value) => setLoader(value),
        ShowToast: (Title, Description, Type, Show) =>
          setToast({
            Title: Title,
            Description: Description,
            Type: Type,
            Show: Show,
          }),
      });
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
        <div className="flex justify-center items-center w-full">
          <div className="flex space-x-2 items-center justify-center bg-white/5 py-1 pl-1 pr-3 rounded-full">
            <div className="min-h-[20px] min-w-[20px]">
              <Image
                height={20}
                width={20}
                src="/images/default/user.png"
                className="rounded-full"
                alt=""
              />
            </div>
            <p className="text-white text-[13px] font-[300]">{EmailAddress}</p>
          </div>
        </div>
        <SetupIconPasswordTextField
          Value={Password}
          setValue={setPassword}
          ValidateValue={ValidatePassword}
          HandleSubmit={PasswordSubmitClick}
          Loading={props.Loading}
        />
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="Forgot password ?"
              onClick={MoveToForgotPassword}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton Label="Back" onClick={BackToEmailScreen} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          <SetupSubmitButton
            Disabled={!ValidatePassword}
            onClick={PasswordSubmitClick}
          >
            Login
          </SetupSubmitButton>
        </div>
      </div>
    </m.div>
  );
}

export default SetupLoginPasswordScreen;
