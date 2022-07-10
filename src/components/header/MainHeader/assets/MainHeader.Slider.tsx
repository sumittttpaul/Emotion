import React, { FC, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@mui/material';
import {
  Collections_Link,
  Discover_Link,
  Offers_Link,
} from '../../../../routerLinks/RouterLinks';
import NextLink from 'next/link';

export interface MainHeaderSliderProps {
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

const SliderVariant = {
  open: { height: 250, display: 'block' },
  closed: { height: 0, display: 'none' },
};
const UlVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};
const LiVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.05,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const DisableButton = (props: string, value: string) => {
  if (props === value) {
    return true;
  } else {
    return false;
  }
};

const ActiveContent = (props: string, value: string) => {
  if (props === value) {
    return 'opacity-100 cursor-default';
  } else {
    return 'opacity-50';
  }
};

/**
 * @author
 * @function @MainHeaderSlider
 **/

export const MainHeaderSlider: FC<MainHeaderSliderProps> = (props) => {
  const [Slider, setSlider] = useState('closed');
  useEffect(() => {
    if (props.open) {
      setSlider('open');
    } else {
      setSlider('closed');
    }
  }, [props.open]);
  return (
    <>
      {props.open ? (
        <div
          onClick={props.onClose}
          className="absolute sm:hidden h-screen w-full top-full bg-black backdrop-blur-md opacity-75 left-0"
        />
      ) : (
        <></>
      )}
      <motion.div
        className="bg-transparent absolute left-0 top-full w-full sm:hidden"
        animate={Slider}
        variants={SliderVariant}
      >
        <motion.ul
          variants={UlVariants}
          className="py-5 sm:hidden bg-[#121212]"
        >
          {Links.map((value, idx) => (
            <motion.li key={value.label} variants={LiVariants}>
              <div className="w-full block relative h-[10px] min-h-[10px]" />
              <NextLink href={value.to} passHref>
                <Button
                  aria-label="mobile-header-slider-button"
                  disableFocusRipple
                  disableRipple={Boolean(
                    DisableButton(props.Value, value.label)
                  )}
                  disableTouchRipple={Boolean(
                    DisableButton(props.Value, value.label)
                  )}
                  onClick={() => {
                    setTimeout(() => {
                      if (props.Value != value.label) {
                        props.onValueChange(value.label);
                        props.onClose();
                      }
                    }, 200);
                  }}
                  sx={{
                    '.MuiTouchRipple-child': {
                      backgroundColor: '#ffffff80 !important',
                    },
                  }}
                  className={`${ActiveContent(
                    props.Value,
                    value.label
                  )} ${'text-white hover:opacity-100 bg-transparent hover:bg-transparent disabled:cursor-not-allowed disabled:text-white w-full opacity-50 transition-opacity ease-in whitespace-nowrap font-normal text-[13px] h-full justify-start items-center py-2.5 px-14 button-text-lower'}`}
                >
                  {value.label}
                </Button>
              </NextLink>
              <div className="w-full block relative h-[10px] min-h-[10px]" />
              {idx === 2 ? (
                <></>
              ) : (
                <div className="h-[1px] w-[79%] mx-auto bg-[#ffffff1a]" />
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
};
