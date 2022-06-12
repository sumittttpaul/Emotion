import React, { FC, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Button, Drawer } from '@mui/material';
import Router from 'next/router';

interface IProps {
  Cycle: boolean;
  onClose: () => void;
  Hvalue: number;
}

/**
 * @author
 * @function @MobileHeaderSlider
 **/

const Links = [
  {
    label: 'Store',
    to: '',
  },
  {
    label: 'Fanbook',
    to: '',
  },
  {
    label: 'FAQ',
    to: '',
  },
  {
    label: 'Help',
    to: '',
  },
  {
    label: 'About Us',
    to: '',
  },
];

export const MobileHeaderSlider: FC<IProps> = (props) => {
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
          marginTop: '45px',
        },
      }}
    >
      <motion.ul variants={UlVariants}>
        <div className="h-[1px] w-full my-5 bg-[rgba(255,255,255,0.10)]" />
        {Links.map((value) => (
          <motion.li key={value.label} variants={LiVariants}>
            <Button
              disableFocusRipple
              onClick={() => {
                setTimeout(() => {
                  Router.push(value.to);
                  props.onClose();
                }, 200);
              }}
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                },
              }}
              className="text-white w-full opacity-[0.85] hover:opacity-100 transition-opacity ease-in whitespace-nowrap font-[350] text-sm tracking-[0.075em] h-full justify-start items-center py-4 px-14 button-text-lower"
            >
              {value.label}
            </Button>
            <div className="h-[1px] w-[79%] mx-auto bg-[rgba(255,255,255,0.10)]" />
          </motion.li>
        ))}
      </motion.ul>
    </Drawer>
  );
};
