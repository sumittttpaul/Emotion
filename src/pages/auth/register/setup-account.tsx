import { NextPage } from 'next';
import { useState } from 'react';
import { SetupAccountUI } from '../../../components/ui/SetupAccountUI';

const SetupAccount: NextPage = () => {
  const [Container, setContainer] = useState('ShowAvatar-container');
  const [Screen1, setScreen1] = useState(false);
  const [Screen2, setScreen2] = useState(false);

  const [URL, setURL] = useState('/images/user.png');
  const [File, setFile] = useState<File>();

  const ImageURL = (value: string) => {
    setURL(value);
  };

  const ImageFile = (value: File) => {
    setFile(value);
  };

  const change = (value: boolean) => {
    setOpen(value);
  };

  const SelectAvatarShow = () => {
    setTimeout(() => {
      setContainer('SelectAvatar-container');
      setScreen1(true);
      setScreen2(false);
    }, 200);
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
      setOpen(false);
    }, 250);
  };
  return <SetupAccountUI />;
};

export default SetupAccount;
