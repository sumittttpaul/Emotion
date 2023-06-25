import dynamic from 'next/dynamic';
import React, {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { UploadAvatar, DeleteAvatar } from '../../algorithms/AuthAlgorithms';
import { useReduxSelector } from '../../redux/useReduxSelector';
import { AvatarCustomButton } from './assets/AvatarCustomButton';
import { AvatarButtonDialogProps } from './AvatarButtonDialog';
import { AvatarContainerType, AvatarScreenType } from './assets/AvatarType';
import { useAuth } from '../../firebase/useAuth';
import { useQueryClient, useMutation } from 'react-query';
import {
  putUserProfile,
  getUserProfile,
} from '../../mongodb/helper/Helper.UserProfile';
import { IUserProfileDataUpdate } from '../../mongodb/schema/Schema.UserProfile';
import { url } from 'inspector';
import { UserProfileEncrytionKey } from '../../algorithms/security/CryptionKey';
import { EncryptData } from '../../algorithms/security/CryptionSecurity';

const AvatarButtonDialog = dynamic<AvatarButtonDialogProps>(
  () => import('./AvatarButtonDialog').then((x) => x.AvatarButtonDialog),
  { ssr: false }
);

export interface AvatarButtonProps {
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
}

/**
 * @author
 * @function @AvatarButton
 **/

export const AvatarButton: FC<AvatarButtonProps> = (props) => {
  const { FirebaseUser, FirebaseLoading } = useAuth();
  const queryClient = useQueryClient();
  const updateUserProfile = useMutation(
    (data: IUserProfileDataUpdate) => putUserProfile(FirebaseUser?.uid, data),
    {
      onSuccess: async () => {
        queryClient.prefetchQuery('user_profile', () =>
          getUserProfile(FirebaseUser?.uid)
        );
      },
    }
  );

  const userPhoto = FirebaseUser?.photoURL?.toString();
  // Handle Collections
  const { Avatar } = useReduxSelector((state) => state);
  // State
  const [AvatarDialog, setAvatarDialog] = useState(false);
  const [ChangeAvatar, setChangeAvatar] = useState(true);
  const [AvatarURL, setAvatarURL] = useState(
    FirebaseLoading
      ? '/images/loader/dark-circle.png'
      : userPhoto && ChangeAvatar
      ? userPhoto
      : '/images/default/user.png'
  );
  const [CropAvatarURL, setCropAvatarURL] = useState('');
  const [AvatarContainer, setAvatarContainer] = useState<AvatarContainerType>(
    'Remove-Avatar-Container'
  );
  const [Collection, setCollection] = useState(Avatar.Animal);
  const [Collectionheading, setCollectionHeading] = useState('');
  const [CollectionBackBool, setCollectionBackBool] = useState(false);
  const [AvatarScreen, setAvatarScreen] =
    useState<AvatarScreenType>('remove-avatar');
  const [RemoveDisabled, setRemoveDisabled] = useState(true);
  const [ChangeDisabled, setChangeDisabled] = useState(false);
  const [AvatarLoading, setAvatarLoading] = useState(false);
  const [UploadProgess, setUploadProgess] = useState('');

  // Handle Dialog
  const ShowAvatarDialog = () => {
    setAvatarDialog(true);
  };
  const HideAvatarDialog = () => {
    setAvatarDialog(false);
    setTimeout(() => {
      setAvatarContainer('Show-Avatar-Container');
      setAvatarScreen('show-avatar');
    }, 500);
  };

  // Avatar Screens
  const ShowAvatarScreen = () => {
    setAvatarContainer('Show-Avatar-Container');
    setAvatarScreen('show-avatar');
  };
  const RemoveAvatarScreen = () => {
    setAvatarContainer('Remove-Avatar-Container');
    setAvatarScreen('remove-avatar');
  };
  const SelectAvatarScreen = () => {
    setAvatarContainer('Select-And-Crop-Avatar-Container');
    setAvatarScreen('select-avatar');
  };
  const AvatarCollectionScreen = () => {
    setAvatarContainer('Select-And-Crop-Avatar-Container');
    setAvatarScreen('collection-for-avatar');
  };
  const CropAvatarScreen = () => {
    setAvatarContainer('Select-And-Crop-Avatar-Container');
    setAvatarScreen('crop-avatar');
  };
  const BackToShowAvatarScreenWithPhotoURLCondition = () => {
    if (!FirebaseUser?.photoURL) setAvatarURL('/images/default/user.png');
    setAvatarContainer('Show-Avatar-Container');
    setAvatarScreen('show-avatar');
  };

  // Handle Image
  const ChangeImageDisabled = (value: boolean) => {
    setChangeDisabled(value);
  };
  const RemoveImageDisabled = (value: boolean) => {
    setRemoveDisabled(value);
  };
  const GetImageURL = (value: string) => {
    ImageURLToCrop(value);
  };
  const GetServerImageURL = (value: string) => {
    setAvatarURL(value);
  };
  const GetCropImageURL = (value: string) => {
    setAvatarURL(value);
  };
  const ImageURLToCrop = (value: string) => {
    setCropAvatarURL(value);
  };
  const CollectionReducerName = (value: string) => {
    if (value === 'Animal') {
      setCollection(Avatar.Animal);
    }
    if (value === 'Emoji') {
      setCollection(Avatar.Emoji);
    }
    if (value === 'Festival') {
      setCollection(Avatar.Festival);
    }
    if (value === 'Handdrawing') {
      setCollection(Avatar.Handdrawing);
    }
    if (value === 'Flat') {
      setCollection(Avatar.Flat);
    }
    if (value === 'Hipster') {
      setCollection(Avatar.Hipster);
    }
    if (value === 'Paint') {
      setCollection(Avatar.Paint);
    }
    if (value === 'Minimal') {
      setCollection(Avatar.Minimal);
    }
    if (value === 'Plain') {
      setCollection(Avatar.Plain);
    }
  };
  const CollectionHeading = (value: string) => {
    setCollectionHeading(value);
  };
  const CollectionBool = (value: boolean) => {
    setCollectionBackBool(value);
  };

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

  // Avatar handle
  const AvatarUploadProgress = (value: string) => {
    setUploadProgess(value);
  };
  const AvatarClick = () => {
    ShowAvatarScreen();
    ShowAvatarDialog();
  };
  const UpdateDataBaseWithURL = (value: string) => {
    if (FirebaseUser) {
      try {
        const UserPhotoURL = EncryptData(
          UserProfileEncrytionKey(FirebaseUser.uid, 'PhotoURL'),
          value
        );
        const _data: IUserProfileDataUpdate = {
          '_data.photoURL': UserPhotoURL,
        };
        updateUserProfile.mutate(_data);
        GetServerImageURL(value);
        RemoveImageDisabled(false);
        ChangeImageDisabled(false);
        setAvatarLoading(false);
        // ShowToast(
        //   'Avatar updated successfully',
        //   'You profile picture has been updated for your account.',
        //   'Success',
        //   true
        // );
      } catch (error: any) {
        setAvatarLoading(false);
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
  const DeletePhotoURLFromDataBase = () => {
    if (FirebaseUser) {
      try {
        const _data: IUserProfileDataUpdate = {
          '_data.photoURL': '',
        };
        updateUserProfile.mutate(_data);
        setAvatarURL('/images/default/user.png');
        ChangeImageDisabled(false);
        RemoveImageDisabled(true);
        setAvatarLoading(false);
        // ShowToast(
        //   'Avatar deleted successfully',
        //   'You profile picture has been removed from your account.',
        //   'Success',
        //   true
        // );
      } catch (error: any) {
        setAvatarLoading(false);
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
  const AvatarSubmit = (value: File) => {
    if (value) {
      setChangeAvatar(false);
      RemoveImageDisabled(true);
      ChangeImageDisabled(true);
      ShowAvatarScreen();
      UploadAvatar({
        Progress: AvatarUploadProgress,
        File: value,
        UpdateDataBaseWithURL: UpdateDataBaseWithURL,
        Loading: setAvatarLoading,
        ShowToast: ShowToast,
      });
    }
  };
  const RemoveImageClick = () => {
    if (FirebaseUser)
      if (FirebaseUser.photoURL) {
        RemoveImageDisabled(true);
        ChangeImageDisabled(true);
        ShowAvatarScreen();
        DeleteAvatar({
          AvatarURL: FirebaseUser.photoURL,
          Loading: setAvatarLoading,
          ShowToast: ShowToast,
          DeletePhotoURLFromDataBase: DeletePhotoURLFromDataBase,
        });
      }
  };

  useEffect(() => {
    if (FirebaseUser) {
      if (FirebaseUser.photoURL && ChangeAvatar) {
        setAvatarURL(FirebaseUser.photoURL);
      }
    }
  }, [AvatarURL, ChangeAvatar, FirebaseUser]);

  return (
    <Fragment>
      <AvatarCustomButton onClick={AvatarClick} ImageURL={AvatarURL} />
      <AvatarButtonDialog
        AvatarURL={AvatarURL}
        AvatarDialog={AvatarDialog}
        setAvatarDialog={HideAvatarDialog}
        AvatarContainer={AvatarContainer}
        AvatarScreen={AvatarScreen}
        RemoveClick={RemoveImageClick}
        ChangeDisabled={ChangeDisabled}
        RemoveDisabled={
          RemoveDisabled && !FirebaseUser?.photoURL && ChangeAvatar
        }
        UploadLoadingScreen={AvatarLoading}
        UploadProgress={UploadProgess}
        MoveToRemoveAvatar={RemoveAvatarScreen}
        MoveToSelectAvatar={SelectAvatarScreen}
        MoveToCropAvatar={CropAvatarScreen}
        BackToShowAvatar={BackToShowAvatarScreenWithPhotoURLCondition}
        BackToSelectAvatar={SelectAvatarScreen}
        BackToAvatarCollection={
          CollectionBackBool === true
            ? SelectAvatarScreen
            : AvatarCollectionScreen
        }
        GetImageURL={GetImageURL}
        GetCropImageURL={GetCropImageURL}
        ImageURLToCrop={CropAvatarURL}
        CollectionShow={AvatarCollectionScreen}
        CollectionReducerName={CollectionReducerName}
        CollectionHeading={CollectionHeading}
        CollectionShowHeading={Collectionheading}
        CollectionReducer={Collection}
        CollectionBackBool={CollectionBool}
        AvatarSubmit={AvatarSubmit}
      />
    </Fragment>
  );
};
