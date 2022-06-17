import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Collections_Link,
  Discover_Link,
  Offers_Link,
} from '../../../../routerLinks/RouterLinks';
import NextLink from 'next/link';

interface IProps {
  open: boolean;
  onOpen: () => void;
  onValueChange: (value: string) => void;
  Value: string;
}

const NavLabel = [
  {
    label: 'Discover',
    to: Discover_Link,
    for: 'MainTab1',
  },
  {
    label: 'Offers',
    to: Offers_Link,
    for: 'MainTab2',
  },
  {
    label: 'Collections',
    to: Collections_Link,
    for: 'MainTab3',
  },
];

const ArrowVariant = {
  open: { transform: 'rotate(-180deg)' },
  closed: { transform: 'rotate(0deg)' },
};

const ActiveContent = (value: string) => {
  if (value === 'MainTab1') {
    return 'Discover';
  }
  if (value === 'MainTab2') {
    return 'Offers';
  }
  if (value === 'MainTab3') {
    return 'Collections';
  } else {
    return 'Discover';
  }
};

/**
 * @author
 * @function @MainHeaderNav
 **/

export const MainHeaderNav: FC<IProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [Arrow, setArrow] = useState('closed');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onValueChange(ActiveContent(event.target.value));
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    if (props.Value === 'Discover') {
      setSelectedValue('MainTab1');
    }
    if (props.Value === 'Offers') {
      setSelectedValue('MainTab2');
    }
    if (props.Value === 'Collections') {
      setSelectedValue('MainTab3');
    }
    if (props.open) {
      setArrow('open');
    } else {
      setArrow('closed');
    }
  }, [props.open, props.Value]);
  return (
    <>
      <div className="mainNav hidden sm:flex sm:ml-6 md-900:ml-0 flex-col">
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
            <li key={value.label} className="relative box-border">
              <label htmlFor={value.for} role="button">
                <NextLink href={value.to} passHref>
                  <Button
                    onClick={() => {
                      if (props.Value != value.label) {
                        props.onValueChange(value.label);
                      }
                    }}
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                    aria-label="main-header-button"
                    className="text-[13.5px] opacity-50 hover:opacity-75 transition-all duration-200 font-normal text-white button-text-lower"
                  >
                    {value.label}
                  </Button>
                </NextLink>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={props.onOpen}
        disableRipple
        disableFocusRipple
        disableTouchRipple
        aria-label="mobile-main-nav-button"
        className="ml-[20%] flex sm:hidden opacity-100 text-white button-text-lower"
      >
        <div className="flex space-x-2 items-center">
          <h6 className="font-normal text-[13.5px]">{props.Value}</h6>
          <motion.div animate={Arrow} variants={ArrowVariant}>
            <ChevronDownIcon className="h-5 w-5 opacity-90" />
          </motion.div>
        </div>
      </Button>
    </>
  );
};
