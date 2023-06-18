import React, { FC } from 'react';
import { DiscoverBannerLightingDealContentProps } from '../../../contents/store/discover/Store.Discover.Banner';
import Image from 'next/legacy/image';
import { motion } from 'framer-motion';
import { Poster_BlurDataURL } from '../../loader/BlurDataURL';
import useScreenSize from '../../../algorithms/ScreenSizeDetection';

const HeadingStyle =
  'text-[14px] w-full font-normal text-left overflow-hidden whitespace-nowrap text-ellipsis';
const DescriptionStyle =
  'text-[13px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70 whitespace-nowrap overflow-hidden text-ellipsis';
const AvailableStyle =
  'flex w-full p-1.5 font-semibold uppercase tracking-wide text-center text-[11px] text-white flex-col rounded-b-xl';
const ContainerStyle =
  'p-0 m-0 w-full h-full flex flex-col relative box-border overflow-hidden rounded-xl hover:outline hover:outline-[#ffffff30] hover:outline-2 hover:outline-offset-[13px]';
const OriginalPriceStyle = 'line-through text-[13.5px] opacity-70';
const DiscountedPriceStyle = 'text-[15px]';

interface IProps {
  ContentArray: DiscoverBannerLightingDealContentProps[];
}

export const DiscoverBannerLightningDealBrowser: FC<IProps> = (props) => {
  const { LargeScreen, MediumLargeScreen, MediumScreen, SmallMediumScreen } =
    useScreenSize();
  return (
    <motion.ul className="flex space-x-7">
      {props.ContentArray.slice(
        0,
        LargeScreen
          ? 5
          : MediumLargeScreen
          ? 4
          : MediumScreen
          ? 3
          : SmallMediumScreen
          ? 2
          : 0
      ).map((value, index) => (
        <motion.li
          whileTap={{ scale: 0.9 }}
          key={index}
          className={ContainerStyle}
        >
          <Image
            className="rounded-xl"
            height={320}
            width={240}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            src={value.Image}
            placeholder="blur"
            blurDataURL={Poster_BlurDataURL}
            alt=""
          />
          {/* {value.Available ? (
            <h6 className={`${'bg-primary-blue-rgb'} ${AvailableStyle}`}>
              Order Now
            </h6>
          ) : (
            <h6 className={`${'bg-[#0f0f0f]'} ${AvailableStyle}`}>Sold Out</h6>
          )} */}
          <div className="mt-3 space-y-1 overflow-hidden text-white">
            <h6 className={HeadingStyle}>{value.Heading}</h6>
            <h6 className={DescriptionStyle}>{value.Description}</h6>
            <div className="text-xs flex items-center space-x-2 pt-1">
              <h6
                className={OriginalPriceStyle}
              >{`₹${value.OriginalPrice}`}</h6>
              <h6
                className={DiscountedPriceStyle}
              >{`₹${value.DiscountedPrice}`}</h6>
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export const DiscoverBannerLightningDealMobile: FC<IProps> = (props) => {
  return (
    <div className="w-full relative flex flex-col space-y-7">
      <motion.ul className="flex space-x-5 w-full">
        {props.ContentArray.slice(0, 2).map((value, index) => (
          <motion.li
            whileTap={{ scale: 0.9 }}
            key={index}
            className={ContainerStyle}
          >
            <Image
              className="rounded-t-md absolute h-full w-full"
              height={320}
              width={240}
              objectFit="cover"
              objectPosition="center"
              src={value.Image}
              placeholder="blur"
              blurDataURL={Poster_BlurDataURL}
              alt=""
            />
            {value.Available ? (
              <h6 className={`${'bg-primary-blue-rgb'} ${AvailableStyle}`}>
                Order Now
              </h6>
            ) : (
              <h6 className={`${'bg-[#0f0f0f]'} ${AvailableStyle}`}>
                Sold Out
              </h6>
            )}
            <div className="mt-6 space-y-1 overflow-hidden text-white">
              <h6 className={HeadingStyle}>{value.Heading}</h6>
              <h6 className={DescriptionStyle}>{value.Description}</h6>
              <div className="text-xs flex items-center space-x-2 pt-1">
                <h6
                  className={OriginalPriceStyle}
                >{`₹${value.OriginalPrice}`}</h6>
                <h6
                  className={DiscountedPriceStyle}
                >{`₹${value.DiscountedPrice}`}</h6>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <motion.ul className="flex space-x-5 w-full">
        {props.ContentArray.slice(2, 4).map((value, index) => (
          <motion.li
            whileTap={{ scale: 0.9 }}
            key={index}
            className={ContainerStyle}
          >
            <Image
              className="rounded-t-md absolute h-full w-full"
              height={320}
              width={240}
              objectFit="cover"
              objectPosition="center"
              src={value.Image}
              placeholder="blur"
              blurDataURL={Poster_BlurDataURL}
              alt=""
            />
            {value.Available ? (
              <h6 className={`${'bg-primary-blue-rgb'} ${AvailableStyle}`}>
                Order Now
              </h6>
            ) : (
              <h6 className={`${'bg-[#0f0f0f]'} ${AvailableStyle}`}>
                Sold Out
              </h6>
            )}
            <div className="mt-6 space-y-1 overflow-hidden text-white">
              <h6 className={HeadingStyle}>{value.Heading}</h6>
              <h6 className={DescriptionStyle}>{value.Description}</h6>
              <div className="text-xs flex items-center space-x-2 pt-1">
                <h6
                  className={OriginalPriceStyle}
                >{`₹${value.OriginalPrice}`}</h6>
                <h6
                  className={DiscountedPriceStyle}
                >{`₹${value.DiscountedPrice}`}</h6>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
