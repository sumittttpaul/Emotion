import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { RegisterSkipAllButton } from '../../../button/Auth/RegisterSkipAllButton';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { AuthTransitionContainer } from '../../../container/Auth/AuthTransitionContainer';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { useAuth } from '../../../../firebase/useAuth';
import { DatePickerButton } from '../../../datepicker/DatePickerButton';
import { AuthType } from '../AuthType';
import { EncryptData } from '../../../../algorithms/security/CryptionSecurity';
import { UserProfileEncrytionKey } from '../../../../algorithms/security/CryptionKey';
import { useQueryClient, useMutation } from 'react-query';
import {
  _userProfileEndURL as cacheKey,
  putUserProfile,
  getUserProfile,
} from '../../../../mongodb/helper/Helper.UserProfile';
import { IUserProfileDataUpdate } from '../../../../mongodb/schema/Schema.UserProfile';

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
        await queryClient
          .prefetchQuery(cacheKey, () => getUserProfile(FirebaseUser?.uid))
          .then(() => {
            props.IsInformationAfterBirthday();
          })
          .catch((error) => {
            props.setLoading(false);
            ShowToast(
              'Something went wrong',
              `${error.message}`,
              'Error',
              true
            );
          });
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
        const _data: IUserProfileDataUpdate = {
          '_data.dateOfBirth': UserDOB,
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
    updateUserData();
  };

  return (
    <AuthTransitionContainer>
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        <div className="w-full flex items-start justify-center pt-2">
          <DatePickerButton
            theme="dark"
            getDOB={props.setDateOfBirth}
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
    </AuthTransitionContainer>
  );
};
