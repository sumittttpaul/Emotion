import React, { FC, Fragment, MouseEvent, ReactNode, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import Image from 'next/legacy/image';
import { useAuth } from '../../../firebase/AuthProvider';
import firebase from 'firebase/compat/app';
import firebaseUser from 'firebase/compat';
import Router from 'next/router';
import UserIcon from '../../../../public/icons/user-fill.svg';
import { Login_Link } from '../../../routerLinks/RouterLinks';
import { useLoaderState } from '../../../providers/state/LoadingState';
import { HeaderUserButtonMenuProps } from './Header.UserButton.Menu';
import dynamic from 'next/dynamic';
import { GetUserAuthData } from '../../../algorithms/AuthDB';
import { DecryptData } from '../../../algorithms/security/CryptionSecurity';
import { FirstNameEncrytionKey } from '../../../algorithms/security/CryptionKey';
import { TooltipDark } from '../../tooltip/TooltipDark';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const HeaderUserButtonMenu = dynamic<HeaderUserButtonMenuProps>(() =>
  import('./Header.UserButton.Menu').then((x) => x.HeaderUserButtonMenu)
);

interface IProps {}

/**
 * @author
 * @function @HeaderUserButton
 **/
export const HeaderUserButton: FC<IProps> = (props) => {
  const FirebaseUser = useAuth();
  const FirebaseAuth = getAuth(firebase.app());
  const [user, loading] = useAuthState(FirebaseAuth);
  const [UserNameLoading, setUserNameLoading] = useState(false);
  const [UserName, setUserName] = useState<string>('');

  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };

  const getUserName = (UID: string) => {
    GetUserAuthData(UID)
      .then((e) => {
        if (e) {
          setUserName(
            'Hi, ' + DecryptData(e.FirstName, FirstNameEncrytionKey(UID))
          );
        } else {
          setUserName('Hi, User');
        }
      })
      .then(() => setUserNameLoading(false));
  };

  if (loading || UserNameLoading)
    return (
      <ContainerButton>
        <LoadingButton />
      </ContainerButton>
    );

  if (user && FirebaseUser)
    if (!UserName) {
      setUserNameLoading(true);
      getUserName(FirebaseUser.uid);
      return null;
    }

  if (user && FirebaseUser)
    if (UserName)
      return (
        <ContainerButton>
          <UserButton user={FirebaseUser} UserName={UserName} />
        </ContainerButton>
      );

  return (
    <ContainerButton>
      <LoginButton
        onClick={() => {
          setTimeout(() => {
            Router.push(Login_Link);
            LoadingScreen(true);
          }, 150);
        }}
      />
    </ContainerButton>
  );
};

interface LoginButtonProps {
  onClick: () => void;
}
interface LoadingButtonProps {}

interface ContainerButtonProps {
  children: ReactNode;
}
interface UserButtonProps {
  user: firebaseUser.User;
  UserName: string;
}

const LoginButton: FC<LoginButtonProps> = (props) => {
  return (
    <TooltipDark
      arrow
      placement="bottom"
      title={<h6 className="font-[400]">Account</h6>}
    >
      <Button
        aria-label="user-login-button"
        disableFocusRipple
        onClick={props.onClick}
        className="flex items-center button-text-lower h-full px-[14px] bg-transparent hover:bg-[#202020]"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff50 !important',
          },
        }}
        style={{ minWidth: 0 }}
      >
        <Image
          height={20}
          width={20}
          layout="fixed"
          className="opacity-70"
          src={UserIcon}
          alt=""
        />
      </Button>
    </TooltipDark>
  );
};

const LoadingButton: FC<LoadingButtonProps> = (props) => {
  return (
    <Fragment>
      <Button
        disabled
        aria-label="user-button-loading"
        disableFocusRipple
        className="flex items-center button-text-lower h-full px-1 bg-transparent hover:bg-[#202020]"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff50 !important',
          },
        }}
        style={{ minWidth: 0 }}
      >
        <CircularProgress className="text-white p-2.5" />
      </Button>
    </Fragment>
  );
};

const UserButton: FC<UserButtonProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SignOutUser = () => {
    setTimeout(() => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          handleClose();
        });
    }, 200);
  };

  return (
    <Fragment>
      <TooltipDark
        arrow
        placement="bottom"
        title={<h6 className="font-[400]">Account</h6>}
      >
        <Button
          aria-label="user-popup-button"
          disableFocusRipple
          onClick={handleClick}
          className="flex items-center button-text-lower h-full bg-transparent hover:bg-[#202020]"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff50 !important',
            },
          }}
          style={{ minWidth: 0 }}
        >
          {props.user.photoURL ? (
            <Image
              height={35}
              width={35}
              layout="fixed"
              className="rounded-[50%]"
              src={`${props.user.photoURL}`}
              alt=""
            />
          ) : (
            <Image
              height={20}
              width={20}
              layout="fixed"
              className="opacity-70"
              src={UserIcon}
              alt=""
            />
          )}
        </Button>
      </TooltipDark>
      <HeaderUserButtonMenu
        anchorEl={anchorEl}
        open={open}
        user={props.user}
        handleClose={handleClose}
        SignOutUser={SignOutUser}
        LoadingScreen={(value) => LoadingScreen(value)}
      />
    </Fragment>
  );
};

const ContainerButton: FC<ContainerButtonProps> = (props) => {
  return (
    <div className="flex relative box-border h-[47px] rounded-lg overflow-hidden">
      {props.children}
    </div>
  );
};