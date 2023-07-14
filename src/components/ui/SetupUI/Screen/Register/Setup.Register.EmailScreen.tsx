import { m } from 'framer-motion';
import { userProfileHook } from 'hooks/Hooks.UserProfile';
import { ToastHook } from 'hooks/Hooks.Toast';
import { EncryptData } from 'functions/security/CryptionSecurity';
import { UserProfileEncrytionKey } from 'functions/security/CryptionKey';
import SetupSkipAllButton from 'components/button/Setup/RegisterSkipAllButton';
import SignInNextButton from 'components/button/Setup/SignInNextButton';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import useClientAuth from 'authentication/useClientAuth';
import SetupIconTextField from '../../Input/Setup.IconTextField';
import OperateUserProfile from 'databases/controller/Controller.UserProfile';
import SignInBackButton from 'components/button/Setup/SignInBackButton';

export interface SetupRegisterEmailScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setSkipDialog: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
  Loading: boolean;
}

function SetupRegisterEmailScreen(props: SetupRegisterEmailScreenProps) {
  const { FirebaseUser } = useClientAuth();
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
    props.setScreen('register-password');
  };
  const BackToPhone = () => {
    props.setScreen('register-phone');
  };

  // database
  const Updatedatabase = () => {
    if (FirebaseUser) {
      const UserEmailAddress = EncryptData(
        UserProfileEncrytionKey(FirebaseUser.uid, 'EmailAddress'),
        EmailAddress
      );
      const _data: IUserProfileDataUpdate = {
        '_data.emailAddress': UserEmailAddress,
      };
      OperateUserProfile('UPDATE', { uid: FirebaseUser.uid, update: _data })
        .then(() => {
          props.setLoading(false);
          MoveToPasswordScreen();
        })
        .catch((error) => {
          if (error instanceof Error) {
            props.setLoading(false);
            setToast({
              Title: error.name,
              Description: error.message,
              Type: 'Error',
              Show: true,
            });
          }
        });
    } else {
      setToast({
        Title: 'Something went wrong',
        Description: 'It seems like user is not exist.',
        Type: 'Error',
        Show: true,
      });
    }
  };

  // Submit
  const EmailSubmitClick = () => {
    if (ValidateEmailAddress) {
      if (FirebaseUser) {
        props.setLoading(true);
        Updatedatabase();
      }
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
          Loading={props.Loading}
        />
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={props.CheckInfoHandler}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton Label="Back" onClick={BackToPhone} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <SetupSkipAllButton onClick={() => props.setSkipDialog(true)}>
            Skip all
          </SetupSkipAllButton>
          <SetupSubmitButton
            Disabled={!ValidateEmailAddress}
            onClick={EmailSubmitClick}
          >
            Next
          </SetupSubmitButton>
        </div>
      </div>
    </m.div>
  );
}

export default SetupRegisterEmailScreen;
