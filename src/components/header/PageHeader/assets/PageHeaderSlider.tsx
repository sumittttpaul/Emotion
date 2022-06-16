import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { Button, Drawer } from '@mui/material';
import {
  About_Us_Link,
  Fanbook_Link,
  FAQ_Link,
  Help_Link,
  Store_Link,
} from '../../../../routerLinks/RouterLinks';

interface IProps {
  Cycle: boolean;
  onClose: () => void;
  Hvalue: number;
  Value: string;
  onValueChange: (value: string) => void;
}

const Links = [
  {
    label: 'Store',
    to: Store_Link,
  },
  {
    label: 'Fanbook',
    to: Fanbook_Link,
  },
  {
    label: 'FAQ',
    to: FAQ_Link,
  },
  {
    label: 'Help',
    to: Help_Link,
  },
  {
    label: 'About Us',
    to: About_Us_Link,
  },
];

/**
 * @author
 * @function @PageHeaderSlider
 **/

export const PageHeaderSlider: FC<IProps> = (props) => {
  const UlVariants: Variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0 },
    },
    closed: {
      transition: { staggerChildren: 0.07, staggerDirection: -1 },
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

  return (
    <Drawer
      open={props.Cycle}
      anchor={'top'}
      variant="temporary"
      className="sm:hidden w-full relative box-border overflow-y-auto scroll-smooth"
      sx={{
        '.MuiDrawer-paper': {
          background: '#2a2a2a',
          height: '100%',
          paddingTop: '45px',
        },
      }}
    >
      <motion.ul variants={UlVariants}>
        <div className="h-[1px] w-full my-5 bg-[rgba(255,255,255,0.10)]" />
        {Links.map((value, idx) => (
          <motion.li key={value.label} variants={LiVariants}>
            <Button
              aria-label="mobile-header-slider-button"
              disableFocusRipple
              onClick={() => {
                setTimeout(() => {
                  if (props.Value != value.label) {
                    props.onValueChange(value.label);
                  }
                  props.onClose();
                }, 200);
              }}
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                },
              }}
              className="text-white disabled:cursor-not-allowed disabled:text-white w-full opacity-[0.85] hover:opacity-100 transition-opacity ease-in whitespace-nowrap font-[350] text-sm tracking-[0.075em] h-full justify-start items-center py-4 px-14 button-text-lower"
            >
              {value.label}
            </Button>
            {idx === 4 ? (
              <></>
            ) : (
              <div className="h-[1px] w-[79%] mx-auto bg-[rgba(255,255,255,0.10)]" />
            )}
          </motion.li>
        ))}
      </motion.ul>
    </Drawer>
  );
};
