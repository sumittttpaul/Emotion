import { Button, IconButton } from '@mui/material';
import React, { FC, useState, MouseEvent } from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { StoreWishlistContentProps } from '../../../contents/store/Store.ShoppingList';
import dynamic from 'next/dynamic';
import { SidePanelShoppingListTabMoreButtonsProps } from './SidePanel.ShoppingList.Tab.MoreButtons';

interface IProps {
  ContentArray: StoreWishlistContentProps[];
}

const SidePanelShoppingListTabMoreButtons =
  dynamic<SidePanelShoppingListTabMoreButtonsProps>(() =>
    import('./SidePanel.ShoppingList.Tab.MoreButtons').then(
      (x) => x.SidePanelShoppingListTabMoreButtons
    )
  );

/**
 * @author
 * @function @SidePanelShoppingListTabHeader
 **/

export const SidePanelShoppingListTabHeader: FC<IProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex w-full justify-between pl-4 pr-2 pb-2 items-center">
      <div className="flex items-center">
        <div className="text-[13px] truncate cursor-default tracking-wide font-[400] text-white">
          {props.ContentArray.length} items
        </div>
        <IconButton
          disableFocusRipple
          onClick={handleClick}
          className="p-1 ml-2 cursor-default block text-white items-center justify-center rounded-md opacity-75 hover:opacity-100 bg-transparent hover:bg-[#ffffff15]"
          sx={{
            '.MuiTouchRipple-child': {
              borderRadius: '2px',
              backgroundColor: '#ffffff40 !important',
            },
          }}
        >
          <DotsHorizontalIcon className="h-5" />
        </IconButton>
        <SidePanelShoppingListTabMoreButtons
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
      </div>
      <Button
        className="px-2 m-0 cursor-default block truncate text-white button-text-lower tracking-wide rounded-md text-[12px] font-[400] opacity-75 hover:opacity-100 bg-transparent hover:bg-[#ffffff10]"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff40 !important',
          },
        }}
      >
        Remove all
      </Button>
    </div>
  );
};
