import { ShoppingCartIcon } from '@heroicons/react/solid';
import { Button, IconButton } from '@mui/material';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @CartButtonDark
 **/

export const CartButtonDark: FC<IProps> = (props) => {
  return (
    <>
      <Button
        aria-label="desktop-cart-button"
        className="hidden md-900:block text-white py-2.5 px-3 border border-solid border-[rgba(255,255,255,0.23)] rounded-md button-text-lower opacity-80"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
          },
        }}
      >
        <div className="flex space-x-2">
          <ShoppingCartIcon className="h-4 w-4 opacity-80" />
          <h6 className="text-xs font-normal">Cart</h6>
        </div>
      </Button>
      <IconButton
        aria-label="mobile-cart-button"
        className="block md-900:hidden opacity-80 button-text-lower h-full p-2.5 border border-solid border-[rgba(255,255,255,0.23)]"
        sx={{
          borderRadius: '6px !important',
          '.MuiTouchRipple-child': {
            borderRadius: '0 !important',
            backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
          },
        }}
      >
        <ShoppingCartIcon className="h-4 w-4 opacity-80 text-white" />
      </IconButton>
    </>
  );
};
