import React, { FC, Fragment, useState } from 'react';
import { IconButton, Button, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import { Square_BlurDataURL } from '../../loader/BlurDataURL';
import { useAuth } from '../../../firebase/AuthProvider';
import firebase from 'firebase/compat/app';
import Router from 'next/router';
import UserIcon from '../../../../public/icons/user-fill.svg';
import { Login_Link } from '../../../routerLinks/RouterLinks';

interface IProps {}

/**
 * @author
 * @function @TopHeaderUserButton
 **/

export const TopHeaderUserButton: FC<IProps> = (props) => {
  const user = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseClick = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 150);
  };

  const SignOutUser = () => {
    setTimeout(() => {
      handleClose();
      firebase.auth().signOut();
    }, 150);
  };
  return (
    <div className="flex relative box-border">
      {user ? (
        <Fragment>
          <IconButton
            onClick={handleClick}
            className="sm:hidden items-center h-full px-2 sm:mr-2"
            sx={{
              borderRadius: '0 !important',
              '.MuiTouchRipple-child': {
                borderRadius: '0 !important',
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <Image
              height={35}
              width={35}
              className="rounded-[50%]"
              placeholder="blur"
              blurDataURL={Square_BlurDataURL}
              src={`${user.photoURL}`}
              alt="user profile"
            />
          </IconButton>
          <Button
            aria-label="user-popup-button"
            disableFocusRipple
            onClick={handleClick}
            className="hidden sm:flex items-center button-text-lower h-full pl-2 pr-3 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)]"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <div className="relative flex space-x-2.5 items-center">
              <Image
                height={35}
                width={35}
                className="rounded-[50%]"
                placeholder="blur"
                blurDataURL={Square_BlurDataURL}
                src={`${user.photoURL}`}
                alt="user profile"
              />
              <h6 className="text-white hidden sm:block whitespace-nowrap font-[300] tracking-[0.075em] text-[12px]">
                {`${user.displayName}`}
              </h6>
            </div>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                background: 'rgba(255,255,255,1)',
                mt: 0.6,
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                '.MuiMenu-list': {
                  padding: '1px 0',
                },
                '.MuiMenuItem-root': {
                  minHeight: 0,
                },
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
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
                  <Image
                    height={50}
                    width={50}
                    className="rounded-[50%]"
                    placeholder="blur"
                    blurDataURL={Square_BlurDataURL}
                    src={`${user.photoURL}`}
                    alt="user profile"
                  />
                </div>
                <div className="relative block">
                  <h6 className="text-[15px] whitespace-nowrap font-sans text-black">{`${user.displayName}`}</h6>
                  <h6 className="text-[11px] mr-1 whitespace-nowrap text-black opacity-[0.85]">{`${user.email}`}</h6>
                  <div className="relative block">
                    <Button
                      aria-label="user-sign-out-button"
                      disableFocusRipple
                      onClick={SignOutUser}
                      className="mt-[8px] p-[2px] relative block bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.1)] button-text-lower font-normal text-black text-[11px]"
                    >
                      Sign out
                    </Button>
                  </div>
                </div>
              </div>
            </MenuItem>
            <div className="h-[1px] w-full bg-[rgba(0,0,0,0.05)]" />
            <MenuItem
              key={2}
              onClick={handleCloseClick}
              className="m-1 rounded-md hover:bg-[rgba(0,0,0,0.05)]"
            >
              <div className="flex relative space-x-[10px]">
                <Image
                  height={17}
                  width={17}
                  src="/icons/folder.svg"
                  alt="folder icon"
                />
                <h6 className="text-[14px] font-sans font-[400] text-black">
                  Manage your account
                </h6>
              </div>
            </MenuItem>
            <MenuItem
              key={3}
              onClick={handleCloseClick}
              className="m-1 rounded-md hover:bg-[rgba(0,0,0,0.05)]"
            >
              <div className="flex relative space-x-[10px]">
                <Image
                  height={18}
                  width={18}
                  src="/icons/truck.svg"
                  alt="truck icon"
                />
                <h6 className="text-[14px] font-sans font-[400] text-black">
                  Track orders
                </h6>
              </div>
            </MenuItem>
            <MenuItem
              key={4}
              onClick={handleCloseClick}
              className="m-1 rounded-md hover:bg-[rgba(0,0,0,0.05)]"
            >
              <div className="flex relative space-x-[10px]">
                <Image
                  height={17}
                  width={17}
                  src="/icons/shopping-bag.svg"
                  alt="shopping bag icon"
                />
                <h6 className="text-[14px] font-sans font-[400] text-black">
                  View all orders
                </h6>
              </div>
            </MenuItem>
            <MenuItem
              key={5}
              onClick={handleCloseClick}
              className="m-1 rounded-md hover:bg-[rgba(0,0,0,0.05)]"
            >
              <div className="flex relative space-x-[10px]">
                <Image
                  height={17}
                  width={17}
                  src="/icons/gift.svg"
                  alt="gift icon"
                />
                <h6 className="text-[14px] font-sans font-[400] text-black">
                  Redeem code or gift cards
                </h6>
              </div>
            </MenuItem>
          </Menu>
        </Fragment>
      ) : (
        <Button
          aria-label="user-login-button"
          disableFocusRipple
          onClick={() => {
            setTimeout(() => {
              Router.push(Login_Link);
            }, 150);
          }}
          className="flex items-center button-text-lower h-full px-4 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)]"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
            },
          }}
        >
          <div className="relative flex sm:space-x-2 items-center">
            <Image
              height={20}
              width={20}
              className="opacity-70"
              src={UserIcon}
              alt="user icon"
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
