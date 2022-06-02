import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { DeleteAvatar, UploadAvatar } from '../../../algorithms/AuthAlgorithms';
import { ToastDark } from '../../../components/toast/ToastDark';
import { SetupAccountUI } from '../../../components/ui/SetupAccountUI';
import { useAuth } from '../../../firebase/AuthProvider';

const SetupAccount: NextPage = () => {
  const user = useAuth();
  // State
  const [AvatarDialog, setAvatarDialog] = useState(false);
  const [AvatarURL, setAvatarURL] = useState('/images/user.png');
  const [CropAvatarURL, setCropAvatarURL] = useState('');
  const [AvatarContainer, setAvatarContainer] = useState(
    'ShowAvatar-container'
  );
  const [AvatarScreen1, setAvatarScreen1] = useState(false);
  const [AvatarScreen2, setAvatarScreen2] = useState(false);
  const [RemoveDisabled, setRemoveDisabled] = useState(true);
  const [ChangeDisabled, setChangeDisabled] = useState(false);
  const [Toast, setToast] = useState(false);
  const [ToastMessage, setToastMessage] = useState('');
  const [ToastType, setToastType] = useState('');
  const [AvatarLoading, setAvatarLoading] = useState(false);
  const [UploadProgess, setUploadProgess] = useState('');

  // Handle State
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

  // Submit
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
    }, 3000);
  };
  const AvatarSubmit = (value: File) => {
    if (value) {
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

  return (
    <>
      <SetupAccountUI
        AvatarDialog={AvatarDialog}
        setAvatarDialog={HideAvatarDialog}
        AvatarContainer={AvatarContainer}
        AvatarScreen1={AvatarScreen1}
        AvatarScreen2={AvatarScreen2}
        AvatarURL={AvatarURL}
        AvatarClick={AvatarClick}
        RemoveClick={RemoveImageClick}
        RemoveDisabled={RemoveDisabled}
        ChangeDisabled={ChangeDisabled}
        UploadLoadingScreen={AvatarLoading}
        UploadProgress={UploadProgess}
        MoveToSelectAvatar={SelectAvatarScreen}
        MoveToCropAvatar={CropAvatarScreen}
        BackToShowAvatar={BackToShowAvatarScreenWithDefaultAvatar}
        BackToSelectAvatar={BackToSelectAvatarScreen}
        GetImageURL={GetImageURL}
        GetCropImageURL={GetCropImageURL}
        ImageURLToCrop={CropAvatarURL}
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
        bgColor="bg-[#121212] sm:bg-[#202020]"
      />
    </>
  );
};

export default SetupAccount;
