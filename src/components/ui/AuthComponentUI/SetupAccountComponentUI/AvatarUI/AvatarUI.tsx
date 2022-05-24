import React, { FC, useState } from 'react';
import { AvatarDialogUI } from './AvatarDialogUI';
import { useAvatarState } from '../../../../../providers/state/AvatarState';
import { useProfileURLState } from '../../../../../providers/state/ProfileURLState';
import { AvatarButton } from '../buttonUI/AvatarButton';

interface IProps {}

/**
 * @author
 * @function @AvatarUI
 **/

const AvatarUI: FC<IProps> = (props) => {
  const { ProfileURL } = useProfileURLState();
  const { setAvatarDialog } = useAvatarState();

  const [Container, setContainer] = useState<string>('ShowAvatar-container');
  const [Screen1, setScreen1] = useState<boolean>(false);
  const [Screen2, setScreen2] = useState<boolean>(false);

  const [URL, setURL] = useState<string>('');

  const ImageURL = (value: string) => {
    setURL(value);
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

  const handleClick = () => {
    setTimeout(() => {
      setScreen1(false);
      setScreen2(false);
      setContainer('ShowAvatar-container');
      setAvatarDialog({ show: true });
    }, 250);
  };

  return (
    <>
      <AvatarButton onClick={handleClick} profileURL={`${ProfileURL.URL}`} />
      <AvatarDialogUI
        Container={Container}
        Screen1={Screen1}
        Screen2={Screen2}
        URL={URL}
        SelectAvatarScreen={SelectAvatarScreen}
        SelectAvatarScreen_back={SelectAvatarScreen_back}
        ShowAvatarScreen={ShowAvatarScreen}
        CropAvatarScreen={CropAvatarScreen}
        ImageURL={ImageURL}
      />
    </>
  );
};

export default AvatarUI;
