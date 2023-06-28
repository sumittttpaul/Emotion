import React, { Dispatch, FC, SetStateAction } from 'react';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { RegisterSkipAllButton } from '../../../button/Auth/RegisterSkipAllButton';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { UserProfileEncrytionKey } from '../../../../algorithms/security/CryptionKey';
import { EncryptData } from '../../../../algorithms/security/CryptionSecurity';
import { useAuth } from '../../../../firebase/useAuth';
import { RadioGroupDark } from '../../../radiogroup/RadioGroupDark';
import { AuthAnimationType, AuthType } from '../AuthType';
import { useQueryClient, useMutation } from 'react-query';
import {
  _userProfileEndURL as cacheKey,
  putUserProfile,
  getUserProfile,
} from '../../../../mongodb/helper/Helper.UserProfile';
import { IUserProfileDataUpdate } from '../../../../mongodb/schema/Schema.UserProfile';
import { m } from 'framer-motion';

export interface RegisterGenderAuthUIProps {
  ClassName?: string;
  Toast: boolean;
  setSkipDialog: Dispatch<SetStateAction<boolean>>;
  setFinish: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  Gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  Animation: AuthAnimationType;
}

/**
 * @author
 * @function @RegisterGenderAuthUI
 **/

export const RegisterGenderAuthUI: FC<RegisterGenderAuthUIProps> = (props) => {
  const { FirebaseUser } = useAuth();
  const queryClient = useQueryClient();
  const updateUserProfile = useMutation(
    (data: IUserProfileDataUpdate) => putUserProfile(FirebaseUser?.uid, data),
    {
      onSuccess: async () => {
        await queryClient.prefetchQuery([cacheKey, FirebaseUser?.uid], () =>
          getUserProfile(FirebaseUser?.uid)
        );
        props.setLoading(false);
        MoveToFinishScreen();
      },
      onError: (error: any) => {
        props.setLoading(false);
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      },
    }
  );

  // Toast
  const ShowToast = (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => {
    props.setToastSetting({
      Title: title,
      Description: description,
      Type: type,
    });
    props.setToast(show);
  };

  // Screens
  const MoveToFinishScreen = () => {
    props.setFinish(true);
  };

  // Database
  const updateUserData = () => {
    if (FirebaseUser) {
      try {
        const UserGender = EncryptData(
          UserProfileEncrytionKey(FirebaseUser.uid, 'Gender'),
          props.Gender
        );
        const _data: IUserProfileDataUpdate = {
          '_data.gender': UserGender,
        };
        updateUserProfile.mutate(_data);
      } catch (error: any) {
        props.setLoading(false);
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      }
    } else {
      ShowToast(
        'Something went wrong',
        'It seems like user is not exist.',
        'Error',
        true
      );
    }
  };

  const SkipClick = () => {
    props.setSkipDialog(true);
  };
  const BackToBirthday = () => {
    props.setAuthScreen('register-date-of-birth');
  };

  // Submit
  const SubmitClick = () => {
    props.setLoading(true);
    updateUserData();
  };

  return (
    <m.div
      className="w-full relative"
      initial={props.Animation.Initial}
      animate={props.Animation.Final}
      transition={props.Animation.Transition}
    >
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        <div className="w-full flex items-start pt-2">
          <RadioGroupDark
            theme="dark"
            content={['Male', 'Female', 'Others']}
            value={props.Gender}
            onChange={props.setGender}
          />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={MoveToFinishScreen}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton
              Label="Back"
              onClick={BackToBirthday}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <RegisterSkipAllButton onClick={SkipClick}>
            Skip all
          </RegisterSkipAllButton>
          <AuthSubmitButton
            Disabled={props.Gender === '' && props.Gender.length < 1}
            onClick={SubmitClick}
          >
            Next
          </AuthSubmitButton>
        </div>
      </div>
    </m.div>
  );
};
