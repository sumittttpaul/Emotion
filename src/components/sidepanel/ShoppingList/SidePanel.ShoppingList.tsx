import Image from 'next/image';
import { Button } from '@mui/material';
import SidePanelShoppingListTab from './SidePanel.ShoppingList.Tab';

function SidePanelShoppingList() {
  return (
    <div className="mx-2 mb-2 mt-2.5 h-full w-full overflow-hidden rounded-xl bg-[#181818]">
      <div className="flex h-full w-full flex-col overflow-hidden">
        <Button
          className="button-text-lower group my-5 flex w-full cursor-pointer items-center justify-start space-x-4 bg-transparent p-0 pl-6 pr-5 text-white hover:bg-transparent"
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
          <p className="trunacate w-full text-left text-[14px] font-[600] tracking-wide text-white opacity-60 group-hover:opacity-100 group-hover:transition-opacity">
            Shopping List
          </p>
          <Image
            height={22}
            width={22}
            src="/icons/arrow-right.svg"
            className="opacity-60 group-hover:opacity-100 group-hover:transition-opacity"
            alt=""
          />
        </Button>
        <div className="flex h-full w-full">
          <SidePanelShoppingListTab />
        </div>
      </div>
    </div>
  );
}

export default SidePanelShoppingList;
