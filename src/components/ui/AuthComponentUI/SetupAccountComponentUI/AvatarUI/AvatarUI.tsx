import React, { FC } from 'react';
import { AvatarDialogUI } from './AvatarDialogUI';
import { AvatarButton } from '../buttonUI/AvatarButton';
import { IAvatarIconReducerState } from '../../../../../redux/reducers/AvatarReducer';

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
  // Avatar Collection [ Screen 3 ]
  BackToAvatarCollection: () => void;
  CollectionShow: () => void;
  CollectionHeading: (value: string) => void;
  CollectionShowHeading: string;
  CollectionReducer: IAvatarIconReducerState[];
  CollectionReducerName: (value: string) => void;
  CollectionBackward: () => void;
  CollectionFormard: () => void;
  // Crop Avatar [ Screen 4 ]
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
        AvatarCollectionReducerName={props.CollectionReducerName}
        AvatarCollectionHeading={props.CollectionHeading}
        AvatarCollectionShowHeading={props.CollectionShowHeading}
        AvatarCollectionShow={props.CollectionShow}
        AvatarCollectionBackward={props.BackToSelectAvatar}
        AvatarCollectionFormard={props.MoveToCropAvatar}
        AvatarCollectionGetImageURL={props.GetImageURL}
        AvatarCollectionReducer={props.CollectionReducer}
        CropAvatarBackward={props.BackToAvatarCollection}
        CropAvatarImageURL={props.ImageURLToCrop}
        CropAvatarGetImageURL={props.GetCropImageURL}
        CropAvatarSubmit={props.AvatarSubmit}
      />
    </>
  );
};

export default AvatarUI;
