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

export interface PageHeaderSliderProps {
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

export const PageHeaderSlider: FC<PageHeaderSliderProps> = (props) => {
  return (
    <Drawer
      open={props.Cycle}
      anchor={'top'}
      variant="temporary"
      className="sm:hidden z-[1300] w-full relative box-border overflow-y-auto scroll-smooth"
      sx={{
        '.MuiDrawer-paper': {
          background: '#1a1a1a',
          height: '100%',
          paddingTop: '45px',
          zIndex: 1300,
        },
      }}
    >
      <motion.ul>
        <div className="h-[1px] w-full my-5 bg-[#ffffff1a]" />
        {Links.map((value, idx) => (
          <motion.li key={value.label}>
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
                  backgroundColor: '#ffffff80 !important',
                },
              }}
              className="text-white bg-transparent hover:bg-transparent disabled:cursor-not-allowed disabled:text-white w-full opacity-[0.75] hover:opacity-100 transition-opacity ease-in whitespace-nowrap font-[350] text-sm tracking-[0.075em] h-full justify-start items-center py-4 px-14 button-text-lower"
            >
              {value.label}
            </Button>
            {idx === 4 ? (
              <></>
            ) : (
              <div className="h-[1px] w-[79%] mx-auto bg-[#ffffff1a]" />
            )}
          </motion.li>
        ))}
      </motion.ul>
    </Drawer>
  );
};
