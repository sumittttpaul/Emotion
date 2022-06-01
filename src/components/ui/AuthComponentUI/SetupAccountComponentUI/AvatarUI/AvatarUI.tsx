import React, { FC, useState } from 'react';
import { AvatarDialogUI } from './AvatarDialogUI';
import { AvatarButton } from '../buttonUI/AvatarButton';

interface IProps {}

/**
 * @author
 * @function @AvatarUI
 **/

const AvatarUI: FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [URL, setURL] = useState('/images/user.png');
  const [Container, setContainer] = useState('ShowAvatar-container');
  const [Screen1, setScreen1] = useState(false);
  const [Screen2, setScreen2] = useState(false);
  const [Disabled, setDisabled] = useState(true);

  const ShowDialog = () => {
    ShowAvatar();
  };

  const CloseDialog = () => {
    setOpen(false);
  };

  const ShowAvatar = () => {
    setTimeout(() => {
      setContainer('ShowAvatar-container');
      setScreen1(false);
      setScreen2(false);
      // open dialog
      setOpen(true);
    }, 200);
  };

  const SelectAvatar = () => {
    setTimeout(() => {
      setContainer('SelectAvatar-container');
      setScreen1(true);
      setScreen2(false);
    }, 200);
  };

  const CropAvatar = () => {
    setTimeout(() => {
      setContainer('SelectAvatar-container');
      setScreen1(true);
      setScreen2(true);
    }, 200);
  };

  const BackToShowAvatar = () => {
    setContainer('ShowAvatar-container');
    setScreen1(false);
    setScreen2(false);
  };

  const BackToSelectAvatar = () => {
    setContainer('SelectAvatar-container');
    setScreen1(true);
    setScreen2(false);
  };

  const RemoveImage = () => {
    setURL('/images/user.png');
    setDisabled(true);
  };

  const ImageChange = () => {
    setDisabled(false);
  };

  const GetImage = (value: string) => {
    setURL(value);
  };

  const GetImageFile = (value: File) => {};

  return (
    <>
      <AvatarButton onClick={ShowDialog} ImageURL={URL} />
      <AvatarDialogUI
        ShowDialog={open}
        CloseDialog={CloseDialog}
        Container={Container}
        Screen1={Screen1}
        Screen2={Screen2}
        ShowAvatarBackward={CloseDialog}
        ShowAvatarForward={SelectAvatar}
        ShowAvatarImageURL={URL}
        ShowAvatarRemoveClick={RemoveImage}
        ShowAvatarRemoveDisabled={!Disabled}
        SelectAvatarBackward={BackToShowAvatar}
        SelectAvatarFormard={CropAvatar}
        SelectAvatarGetImageURL={GetImage}
        CropAvatarBackward={BackToSelectAvatar}
        CropAvatarImageURL={URL}
        CropAvatarGetImageURL={GetImage}
        CropAvatarGetImageFile={GetImageFile}
        CropAvatarClose={CloseDialog}
        CropAvatarImageChange={ImageChange}
      />
    </>
  );
};

export default AvatarUI;
