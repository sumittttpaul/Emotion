import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import { SidePanelShoppingListTab } from './SidePanel.ShoppingList.Tab';

interface IProps {}

/**
 * @author
 * @function @SidePanelShoppingList
 **/

export const SidePanelShoppingList: FC<IProps> = (props) => {
  return (
    <div className="mx-2 mt-2.5 mb-2 bg-[#181818] rounded-xl w-full h-full overflow-hidden">
      <div className="flex flex-col w-full h-full overflow-hidden">
        <Button
          className="text-white group p-0 my-5 pl-6 pr-5 button-text-lower cursor-pointer flex space-x-4 justify-start items-center w-full bg-transparent hover:bg-transparent"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff00 !important',
            },
          }}
        >
          <Image
            height={22}
            width={22}
            className="opacity-60 group-hover:opacity-100 group-hover:transition-opacity"
            src="/icons/shopping-cart-fill.svg"
            alt=""
          />
          <p className="opacity-60 group-hover:opacity-100 group-hover:transition-opacity trunacate text-[14px] text-white tracking-wide font-[600] w-full text-left">
            Shopping List
          </p>
          <Image
            height={22}
            width={22}
            src="/icons/arrow-right.svg"
            className="group-hover:opacity-100 opacity-60 group-hover:transition-opacity"
            alt=""
          />
        </Button>
        <div className="flex w-full h-full">
          <SidePanelShoppingListTab />
        </div>
      </div>
    </div>
  );
};
