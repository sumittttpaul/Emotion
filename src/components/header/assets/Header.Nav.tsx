import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { FC, useEffect, useState, MouseEvent } from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Collections_Link,
  Discover_Link,
  Offers_Link,
} from '../../../routerLinks/RouterLinks';
import Router from 'next/router';

interface IProps {
  open: boolean;
  onOpen: (event: MouseEvent<HTMLElement>) => void;
  onValueChange: (value: string) => void;
  Value: string;
}

const NavLabel = [
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

const ArrowVariant = {
  open: { transform: 'rotate(-180deg)' },
  closed: { transform: 'rotate(0deg)' },
};

const NonActiveContent = (value: string) => {
  if (value.toLowerCase() === 'wishlist') {
    return true;
  }
  if (value.toLowerCase() === 'cart') {
    return true;
  } else {
    return false;
  }
};

/**
 * @author
 * @function @HeaderNav
 **/

export const HeaderNav: FC<IProps> = (props) => {
  const [Arrow, setArrow] = useState('closed');

  useEffect(() => {
    if (props.open) {
      setArrow('open');
    } else {
      setArrow('closed');
    }
  }, [props.open]);

  return (
    <>
      <div className="hidden medium-screen:flex flex-col h-full">
        <ul className="flex flex-row space-x-2 h-full items-center">
          {NavLabel.map((value) => (
            <li key={value.label} className="relative box-border">
              <Button
                onClick={() => {
                  if (props.Value !== value.label) {
                    props.onValueChange(value.label);
                    Router.push(value.to);
                  }
                }}
                disableRipple
                disableFocusRipple
                disableTouchRipple
                aria-label="desktop-main-header-nav-button"
                className={`${
                  props.Value == value.label
                    ? 'text-[#ffffff] bg-[#202020] hover:bg-[#202020]'
                    : 'text-[#ffffff75] bg-transparent hove:bg-transparent'
                } cursor-default text-[12px] py-2 px-7 border-solid border-[2px] rounded-full border-[#1f1f1f] tracking-[0.6px] transition-all duration-300 font-normal hover:text-[#ffffff] button-text-lower`}
              >
                {value.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={props.onOpen}
        disableRipple
        disableFocusRipple
        disableTouchRipple
        aria-label="tablet-main-nav-button"
        className={`${
          Boolean(NonActiveContent(props.Value)) ? 'opacity-50 ' : 'opacity-100'
        } ${'flex hover:opacity-100 bg-[#202020] hover:bg-[#202020] cursor-default h-[40px] pl-4 pr-3 small-medium-screen:px-6 w-full medium-screen:hidden text-white rounded-lg button-text-lower'}`}
      >
        <div className="flex space-x-1 items-center">
          <h6 className="font-normal text-[12px] tracking-[0.6px]">
            {Boolean(NonActiveContent(props.Value)) ? 'Discover' : props.Value}
          </h6>
          <motion.div animate={Arrow} variants={ArrowVariant}>
            <ChevronDownIcon className="h-5 w-5 opacity-90" />
          </motion.div>
        </div>
      </Button>
    </>
  );
};
