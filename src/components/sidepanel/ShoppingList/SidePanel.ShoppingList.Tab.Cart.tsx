/* eslint-disable @typescript-eslint/no-empty-function */
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useCallback, useState } from 'react';
import { HomeCartContentProps } from 'contents/home/Home.ShoppingList';
import { ProductContextMenuProps } from 'components/button/ProductContextMenu';

const ProductContextMenu = dynamic<ProductContextMenuProps>(
  () => import('components/button/ProductContextMenu'),
  { ssr: false },
);

export interface SidePanelShoppingListTabCartProps {
  ContentArray: HomeCartContentProps[];
}

function SidePanelShoppingListTabCart(
  props: SidePanelShoppingListTabCartProps,
) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // synthetic event
    switch (event.type) {
      case 'contextmenu':
        setAnchorEl(event.currentTarget);
        break;
    }
    // native event
    switch (event.nativeEvent.button) {
      case 2:
        setAnchorEl(event.currentTarget);
        break;
    }
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MenuContent = [
    {
      label: 'Open',
      icon: '/icons/open-link.svg',
      onClick: () => {},
    },
    {
      label: 'Save to wishlist',
      icon: '/icons/shopping-list-wishlist.svg',
      onClick: () => {},
    },
    {
      label: 'Remove',
      icon: '/icons/x-white-2.svg',
      onClick: () => {},
    },
  ];

  return (
    <div className="relative flex h-full w-full flex-col px-1 pb-3">
      <div className="flex w-full flex-col space-y-3">
        <div className="flex h-full w-full px-3">
          <p className="flex items-start text-[14px] font-[400] tracking-wide">
            Total :&nbsp;
          </p>
          <p className="block text-[18px] font-[500] tracking-wide">₹2079.00</p>
        </div>
        <Button
          className="button-text-lower w-full rounded-md bg-[#ffffff10] text-[13px] font-normal text-white hover:bg-[#ffffff20]"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff40 !important',
            },
          }}
        >
          Checkout
        </Button>
      </div>
      <div className="flex w-full flex-col pb-[60px] pt-3">
        <>
          {props.ContentArray.map((value, idx) => (
            <Button
              key={idx}
              disableFocusRipple
              onClick={handleClick}
              onContextMenu={handleClick}
              className="button-text-lower relative cursor-default items-center justify-center rounded-lg bg-transparent p-3 text-white hover:bg-[#FFFFFF0A]"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: '#ffffff30 !important',
                },
              }}
            >
              <div className="flex w-full items-center justify-center">
                <Image
                  height={50}
                  width={50}
                  style={{
                    height: 50,
                    width: 50,
                    minHeight: 50,
                    minWidth: 50,
                    maxHeight: 50,
                    maxWidth: 50,
                    borderRadius: 6,
                  }}
                  src={value.Image}
                  alt=""
                />
                <div className="h-full w-full items-center -space-y-[2px] overflow-hidden pl-3">
                  <div className="w-full truncate text-left text-[14px] font-[500] tracking-wide">
                    {value.Heading}
                  </div>
                  <div className="flex w-full justify-start space-x-2">
                    <div className="truncate text-[13px] opacity-75">
                      {value.Category}
                    </div>
                    <div className="text-[13px] opacity-75">•</div>
                    <div className="text-[13px] opacity-75">{value.Price}</div>
                  </div>
                </div>
              </div>
            </Button>
          ))}
          <ProductContextMenu
            anchorEl={anchorEl}
            open={open}
            handleClose={handleClose}
            MenuContent={MenuContent}
          />
        </>
      </div>
    </div>
  );
}

export default SidePanelShoppingListTabCart;
