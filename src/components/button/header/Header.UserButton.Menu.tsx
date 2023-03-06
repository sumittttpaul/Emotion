import { Menu, MenuItem, Button } from '@mui/material';
import Router from 'next/router';
import React, { FC } from 'react';
import {
  Manage_Your_Account_Link,
  Track_Order_Link,
  Cart_Link,
  Redeem_Gift_Codes_Link,
} from '../../../routerLinks/RouterLinks';
import { Square_BlurDataURL } from '../../loader/BlurDataURL';
import Image from 'next/legacy/image';
import firebase from 'firebase/compat';
import UserIcon from '../../../../public/icons/user-fill.svg';

export interface HeaderUserButtonMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  user: firebase.User;
  handleClose: () => void;
  SignOutUser: () => void;
  LoadingScreen: (value: boolean) => void;
}

/**
 * @author
 * @function @HeaderUserButtonMenu
 **/

export const HeaderUserButtonMenu: FC<HeaderUserButtonMenuProps> = (props) => {
  return (
    <Menu
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          background: '#282828',
          mt: 1.2,
          borderRadius: 3,
          overflow: 'visible',
          // filter: 'drop-shadow(0px 0px 0px #ffffff12)',
          '.MuiMenu-list': {
            padding: '1px 0',
          },
          '.MuiMenuItem-root': {
            minHeight: 0,
          },
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff30 !important',
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem
        key={1}
        disableRipple
        disableTouchRipple
        className="m-1 p-2 rounded-md cursor-default hover:bg-[transparent]"
      >
        <div className="flex relative space-x-3">
          <div className="relative block">
            {props.user.photoURL ? (
              <Image
                height={50}
                width={50}
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
                height={50}
                width={50}
                className="rounded-[50%] opacity-70"
                placeholder="blur"
                loading="lazy"
                blurDataURL={Square_BlurDataURL}
                src={UserIcon}
                alt=""
              />
            )}
          </div>
          <div className="relative block">
            <h6 className="text-[15px] whitespace-nowrap font-sans text-white">{`${
              props.user.displayName ? props.user.displayName : 'User'
            }`}</h6>
            <h6 className="text-[11px] mr-8 whitespace-nowrap text-white opacity-[0.85]">{`${
              props.user.email
                ? props.user.email
                : 'No email address has been added'
            }`}</h6>
            <div className="relative block">
              <Button
                aria-label="user-sign-out-button"
                disableFocusRipple
                onClick={props.SignOutUser}
                className="mt-[8px] p-[2px] relative block bg-[#ffffff15] hover:bg-[#ffffff30] button-text-lower font-normal text-white text-[11px]"
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </MenuItem>
      <div className="h-[1px] w-full bg-[#ffffff20]" />
      <MenuItem
        key={2}
        onClick={() => {
          setTimeout(() => {
            props.handleClose();
            props.LoadingScreen(true);
            Router.push(Manage_Your_Account_Link);
          }, 150);
        }}
        className="m-1 rounded-md hover:bg-[#ffffff15]"
      >
        <div className="flex relative space-x-[10px] opacity-90">
          <Image
            height={17}
            width={17}
            loading="lazy"
            src="/icons/folder.svg"
            alt=""
          />
          <h6 className="text-[14px] font-sans font-[400] text-white">
            Manage your account
          </h6>
        </div>
      </MenuItem>
      <MenuItem
        key={3}
        onClick={() => {
          setTimeout(() => {
            props.handleClose();
            props.LoadingScreen(true);
            Router.push(Track_Order_Link);
          }, 150);
        }}
        className="m-1 rounded-md hover:bg-[#ffffff15]"
      >
        <div className="flex relative space-x-[10px] opacity-90">
          <Image
            height={18}
            width={18}
            loading="lazy"
            src="/icons/truck.svg"
            alt=""
          />
          <h6 className="text-[14px] font-sans font-[400] text-white">
            Track orders
          </h6>
        </div>
      </MenuItem>
      <MenuItem
        key={4}
        onClick={() => {
          setTimeout(() => {
            props.handleClose();
            props.LoadingScreen(true);
            Router.push(Cart_Link);
          }, 150);
        }}
        className="m-1 rounded-md hover:bg-[#ffffff15]"
      >
        <div className="flex relative space-x-[10px] opacity-90">
          <Image
            height={17}
            width={17}
            loading="lazy"
            src="/icons/shopping-bag.svg"
            alt=""
          />
          <h6 className="text-[14px] font-sans font-[400] text-white">
            View all orders
          </h6>
        </div>
      </MenuItem>
      <MenuItem
        key={5}
        onClick={() => {
          setTimeout(() => {
            props.handleClose();
            props.LoadingScreen(true);
            Router.push(Redeem_Gift_Codes_Link);
          }, 150);
        }}
        className="m-1 rounded-md hover:bg-[#ffffff15]"
      >
        <div className="flex relative space-x-[10px] opacity-90">
          <Image
            height={17}
            width={17}
            loading="lazy"
            src="/icons/gift.svg"
            alt=""
          />
          <h6 className="text-[14px] font-sans font-[400] text-white">
            Redeem code or gift cards
          </h6>
        </div>
      </MenuItem>
    </Menu>
  );
};
