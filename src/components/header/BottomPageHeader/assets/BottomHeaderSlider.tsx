import React, { FC, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@mui/material';
import { Collections_Link, Discover_Link, Offers_Link } from '../../../../routerLinks/RouterLinks';

interface IProps {
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
  open: { height: 250 },
  closed: { height: 0 },
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
    return 'opacity-90 hover:opacity-90';
  } else {
    return 'opacity-50 hover:opacity-75';
  }
};

/**
 * @author
 * @function @BottomHeaderSlider
 **/

export const BottomHeaderSlider: FC<IProps> = (props) => {
  const [Slider, setSlider] = useState('closed');
  useEffect(() => {
    if (props.open) {
      setSlider('open');
    } else {
      setSlider('closed');
    }
  }, [props.open]);
  return (
    <motion.div
    className="bg-transparent w-full sm:hidden"
    animate={Slider}
    variants={SliderVariant}
    >
      <motion.ul variants={UlVariants} className="py-5 sm:hidden">
        {Links.map((value) => (
          <motion.li key={value.label} variants={LiVariants}>
            <div className="w-full block relative h-[10px] min-h-[10px]" />
            <Button
              aria-label="mobile-header-slider-button"
              disableFocusRipple
              disabled={Boolean(DisableButton(props.Value, value.label))}
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
                  backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                },
              }}
              className={`${ActiveContent(
                props.Value,
                value.label
              )} ${'text-white disabled:text-white w-full opacity-50 transition-opacity ease-in whitespace-nowrap font-normal text-[13px] h-full justify-start items-center py-2.5 px-14 button-text-lower'}`}
            >
              {value.label}
            </Button>
            <div className="w-full block relative h-[10px] min-h-[10px]" />
            <div className="h-[1px] w-[79%] mx-auto bg-[rgba(255,255,255,0.10)]" />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
