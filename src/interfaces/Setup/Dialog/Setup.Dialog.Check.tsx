'use client';

/* eslint-disable @typescript-eslint/no-empty-function */
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@mui/material';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { LoaderHook } from 'hooks/Hooks.Loader';
import { AuthErrorMessage } from 'authentication/AuthErrorMessage';
import { _firebaseAuth, _firebaseStorage } from 'authentication/clientApp';
import { ToastHook } from 'hooks/Hooks.Toast';
import { Home_Link } from 'routers/RouterLinks';
import { EncryptData } from 'functions/security/CryptionSecurity';
import { UserProfileEncrytionKey } from 'functions/security/CryptionKey';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import useClientAuth from 'authentication/useClientAuth';
import OperateUserProfile from 'databases/controllers/Controller.UserProfile';
import TooltipDark from 'components/tooltip/TooltipDark';
import DialogContainerDark from 'components/dialog/DialogContainerDark';

const LoadingLinearProgress = dynamic(
  () => import('components/loader/Loading.LinearProgress')
);

function SetupCheckDialog(props: SetupCheckDialogProps) {
  const [Loading, setLoading] = useState(false);
  const { FirebaseUser } = useClientAuth();
  const { setLoader } = LoaderHook();
  const { setToast } = ToastHook();
  const router = useRouter();

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
          setLoader(true);
          setLoading(false);
          router.push(Home_Link);
        })
        .catch((error) => {
          setLoading(false);
          const message = AuthErrorMessage(error.code);
          setToast({
            Title: 'Something went wrong',
            Description: message
              ? message
              : 'There is an error from server side of authentication.',
            Type: 'Error',
            Show: true,
          });
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

  const handleUpdate = () => {
    if (FirebaseUser) {
      if (props.PrevPhotoUrl) {
        setLoading(true);
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
            OperateUserProfile('UPDATE', {
              uid: FirebaseUser.uid,
              update: _data,
            })
              .then(() => {
                setLoader(true);
                setLoading(false);
                router.push(Home_Link);
              })
              .catch((error: unknown) => {
                if (error instanceof Error) {
                  setLoading(false);
                  setToast({
                    Title: 'Something went wrong',
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
                Title: 'Something went wrong',
                Description: error.message,
                Type: 'Error',
                Show: true,
              });
            }
          }
        });
      } else {
        setToast({
          Title: 'Something went wrong',
          Description: 'It seems like profile photo is not there.',
          Type: 'Error',
          Show: true,
        });
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
      {Loading && <LoadingLinearProgress />}
    </DialogContainerDark>
  );
}

function CustomCheckData_String(props: {
  Label: string;
  PrevValue: string;
  NewValue: string;
  ToolTipPrevValue: string;
  ToolTipNewValue: string;
}) {
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
}

function CustomCheckData_Image(props: {
  Label: string;
  PrevValue: string;
  NewValue: string;
}) {
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
}

export default SetupCheckDialog;
