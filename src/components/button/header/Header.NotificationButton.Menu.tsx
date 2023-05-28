import { Button, Menu, MenuItem } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { HotBadge } from '../../badge/HotBadge';
import { TrendingBadge } from '../../badge/TrendingBadge';
import { NewBadge } from '../../badge/NewBadge';
import { StoreNotificationContentProps } from '../../../contents/store/Store.Notification';
import { MoreMenuButton } from '../MoreMenuButton/MoreMenuButton';

export interface HeaderNotificationButtonMenuProps {
  ContentArray: StoreNotificationContentProps[];
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

/**
 * @author
 * @function @HeaderNotificationButtonMenu
 **/

export const HeaderNotificationButtonMenu: FC<
  HeaderNotificationButtonMenuProps
> = (props) => {
  return (
    <Menu
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          background: '#28282880',
          mt: 1.43,
          width: '100%',
          maxWidth: 400,
          borderRadius: 2,
          overflow: 'visible',
          filter: 'drop-shadow(0px 0px 25px #000000)',
          backdropFilter: 'blur(50px)',
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
        key={0}
        disableRipple
        disableTouchRipple
        className="p-0 flex flex-col rounded-md bg-transparent cursor-default hover:bg-transparent text-white w-full"
      >
        <div className="flex flex-col w-full px-6 py-3">
          <div className="w-full text-left text-[18px] font-[600] truncate tracking-wide">
            What&apos;s New
          </div>
          <div className="w-full text-left text-[13px] opacity-90 tracking-wide">
            The latest releases from emotion
          </div>
        </div>
        <div className="flex pl-6 pr-[18px] pb-1 w-full justify-between items-center">
          <div className="flex items-center">
            <div className="text-[13px] truncate cursor-default tracking-wide font-[400] text-white">
              {props.ContentArray.length} items
            </div>
            <MoreMenuButton
              ClassName="ml-2"
              Orientation="horizontal"
              MenuContent={[
                {
                  label: 'Mark all as Unread',
                  icon: '/icons/notification-mark-as-read.svg',
                  onClick: () => {},
                },
                {
                  label: 'Remove all',
                  icon: '/icons/x-white-2.svg',
                  onClick: () => {},
                },
              ]}
            />
          </div>
          <Button
            className="px-2 m-0 cursor-default block truncate text-white button-text-lower tracking-wide rounded-md text-[12px] font-[400] opacity-90 hover:opacity-100 bg-transparent hover:bg-[#ffffff20]"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: '#ffffff75 !important',
              },
            }}
          >
            Mark all as Read
          </Button>
        </div>
      </MenuItem>
      {props.ContentArray.map((value, idx) => (
        <MenuItem
          key={idx + 1}
          className={`${
            props.ContentArray.length === idx + 1 ? 'mb-1' : ''
          } mx-1 px-2 rounded-md cursor-default text-white hover:bg-[#ffffff15]`}
        >
          <div className="w-full h-full flex">
            <div className="flex py-2 w-full items-center">
              {value.isRead === 'no' && (
                <div className="absolute left-0 pl-3">
                  <div className="bg-[#369eff] h-[6px] w-[6px] min-w-[6px] min-h-[6px] rounded-full" />
                </div>
              )}
              <div className="flex w-full pl-6">
                <div className="min-w-[50px] min-h-[50px] w-[50px] h-[50px] relative overflow-hidden">
                  <Image fill src={value.Image} className="rounded-md" alt="" />
                </div>
                <div className="pl-3 w-full h-full items-center overflow-hidden">
                  <div className="w-full text-left truncate text-[14px] font-[500]">
                    {value.Heading}
                  </div>
                  <div className="text-[13px] opacity-75 truncate">
                    {value.Description}
                  </div>
                </div>
              </div>
            </div>
            <div className="block pt-1">
              {value.Badge === 'hot' && <HotBadge />}
              {value.Badge === 'trending' && <TrendingBadge />}
              {value.Badge === 'new' && <NewBadge />}
            </div>
          </div>
        </MenuItem>
      ))}
    </Menu>
  );
};
