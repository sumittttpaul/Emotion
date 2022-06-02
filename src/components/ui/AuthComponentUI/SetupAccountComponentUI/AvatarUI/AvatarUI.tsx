import React, { FC } from 'react';
import { AvatarDialogUI } from './AvatarDialogUI';
import { AvatarButton } from '../buttonUI/AvatarButton';

interface IProps {
  AvatarDialog: boolean;
  setAvatarDialog: () => void;
  AvatarContainer: string;
  AvatarScreen1: boolean;
  AvatarScreen2: boolean;
  AvatarURL: string;
  AvatarClick: () => void;
  // Show Avatar [ Screen 1 ]
  MoveToSelectAvatar: () => void;
  RemoveClick: () => void;
  RemoveDisabled: boolean;
  ChangeDisabled: boolean;
  UploadLoadingScreen: boolean;
  UploadProgress: string;
  // Select Avatar [ Screen 2 ]
  BackToShowAvatar: () => void;
  MoveToCropAvatar: () => void;
  GetImageURL: (value: string) => void;
  // Crop Avatar [ Screen 3 ]
  BackToSelectAvatar: () => void;
  AvatarSubmit: (value: File) => void;
}

/**
 * @author
 * @function @AvatarUI
 **/

const AvatarUI: FC<IProps> = (props) => {
  return (
    <>
      <AvatarButton onClick={props.AvatarClick} ImageURL={props.AvatarURL} />
      <AvatarDialogUI
        ShowDialog={props.AvatarDialog}
        CloseDialog={props.setAvatarDialog}
        Container={props.AvatarContainer}
        Screen1={props.AvatarScreen1}
        Screen2={props.AvatarScreen2}
        ShowAvatarBackward={props.setAvatarDialog}
        ShowAvatarForward={props.MoveToSelectAvatar}
        ShowAvatarImageURL={props.AvatarURL}
        ShowAvatarRemoveClick={props.RemoveClick}
        ShowAvatarChangeDisabled={props.ChangeDisabled}
        ShowAvatarRemoveDisabled={props.RemoveDisabled}
        ShowAvatarShowProgress={props.UploadLoadingScreen}
        ShowAvatarProgress={props.UploadProgress}
        SelectAvatarBackward={props.BackToShowAvatar}
        SelectAvatarFormard={props.MoveToCropAvatar}
        SelectAvatarGetImageURL={props.GetImageURL}
        CropAvatarBackward={props.BackToSelectAvatar}
        CropAvatarImageURL={props.AvatarURL}
        CropAvatarGetImageURL={props.GetImageURL}
        CropAvatarSubmit={props.AvatarSubmit}
      />
      {/* <ToastDark
        message={ToastMessage}
        open={Toast}
        close={HideToast}
        type={ToastType}
        autoHideDuration={6000}
        slideDirection="down"
        positionVertical="top"
        positionHorizontal="center"
        bgColor="bg-[#121212] sm:bg-[#202020]"
      /> */}
    </>
  );
};

export default AvatarUI;
