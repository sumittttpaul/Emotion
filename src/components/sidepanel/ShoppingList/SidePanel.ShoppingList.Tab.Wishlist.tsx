import { Button } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { FC, Fragment, MouseEvent, useCallback, useState } from 'react';
import { HomeWishlistContentProps } from '../../../contents/home/Home.ShoppingList';
import { ProductContextMenuProps } from '../../button/ProductContextMenu';

const ProductContextMenu = dynamic<ProductContextMenuProps>(
  () =>
    import('../../button/ProductContextMenu').then((x) => x.ProductContextMenu),
  { ssr: false }
);

interface IProps {
  ContentArray: HomeWishlistContentProps[];
}

/**
 * @author
 * @function @SidePanelShoppingListTabWishlist
 **/

export const SidePanelShoppingListTabWishlist: FC<IProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
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
    <div className="pb-3 px-1 w-full h-full flex flex-col relative">
      {props.ContentArray.length ? (
        <div className="flex flex-col w-full pb-[60px]">
          <Fragment>
            {props.ContentArray.map((value, idx) => (
              <Button
                key={idx}
                disableFocusRipple
                onClick={handleClick}
                onContextMenu={handleClick}
                className="cursor-default p-3 bg-transparent hover:bg-[#FFFFFF0A] text-white items-center justify-center relative rounded-lg button-text-lower"
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
                  <div className="pl-3 w-full h-full -space-y-[2px] items-center overflow-hidden">
                    <div className="w-full text-left truncate tracking-wide text-[14px] font-[500]">
                      {value.Heading}
                    </div>
                    <div className="flex w-full justify-start space-x-2">
                      <div className="text-[13px] opacity-75 truncate">
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
          </Fragment>
        </div>
      ) : (
        <div className="flex flex-col space-y-5 pt-[150px] h-full w-full items-center justify-center opacity-50">
          <Image
            height={100}
            width={100}
            src="/vectors/empty-wishlist-vector-white.svg"
            alt=""
          />
          <p className="text-[12px] font-[400] tracking-wide truncate">
            You haven&apos;t saved anything yet
          </p>
        </div>
      )}
    </div>
  );
};
