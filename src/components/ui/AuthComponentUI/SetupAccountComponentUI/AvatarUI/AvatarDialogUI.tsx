import React, { FC } from 'react';
import { IAvatarIconReducerState } from '../../../../../redux/reducers/AvatarReducer';
import { CollectionForAvatar } from '../../../../avatar/CollectionForAvatar';
import { CropAvatar } from '../../../../avatar/CropAvatar';
import SelectAvatar from '../../../../avatar/SelectAvatar';
import ShowAvatar from '../../../../avatar/ShowAvatar';
import AvatarContainerDialog from '../../../../dialog/AvatarContainerDialog';

interface IProps {
  ShowDialog: boolean;
  CloseDialog: () => void;
  Container: string;
  Screen1: boolean;
  Screen2: boolean;
  // Show Avatar
  ShowAvatarBackward: () => void;
  ShowAvatarForward: () => void;
  ShowAvatarImageURL: string;
  ShowAvatarRemoveClick: () => void;
  ShowAvatarChangeDisabled: boolean;
  ShowAvatarRemoveDisabled: boolean;
  ShowAvatarShowProgress: boolean;
  ShowAvatarProgress: string;
  // Select Avatar
  SelectAvatarBackward: () => void;
  SelectAvatarFormard: () => void;
  SelectAvatarGetImageURL: (value: string) => void;
  AvatarCollectionShow: () => void;
  AvatarCollectionHeading: (value: string) => void;
  AvatarCollectionShowHeading: string;
  AvatarCollectionReducerName: (value: string) => void;
  // Avatar Collection
  AvatarCollectionBackward: () => void;
  AvatarCollectionFormard: () => void;
  AvatarCollectionGetImageURL: (value: string) => void;
  AvatarCollectionReducer: IAvatarIconReducerState[];
  // Crop Avatar
  CropAvatarBackward: () => void;
  CropAvatarImageURL: string;
  CropAvatarGetImageURL: (value: string) => void;
  CropAvatarSubmit: (value: File) => void;
}

/**
 * @author
 * @function @AvatarDialogUI
 **/

export const AvatarDialogUI: FC<IProps> = (props) => {
  return (
    <AvatarContainerDialog
      close={props.CloseDialog}
      show={props.ShowDialog}
      className={props.Container}
    >
      {props.Screen1 ? (
        props.Screen2 ? (
          <CropAvatar
            back={props.CropAvatarBackward}
            submit={props.CropAvatarSubmit}
            URL={props.CropAvatarImageURL}
            getURL={props.CropAvatarGetImageURL}
          />
        ) : (
          <SelectAvatar
            backward={props.SelectAvatarBackward}
            forward={props.SelectAvatarFormard}
            getURL={props.SelectAvatarGetImageURL}
            ShowCollection={props.AvatarCollectionShow}
            CollectionHeading={props.AvatarCollectionHeading}
            AvatarName={props.AvatarCollectionReducerName}
          />
        )
      ) : props.Screen2 ? (
        <CollectionForAvatar
          heading={props.AvatarCollectionShowHeading}
          backward={props.AvatarCollectionBackward}
          forward={props.AvatarCollectionFormard}
          getURL={props.AvatarCollectionGetImageURL}
          AvatarReducer={props.AvatarCollectionReducer}
        />
      ) : (
        <ShowAvatar
          URL={props.ShowAvatarImageURL}
          remove={props.ShowAvatarRemoveClick}
          changedisabled={props.ShowAvatarChangeDisabled}
          removedisabled={props.ShowAvatarRemoveDisabled}
          backward={props.ShowAvatarBackward}
          forward={props.ShowAvatarForward}
          ShowProgress={props.ShowAvatarShowProgress}
          Progress={props.ShowAvatarProgress}
        />
      )}
    </AvatarContainerDialog>
  );
};
