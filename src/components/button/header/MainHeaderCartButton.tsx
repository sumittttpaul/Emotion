import { ShoppingCartIcon } from '@heroicons/react/solid';
import { Button, IconButton } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { TooltipDark } from '../../tooltip/TooltipDark';

interface IProps {
  Click: () => void;
  value: string;
}

const ActiveContent = (value: string) => {
  if (value.toLowerCase() === 'cart') {
    return true;
  } else {
    return false;
  }
};

/**
 * @author
 * @function @MainHeaderCartButton
 **/

export const MainHeaderCartButton: FC<IProps> = (props) => {
  return (
    <>
      <Button
        disableFocusRipple
        onClick={props.Click}
        aria-label="desktop-cart-button"
        className={`${
          Boolean(ActiveContent(props.value))
            ? 'opacity-100 hover:opacity-100'
            : 'opacity-80 header-button-hover'
        } ${'hidden md-900:block transition-all duration-300 text-white py-2.5 px-3 border border-solid border-[rgba(255,255,255,0.23)] rounded-md button-text-lower'}`}
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
          },
        }}
      >
        <div className="flex space-x-2">
          <ShoppingCartIcon
            className={`${
              Boolean(ActiveContent(props.value))
                ? 'opacity-100 hover:opacity-100'
                : 'header-icon-hover opacity-80'
            } ${'h-4 w-4'}`}
          />
          <h6 className="text-xs font-normal">Cart</h6>
        </div>
      </Button>
      <TooltipDark
        arrow
        placement="bottom"
        title={<h6 className="font-[400]">Cart</h6>}
      >
        <IconButton
          disableFocusRipple
          onClick={props.Click}
          aria-label="mobile-cart-button"
          className={`${
            Boolean(ActiveContent(props.value))
              ? 'opacity-100 hover:opacity-100'
              : 'opacity-80 header-button-hover'
          } ${'block md-900:hidden transition-all duration-300 button-text-lower h-full p-2.5 border border-solid border-[rgba(255,255,255,0.23)]'}`}
          sx={{
            borderRadius: '6px !important',
            '.MuiTouchRipple-child': {
              borderRadius: '0 !important',
              backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
            },
          }}
        >
          <ShoppingCartIcon
            className={`${
              Boolean(ActiveContent(props.value))
                ? 'opacity-100 hover:opacity-100'
                : 'opacity-80 header-icon-hover'
            } ${'h-4 w-4 text-white'}`}
          />
        </IconButton>
      </TooltipDark>
    </>
  );
};
