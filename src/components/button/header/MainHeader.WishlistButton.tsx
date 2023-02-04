import { HeartIcon } from '@heroicons/react/solid';
import { Button, IconButton } from '@mui/material';
import React, { FC } from 'react';
import { TooltipDark } from '../../tooltip/TooltipDark';

interface IProps {
  Click: () => void;
  value: string;
}

const ActiveContent = (value: string) => {
  if (value.toLowerCase() === 'wishlist') {
    return true;
  } else {
    return false;
  }
};

/**
 * @author
 * @function @MainHeaderWishlistButton
 **/
export const MainHeaderWishlistButton: FC<IProps> = (props) => {
  return (
    <TooltipDark
      arrow
      placement="bottom"
      title={<h6 className="font-[400]">Wishlist</h6>}
    >
      <IconButton
        onClick={props.Click}
        disableFocusRipple
        aria-label="desktop-wishlist-button"
        className={`${
          Boolean(ActiveContent(props.value))
            ? 'opacity-100 hover:opacity-100'
            : 'opacity-70 header-button-hover'
        } ${'flex transition-all duration-300 text-white h-[47px] w-[47px] items-center justify-center rounded-lg button-text-lower bg-[#202020] hover:bg-[#202020]'}`}
        sx={{
          '.MuiTouchRipple-child': {
            borderRadius: '8px',
            backgroundColor: '#ffffff50 !important',
          },
        }}
      >
        {/* <div className="flex h-full w-full items-center"> */}
        <HeartIcon
          className={`${
            Boolean(ActiveContent(props.value))
              ? 'opacity-100 hover:opacity-100'
              : 'opacity-80 header-icon-hover'
          } ${'h-5 w-5'}`}
        />
        {/* <h6 className="text-xs font-normal">Wishlist</h6> */}
        {/* </div> */}
      </IconButton>
    </TooltipDark>
  );
};
