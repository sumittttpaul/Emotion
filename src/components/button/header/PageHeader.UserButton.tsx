import React, { FC, Fragment, MouseEvent, useState } from 'react';
import { IconButton, Button, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import { Square_BlurDataURL } from '../../loader/BlurDataURL';
import { useAuth } from '../../../firebase/AuthProvider';
import firebase from 'firebase/compat/app';
import Router from 'next/router';
import UserIcon from '../../../../public/icons/user-fill.svg';
import {
  Cart_Link,
  Login_Link,
  Manage_Your_Account_Link,
  Redeem_Gift_Codes_Link,
  Track_Order_Link,
} from '../../../routerLinks/RouterLinks';
import { useLoaderState } from '../../../providers/state/LoadingState';
import { PageHeaderUserButtonMenuProps } from './PageHeader.UserButton.Menu';
import dynamic from 'next/dynamic';

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
    <div className="flex relative box-border">
      {user ? (
        <Fragment>
          <IconButton
            onClick={handleClick}
            disableFocusRipple
            className="sm:hidden items-center h-full px-2 sm:mr-2"
            sx={{
              borderRadius: '0 !important',
              '.MuiTouchRipple-child': {
                borderRadius: '0 !important',
                backgroundColor: '#ffffff80 !important',
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
          <Button
            aria-label="user-popup-button"
            disableFocusRipple
            onClick={handleClick}
            className="hidden sm:flex items-center button-text-lower h-full pl-2 pr-3 bg-[#ffffff0d] hover:bg-[#ffffff0d]"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: '#ffffff80 !important',
              },
            }}
          >
            <div className="relative flex space-x-2.5 items-center">
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
              <h6 className="text-white hidden sm:block whitespace-nowrap font-[300] tracking-[0.075em] text-[12px]">
                {`${user.displayName}`}
              </h6>
            </div>
          </Button>
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
        <Button
          aria-label="user-login-button"
          disableFocusRipple
          onClick={() => {
            setTimeout(() => {
              Router.push(Login_Link);
              LoadingScreen(true);
            }, 150);
          }}
          className="flex items-center button-text-lower h-full px-4 bg-[#ffffff0d] hover:bg-[#ffffff0d]"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff80 !important',
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
      )}
    </div>
  );
};
