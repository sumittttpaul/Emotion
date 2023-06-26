import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { AuthTransitionContainer } from '../../../container/Auth/AuthTransitionContainer';
import { AddFullName } from '../../../../algorithms/AuthAlgorithms';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { RegisterSkipAllButton } from '../../../button/Auth/RegisterSkipAllButton';
import IconTextFieldDark from '../../../textfield/IconTextFieldDark';
import { useAuth } from '../../../../firebase/useAuth';
import { AuthType } from '../AuthType';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { UserProfileEncrytionKey } from '../../../../algorithms/security/CryptionKey';
import { EncryptData } from '../../../../algorithms/security/CryptionSecurity';
import { useQueryClient, useMutation } from 'react-query';
import {
  _userProfileEndURL as cacheKey,
  putUserProfile,
  getUserProfile,
} from '../../../../mongodb/helper/Helper.UserProfile';
import { IUserProfileDataUpdate } from '../../../../mongodb/schema/Schema.UserProfile';

export interface RegisterNameAuthUIProps {
  ClassName?: string;
  Loading: boolean;
  Toast: boolean;
  setSkipDialog: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  FullName: string;
  setFullName: Dispatch<SetStateAction<string>>;
  IsInformationAfterName: () => void;
}

/**
 * @author
 * @function @RegisterNameAuthUI
 **/

export const RegisterNameAuthUI: FC<RegisterNameAuthUIProps> = (props) => {
  const { FirebaseUser } = useAuth();
  const queryClient = useQueryClient();
  const updateUserProfile = useMutation(
    (data: IUserProfileDataUpdate) => putUserProfile(FirebaseUser?.uid, data),
    {
      onSuccess: async () => {
        await queryClient
          .prefetchQuery(cacheKey, () => getUserProfile(FirebaseUser?.uid))
          .then(() => {
            props.IsInformationAfterName();
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

  // ID
  const FullNameID = 'FullName-TextField-Signup';

  // State
  const [FullNameError, setFullNameError] = useState(false);

  // Handle State
  const FullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setFullName(event.target.value);
  };

  // Key
  const FullNameKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (ValidateFullName) {
        FullNameSubmitClick();
      } else {
        InvalidFullName();
      }
    }
  };

  // Handle Blur
  const FullNameBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (ValidateFullName) {
      ValidFullName();
    } else {
      setFullNameError(true);
    }
  };

  // Validation
  const ValidFullName = () => {
    setFullNameError(false);
    HideToast();
  };
  const InvalidFullName = () => {
    setFullNameError(true);
    ShowToast('Field empty', 'Please enter your Fullname.', 'Error', true);
  };
  var ValidateFullName = props.FullName.length > 0;
  const FullNameSubmitDisabled: boolean =
    props.FullName.length < 1 || !ValidateFullName;

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
  const HideToast = () => {
    props.setToast(false);
  };

  const SkipClick = () => {
    props.setSkipDialog(true);
  };

  // Database
  const UpdateDataBase = () => {
    if (FirebaseUser) {
      try {
        const UserFullName = EncryptData(
          UserProfileEncrytionKey(FirebaseUser.uid, 'FullName'),
          props.FullName
        );
        const _data: IUserProfileDataUpdate = {
          '_data.fullName': UserFullName,
        };
        updateUserProfile.mutate(_data);
        props.IsInformationAfterName();
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

  // Submit
  const FullNameSubmitClick = () => {
    if (ValidateFullName) {
      AddFullName({
        FullName: props.FullName,
        Loading: props.setLoading,
        ShowToast: ShowToast,
        UpdateDataBase: UpdateDataBase,
      });
    } else {
      ShowToast(
        'FullName is empty',
        'Please enter a your full name.',
        'Error',
        true
      );
    }
  };

  return (
    <AuthTransitionContainer>
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        <IconTextFieldDark
          placeholder="Full Name"
          type="text"
          icon="/icons/user.svg"
          id={FullNameID}
          value={props.FullName}
          onChange={FullNameChange}
          onkeyUp={FullNameKeyUp}
          onBlur={FullNameBlur}
          readonly={props.Loading}
          error={FullNameError}
        />
        <div className="w-full flex justify-start">
          <SignInNextButton
            Label="I will add later"
            onClick={props.IsInformationAfterName}
          />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <RegisterSkipAllButton onClick={SkipClick}>
            Skip all
          </RegisterSkipAllButton>
          <AuthSubmitButton
            Disabled={FullNameSubmitDisabled}
            onClick={FullNameSubmitClick}
          >
            Next
          </AuthSubmitButton>
        </div>
      </div>
    </AuthTransitionContainer>
  );
};
