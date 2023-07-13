'use client';

import { m } from 'framer-motion';
import { SetupHook, userProfileHook } from 'hooks/Hooks.Setup';
import { ToastHook } from 'hooks/Hooks.Toast';
import { EncryptData } from 'functions/security/CryptionSecurity';
import { UserProfileEncrytionKey } from 'functions/security/CryptionKey';
import SignInBackButton from 'components/button/Setup/SignInBackButton';
import SignInNextButton from 'components/button/Setup/SignInNextButton';
import RadioGroupDark from 'components/radiogroup/RadioGroupDark';
import useClientAuth from 'authentication/useClientAuth';
import OperateUserProfile from 'databases/controller/Controller.UserProfile';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SetupSkipAllButton from 'components/button/Setup/RegisterSkipAllButton';

export interface SetupRegisterGenderScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
}

function SetupRegisterGenderScreen(props: SetupRegisterGenderScreenProps) {
  const { Gender, setGender } = userProfileHook();
  const { setScreen, setSkipDialog, setLoading } = SetupHook();
  const { setToast } = ToastHook();
  const { FirebaseUser } = useClientAuth();

  // Validation
  const ValidateGender = Gender === '' && Gender.length < 1;

  // database
  const updateUserData = () => {
    if (FirebaseUser) {
      try {
        const UserGender = EncryptData(
          UserProfileEncrytionKey(FirebaseUser.uid, 'Gender'),
          Gender
        );
        const _data: IUserProfileDataUpdate = {
          '_data.gender': UserGender,
        };
        OperateUserProfile('UPDATE', { uid: FirebaseUser.uid, update: _data })
          .then(() => {
            props.CheckInfoHandler();
          })
          .catch((error) => {
            if (error instanceof Error) {
              setLoading(false);
              setToast({
                Title: error.name,
                Description: error.message,
                Type: 'Error',
                Show: true,
              });
            }
          });
      } catch (error: unknown) {
        if (error instanceof Error) {
          setLoading(false);
          setToast({
            Title: error.name,
            Description: error.message,
            Type: 'Error',
            Show: true,
          });
        }
      }
    } else {
      setToast({
        Title: 'Something went wrong',
        Description: 'It seems like user is not exist.',
        Type: 'Error',
        Show: true,
      });
    }
  };

  const BackToBirthday = () => {
    setScreen('register-date-of-birth');
  };

  // Submit
  const SubmitClick = () => {
    setLoading(true);
    updateUserData();
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
        <div className="w-full flex items-start pt-2">
          <RadioGroupDark
            content={['Male', 'Female', 'Others']}
            value={Gender}
            onChange={(value) => (value ? setGender(value as string) : '')}
          />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={props.CheckInfoHandler}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton Label="Back" onClick={BackToBirthday} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <SetupSkipAllButton onClick={() => setSkipDialog(true)}>
            Skip all
          </SetupSkipAllButton>
          <SetupSubmitButton Disabled={ValidateGender} onClick={SubmitClick}>
            Next
          </SetupSubmitButton>
        </div>
      </div>
    </m.div>
  );
}

export default SetupRegisterGenderScreen;
