/* eslint-disable @typescript-eslint/no-empty-function */
import { Button } from '@mui/material';
import { HomeWishlistContentProps } from 'contents/home/Home.ShoppingList';
import MoreMenuButton from 'components/button/MoreMenuButton/MoreMenuButton';

interface IProps {
  ContentArray: HomeWishlistContentProps[];
  MoreMenuValue: string;
}

function SidePanelShoppingListTabHeader(props: IProps) {
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
    <div className="flex w-full items-center justify-between pb-2 pl-4 pr-2">
      <div className="flex items-center">
        <div className="cursor-default truncate text-[13px] font-[400] tracking-wide text-white">
          {props.ContentArray.length} items
        </div>
        <MoreMenuButton
          ClassName="ml-2"
          Orientation="horizontal"
          MenuContent={MenuContent(props.MoreMenuValue)}
        />
      </div>
      <Button
        className="button-text-lower m-0 block cursor-default truncate rounded-md bg-transparent px-2 text-[12px] font-[400] tracking-wide text-white opacity-75 hover:bg-[#ffffff10] hover:opacity-100"
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
}

export default SidePanelShoppingListTabHeader;
