import { Button } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { StoreDiscoverExploreSearchIProps } from '../../../../contents/store/discover/Store.Discover.Search';

const MainContainerStyle =
  'w-auto h-full overflow-hidden whitespace-nowrap static flex flex-col flex-nowrap float-none justify-end';
const ButtonContainerStyle = 'flex w-full h-full space-x-3';
const ButtonStyle =
  'rounded-xl relative overflow-hidden h-full w-full flex-col button-text-lower p-0 m-0 bg-[#ffffff0d]';
const ImageContainerStyle = 'w-full h-full flex relative';
const LabelStyle =
  'text-[12px] w-full p-2 text-center text-white font-[400] tracking-[0.4px] whitespace-nowrap overflow-hidden text-ellipsis';
const LabelContainerStyle = 'flex w-full h-full items-end justify-between';
const LabelContainerParentStyle =
  'w-full h-full absolute bg-gradient-to-t from-[#000000b3] transition-colors duration-300 ease-linear';
const OverlayStyle =
  'absolute w-full h-full bg-[#ffffff00] hover:bg-[#ffffff1a] transition-colors duration-300 ease-linear';

export interface MainHeaderSearchQuickLinkSmallBannerProps {
  ContentArray: StoreDiscoverExploreSearchIProps;
}
export const MainHeaderSearchQuickLinkSmallBannerMobile: FC<
  MainHeaderSearchQuickLinkSmallBannerProps
> = (props) => {
  return (
    <div className={MainContainerStyle}>
      <div className={ButtonContainerStyle}>
        {props.ContentArray.SmallBanner.map((value, index) => (
          <Button
            key={index}
            disableFocusRipple
            disableTouchRipple
            disableRipple
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: '#ffffff80 !important',
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
            } ${ButtonStyle}`}
          >
            <div className={`${ImageContainerStyle} min-h-[100px]`}>
              <Image
                objectFit="cover"
                objectPosition="center"
                layout="fill"
                loading="lazy"
                alt=""
                src={value.Image}
              />
            </div>
            <div className={LabelContainerParentStyle}>
              <div className={LabelContainerStyle}>
                <h6 className={LabelStyle}>{value.Label}</h6>
              </div>
            </div>
            <div className={OverlayStyle} />
          </Button>
        ))}
      </div>
    </div>
  );
};
export const MainHeaderSearchQuickLinkSmallBannerDesktop: FC<
  MainHeaderSearchQuickLinkSmallBannerProps
> = (props) => {
  return (
    <div className={MainContainerStyle}>
      <div className={ButtonContainerStyle}>
        {props.ContentArray.SmallBanner.map((value, index) => (
          <Button
            key={index}
            disableFocusRipple
            disableTouchRipple
            disableRipple
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: '#ffffff80 !important',
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
            } ${ButtonStyle}`}
          >
            <div className={ImageContainerStyle}>
              <Image
                objectFit="cover"
                objectPosition="center"
                layout="fill"
                loading="lazy"
                src={value.Image}
                alt=""
              />
            </div>
            <div className={LabelContainerParentStyle}>
              <div className={LabelContainerStyle}>
                <h6 className={LabelStyle}>{value.Label}</h6>
              </div>
            </div>
            <div className={OverlayStyle} />
          </Button>
        ))}
      </div>
    </div>
  );
};
