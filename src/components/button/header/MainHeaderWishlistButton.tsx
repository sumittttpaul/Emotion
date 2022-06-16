import { HeartIcon } from '@heroicons/react/solid';
import { Button, IconButton } from '@mui/material';
import React, { FC } from 'react';
import { TooltipDark } from '../../tooltip/TooltipDark';

interface IProps {
  Click: () => void;
}

/**
 * @author
 * @function @MainHeaderWishlistButton
 **/

export const MainHeaderWishlistButton: FC<IProps> = (props) => {
  return (
    <>
      <Button
        onClick={props.Click}
        disableFocusRipple
        aria-label="desktop-wishlist-button"
        className="hidden md-900:block header-button-hover transition-all duration-300 text-white py-2.5 px-3 border border-solid border-[rgba(255,255,255,0.23)] rounded-md button-text-lower opacity-80"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
          },
        }}
      >
        <div className="flex space-x-2">
          <HeartIcon className="h-4 w-4 opacity-80 header-icon-hover" />
          <h6 className="text-xs font-normal">Wishlist</h6>
        </div>
      </Button>
      <TooltipDark
        arrow
        placement="bottom"
        title={<h6 className="font-[400]">Wishlist</h6>}
      >
        <IconButton
          disableFocusRipple
          onClick={props.Click}
          aria-label="mobile-wishlist-button"
          className="block md-900:hidden opacity-80 header-button-hover transition-all duration-300 button-text-lower h-full p-2.5 border border-solid border-[rgba(255,255,255,0.23)]"
          sx={{
            borderRadius: '6px !important',
            '.MuiTouchRipple-child': {
              borderRadius: '0 !important',
              backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
            },
          }}
        >
          <HeartIcon className="h-4 w-4 opacity-80 header-icon-hover text-white" />
        </IconButton>
      </TooltipDark>
    </>
  );
};
