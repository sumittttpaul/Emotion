import Image from 'next/image';
import { m } from 'framer-motion';
import { useState } from 'react';
import { ToastHook } from 'hooks/Hooks.Toast';
import { userProfileHook } from 'hooks/Hooks.UserProfile';
import SignInBackButton from 'components/button/Setup/SignInBackButton';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import TooltipDark from 'components/tooltip/TooltipDark';
import { InformationCircleIcon } from '@heroicons/react/outline';
import YellowBulbHint from 'components/hint/YellowBulbHint';
import { LinkWithEmailAndPassword } from 'functions/AuthAlgorithms';
import SetupIconPasswordTextField from '../../Input/Setup.Input.IconPassword';

export interface SetupRegisterPasswordScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setLoading: Dispatch<boolean>;
  Loading: boolean;
}

function SetupRegisterPasswordScreen(props: SetupRegisterPasswordScreenProps) {
  const [Password, setPassword] = useState('');
  const { EmailAddress } = userProfileHook();
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
  const BackToEmailAddressScreen = () => {
    props.setScreen('register-email');
  };

  // Submit
  const PasswordSubmitClick = () => {
    if (ValidatePassword) {
      LinkWithEmailAndPassword({
        EmailAddress: EmailAddress,
        Password: Password,
        Loading: props.setLoading,
        EmptyPasswordTextField: EmptyPassword,
        BackToEmailScreen: BackToEmailAddressScreen,
        Next: props.CheckInfoHandler,
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
        <div className="opacity-75 flex space-x-2 w-full">
          <TooltipDark
            arrow
            placement="top"
            title="Use a variety of characters, including uppercase and lowercase letters, numbers, and symbols. Make your password at least 8 characters long. Avoid using common words or phrases. Don't use personal information that can be easily guessed, such as your name, birthday, or address. Don't use the same password for multiple accounts."
          >
            <InformationCircleIcon className="h-5 text-white" />
          </TooltipDark>
          <p className="font-normal text-left w-full text-white text-sm">
            Your password should contain at least 8 or more characters with a
            mix of letters of uppercase and lowercase, numbers & symbols.
          </p>
        </div>
        <div className="flex justify-start w-full">
          <YellowBulbHint
            Tooltip
            TooltipPlacement="top"
            ToottipTitle="Some security-sensitive actions, such as creating password and link email-password authentication to your account, require that you have recently logged in. If you have not logged in recently, you will be prompted to do so before you can continue."
            Label="Requires recent login / authentication"
          />
        </div>
        <div className="w-full flex justify-start">
          <SignInBackButton Label="Back" onClick={BackToEmailAddressScreen} />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          <SetupSubmitButton
            Disabled={!ValidatePassword}
            onClick={PasswordSubmitClick}
          >
            Next
          </SetupSubmitButton>
        </div>
      </div>
    </m.div>
  );
}

export default SetupRegisterPasswordScreen;
