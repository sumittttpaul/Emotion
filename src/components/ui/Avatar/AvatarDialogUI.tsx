import React, { FC, Fragment, useEffect, useState } from 'react';
import { useAvatarState } from '../../../providers/state/AvatarState';
import { CropAvatar } from '../../avatar/CropAvatar';
import SelectAvatar from '../../avatar/SelectAvatar';
import ShowAvatar from '../../avatar/ShowAvatar';
import AvatarContainer from '../../container/AvatarContainer';

interface IProps {}

/**
 * @author
 * @function @AvatarDialogUI
 **/

export const AvatarDialogUI: FC<IProps> = (props) => {
  const { AvatarDialog, setAvatarDialog } = useAvatarState();

  const [Container, setContainer] = useState<string>('ShowAvatar-container');
  const [Screen1, setScreen1] = useState<boolean>(false);
  const [Screen2, setScreen2] = useState<boolean>(false);

  const [URL, setURL] = useState<string>('');

  const ImageURL = (value: string) => {
    setURL(value);
  };

  const closeModal = () => {
    setAvatarDialog({ show: false });
    // setContainer('ShowAvatar-container');
    // setScreen2(false);
    // setScreen1(false);
  };

  const SelectAvatarScreen = () => {
    setTimeout(() => {
      setContainer('SelectAvatar-container');
      setScreen1(true);
      setScreen2(false);
    }, 200);
  };

  const SelectAvatarScreen_back = () => {
    setContainer('SelectAvatar-container');
    setScreen1(true);
    setScreen2(false);
  };

  const ShowAvatarScreen = () => {
    setContainer('ShowAvatar-container');
    setScreen1(false);
    setScreen2(false);
  };

  const CropAvatarScreen = () => {
    setTimeout(() => {
      setContainer('CropAvatar-container');
      setScreen1(true);
      setScreen2(true);
    }, 200);
  };

  return (
    <AvatarContainer
      as={Fragment}
      onClose={closeModal}
      show={AvatarDialog.show}
      className={Container}
    >
      {Screen1 ? (
        Screen2 ? (
          <CropAvatar back={SelectAvatarScreen_back} URL={URL} />
        ) : (
          <SelectAvatar
            back={ShowAvatarScreen}
            show={CropAvatarScreen}
            getURL={ImageURL}
          />
        )
      ) : (
        <ShowAvatar close={closeModal} show={SelectAvatarScreen} />
      )}
    </AvatarContainer>
  );
};
