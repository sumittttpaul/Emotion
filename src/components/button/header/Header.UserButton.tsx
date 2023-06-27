import Image from 'next/image';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import React, { FC, Fragment, MouseEvent, ReactNode, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { Setup_Link } from '../../../routerLinks/RouterLinks';
import { HeaderUserButtonMenuProps } from './Header.UserButton.Menu';
import { TooltipDark } from '../../tooltip/TooltipDark';
import { UserType, useAuth } from '../../../firebase/useAuth';
import { SignOut } from '../../../algorithms/AuthAlgorithms';
import { useLoaderState } from '../../../provider/LoadingState';

const HeaderUserButtonMenu = dynamic<HeaderUserButtonMenuProps>(
  () => import('./Header.UserButton.Menu').then((x) => x.HeaderUserButtonMenu),
  { ssr: false }
);

interface IProps {}

/**
 * @author
 * @function @HeaderUserButton
 **/

export const HeaderUserButton: FC<IProps> = (props) => {
  const { FirebaseUser, FirebaseLoading } = useAuth();

  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };

  if (FirebaseLoading)
    return (
      <ContainerButton>
        <LoadingButton />
      </ContainerButton>
    );

  if (FirebaseUser)
    return (
      <ContainerButton>
        <UserButton user={FirebaseUser} />
      </ContainerButton>
    );

  return (
    <ContainerButton>
      <LoginButton
        onClick={() => {
          LoadingScreen(true);
          Router.push(Setup_Link);
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
  user: UserType;
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
        className="flex items-center button-text-lower h-full px-[15.5px] bg-transparent hover:bg-[#202020]"
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
          className="opacity-70"
          src="/icons/user-fill.svg"
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
        className="flex items-center button-text-lower h-full px-[5.5px] bg-transparent hover:bg-[#202020]"
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
    SignOut({ Next: handleClose });
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
          {props.user?.photoURL ? (
            <Image
              height={35}
              width={35}
              className="rounded-[50%]"
              src={
                props.user.photoURL
                  ? props.user.photoURL
                  : '/images/loader/dark-circle.png'
              }
              alt=""
            />
          ) : (
            <Image
              height={20}
              width={20}
              className="opacity-70"
              src="/icons/user-fill.svg"
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
