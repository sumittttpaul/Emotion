import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { AuthAnimationType, AuthType } from '../AuthType';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { VerifyEmailAddress } from '../../../../algorithms/AuthAlgorithms';
import { CircularProgress } from '@mui/material';
import { GreenSuccessHint } from '../../../hint/GreenSuccessHint';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { m } from 'framer-motion';
import { useAuth } from '../../../../firebase/useAuth';
import { IUserProfileDataUpdate } from '../../../../mongodb/schema/Schema.UserProfile';
import { useQueryClient, useMutation } from 'react-query';
import {
  _userProfileEndURL as cacheKey,
  putUserProfile,
  getUserProfile,
} from '../../../../mongodb/helper/Helper.UserProfile';

export interface RegisterVerifyEmailAuthUIProps {
  ClassName?: string;
  Loading: boolean;
  Toast: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  Animation: AuthAnimationType;
  IsInformationAfterVerifyEmail: () => void;
}

/**
 * @author
 * @function @RegisterVerifyEmailAuthUI
 **/

export const RegisterVerifyEmailAuthUI: FC<RegisterVerifyEmailAuthUIProps> = (
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
        props.IsInformationAfterVerifyEmail();
      },
      onError: (error: any) => {
        props.setLoading(false);
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      },
    }
  );

  // State
  const [SubmitDisabled, setSubmitDisabled] = useState(false);

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

  // Handle
  const handleSubmitDisabled = () => {
    setSubmitDisabled(true);
  };

  // Database
  const UpdateDataBase = () => {
    if (FirebaseUser) {
      try {
        const _data: IUserProfileDataUpdate = {
          '_data.isVerified.emailAddress': FirebaseUser.emailVerified,
        };
        updateUserProfile.mutate(_data);
      } catch (error: any) {
        props.setLoading(false);
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
        console.error('User profile data not updated because ' + error.message);
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
  const VerifyEmailClick = () => {
    if (FirebaseUser?.emailVerified) {
      props.setLoading(true);
      UpdateDataBase();
    } else {
      VerifyEmailAddress({
        Loading: props.setLoading,
        ShowToast: ShowToast,
        Next: handleSubmitDisabled,
      });
    }
  };

  useEffect(() => {
    if (FirebaseUser?.emailVerified) {
      setSubmitDisabled(false);
    }
  }, [FirebaseUser?.emailVerified]);

  return (
    <m.div
      className="w-full relative"
      initial={props.Animation.Initial}
      animate={props.Animation.Final}
      transition={props.Animation.Transition}
    >
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        {!FirebaseUser?.emailVerified && (
          <h6 className="font-normal  tracking-wide text-left w-full text-white/75 text-sm">
            To verify your email address, click Verify. A verification email
            will be sent to the email address you provided. Click the link in
            the email to verify your address.
          </h6>
        )}
        {!FirebaseUser?.emailVerified && (
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will verify later"
              onClick={props.IsInformationAfterVerifyEmail}
            />
          </div>
        )}
        {FirebaseUser?.emailVerified && (
          <div className="flex justify-start">
            <GreenSuccessHint Label="Your email address has been verified successfully." />
          </div>
        )}
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          <CustomSubmitButton
            Loading={SubmitDisabled}
            Disabled={SubmitDisabled}
            onClick={VerifyEmailClick}
          >
            {FirebaseUser?.emailVerified ? 'Next' : 'Verify Email'}
          </CustomSubmitButton>
        </div>
      </div>
    </m.div>
  );
};

interface CustomSubmitButtonProps {
  Disabled: boolean;
  onClick: () => void;
  Loading: boolean;
  children: ReactNode;
}

const CustomSubmitButton: FC<CustomSubmitButtonProps> = (props) => {
  return (
    <AuthSubmitButton Disabled={props.Disabled} onClick={props.onClick}>
      {props.children}
      {props.Loading && (
        <div className="absolute w-full h-full rounded-lg flex items-center justify-center bg-[#104A82] text-white cursor-default">
          <CircularProgress className="text-white" size={20} />
        </div>
      )}
    </AuthSubmitButton>
  );
};
