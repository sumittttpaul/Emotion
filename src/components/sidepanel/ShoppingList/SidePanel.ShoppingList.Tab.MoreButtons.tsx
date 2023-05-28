import { Menu, MenuItem } from '@mui/material';
import React, { FC } from 'react';

export interface SidePanelShoppingListTabMoreButtonsProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

/**
 * @author
 * @function @SidePanelShoppingListTabMoreButtons
 **/

export const SidePanelShoppingListTabMoreButtons: FC<
  SidePanelShoppingListTabMoreButtonsProps
> = (props) => {
  return (
    <Menu
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          background: '#ffffff10',
          borderRadius: 2,
          width: 170,
          overflow: 'visible',
          filter: 'drop-shadow(0px 0px 0px #000000)',
          backdropFilter: 'blur(15px)',
          '.MuiMenu-list': {
            padding: '1px 0',
          },
          '.MuiMenuItem-root': {
            minHeight: 0,
          },
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff50 !important',
          },
        },
      }}
      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
    >
      <MenuItem
        key={1}
        className="m-1 py-2 rounded-md hover:bg-[#ffffff20] text-white text-left text-[13px] font-[400]"
      >
        Add all to Cart
      </MenuItem>
    </Menu>
  );
};
