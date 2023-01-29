import React, { FC, Fragment, MouseEvent, useEffect, useState } from 'react';
import { IconButton, Button, CircularProgress } from '@mui/material';
import Image from 'next/image';
import { Square_BlurDataURL } from '../../loader/BlurDataURL';
import { useAuth } from '../../../firebase/AuthProvider';
import firebase from 'firebase/compat/app';
import Router from 'next/router';
import UserIcon from '../../../../public/icons/user-fill.svg';
import { Login_Link } from '../../../routerLinks/RouterLinks';
import { useLoaderState } from '../../../providers/state/LoadingState';
import { PageHeaderUserButtonMenuProps } from './PageHeader.UserButton.Menu';
import dynamic from 'next/dynamic';
import { GetUserAuthData } from '../../../algorithms/AuthDB';
import {
  DecryptData,
  EncryptData,
} from '../../../algorithms/security/CryptionSecurity';
import { FirstNameEncrytionKey } from '../../../algorithms/security/CryptionKey';
import { TooltipDark } from '../../tooltip/TooltipDark';

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
  const user = useAuth();
  const [IsUser, setIsUser] = useState<boolean>(false);
  const [UserLoading, setUserLoading] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [UserName, setUserName] = useState<string>('');
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

  const getUserName = (UID: string) => {
    GetUserAuthData(UID).then((e) => {
      setUserName(
        'Hi, ' + DecryptData(e.FirstName, FirstNameEncrytionKey(UID))
      );
    });
  };

  const SignOutUser = () => {
    setUserLoading(false);
    setTimeout(() => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          handleClose();
          setUserLoading(true);
        });
    }, 200);
  };

  useEffect(() => {
    if (user) {
      setIsUser(true);
      setUserLoading(true);
    } else setIsUser(false);
  }, [user]);

  return (
    <div className="flex relative box-border h-[47px] rounded-lg overflow-hidden">
      {UserLoading ? (
        IsUser && user ? (
          UserName ? (
            <Fragment>
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
                <Image
                  height={35}
                  width={35}
                  className="rounded-[50%]"
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL={Square_BlurDataURL}
                  src={`${user.photoURL}`}
                  alt=""
                />
              </IconButton>
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
                  <div className="relative flex space-x-2.5 items-center">
                    <Image
                      height={35}
                      width={35}
                      layout="fixed"
                      className="rounded-[50%]"
                      placeholder="blur"
                      loading="lazy"
                      blurDataURL={Square_BlurDataURL}
                      src={`${user.photoURL}`}
                      alt=""
                    />
                    <h6 className="text-white hidden sm:block whitespace-nowrap font-[300] tracking-[0.075em] text-[12px]">
                      {UserName}
                    </h6>
                  </div>
                </Button>
              </TooltipDark>
              <PageHeaderUserButtonMenu
                anchorEl={anchorEl}
                open={open}
                user={user}
                handleClose={handleClose}
                SignOutUser={SignOutUser}
                LoadingScreen={(value) => LoadingScreen(value)}
              />
            </Fragment>
          ) : (
            <>
              {getUserName(user.uid)}
              <Fragment>
                <Button
                  disabled
                  aria-label="user-button-loading"
                  disableFocusRipple
                  onClick={handleClick}
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
            </>
          )
        ) : (
          <Button
            aria-label="user-login-button"
            disableFocusRipple
            onClick={() => {
              setTimeout(() => {
                Router.push(Login_Link);
                LoadingScreen(true);
              }, 150);
            }}
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
        )
      ) : (
        <Fragment>
          <Button
            disabled
            aria-label="user-button-loading"
            disableFocusRipple
            onClick={handleClick}
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
      )}
    </div>
  );
};
