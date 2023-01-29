import dynamic from 'next/dynamic';
import React, { FC, useEffect, useState } from 'react';
import {
  UploadAvatar,
  DeleteAvatar,
} from '../../../../../algorithms/AuthAlgorithms';
import { useAuth } from '../../../../../firebase/AuthProvider';
import { IAvatarIconReducerState } from '../../../../../redux/reducers/AvatarReducer';
import { useTypedSelector } from '../../../../../redux/useTypeSelector';
import { AvatarCircularButton } from '../../../../button/AvatarCircularButton';
import { ToastDark } from '../../../../toast/ToastDark';
import { AvatarDialogUIProps } from '../AvatarUI/AvatarDialogUI';
// import { AvatarDialogUI } from '../AvatarUI/AvatarDialogUI';

const AvatarDialogUI = dynamic<AvatarDialogUIProps>(
  () => import('../AvatarUI/AvatarDialogUI').then((x) => x.AvatarDialogUI),
  { ssr: true }
);

export interface AvatarButtonProps {}

/**
 * @author
 * @function @AvatarButton
 **/

export const AvatarButton: FC<AvatarButtonProps> = (props) => {
  const user = useAuth();
  const userPhoto = user?.photoURL?.toString();
  // Handle Collections
  const { Avatar } = useTypedSelector((state) => state);
  // State
  const [AvatarDialog, setAvatarDialog] = useState(false);
  const [ChangeAvatar, setChangeAvatar] = useState(true);
  const [AvatarURL, setAvatarURL] = useState(
    userPhoto && ChangeAvatar ? userPhoto : '/images/user.png'
  );
  const [CropAvatarURL, setCropAvatarURL] = useState('');
  const [AvatarContainer, setAvatarContainer] = useState(
    'ShowAvatar-container'
  );
  const [Collection, setCollection] = useState<IAvatarIconReducerState[]>(
    Avatar.Animal
  );
  const [Collectionheading, setCollectionHeading] = useState('');
  const [CollectionBackBool, setCollectionBackBool] = useState(false);
  const [AvatarScreen1, setAvatarScreen1] = useState(false);
  const [AvatarScreen2, setAvatarScreen2] = useState(false);
  const [RemoveDisabled, setRemoveDisabled] = useState(true);
  const [ChangeDisabled, setChangeDisabled] = useState(false);
  const [Toast, setToast] = useState(false);
  const [ToastMessage, setToastMessage] = useState('');
  const [ToastType, setToastType] = useState('');
  const [AvatarLoading, setAvatarLoading] = useState(false);
  const [UploadProgess, setUploadProgess] = useState('');

  // Handle Dialog
  const AvatarLoadingState = (value: boolean) => {
    setAvatarLoading(value);
  };
  const ShowAvatarDialog = () => {
    setAvatarDialog(true);
  };
  const HideAvatarDialog = () => {
    setAvatarDialog(false);
    setTimeout(() => {
      setAvatarContainer('ShowAvatar-container');
      setAvatarScreen1(false);
      setAvatarScreen2(false);
    }, 200);
  };
  const HideAvatarDialogDefault = () => {
    setAvatarDialog(false);
  };

  // Avatar Screens
  const ShowAvatarScreen = () => {
    setTimeout(() => {
      setAvatarContainer('ShowAvatar-container');
      setAvatarScreen1(false);
      setAvatarScreen2(false);
    }, 200);
  };
  const SelectAvatarScreen = () => {
    setTimeout(() => {
      setAvatarContainer('SelectAvatar-container');
      setAvatarScreen1(true);
      setAvatarScreen2(false);
    }, 200);
  };
  const AvatarCollectionScreen = () => {
    setTimeout(() => {
      setAvatarContainer('SelectAvatar-container');
      setAvatarScreen1(false);
      setAvatarScreen2(true);
    }, 200);
  };
  const CropAvatarScreen = () => {
    setTimeout(() => {
      setAvatarContainer('SelectAvatar-container');
      setAvatarScreen1(true);
      setAvatarScreen2(true);
    }, 200);
  };
  const BackToShowAvatarScreen = () => {
    setAvatarContainer('ShowAvatar-container');
    setAvatarScreen1(false);
    setAvatarScreen2(false);
  };
  const BackToShowAvatarScreenWithDefaultAvatar = () => {
    setAvatarURL('/images/user.png');
    setAvatarContainer('ShowAvatar-container');
    setAvatarScreen1(false);
    setAvatarScreen2(false);
  };
  const BackToSelectAvatarScreen = () => {
    setAvatarContainer('SelectAvatar-container');
    setAvatarScreen1(true);
    setAvatarScreen2(false);
  };
  const BackToAvatarCollectionScreen = () => {
    if (CollectionBackBool === true) {
      setAvatarContainer('SelectAvatar-container');
      setAvatarScreen1(true);
      setAvatarScreen2(false);
    } else {
      setAvatarContainer('SelectAvatar-container');
      setAvatarScreen1(false);
      setAvatarScreen2(true);
    }
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
  const AuthToastMessage = (value: string) => {
    setToastMessage(value);
  };
  const AuthToastType = (value: string) => {
    setToastType(value);
  };
  const AuthToast = (value: boolean) => {
    setToast(value);
  };
  const ShowToast = (message: string, type: string, show: boolean) => {
    setToastMessage(message);
    setToastType(type);
    setToast(show);
  };
  const HideToast = () => {
    setToast(false);
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
    setTimeout(() => {
      HideAvatarDialogDefault();
    }, 2500);
  };
  const AvatarSubmit = (value: File) => {
    if (value) {
      setChangeAvatar(false);
      RemoveImageDisabled(true);
      ChangeImageDisabled(true);
      setTimeout(() => {
        BackToShowAvatarScreen();
        UploadAvatar({
          Progress: AvatarUploadProgress,
          File: value,
          getImageURL: handleImageURL,
          Loading: AvatarLoadingState,
          ToastMessage: AuthToastMessage,
          ToastShow: AuthToast,
          ToastType: AuthToastType,
        });
        ShowToast(ToastMessage, ToastType, Toast);
      }, 100);
    }
  };
  const RemoveImageClick = () => {
    if (user?.photoURL) {
      setTimeout(() => {
        RemoveImageDisabled(true);
        ChangeImageDisabled(true);
        DeleteAvatar({
          AvatarURL: `${user?.photoURL}`,
          Loading: AvatarLoadingState,
          ToastMessage: AuthToastMessage,
          ToastShow: AuthToast,
          ToastType: AuthToastType,
          AfterDelete: () => {
            setAvatarURL('/images/user.png');
            ChangeImageDisabled(false);
            RemoveImageDisabled(true);
          },
        });
        ShowToast(ToastMessage, ToastType, Toast);
      }, 200);
    }
  };

  useEffect(() => {
    if (user) {
      if (user.photoURL && ChangeAvatar) {
        setAvatarURL(user.photoURL);
      }
    }
  }, [AvatarURL, ChangeAvatar, user]);

  return (
    <>
      <AvatarCircularButton onClick={AvatarClick} ImageURL={AvatarURL} />
      <AvatarDialogUI
        AvatarURL={AvatarURL}
        AvatarDialog={AvatarDialog}
        setAvatarDialog={HideAvatarDialog}
        AvatarContainer={AvatarContainer}
        AvatarScreen1={AvatarScreen1}
        AvatarScreen2={AvatarScreen2}
        RemoveClick={RemoveImageClick}
        ChangeDisabled={ChangeDisabled}
        RemoveDisabled={RemoveDisabled}
        UploadLoadingScreen={AvatarLoading}
        UploadProgress={UploadProgess}
        MoveToSelectAvatar={SelectAvatarScreen}
        MoveToCropAvatar={CropAvatarScreen}
        BackToShowAvatar={BackToShowAvatarScreenWithDefaultAvatar}
        BackToSelectAvatar={BackToSelectAvatarScreen}
        BackToAvatarCollection={BackToAvatarCollectionScreen}
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
      <ToastDark
        message={ToastMessage}
        open={Toast}
        close={HideToast}
        type={ToastType}
        autoHideDuration={6000}
        slideDirection="down"
        positionVertical="top"
        positionHorizontal="center"
        bgColor="bg-[#0f0f0f] sm:bg-[#202020]"
      />
    </>
  );
};
