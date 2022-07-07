import React, {
  ChangeEvent,
  FC,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion, useCycle, Variants } from 'framer-motion';
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
import useScreenSize from '../../../algorithms/ScreenSizeDetection';

interface IProps {
  ContainerRef: RefObject<HTMLDivElement>;
  Open: boolean;
  onOpen: () => void;
}

/**
 * @author
 * @function @MainHeaderSearchButton
 **/

export const MainHeaderSearchButton: FC<IProps> = (props) => {
  const [animate, setAnimate] = useState('closed');
  const [width, setWidth] = useState(160);
  const [Search, setSearch] = useState('');
  const SearchRef = useRef<HTMLInputElement>(null);
  const { SmallScreen } = useScreenSize();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const ButtonVariant = {
    open: {
      width: SmallScreen ? width - 24 : width - 40,
      height: 50,
      borderRadius: 10,
    },
    closed: { width: SmallScreen ? 105 : 160, height: 40, borderRadius: 18 },
  };

  const SearchFocus = () => {
    if (animate === 'closed') setAnimate('open');
    props.onOpen();
    SearchRef.current?.focus();
  };
  const SearchBlur = () => {
    if (animate === 'open') setAnimate('closed');
    setSearch('');
  };

  useEffect(() => {
    if (props.Open) setAnimate('open');
    else setAnimate('closed');
  }, [props.Open]);

  useEffect(() => {
    if (props.ContainerRef.current)
      setWidth(props.ContainerRef.current.offsetWidth);
  }, [width]);

  useEffect(() => {
    if (props.ContainerRef.current)
      props.ContainerRef.current.addEventListener('resize', () => {
        if (props.ContainerRef.current)
          setWidth(props.ContainerRef.current.offsetWidth);
      });
    return () => {
      if (props.ContainerRef.current)
        props.ContainerRef.current.removeEventListener('resize', () => {
          if (props.ContainerRef.current)
            setWidth(props.ContainerRef.current.offsetWidth);
        });
    };
  });
  return (
    <>
      <motion.button
        aria-label="desktop-search-button"
        onFocus={SearchFocus}
        // onBlur={SearchBlur}
        animate={animate}
        variants={ButtonVariant}
        transition={{ duration: 0.2, type: 'tween' }}
        className="block mr-1 header-button-hover transition-all duration-300 text-white w-[105px] min-w-[105px] sm:w-[160px] sm:min-w-[160px] cursor-text justify-start items-center button-text-lower p-[10px] rounded-[18px] bg-[#202020] hover:bg-[#202020]"
      >
        <div className="space-x-3 flex items-center ml-1">
          <Image src="/icons/search-white.svg" height={17} width={17} className="min-h-[17px] min-w-[17px] flex relative text-white opacity-70" />
          <input
            ref={SearchRef}
            aria-label="search-text-field"
            value={Search}
            onChange={handleSearch}
            placeholder={
              animate === 'open'
                ? 'Search by product, category or collection'
                : 'Search'
            }
            className="flex min-w-20 pb-[2px] pr-2 whitespace-nowrap text-ellipsis w-full h-full bg-transparent text-[14px] text-white placeholder:text-[rgba(255,255,255,0.60)] placeholder:text-[13px] outline-none"
          />
        </div>
      </motion.button>
      {/* <DialogContainerLight show={open} close={() => setOpen(false)}>
        <div className="text-black flex flex-col w-full h-full relative box-border max-w-3xl sm:max-h-[800px] overflow-x-hidden overflow-y-visible">
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
      </DialogContainerLight> */}
    </>
  );
};
