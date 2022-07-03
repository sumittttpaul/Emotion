import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon } from '@heroicons/react/solid';
import { Button, IconButton } from '@mui/material';
import { TooltipDark } from '../../tooltip/TooltipDark';
import { DialogContainerLight } from '../../dialog/DialogContainerLight';
import { ChevronLeftIcon, XIcon } from '@heroicons/react/outline';
import {
  StoreDiscoverPopularSearch,
  StoreDiscoverCurationSearch,
} from '../../../contents/store/discover/Store.Discover.Search';
import { SwiperSlide, Swiper } from 'swiper/react';
import Image from 'next/image';

interface IProps {}

/**
 * @author
 * @function @MainHeaderSearchButton
 **/

export const MainHeaderSearchButton: FC<IProps> = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <TooltipDark
        arrow
        placement="bottom-start"
        title={
          <h6 className="font-[400]">
            Search by product, category or collection
          </h6>
        }
      >
        <Button
          aria-label="desktop-search-button"
          disableRipple
          disableFocusRipple
          disableTouchRipple
          onClick={() => setOpen(true)}
          className="hidden md-900:block header-button-hover transition-all duration-300 text-white w-[160px] cursor-text justify-start button-text-lower p-[10px] rounded-full bg-[#202020] hover:bg-[#202020]"
        >
          <div className="space-x-3 flex items-center opacity-60 ml-1">
            <SearchIcon className="h-[14px] w-[14px]" />
            <h6 className="text-[12px] font-normal">Search</h6>
          </div>
        </Button>
      </TooltipDark>
      <TooltipDark
        arrow
        placement="bottom"
        title={
          <h6 className="font-[400]">
            Search by product, category or collection
          </h6>
        }
      >
        <IconButton
          disableFocusRipple
          onClick={() =>
            setTimeout(() => {
              setOpen(true);
            }, 150)
          }
          aria-label="mobile-search-button"
          className="block md-900:hidden opacity-80 header-button-hover transition-all duration-300 button-text-lower h-full p-2.5 border border-solid border-[rgba(255,255,255,0.23)]"
          sx={{
            borderRadius: '6px !important',
            '.MuiTouchRipple-child': {
              borderRadius: '0 !important',
              backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
            },
          }}
        >
          <SearchIcon className="h-4 w-4 opacity-80 header-icon-hover text-white" />
        </IconButton>
      </TooltipDark>
      <DialogContainerLight show={open} close={() => setOpen(false)}>
        <div className="text-black flex flex-col w-full h-full relative box-border max-w-3xl max-h-[800px] overflow-x-hidden overflow-y-visible">
          <div className="flex w-full relative">
            <IconButton
              disableFocusRipple
              onClick={() =>
                setTimeout(() => {
                  setOpen(false);
                }, 150)
              }
              className="p-2 m-2 button-text-lower rounded-full bg-[rgba(0,0,0,0.05)]"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(0,0,0,0.5) !important',
                },
              }}
            >
              <ChevronLeftIcon className="text-black h-4 w-4" />
            </IconButton>
            <div className="space-x-2 flex items-center">
              <h6 className="font-normal text-sm">Back</h6>
            </div>
          </div>
          <div className="p-3 w-full flex sticky-top bg-white z-[10]">
            <div className="flex w-full space-x-2 items-center rounded-lg bg-[rgba(0,0,0,0.03)]">
              <div className="flex w-full p-3 space-x-2 items-center">
                <SearchIcon className="text-black opacity-40 h-5 w-5" />
                <input
                  aria-label="search-text-field"
                  placeholder="Search by product, category or collection"
                  className="text-[14px] text-black placeholder:text-[rgba(0,0,0,0.6)] w-full bg-transparent outline-none text-ellipsis"
                />
              </div>
              <IconButton
                disableFocusRipple
                className="p-3"
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: 'rgba(0,0,0, 0.5) !important',
                  },
                }}
              >
                <XIcon className="text-black opacity-50 h-5 w-5" />
              </IconButton>
            </div>
          </div>
          <div className="flex flex-col w-full px-5 mt-3 space-y-3.5">
            <h6 className="font-[500] text-black w-full text-left">
              Popular Searches
            </h6>
            <ul className="flex flex-wrap relative w-full h-auto justify-start">
              {StoreDiscoverPopularSearch.map((value, index) => (
                <li key={index}>
                  <Button
                    disableFocusRipple
                    sx={{
                      '.MuiTouchRipple-child': {
                        backgroundColor: 'rgba(0, 0, 0, 0.5) !important',
                      },
                    }}
                    className="text-xs border m-1 py-2 px-3.5 border-solid border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.3)] transition-all duration-300 ease-out rounded-full button-text-lower font-normal text-black bg-transparent hover:bg-transparent"
                  >
                    {value.Label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full mt-6 space-y-3.5">
            <h6 className="font-[500] text-black px-5 w-full text-left">
              Popular Curations
            </h6>
            <Swiper
              slidesPerView={3.5}
              spaceBetween={20}
              wrapperTag="ul"
              className="flex relative w-full h-auto justify-start"
              style={{
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              {StoreDiscoverCurationSearch.map((value, index) => (
                <SwiperSlide
                  tag="li"
                  key={index}
                  className="flex flex-col space-y-5 row-span-2"
                >
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="rounded-xl"
                  >
                    <Image
                      height={100}
                      width={100}
                      src={value.Image}
                      className="rounded-xl"
                    />
                    <h6 className="text-[13px] font-[500] whitespace-nowrap overflow-hidden text-ellipsis">
                      {value.Label}
                    </h6>
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="rounded-xl"
                  >
                    <Image
                      height={100}
                      width={100}
                      src={value.Image}
                      className="rounded-xl"
                    />
                    <h6 className="text-[13px] font-[500] whitespace-nowrap overflow-hidden text-ellipsis">
                      {value.Label}
                    </h6>
                  </motion.button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col w-full mt-6 space-y-3.5">
            <h6 className="font-[500] text-black px-5 w-full text-left">
              What's new
            </h6>
            <Swiper
              slidesPerView={2.5}
              spaceBetween={10}
              wrapperTag="ul"
              className="flex relative w-full h-auto justify-start"
              style={{
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              {StoreDiscoverCurationSearch.map((value, index) => (
                <SwiperSlide
                  tag="li"
                  key={index}
                  className="flex flex-col space-y-5 row-span-2"
                >
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="rounded-md"
                  >
                    <Image
                      height={260}
                      width={200}
                      src={value.Image}
                      className="rounded-md"
                    />
                    <h6 className="text-[13px] font-[500] whitespace-nowrap overflow-hidden text-ellipsis">
                      {value.Label}
                    </h6>
                  </motion.button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col w-full my-6 space-y-3.5">
            <h6 className="font-[500] text-black px-5 w-full text-left">
              Trending
            </h6>
            <Swiper
              slidesPerView={2.5}
              spaceBetween={10}
              wrapperTag="ul"
              className="flex relative w-full h-auto justify-start"
              style={{
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              {StoreDiscoverCurationSearch.map((value, index) => (
                <SwiperSlide
                  tag="li"
                  key={index}
                  className="flex flex-col space-y-5 row-span-2"
                >
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="rounded-md"
                  >
                    <Image
                      height={260}
                      width={200}
                      src={value.Image}
                      className="rounded-md"
                    />
                    <h6 className="text-[13px] font-[500] whitespace-nowrap overflow-hidden text-ellipsis">
                      {value.Label}
                    </h6>
                  </motion.button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </DialogContainerLight>
    </>
  );
};
