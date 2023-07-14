/* eslint-disable @typescript-eslint/no-empty-function */
import { Button } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { HomeWishlistContentProps } from 'contents/home/Home.ShoppingList';
import { ProductContextMenuProps } from 'components/button/ProductContextMenu';

const ProductContextMenu = dynamic<ProductContextMenuProps>(
  () => import('../../button/ProductContextMenu'),
  { ssr: false },
);

interface IProps {
  ContentArray: HomeWishlistContentProps[];
}

function SidePanelShoppingListTabWishlist(props: IProps) {
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
      label: 'Add to cart',
      icon: '/icons/shopping-list-cart.svg',
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
      {props.ContentArray.length ? (
        <div className="flex w-full flex-col pb-[60px]">
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
                      <div className="text-[13px] opacity-75">
                        {value.Price}
                      </div>
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
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-5 pt-[150px] opacity-50">
          <Image
            height={100}
            width={100}
            src="/vectors/empty-wishlist-vector-white.svg"
            alt=""
          />
          <p className="truncate text-[12px] font-[400] tracking-wide">
            You haven&apos;t saved anything yet
          </p>
        </div>
      )}
    </div>
  );
}

export default SidePanelShoppingListTabWishlist;
