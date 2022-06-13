import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';

interface IProps {}

/**
 * @author
 * @function @MainHeaderNav
 **/

const NavLabel = [
  {
    name: 'Discover',
    to: '#',
    for: 'MainTab1',
  },
  {
    name: 'Offers',
    to: '#',
    for: 'MainTab2',
  },
  {
    name: 'Collections',
    to: '#',
    for: 'MainTab3',
  },
];

const ArrowVariant = {
  open: { transform: 'rotate(-180deg)' },
  closed: { transform: 'rotate(0deg)' },
};

export const MainHeaderNav: FC<IProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedValue, setSelectedValue] = useState('MainTab1');
  const [Arrow, setArrow] = useState('closed');

  const open = Boolean(anchorEl);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setArrow('open');
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setArrow('closed');
    setAnchorEl(null);
  };
  const handleCloseClick = () => {
    setTimeout(() => {
      setAnchorEl(null);
      setArrow('closed');
    }, 150);
  };
  return (
    <>
      <div className="mainNav hidden sm:flex sm:ml-6 md:ml-0 flex-col">
        <input
          value="MainTab1"
          checked={selectedValue === 'MainTab1'}
          onChange={handleChange}
          id="MainTab1"
          type="radio"
          name="main-tab-control"
          className="hidden"
          aria-label="MainTab1"
        />
        <input
          value="MainTab2"
          checked={selectedValue === 'MainTab2'}
          onChange={handleChange}
          id="MainTab2"
          type="radio"
          name="main-tab-control"
          className="hidden"
          aria-label="MainTab2"
        />
        <input
          value="MainTab3"
          checked={selectedValue === 'MainTab3'}
          onChange={handleChange}
          id="MainTab3"
          type="radio"
          name="main-tab-control"
          className="hidden"
          aria-label="MainTab3"
        />
        <ul className="flex flex-row space-x-3">
          {NavLabel.map((value) => (
            <li key={value.name} className="relative box-border">
              <label htmlFor={value.for} role="button">
                <Button
                  component="a"
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  aria-label="main-header-button"
                  className="opacity-50 hover:opacity-75 transition-opacity ease-in font-normal text-white button-text-lower"
                >
                  {value.name}
                </Button>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <Button
        disableRipple
        disableFocusRipple
        disableTouchRipple
        onClick={handleClick}
        aria-label="mobile-main-nav-button"
        className="ml-[20%] flex sm:hidden opacity-90 text-white button-text-lower"
      >
        <div className="flex space-x-2 items-center">
          <h6 className="font-normal">Discover</h6>
          <motion.div animate={Arrow} variants={ArrowVariant}>
            <ChevronDownIcon className="h-5 w-5 opacity-90" />
          </motion.div>
        </div>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            background: '#202020',
            mt: 1,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(255,255,255,0.02))',
            '.MuiMenu-list': {
              padding: '1px 0',
            },
            '.MuiMenuItem-root': {
              minHeight: 0,
            },
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(255, 255, 255, 0.3) !important',
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <MenuItem
          key={1}
          onClick={handleCloseClick}
          className="m-1.5 rounded-md hover:bg-[rgba(255,255,255,0.05)]"
        >
          <h6 className="text-white text-xs font-normal">hello I AM YOUR CONTENT</h6>
        </MenuItem>
        <MenuItem
          key={2}
          onClick={handleCloseClick}
          className="m-1.5 rounded-md hover:bg-[rgba(255,255,255,0.05)]"
        >
          <h6 className="text-white text-xs font-normal">hello I AM YOUR CONTENT</h6>
        </MenuItem>
        <MenuItem
          key={3}
          onClick={handleCloseClick}
          className="m-1.5 rounded-md hover:bg-[rgba(255,255,255,0.05)]"
        >
          <h6 className="text-white text-xs font-normal">hello I AM YOUR CONTENT</h6>
        </MenuItem>
      </Menu>
    </>
  );
};
