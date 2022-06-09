import { Button, Menu, MenuItem } from '@mui/material';
import React, { FC, Fragment, useState } from 'react';
import Image from 'next/image';
import { Square_BlurDataURL } from '../loader/BlurDataURL';
import { useAuth } from '../../firebase/AuthProvider';

interface IProps {}

const HeaderLinks = [
  'Offers',
  'Trending',
  'Contact Us',
  'Track Order',
  'About us',
];

/**
 * @author
 * @function @HeaderHome
 **/

export const HeaderHome: FC<IProps> = (props) => {
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
  const handleHeaderLinks = (value: string) => {
    if (value === 'Offers') {
      alert('Offers');
      // funcitons
    }
    if (value === 'Contact Us') {
      alert('Contact Us');
      // funcitons
    }
    if (value === 'Track Order') {
      alert('Track Order');
      // funcitons
    }
    if (value === 'About us') {
      alert('About us');
      // functions
    }
  };
  return (
    <div className="w-full flex relative bg-[#2a2a2a]">
      <div className="flex w-full justify-between max-w-[1440px] mx-auto">
        <div className="flex relative h-full">
          <div className="relative flex p-[7px]">
            <Image
              height={35}
              width={35}
              className="opacity-70"
              src="/agewear.svg"
              alt="logo-svg"
              placeholder="blur"
              blurDataURL={Square_BlurDataURL}
            />
          </div>
          <nav className="flex h-full">
            <ul className="flex flex-row h-full">
              {HeaderLinks.map((label) => {
                return (
                  <li>
                    <Button
                      key={label}
                      onClick={() => {
                        setTimeout(() => {
                          handleHeaderLinks(label);
                        }, 150);
                      }}
                      className="text-[#CCC] whitespace-nowrap font-normal text-[12px] tracking-[0.075em] h-full flex items-center px-[10px] button-text-lower"
                      href=""
                    >
                      {label}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex relative">
          {user ? (
            <Fragment>
              <Button
                onClick={handleClick}
                className="p-0 inline-flex button-text-lower h-full px-4"
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                  },
                }}
              >
                <div className="relative flex space-x-[12.5px] items-center">
                  <Image
                    height={27}
                    width={27}
                    className="rounded-[50%]"
                    placeholder="blur"
                    blurDataURL={Square_BlurDataURL}
                    src={`${user.photoURL}`}
                  />

                  <h6 className="text-white whitespace-nowrap font-[350] text-[12px]">
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
                    background: 'rgba(255,255,255,0.95)',
                    mt: 0.6,
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    '.MuiMenu-list': {
                      minHeight: 0,
                      padding: '1px 0',
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
                      />
                    </div>
                    <div className="relative">
                      <h6 className="text-[15px] font-[490] font-sans text-black">{`${user.displayName}`}</h6>
                      <h6 className="text-[11px] font-normal text-black opacity-90">{`${user.email}`}</h6>
                      <div>
                        <Button className="mt-[8px] p-[2px] relative block bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.09)] button-text-lower font-[400] text-black text-[11.5px]">
                          Sign out
                        </Button>
                      </div>
                    </div>
                  </div>
                </MenuItem>
                <div className="h-[1px] w-full bg-[rgba(0,0,0,0.05)]" />
                <MenuItem
                  onClick={handleCloseClick}
                  className="m-1 rounded-md hover:bg-[rgba(0,0,0,0.05)]"
                >
                  <div className="flex relative space-x-[10px]">
                    <Image height={17} width={17} src="/icons/folder.svg" />
                    <h6 className="text-[14px] font-sans font-[400] text-black">
                      Manage your account
                    </h6>
                  </div>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseClick}
                  className="m-1 rounded-md hover:bg-[rgba(0,0,0,0.05)]"
                >
                  <div className="flex relative space-x-[10px]">
                    <Image height={18} width={18} src="/icons/bell.svg" />
                    <h6 className="text-[14px] font-sans font-[400] text-black">
                      Show notificatons
                    </h6>
                  </div>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseClick}
                  className="m-1 rounded-md hover:bg-[rgba(0,0,0,0.05)]"
                >
                  <div className="flex relative space-x-[10px]">
                    <Image
                      height={17}
                      width={17}
                      src="/icons/shopping-bag.svg"
                    />
                    <h6 className="text-[14px] font-sans font-[400] text-black">
                      View all orders
                    </h6>
                  </div>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseClick}
                  className="m-1 rounded-md hover:bg-[rgba(0,0,0,0.05)]"
                >
                  <div className="flex relative space-x-[10px]">
                    <Image height={17} width={17} src="/icons/gift.svg" />
                    <h6 className="text-[14px] font-sans font-[400] text-black">
                      Redeem code or gift cards
                    </h6>
                  </div>
                </MenuItem>
              </Menu>
            </Fragment>
          ) : (
            <Button
              className="p-0 inline-flex button-text-lower h-full px-4"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                },
              }}
            >
              <div className="relative flex space-x-[12.5px] items-center">
                <Image
                  height={20}
                  width={20}
                  className="opacity-70"
                  placeholder="blur"
                  blurDataURL={Square_BlurDataURL}
                  src="/icons/user-fill.svg"
                />
                <h6 className="text-white whitespace-nowrap font-[350] text-[12px]">
                  Login
                </h6>
              </div>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
