import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useCallback, useState } from 'react';
import { Button } from '@mui/material';
import { DiscoverBannerLightingDealContentProps } from '../../contents/home/discover/Home.Discover.Banner';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { ProductContextMenu } from '../button/ProductContextMenu';

interface IProps {
  ContentArray: DiscoverBannerLightingDealContentProps[];
  Badge: React.ReactNode;
  Label: string;
  Description: string;
}

export function DiscoverBannerDeal(props: IProps) {
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
    },
    {
      label: 'Add to cart',
      icon: '/icons/shopping-list-cart.svg',
    },
    {
      label: 'Save to wishlist',
      icon: '/icons/shopping-list-wishlist.svg',
    },
  ];

  return (
    <div className="relative flex w-full p-3 mt-8">
      <div className="relative w-full items-center space-x-5 flex bg-white/5 rounded-xl overflow-hidden">
        {/* Title */}
        <div className="flex flex-col space-y-4 text-white min-w-[300px] max-w-[300px] mx-auto w-full cursor-default py-10 pl-10">
          <div className="flex justify-start">{props.Badge}</div>
          <div className="flex flex-col w-full space-y-2">
            <div className="text-[30px] text-white tracking-wide font-[500] leading-[35px]">
              {props.Label}
            </div>
            <div className="text-[13px] text-white tracking-wide font-[300] opacity-[0.85]">
              {props.Description}
            </div>
          </div>
          <div className="pt-2 w-full justify-start flex">
            <Button
              className={`bg-white/5 hover:bg-white/10 h-8 z-[1] flex px-8 cursor-default items-center rounded-lg text-white button-text-lower`}
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: '#ffffff50 !important',
                },
              }}
            >
              <div className="flex space-x-2 items-center justify-center">
                <ChevronRightIcon className="h-4" />
                <p className="text-[12px] tracking-wide font-[400]">
                  See details
                </p>
              </div>
            </Button>
          </div>
        </div>
        {/* Content */}
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={16}
            wrapperTag="ul"
            className="relative h-full flex"
            style={{
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 40,
              margin: 0,
            }}
          >
            {props.ContentArray.map((value, idx) => (
              <SwiperSlide
                key={idx}
                tag="li"
                onClick={handleClick}
                onContextMenu={handleClick}
                className={`bg-${value.Color}-shadow text-white cursor-default group p-4 space-y-1 max-w-[220px] button-text-lower rounded-xl bg-white/5 hover:bg-white/10 transition-all`}
              >
                <div className="w-full flex flex-col relative">
                  <div className="relative w-full overflow-hidden">
                    <Image
                      height={240}
                      width={188}
                      className="rounded-xl"
                      src={value.Image}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        maxHeight: 240,
                        maxWidth: 188,
                      }}
                      alt=""
                    />
                  </div>
                  <div className="mt-2.5 text-[14px] font-[500] tracking-wide text-left w-full truncate">
                    {value.Heading}
                  </div>
                  <h6 className="mt-1 text-[13px] font-normal text-left w-full opacity-[0.75] leading-[18px] line-clamp-2">
                    {value.Description}
                  </h6>
                  <div className="block h-5 w-full" />
                  <div className="text-xs flex items-center space-x-2 pt-1">
                    <div className="py-[5px] px-[8px] flex space-x-2 bg-white/5 rounded-md">
                      <h6 className="line-through text-[12px] opacity-70">
                        {`₹${value.OriginalPrice}`}
                      </h6>
                      <h6 className="text-[13px]">{`₹${value.DiscountedPrice}`}</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <ProductContextMenu
            anchorEl={anchorEl}
            open={open}
            handleClose={handleClose}
            MenuContent={MenuContent}
            minWidth={220}
            TransformHorizontal={'center'}
            TransformVertical={'center'}
            AnchorHorizontal={'center'}
            AnchorVertical={'center'}
          />
        </>
      </div>
    </div>
  );
}
