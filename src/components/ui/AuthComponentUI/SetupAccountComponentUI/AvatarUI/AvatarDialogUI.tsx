import React, { FC } from 'react';
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
  ShowAvatarRemoveDisabled: boolean;

  // Select Avatar
  SelectAvatarBackward: () => void;
  SelectAvatarFormard: () => void;
  SelectAvatarGetImageURL: (value: string) => void;

  // Crop Avatar
  CropAvatarBackward: () => void;
  CropAvatarImageURL: string;
  CropAvatarGetImageURL: (value: string) => void;
  CropAvatarGetImageFile: (value: File) => void;
  CropAvatarClose: () => void;
  CropAvatarImageChange: (value: boolean) => void;
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
            close={props.CropAvatarClose}
            change={props.CropAvatarImageChange}
            URL={props.CropAvatarImageURL}
            getURL={props.CropAvatarGetImageURL}
            getFile={props.CropAvatarGetImageFile}
          />
        ) : (
          <SelectAvatar
            backward={props.SelectAvatarBackward}
            forward={props.SelectAvatarFormard}
            getURL={props.SelectAvatarGetImageURL}
          />
        )
      ) : (
        <ShowAvatar
          URL={props.ShowAvatarImageURL}
          remove={props.ShowAvatarRemoveClick}
          disabled={props.ShowAvatarRemoveDisabled}
          backward={props.ShowAvatarBackward}
          forward={props.ShowAvatarForward}
        />
      )}
    </AvatarContainerDialog>
  );
};
