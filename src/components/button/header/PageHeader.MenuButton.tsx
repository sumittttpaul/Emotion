import { IconButton } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IProps {
  onClick: () => void;
  Cycle: boolean;
}

const path01Variants = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 5.5L24 5.5' },
};

const path02Variants = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L15 14.5' },
};

/**
 * @author
 * @function @PageHeaderMenuButton
 **/

export const PageHeaderMenuButton: FC<IProps> = (props) => {
  const [animation, setAnimation] = useState('closed');
  useEffect(() => {
    if (!props.Cycle) {
      setAnimation('moving');
      setTimeout(() => {
        setAnimation('closed');
      }, 200);
    } else {
      setAnimation('moving');
      setTimeout(() => {
        setAnimation('open');
      }, 200);
    }
  }, [props.Cycle]);
  return (
    <IconButton
      disableFocusRipple
      className="relative flex p-0 sm:hidden"
      onClick={props.onClick}
      sx={{
        borderRadius: '0 !important',
        '.MuiTouchRipple-child': {
          borderRadius: '0 !important',
          backgroundColor: '#ffffff80 !important',
        },
      }}
    >
      <div className="h-full p-[13.3px] flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <motion.path
            stroke="#FFFFFF"
            animate={animation}
            variants={path01Variants}
          />
          <motion.path
            stroke="#FFFFFF"
            animate={animation}
            variants={path02Variants}
          />
        </svg>
      </div>
    </IconButton>
  );
};
