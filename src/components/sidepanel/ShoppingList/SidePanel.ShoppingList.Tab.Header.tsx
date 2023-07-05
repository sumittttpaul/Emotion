/* eslint-disable @typescript-eslint/no-empty-function */
import { Button } from '@mui/material';
import React, { FC } from 'react';
import { HomeWishlistContentProps } from '../../../contents/home/Home.ShoppingList';
import { MoreMenuButton } from '../../button/MoreMenuButton/MoreMenuButton';

interface IProps {
  ContentArray: HomeWishlistContentProps[];
  MoreMenuValue: string;
}

/**
 * @author
 * @function @SidePanelShoppingListTabHeader
 **/

export const SidePanelShoppingListTabHeader: FC<IProps> = (props) => {
  const MenuContent = (MoreMenuValue: string) => {
    if (MoreMenuValue === 'wishlist') {
      return [
        {
          label: 'Add all to Cart',
          icon: '/icons/shopping-list-cart.svg',
          onClick: () => {},
        },
      ];
    } else {
      return [
        {
          label: 'Move all to Wishlist',
          icon: '/icons/shopping-list-wishlist.svg',
          onClick: () => {},
        },
      ];
    }
  };
  return (
    <div className="flex w-full justify-between pl-4 pr-2 pb-2 items-center">
      <div className="flex items-center">
        <div className="text-[13px] truncate cursor-default tracking-wide font-[400] text-white">
          {props.ContentArray.length} items
        </div>
        <MoreMenuButton
          ClassName="ml-2"
          Orientation="horizontal"
          MenuContent={MenuContent(props.MoreMenuValue)}
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
