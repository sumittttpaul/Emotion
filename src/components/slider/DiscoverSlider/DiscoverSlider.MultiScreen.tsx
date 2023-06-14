import { DiscoverSliderContentProps } from '../../../contents/store/discover/Store.Discover.Slider';
import React, {
  Dispatch,
  FC,
  Fragment,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  MouseEvent,
} from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { ProductContextMenu } from '../../button/ProductContextMenu';

const HeadingStyle =
  'text-[14px] font-[500] tracking-wide text-left w-full truncate';
const DescriptionStyle =
  'text-[13px] font-normal text-left w-full opacity-[0.75] leading-[18px] line-clamp-2';
const DiscountStyle =
  'bg-primary-blue-rgb font-[600] text-[11px] py-[5px] px-[10px] mr-[2px] rounded-md';
const OriginalPriceStyle = ' line-through text-[12px] opacity-70';
const DiscountedPriceStyle = ' text-[13px]';
const ImageStyle = 'rounded-xl';

export interface DiscoverSliderBrowserProps {
  ContentArray: DiscoverSliderContentProps[];
  sliderRef: RefObject<HTMLElement>;
  Wishlist: number;
  setWishlist: Dispatch<SetStateAction<number>>;
  setLeftDisabled: Dispatch<SetStateAction<boolean>>;
  setRightDisabled: Dispatch<SetStateAction<boolean>>;
}

export const DiscoverSliderBrowser: FC<DiscoverSliderBrowserProps> = (
  props
) => {
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

  const ListenToSliderScroll = () => {
    const slider = props.sliderRef.current;
    if (slider) {
      if (slider.scrollLeft === 0) {
        props.setLeftDisabled(true);
      } else {
        props.setLeftDisabled(false);
      }
      let maxScroll = slider.scrollWidth - slider.offsetWidth;
      if (slider.scrollLeft === maxScroll) {
        props.setRightDisabled(true);
      } else {
        props.setRightDisabled(false);
      }
    }
  };

  useEffect(() => {
    const slider = props.sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', ListenToSliderScroll);
    }
    return () => {
      if (slider) slider.removeEventListener('scroll', ListenToSliderScroll);
    };
  });

  useEffect(() => {
    const slider = props.sliderRef.current;
    if (slider) {
      if (slider.scrollLeft === 0) props.setLeftDisabled(true);
      else props.setLeftDisabled(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    <div className="flex w-full box-border">
      <Fragment>
        <ScrollContainer
          vertical={false}
          hideScrollbars={true}
          innerRef={props.sliderRef}
          component="ul"
          className="w-full flex px-0 space-x-4 box-border scroll-smooth"
          style={{
            paddingRight: 12,
            paddingLeft: 12,
          }}
        >
          {props.ContentArray.map((value, index) => (
            <Button
              key={index}
              component="li"
              disableFocusRipple
              onClick={handleClick}
              onContextMenu={handleClick}
              className="text-white cursor-default group m-0 p-4 space-y-1 min-w-[220px] button-text-lower rounded-xl bg-white/5 hover:bg-white/10 transition-all"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: '#ffffff80 !important',
                },
              }}
            >
              <div className="w-full space-y-2.5 flex flex-col relative">
                <div className="relative w-full overflow-hidden">
                  <Image
                    priority
                    height={240}
                    width={188}
                    className={ImageStyle}
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
                <div className="flex flex-col w-full">
                  <div className={HeadingStyle}>{value.Heading}</div>
                  <h6 className={DescriptionStyle}>{value.Description}</h6>
                  <div className="block h-5 w-full" />
                  <div className="text-xs flex items-center space-x-2 pt-1">
                    <h6 className={DiscountStyle}>{value.Discount}</h6>
                    <div className="py-[5px] px-[8px] flex space-x-2 bg-white/5 rounded-md">
                      <h6 className={OriginalPriceStyle}>
                        {`₹${value.OriginalPrice}`}
                      </h6>
                      <h6
                        className={DiscountedPriceStyle}
                      >{`₹${value.DiscountedPrice}`}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </ScrollContainer>
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
      </Fragment>
    </div>
  );
};

export interface DiscoverSliderMobileProps {
  ContentArray: DiscoverSliderContentProps[];
  Wishlist: number;
  setWishlist: Dispatch<SetStateAction<number>>;
}
export const DiscoverSliderMobile: FC<DiscoverSliderMobileProps> = (props) => {
  return (
    <div className="w-full h-full flex">
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        wrapperTag="ul"
        className="w-full flex"
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {props.ContentArray.map((value, index) => (
          <SwiperSlide
            key={index}
            tag="li"
            className="flex w-full h-full box-border p-0 m-0"
          >
            <Button
              disableFocusRipple
              className="text-white group h-full w-full flex m-0 p-0 space-y-1 button-text-lower"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: '#ffffff80 !important',
                },
              }}
            >
              <div className="w-full flex flex-col">
                <div className="relative w-full overflow-hidden">
                  <div className="opacity-0 flex items-start justify-end group-hover:opacity-100 absolute z-[1] transition-opacity duration-300 rounded-md h-[98%] w-full bg-gradient-to-bl from-[#0000004d]">
                    <motion.button
                      onClick={() => props.setWishlist(index)}
                      whileTap={{ scale: 0.9 }}
                      className="p-2"
                    >
                      {props.Wishlist === index ? (
                        <HeartIconSolid className="h-7 w-7 text-white opacity-100" />
                      ) : (
                        <HeartIconOutline className="h-7 w-7 text-white opacity-80" />
                      )}
                    </motion.button>
                  </div>
                  <Image
                    priority
                    height={240}
                    width={188}
                    className={ImageStyle}
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
                <h6 className={HeadingStyle}>{value.Heading}</h6>
                <div className="text-xs flex items-center space-x-1 sm-500:space-x-2 pt-2">
                  <h6 className={`hidden xs-400:block ${DiscountStyle}`}>
                    {value.Discount}
                  </h6>
                  <h6 className={OriginalPriceStyle}>
                    {`₹${value.OriginalPrice}`}
                  </h6>
                  <h6
                    className={DiscountedPriceStyle}
                  >{`₹${value.DiscountedPrice}`}</h6>
                </div>
              </div>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
