import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { RegisterSkipAllButton } from '../../../button/Auth/RegisterSkipAllButton';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { useAuth } from '../../../../firebase/useAuth';
import { DatePickerButton } from '../../../datepicker/DatePickerButton';
import { AuthAnimationType, AuthType } from '../AuthType';
import { EncryptData } from '../../../../algorithms/security/CryptionSecurity';
import { UserProfileEncrytionKey } from '../../../../algorithms/security/CryptionKey';
import { useQueryClient, useMutation } from 'react-query';
import {
  _userProfileEndURL as cacheKey,
  putUserProfile,
  getUserProfile,
} from '../../../../mongodb/helper/Helper.UserProfile';
import { IUserProfileDataUpdate } from '../../../../mongodb/schema/Schema.UserProfile';
import { m } from 'framer-motion';
import { CalculateAge } from '../../../../algorithms/UIAlgorithms';

export interface RegisterBirthdayAuthUIProps {
  ClassName?: string;
  Toast: boolean;
  setSkipDialog: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  DateOfBirth: string;
  setDateOfBirth: Dispatch<SetStateAction<string>>;
  Animation: AuthAnimationType;
  IsInformationAfterBirthday: () => void;
  IsInformationBeforeBirthday: () => void;
}

/**
 * @author
 * @function @RegisterBirthdayAuthUI
 **/

export const RegisterBirthdayAuthUI: FC<RegisterBirthdayAuthUIProps> = (
  props
) => {
  const { FirebaseUser } = useAuth();
  const queryClient = useQueryClient();
  const updateUserProfile = useMutation(
    (data: IUserProfileDataUpdate) => putUserProfile(FirebaseUser?.uid, data),
    {
      onSuccess: async () => {
        await queryClient.prefetchQuery([cacheKey, FirebaseUser?.uid], () =>
          getUserProfile(FirebaseUser?.uid)
        );
        props.IsInformationAfterBirthday();
      },
      onError: (error: any) => {
        props.setLoading(false);
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      },
    }
  );

  // State
  const [SubmitDisabled, setSubmitDisabled] = useState(true);

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

  // Database
  const updateUserData = () => {
    if (FirebaseUser) {
      try {
        const UserDOB = EncryptData(
          UserProfileEncrytionKey(FirebaseUser.uid, 'DateOfBirth'),
          props.DateOfBirth
        );
        const UserAge = EncryptData(
          UserProfileEncrytionKey(FirebaseUser.uid, 'Age'),
          CalculateAge(props.DateOfBirth).toString()
        );
        const _data: IUserProfileDataUpdate = {
          '_data.dateOfBirth': UserDOB,
          '_data.age': UserAge,
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
        <div className="w-full flex items-start justify-center pt-2">
          <DatePickerButton
            theme="dark"
            getDOB={props.setDateOfBirth}
            SubmitDisabled={SubmitDisabled}
            setSubmitDisabled={setSubmitDisabled}
          />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={props.IsInformationAfterBirthday}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton
              Label="Back"
              onClick={props.IsInformationBeforeBirthday}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <RegisterSkipAllButton onClick={SkipClick}>
            Skip all
          </RegisterSkipAllButton>
          <AuthSubmitButton Disabled={SubmitDisabled} onClick={SubmitClick}>
            Next
          </AuthSubmitButton>
        </div>
      </div>
    </m.div>
  );
};
