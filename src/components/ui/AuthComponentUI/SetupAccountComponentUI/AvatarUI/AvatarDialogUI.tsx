import React, { FC } from 'react';
import { IAvatarIconReducerState } from '../../../../../redux/reducers/AvatarReducer';
import { CollectionForAvatar } from '../../../../avatar/CollectionForAvatar';
import { CropAvatar } from '../../../../avatar/CropAvatar';
import SelectAvatar from '../../../../avatar/SelectAvatar';
import ShowAvatar from '../../../../avatar/ShowAvatar';
import AvatarContainerDialog from '../../../../dialog/AvatarContainerDialog';

interface IProps {
  AvatarDialog: boolean;
  setAvatarDialog: () => void;
  AvatarContainer: string;
  AvatarScreen1: boolean;
  AvatarScreen2: boolean;
  MoveToSelectAvatar: () => void;
  AvatarURL: string;
  RemoveClick: () => void;
  ChangeDisabled: boolean;
  RemoveDisabled: boolean;
  UploadLoadingScreen: boolean;
  UploadProgress: string;
  BackToShowAvatar: () => void;
  MoveToCropAvatar: () => void;
  GetImageURL: (value: string) => void;
  CollectionBackBool: (value: boolean) => void;
  CollectionReducerName: (value: string) => void;
  CollectionHeading: (value: string) => void;
  CollectionShowHeading: string;
  CollectionShow: () => void;
  BackToSelectAvatar: () => void;
  CollectionReducer: IAvatarIconReducerState[];
  BackToAvatarCollection: () => void;
  ImageURLToCrop: string;
  GetCropImageURL: (value: string) => void;
  AvatarSubmit: (value: File) => void;
}

/**
 * @author
 * @function @AvatarDialogUI
 **/

export const AvatarDialogUI: FC<IProps> = (props) => {
  return (
    <AvatarContainerDialog
      close={props.setAvatarDialog}
      show={props.AvatarDialog}
      className={props.AvatarContainer}
    >
      {props.AvatarScreen1 ? (
        props.AvatarScreen2 ? (
          <CropAvatar
            back={props.BackToAvatarCollection}
            submit={props.AvatarSubmit}
            URL={props.ImageURLToCrop}
            getURL={props.GetCropImageURL}
          />
        ) : (
          <SelectAvatar
            backward={props.BackToShowAvatar}
            forward={props.MoveToCropAvatar}
            getURL={props.GetImageURL}
            backBool={props.CollectionBackBool}
            ShowCollection={props.CollectionShow}
            CollectionHeading={props.CollectionHeading}
            AvatarName={props.CollectionReducerName}
          />
        )
      ) : props.AvatarScreen2 ? (
        <CollectionForAvatar
          heading={props.CollectionShowHeading}
          backward={props.BackToSelectAvatar}
          forward={props.MoveToCropAvatar}
          getURL={props.GetImageURL}
          AvatarReducer={props.CollectionReducer}
        />
      ) : (
        <ShowAvatar
          URL={props.AvatarURL}
          remove={props.RemoveClick}
          changedisabled={props.ChangeDisabled}
          removedisabled={props.RemoveDisabled}
          backward={props.setAvatarDialog}
          forward={props.MoveToSelectAvatar}
          ShowProgress={props.UploadLoadingScreen}
          Progress={props.UploadProgress}
        />
      )}
    </AvatarContainerDialog>
  );
};
