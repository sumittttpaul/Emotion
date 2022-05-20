import React, { FC, Fragment } from 'react';
import { useAvatarState } from '../../../providers/state/AvatarState';
import { CropAvatar } from '../../avatar/CropAvatar';
import SelectAvatar from '../../avatar/SelectAvatar';
import ShowAvatar from '../../avatar/ShowAvatar';
import AvatarContainer from '../../container/AvatarContainer';

interface IProps {
  Container: string;
  Screen1: boolean;
  Screen2: boolean;
  URL: string;
  SelectAvatarScreen: () => void;
  SelectAvatarScreen_back: () => void;
  ShowAvatarScreen: () => void;
  CropAvatarScreen: () => void;
  ImageURL: (value:string) => void;
}

/**
 * @author
 * @function @AvatarDialogUI
 **/

export const AvatarDialogUI: FC<IProps> = (props) => {
  const { AvatarDialog, setAvatarDialog } = useAvatarState();

  const closeModal = () => {
    setAvatarDialog({ show: false });
  };

  return (
    <AvatarContainer
      as={Fragment}
      onClose={closeModal}
      show={AvatarDialog.show}
      className={props.Container}
    >
      {props.Screen1 ? (
        props.Screen2 ? (
          <CropAvatar back={props.SelectAvatarScreen_back} URL={props.URL} />
        ) : (
          <SelectAvatar
            back={props.ShowAvatarScreen}
            show={props.CropAvatarScreen}
            getURL={props.ImageURL}
          />
        )
      ) : (
        <ShowAvatar close={closeModal} show={props.SelectAvatarScreen} />
      )}
    </AvatarContainer>
  );
};
