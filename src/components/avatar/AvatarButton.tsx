import dynamic from 'next/dynamic';
import React, {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { UploadAvatar, DeleteAvatar } from '../../algorithms/AuthAlgorithms';
import { useAuth } from '../../firebase/AuthProvider';
import { useReduxSelector } from '../../redux/useReduxSelector';
import { AvatarCustomButton } from './assets/AvatarCustomButton';
import { AvatarButtonDialogProps } from './AvatarButtonDialog';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';

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
  const FirebaseUser = useAuth();
  const FirebaseAuth = getAuth(firebase.app());
  const [user, loading] = useAuthState(FirebaseAuth);
  const userPhoto = user?.photoURL?.toString();
  // Handle Collections
  const { Avatar } = useReduxSelector((state) => state);
  // State
  const [AvatarDialog, setAvatarDialog] = useState(false);
  const [ChangeAvatar, setChangeAvatar] = useState(true);
  const [AvatarURL, setAvatarURL] = useState(
    loading
      ? '/images/loader/dark-circle.png'
      : userPhoto && ChangeAvatar
      ? userPhoto
      : '/images/default/user.png'
  );
  const [CropAvatarURL, setCropAvatarURL] = useState('');
  const [AvatarContainer, setAvatarContainer] = useState<
    'ShowAvatar-container' | 'SelectAvatar-container'
  >('ShowAvatar-container');
  const [Collection, setCollection] = useState(Avatar.Animal);
  const [Collectionheading, setCollectionHeading] = useState('');
  const [CollectionBackBool, setCollectionBackBool] = useState(false);
  const [AvatarScreen, setAvatarScreen] = useState<
    'show-avatar' | 'select-avatar' | 'collection-for-avatar' | 'crop-avatar'
  >('show-avatar');
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
      setAvatarContainer('ShowAvatar-container');
      setAvatarScreen('show-avatar');
    }, 200);
  };

  // Avatar Screens
  const ShowAvatarScreen = () => {
    setAvatarContainer('ShowAvatar-container');
    setAvatarScreen('show-avatar');
  };
  const SelectAvatarScreen = () => {
    setAvatarContainer('SelectAvatar-container');
    setAvatarScreen('select-avatar');
  };
  const AvatarCollectionScreen = () => {
    setAvatarContainer('SelectAvatar-container');
    setAvatarScreen('collection-for-avatar');
  };
  const CropAvatarScreen = () => {
    setAvatarContainer('SelectAvatar-container');
    setAvatarScreen('crop-avatar');
  };
  const BackToShowAvatarScreenWithPhotoURLCondition = () => {
    if (!FirebaseUser?.photoURL) setAvatarURL('/images/default/user.png');
    setAvatarContainer('ShowAvatar-container');
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
  const handleImageURL = (value: string) => {
    GetServerImageURL(value);
    RemoveImageDisabled(false);
    ChangeImageDisabled(false);
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
        getImageURL: handleImageURL,
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
        DeleteAvatar({
          AvatarURL: FirebaseUser.photoURL,
          Loading: setAvatarLoading,
          ShowToast: ShowToast,
          AfterDelete: () => {
            setAvatarURL('/images/default/user.png');
            ChangeImageDisabled(false);
            RemoveImageDisabled(true);
          },
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
        RemoveDisabled={RemoveDisabled && !user?.photoURL && ChangeAvatar}
        UploadLoadingScreen={AvatarLoading}
        UploadProgress={UploadProgess}
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
