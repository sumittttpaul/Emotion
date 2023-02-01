import React, { FC, Fragment, MouseEvent, ReactNode, useState } from 'react';
import { IconButton, Button, CircularProgress } from '@mui/material';
import Image from 'next/image';
import { Square_BlurDataURL } from '../../loader/BlurDataURL';
import { useAuth } from '../../../firebase/AuthProvider';
import firebase from 'firebase/compat/app';
import firebaseUser from 'firebase/compat';
import Router from 'next/router';
import UserIcon from '../../../../public/icons/user-fill.svg';
import { Login_Link } from '../../../routerLinks/RouterLinks';
import { useLoaderState } from '../../../providers/state/LoadingState';
import { PageHeaderUserButtonMenuProps } from './PageHeader.UserButton.Menu';
import dynamic from 'next/dynamic';
import { GetUserAuthData } from '../../../algorithms/AuthDB';
import { DecryptData } from '../../../algorithms/security/CryptionSecurity';
import { FirstNameEncrytionKey } from '../../../algorithms/security/CryptionKey';
import { TooltipDark } from '../../tooltip/TooltipDark';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const PageHeaderUserButtonMenu = dynamic<PageHeaderUserButtonMenuProps>(
  () =>
    import('./PageHeader.UserButton.Menu').then(
      (x) => x.PageHeaderUserButtonMenu
    ),
  { ssr: true }
);

interface IProps {}

/**
 * @author
 * @function @PageHeaderUserButton
 **/

export const PageHeaderUserButton: FC<IProps> = (props) => {
  const FirebaseUser = useAuth();
  const FirebaseAuth = getAuth(firebase.app());
  const [user, loading] = useAuthState(FirebaseAuth);
  const [UserName, setUserName] = useState<string>('');

  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };

  const getUserName = (UID: string) => {
    GetUserAuthData(UID).then((e) => {
      if (e) {
        setUserName(
          'Hi, ' + DecryptData(e.FirstName, FirstNameEncrytionKey(UID))
        );
      } else {
        setUserName('Hi, User');
      }
    });
  };

  if (loading) {
    return (
      <ContainerButton>
        <LoadingButton />
      </ContainerButton>
    );
  }

  if (user && FirebaseUser) {
    if (UserName) {
      return (
        <ContainerButton>
          <UserButton user={FirebaseUser} UserName={UserName} />
        </ContainerButton>
      );
    } else {
      return (
        <ContainerButton>
          <>
            <LoadingButton />;{getUserName(FirebaseUser.uid)}
          </>
        </ContainerButton>
      );
    }
  }

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
    <Button
      aria-label="user-login-button"
      disableFocusRipple
      onClick={props.onClick}
      className="flex items-center button-text-lower h-full px-4 bg-[#202020] hover:bg-[#202020]"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff50 !important',
        },
      }}
    >
      <div className="relative flex sm:space-x-2 items-center">
        <Image
          height={20}
          width={20}
          layout="fixed"
          className="opacity-70"
          src={UserIcon}
          alt=""
          priority
        />
        <h6 className="text-white hidden sm:block whitespace-nowrap font-[350] text-[12px]">
          Login
        </h6>
      </div>
    </Button>
  );
};

const LoadingButton: FC<LoadingButtonProps> = (props) => {
  return (
    <Fragment>
      <Button
        disabled
        aria-label="user-button-loading"
        disableFocusRipple
        className="flex items-center button-text-lower h-full pl-2 pr-3 bg-[#202020] hover:bg-[#202020]"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff50 !important',
          },
        }}
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
      {/* Mobile */}
      <IconButton
        onClick={handleClick}
        disableFocusRipple
        className="sm:hidden items-center h-full px-2 sm:mr-2"
        sx={{
          borderRadius: '0 !important',
          '.MuiTouchRipple-child': {
            borderRadius: '0 !important',
            backgroundColor: '#ffffff50 !important',
          },
        }}
      >
        {props.user.photoURL ? (
          <Image
            height={35}
            width={35}
            layout="fixed"
            className="rounded-[50%]"
            placeholder="blur"
            loading="lazy"
            blurDataURL={Square_BlurDataURL}
            src={`${props.user.photoURL}`}
            alt=""
          />
        ) : (
          <Image
            height={35}
            width={35}
            layout="fixed"
            className="rounded-[50%]"
            placeholder="blur"
            loading="lazy"
            blurDataURL={Square_BlurDataURL}
            src={UserIcon}
            alt=""
          />
        )}
      </IconButton>
      {/* Desktop */}
      <TooltipDark
        arrow
        placement="bottom"
        title={<h6 className="font-[400]">Account</h6>}
      >
        <Button
          aria-label="user-popup-button"
          disableFocusRipple
          onClick={handleClick}
          className="hidden sm:flex items-center button-text-lower h-full pl-2 pr-3 bg-[#202020] hover:bg-[#202020]"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff50 !important',
            },
          }}
        >
          {props.user.photoURL ? (
            <div className="relative flex items-center space-x-2.5">
              <Image
                height={35}
                width={35}
                layout="fixed"
                className="rounded-[50%]"
                placeholder="blur"
                loading="lazy"
                blurDataURL={Square_BlurDataURL}
                src={`${props.user.photoURL}`}
                alt=""
              />
              <h6 className="text-white hidden sm:block whitespace-nowrap font-[300] tracking-[0.075em] text-[12px]">
                {props.UserName}
              </h6>
            </div>
          ) : (
            <div className="pl-1.5 relative flex items-center">
              <h6 className="text-white hidden sm:block whitespace-nowrap font-[300] tracking-[0.075em] text-[12px]">
                {props.UserName}
              </h6>
            </div>
          )}
        </Button>
      </TooltipDark>
      <PageHeaderUserButtonMenu
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
