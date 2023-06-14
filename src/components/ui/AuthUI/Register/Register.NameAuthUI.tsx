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
import { useAuth } from '../../../../firebase/AuthProvider';
import { UpdateUserData } from '../../../../algorithms/AuthDB';
import { EncryptData } from '../../../../algorithms/security/CryptionSecurity';
import { NameEncrytionKey } from '../../../../algorithms/security/CryptionKey';
import { AuthType } from '../AuthType';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';

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
  IsInformationFilledAfterName: () => void;
}

/**
 * @author
 * @function @RegisterNameAuthUI
 **/

export const RegisterNameAuthUI: FC<RegisterNameAuthUIProps> = (props) => {
  const user = useAuth();

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

  // Databse
  const updateUserData = () => {
    if (user) {
      props.setLoading(true);
      const UserFullName = EncryptData(
        props.FullName,
        NameEncrytionKey(user.uid)
      );
      UpdateUserData(user.uid, {
        FullName: UserFullName,
      })
        .then(() => {
          // props.setLoading(false);
          props.IsInformationFilledAfterName();
        })
        .catch((error) => {
          props.setLoading(false);
          ShowToast('Something went wrong', `${error.message}`, 'Error', true);
          console.error(
            'User data not updates not created because ' + error.message
          );
        });
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
  const FullNameSubmitClick = () => {
    if (ValidateFullName) {
      AddFullName({
        FullName: props.FullName,
        Loading: props.setLoading,
        ShowToast: ShowToast,
        updateUserData: updateUserData,
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
            onClick={props.IsInformationFilledAfterName}
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
