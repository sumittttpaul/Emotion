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
  GetCropImageURL: (value: string) => void;
  ImageURLToCrop: string;
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
        CropAvatarImageURL={props.ImageURLToCrop}
        CropAvatarGetImageURL={props.GetCropImageURL}
        CropAvatarSubmit={props.AvatarSubmit}
      />
    </>
  );
};

export default AvatarUI;
