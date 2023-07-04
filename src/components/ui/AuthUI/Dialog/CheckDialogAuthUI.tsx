import router from 'next/router';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useLoaderState } from '../../../../provider/LoadingState';
import { Button } from '@mui/material';
import { DialogContainerDark } from '../../../dialog/DialogContainerDark';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { TooltipDark } from '../../../tooltip/TooltipDark';
import Image from 'next/image';
import { AuthLoading } from '../../../loader/Auth/AuthLoading';
import { useQueryClient, useMutation } from 'react-query';
import { useAuth } from '../../../../firebase/useAuth';
import {
  putUserProfile,
  getUserProfile,
  _userProfileEndURL as cacheKey,
} from '../../../../mongodb/helper/Helper.UserProfile';
import { IUserProfileDataUpdate } from '../../../../mongodb/schema/Schema.UserProfile';
import {
  _firebaseAuth,
  _firebaseStorage,
} from '../../../../firebase/clientApp';
import { EncryptData } from '../../../../algorithms/security/CryptionSecurity';
import { UserProfileEncrytionKey } from '../../../../algorithms/security/CryptionKey';
import { Home_Link } from '../../../../routerLinks/RouterLinks';
import { AuthErrorMessage } from '../../../../firebase/AuthErrorMessage';

export interface CheckDialogAuthUIProps {
  Open: boolean;
  PrevFullName?: string;
  PrevPhotoUrl?: string;
  NewFullName?: string;
  NewPhotoUrl?: string;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
}

/**
 * @author
 * @function @CheckDialogAuthUI
 **/

export const CheckDialogAuthUI: FC<CheckDialogAuthUIProps> = (props) => {
  const { FirebaseUser } = useAuth();
  const queryClient = useQueryClient();
  const updateUserProfile = useMutation(
    (data: IUserProfileDataUpdate) => putUserProfile(FirebaseUser?.uid, data),
    {
      onSuccess: async () => {
        await queryClient.prefetchQuery([cacheKey, FirebaseUser?.uid], () =>
          getUserProfile(FirebaseUser?.uid)
        );
        LoadingScreen(true);
        setLoading(false);
        router.push(Home_Link);
      },
      onError: (error: any) => {
        setLoading(false);
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      },
    }
  );

  const [Loading, setLoading] = useState(false);

  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => setLoader({ show: value });

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

  const handleDontUpdate = () => {
    if (FirebaseUser) {
      setLoading(true);
      const UserFullName = props.PrevFullName ? props.PrevFullName : '';
      const UserPhotoUrl = props.PrevPhotoUrl ? props.PrevPhotoUrl : '';
      _firebaseAuth
        .updateProfile(FirebaseUser, {
          displayName: UserFullName,
          photoURL: UserPhotoUrl,
        })
        .then(() => {
          LoadingScreen(true);
          setLoading(false);
          router.push(Home_Link);
        })
        .catch((error: any) => {
          setLoading(false);
          const message = AuthErrorMessage(error.code);
          ShowToast('Something went wrong', `${message}`, 'Error', true);
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

  const handleUpdate = () => {
    if (FirebaseUser) {
      setLoading(true);
      if (props.PrevPhotoUrl) {
        const storage = _firebaseStorage.getStorage();
        const avatarRef = _firebaseStorage.ref(storage, props.PrevPhotoUrl);
        _firebaseStorage.deleteObject(avatarRef).then(() => {
          try {
            const UserPrevFullName = props.PrevFullName
              ? EncryptData(
                  UserProfileEncrytionKey(FirebaseUser.uid, 'FullName'),
                  props.PrevFullName
                )
              : '';
            const UserPrevPhotoUrl = props.PrevPhotoUrl
              ? EncryptData(
                  UserProfileEncrytionKey(FirebaseUser.uid, 'PhotoURL'),
                  props.PrevPhotoUrl
                )
              : '';
            const UserNewFullName = props.NewFullName
              ? EncryptData(
                  UserProfileEncrytionKey(FirebaseUser.uid, 'FullName'),
                  props.NewFullName
                )
              : undefined;
            const UserNewPhotoUrl = props.NewPhotoUrl
              ? EncryptData(
                  UserProfileEncrytionKey(FirebaseUser.uid, 'PhotoURL'),
                  props.NewPhotoUrl
                )
              : undefined;
            const _data: IUserProfileDataUpdate = {
              '_data.fullName': UserNewFullName
                ? UserNewFullName
                : UserPrevFullName,
              '_data.photoURL': UserNewPhotoUrl
                ? UserNewPhotoUrl
                : UserPrevPhotoUrl,
            };
            updateUserProfile.mutate(_data);
          } catch (error: any) {
            setLoading(false);
            ShowToast(
              'Something went wrong',
              `${error.message}`,
              'Error',
              true
            );
          }
        });
      } else {
        ShowToast(
          'Something went wrong',
          'It seems like profile photo is not there.',
          'Error',
          true
        );
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

  return (
    <DialogContainerDark
      show={props.Open}
      onClose={() => {}}
      disableClickAwayClose
    >
      <div className="p-5 max-w-[500px] w-full h-full relative space-y-4 flex flex-col items-center justify-center overflow-hidden">
        <h5 className="text-white pt-2 text-xl truncate tracking-wide font-bold flex">
          Want to update ?
        </h5>
        <h6 className="text-white/75 px-5 text-sm text-justify font-normal flex w-full">
          It appears that the latest information you&apos;ve provided does not
          align with the previously recorded data. Do you prefer to proceed with
          the most recent updates or maintain the continuity of the existing
          information ?
        </h6>
        <h6 className="text-white/75 px-5 text-sm text-left font-normal flex w-full">
          Here is how your data will appear after the updates :
        </h6>
        {props.PrevPhotoUrl && props.NewPhotoUrl && (
          <CustomCheckData_Image
            Label="Profile Picture"
            PrevValue={props.PrevPhotoUrl}
            NewValue={props.NewPhotoUrl}
          />
        )}
        {props.PrevFullName && props.NewFullName && (
          <CustomCheckData_String
            Label="Full Name"
            PrevValue={props.PrevFullName}
            NewValue={props.NewFullName}
            ToolTipPrevValue="Full name that you provided previously"
            ToolTipNewValue="Full name that you provided newly"
          />
        )}
        <div className="flex w-full space-x-2 pt-10">
          <div className="flex h-10 w-full">
            <Button
              disableFocusRipple
              onClick={handleDontUpdate}
              className="text-sm w-full truncate text-red-400 bg-transparent hover:bg-white/5 rounded-lg px-7 py-2 font-medium cursor-default tracking-wide button-text-lower transition-all"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: '#ffffff80 !important',
                },
              }}
            >
              Don&apos;t Update
            </Button>
          </div>
          <div className="flex h-10 w-full">
            <Button
              disableFocusRipple
              onClick={handleUpdate}
              className="text-sm w-full truncate text-sky-400 bg-dark-blue hover:bg-dark-blue/70 rounded-lg px-7 py-2 font-medium cursor-default tracking-wide button-text-lower transition-all"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: '#38bdf880 !important',
                },
              }}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
      {Loading && <AuthLoading />}
    </DialogContainerDark>
  );
};

const CustomCheckData_String = (props: {
  Label: string;
  PrevValue: string;
  NewValue: string;
  ToolTipPrevValue: string;
  ToolTipNewValue: string;
}) => {
  return (
    <div className="px-5 flex flex-col w-full space-y-2 cursor-default">
      <div className="text-white w-full text-left text-sm">{props.Label} :</div>
      <div className="w-full flex relative space-x-3">
        <TooltipDark arrow placement="top" title={props.ToolTipPrevValue}>
          <div className="text-white/75 text-[15px] truncate font-normal w-full px-3 py-2 bg-white/10 rounded-lg">
            {props.PrevValue}
          </div>
        </TooltipDark>
        <div className="flex items-center justify-center">
          <ArrowRightIcon className="text-white h-4 " />
        </div>
        <TooltipDark arrow placement="top" title={props.ToolTipNewValue}>
          <div className="text-white text-[15px] truncate font-normal w-full px-3 py-2 bg-green-600/30 rounded-lg">
            {props.NewValue}
          </div>
        </TooltipDark>
      </div>
    </div>
  );
};

const CustomCheckData_Image = (props: {
  Label: string;
  PrevValue: string;
  NewValue: string;
}) => {
  return (
    <div className="px-5 flex flex-col w-full space-y-2 cursor-default">
      <div className="text-white w-full text-left text-sm">{props.Label} :</div>
      <div className="w-full flex relative space-x-3 justify-center">
        <TooltipDark
          arrow
          placement="top"
          title="Image that you provided previously"
        >
          <Image
            height={100}
            width={100}
            src={props.PrevValue}
            alt="previous image"
            className="text-white text-xs rounded-full opacity-75"
          />
        </TooltipDark>
        <div className="flex items-center justify-center">
          <ArrowRightIcon className="text-white h-4" />
        </div>
        <TooltipDark
          arrow
          placement="top"
          title="Image that you provided newly"
        >
          <Image
            height={100}
            width={100}
            src={props.NewValue}
            alt="new image"
            className="text-white text-xs rounded-full"
          />
        </TooltipDark>
      </div>
    </div>
  );
};
