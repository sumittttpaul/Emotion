import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC } from 'react';
import useScreenSize from '../../../../algorithms/ScreenSizeDetection';
import { StoreDiscoverExploreSearchIProps } from '../../../../contents/store/discover/Store.Discover.Search';

interface IProps {
  ContentArray: StoreDiscoverExploreSearchIProps;
}

/**
 * @author
 * @function @MainHeaderSearchExplore
 **/

export const MainHeaderSearchExplore: FC<IProps> = (props) => {
  const { SmallScreen } = useScreenSize();
  return (
    <div className="flex flex-col w-full px-3 sm:px-5 space-y-3.5">
      <h6 className="font-[400] text-sm text-white w-full text-left">
        Explore
      </h6>
      <ul className="w-full flex flex-row sm:flex-col md-900:flex-row space-x-3 sm:space-y-3 sm:space-x-0 md-900:space-y-0 md-900:space-x-3">
        {props.ContentArray.LargeBanner.map((value, index) => (
          <li key={index} className="w-full flex">
            <motion.button className="group cursor-default w-full flex p-0 m-0 rounded-xl overflow-hidden relative box-border button-text-lower bg-transparent">
              <div className="w-full h-full flex flex-col relative">
                <div className="w-full h-[100px] flex relative">
                  <Image
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    loading="lazy"
                    src={value.Image}
                  />
                </div>
                <div className="w-full h-full absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] transition-colors duration-300 ease-linear">
                  <div className="flex w-full h-full items-end justify-between">
                    <h6 className="group-hover:underline underline-offset-2 text-[14px] p-3.5 text-center text-white font-[400] tracking-[0.3px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {value.Label}
                    </h6>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="m-1.5  p-2 group bg-white rounded-md bg-opacity-[0.15] text-[10px] text-white font-normal whitespace-nowrap"
                    >
                      {SmallScreen ? 'More' : 'Learn More'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.button>
          </li>
        ))}
      </ul>
      {SmallScreen ? (
        <div className="w-auto h-full overflow-hidden whitespace-nowrap static flex flex-col flex-nowrap float-none justify-end">
          <div className="flex w-full h-full space-x-3">
            {props.ContentArray.SmallBanner.map((value, index) => (
              <Button
                key={index}
                disableFocusRipple
                disableTouchRipple
                disableRipple
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: 'rgba(255, 255, 255, 0.5) !important',
                  },
                }}
                className={`${
                  index === 0
                    ? 'inline-flex'
                    : index === 1
                    ? 'hidden xs-200:inline-flex'
                    : index === 2
                    ? 'hidden xs-300:inline-flex'
                    : index === 3
                    ? 'hidden xs-400:inline-flex'
                    : 'hidden'
                } ${'rounded-xl relative overflow-hidden h-full w-full flex-col button-text-lower p-0 m-0 bg-[rgba(255,255,255,0.05)]'}`}
              >
                <div className="w-full h-full min-h-[100px] flex relative">
                  <Image
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    loading="lazy"
                    src={value.Image}
                  />
                </div>
                <div className="w-full h-full absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] transition-colors duration-300 ease-linear">
                  <div className="flex w-full h-full items-end justify-between">
                    <h6 className="text-[12px] w-full p-2 text-center text-white font-[400] tracking-[0.4px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {value.Label}
                    </h6>
                  </div>
                </div>
                <div className="absolute w-full h-full bg-[rgba(255,255,255,0)] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 ease-linear" />
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-auto h-full overflow-hidden whitespace-nowrap static flex flex-col flex-nowrap float-none justify-end">
          <div className="flex w-full h-full space-x-3">
            {props.ContentArray.SmallBanner.map((value, index) => (
              <Button
                key={index}
                disableFocusRipple
                disableTouchRipple
                disableRipple
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: 'rgba(255, 255, 255, 0.5) !important',
                  },
                }}
                className={`${
                  index === 0
                    ? 'inline-flex'
                    : index === 1
                    ? 'inline-flex'
                    : index === 2
                    ? 'sm:hidden sm-700:inline-flex'
                    : index === 3
                    ? 'sm:hidden sm-800:inline-flex'
                    : index === 4
                    ? 'hidden lg-1200:inline-flex'
                    : index === 5
                    ? 'hidden xl-1300:inline-flex'
                    : 'hidden'
                } ${'rounded-xl relative overflow-hidden h-full w-full flex-col button-text-lower p-0 m-0 bg-[rgba(255,255,255,0.05)]'}`}
              >
                <div className="w-full h-full flex relative">
                  <Image
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    loading="lazy"
                    src={value.Image}
                  />
                </div>
                <div className="w-full h-full absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] transition-colors duration-300 ease-linear">
                  <div className="flex w-full h-full items-end justify-between">
                    <h6 className="text-[12px] w-full p-2 text-center text-white font-[400] tracking-[0.4px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {value.Label}
                    </h6>
                  </div>
                </div>
                <div className="absolute w-full h-full bg-[rgba(255,255,255,0)] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 ease-linear" />
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
