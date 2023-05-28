import React, { FC } from 'react';
import { Menu, MenuItem } from '@mui/material';
import {
  Collections_Link,
  Discover_Link,
  Offers_Link,
} from '../../../routerLinks/RouterLinks';
import Image from 'next/legacy/image';
import Router from 'next/router';

export interface HeaderNavMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onValueChange: (value: string) => void;
  Value: string;
}

const Links = [
  {
    label: 'Discover',
    to: Discover_Link,
  },
  {
    label: 'Offers',
    to: Offers_Link,
  },
  {
    label: 'Collections',
    to: Collections_Link,
  },
];

const DisableButton = (props: string, value: string) => {
  if (props === value) {
    return true;
  } else {
    return false;
  }
};

const ActiveContent = (props: string, value: string) => {
  if (props === value) {
    return 'opacity-100 cursor-default hover:bg-transparent';
  } else {
    return 'opacity-50 cursor-default hover:opacity-100 hover:bg-[#ffffff10]';
  }
};

/**
 * @author
 * @function @HeaderNavMenu
 **/
export const HeaderNavMenu: FC<HeaderNavMenuProps> = (props) => {
  return (
    <Menu
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.onClose}
      PaperProps={{
        elevation: 0,
        sx: {
          background: '#28282880',
          mt: 1.1,
          ml: 8.3,
          borderRadius: 2,
          padding: 0.5,
          overflow: 'visible',
          filter: 'drop-shadow(0px 0px 0px #000000)',
          backdropFilter: 'blur(15px)',
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
      className="block medium-screen:hidden"
    >
      {Links.map((value, idx) => (
        <MenuItem
          key={idx}
          aria-label="browser-header-NavMenu-button"
          disableRipple={Boolean(DisableButton(props.Value, value.label))}
          disableTouchRipple={Boolean(DisableButton(props.Value, value.label))}
          className={`${ActiveContent(
            props.Value,
            value.label
          )} ${'text-white cursor-default p-0 m-0 bg-transparent rounded-lg disabled:cursor-not-allowed disabled:text-white w-full transition-opacity ease-in whitespace-nowrap font-normal text-[13px] h-full justify-start items-center button-text-lower'}`}
          onClick={() => {
            setTimeout(() => {
              if (props.Value != value.label) {
                Router.push(value.to);
                props.onValueChange(value.label);
                props.onClose();
              }
            }, 200);
          }}
        >
          <div className="flex text-left w-[180px] justify-start items-center p-3">
            <p className="block w-full">{value.label}</p>
            {Boolean(DisableButton(props.Value, value.label)) && (
              <div className="block h-5 w-5 opacity-70">
                <Image
                  layout="fixed"
                  height={18}
                  width={18}
                  src="/icons/check-white-2.svg"
                  alt=""
                />
              </div>
            )}
          </div>
        </MenuItem>
      ))}
    </Menu>
  );
};
