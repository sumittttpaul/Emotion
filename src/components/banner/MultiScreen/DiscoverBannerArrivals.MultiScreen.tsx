import React, { FC } from 'react';
import { DiscoverBannerLightingDealIProps } from '../../../contents/store/discover/Store.Discover.Banner';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Poster_BlurDataURL } from '../../loader/BlurDataURL';

const HeadingStyle =
  'text-[14px] w-full font-normal text-left overflow-hidden whitespace-nowrap text-ellipsis';
const DescriptionStyle =
  'text-[13px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70 whitespace-nowrap overflow-hidden text-ellipsis';
const AvailableStyle =
  'flex w-full h-full p-1.5 font-semibold uppercase tracking-wide text-center text-[11px] text-white flex-col rounded-b-md';
const ButtonStyle =
  'p-0 m-0 w-full h-full text-white text-left flex flex-col relative box-border button-text-lower';
const ContainerStyle =
  'p-0 m-0 w-full h-full flex flex-col relative box-border overflow-hidden';

interface IProps {
  ContentArray: DiscoverBannerLightingDealIProps[];
}

export const DiscoverBannerArrivalsDesktop: FC<IProps> = (props) => {
  return (
    <motion.ul className="hidden md-900:flex space-x-7 w-full">
      {props.ContentArray.slice(0, 5).map((value, index) => (
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
            loading="lazy"
            placeholder="blur"
            blurDataURL={Poster_BlurDataURL}
            alt=""
          />
          {value.Available ? (
            <h6 className={`${'bg-primary-blue-rgb'} ${AvailableStyle}`}>
              Order Now
            </h6>
          ) : (
            <h6 className={`${'bg-[#121212]'} ${AvailableStyle}`}>Sold Out</h6>
          )}
          <div className="mt-6 space-y-1 overflow-hidden text-white">
            <h6 className={HeadingStyle}>{value.Heading}</h6>
            <h6 className={DescriptionStyle}>{value.Description}</h6>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export const DiscoverBannerArrivalsTablet: FC<IProps> = (props) => {
  return (
    <motion.ul className="hidden sm:flex md-900:hidden space-x-5 w-full">
      {props.ContentArray.slice(0, 4).map((value, index) => (
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
            loading="lazy"
            placeholder="blur"
            blurDataURL={Poster_BlurDataURL}
            alt=""
          />
          {value.Available ? (
            <h6 className={`${'bg-primary-blue-rgb'} ${AvailableStyle}`}>
              Order Now
            </h6>
          ) : (
            <h6 className={`${'bg-[#121212]'} ${AvailableStyle}`}>Sold Out</h6>
          )}
          <div className="mt-6 space-y-1 overflow-hidden text-white">
            <h6 className={HeadingStyle}>{value.Heading}</h6>
            <h6 className={DescriptionStyle}>{value.Description}</h6>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export const DiscoverBannerArrivalsMobile: FC<IProps> = (props) => {
  return (
    <div className="w-full relative flex flex-col sm:hidden space-y-7">
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
              loading="lazy"
              placeholder="blur"
              blurDataURL={Poster_BlurDataURL}
              alt=""
            />
            {value.Available ? (
              <h6 className={`${'bg-primary-blue-rgb'} ${AvailableStyle}`}>
                Order Now
              </h6>
            ) : (
              <h6 className={`${'bg-[#121212]'} ${AvailableStyle}`}>
                Sold Out
              </h6>
            )}
            <div className="mt-6 space-y-1 overflow-hidden text-white">
              <h6 className={HeadingStyle}>{value.Heading}</h6>
              <h6 className={DescriptionStyle}>{value.Description}</h6>
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
              loading="lazy"
              placeholder="blur"
              blurDataURL={Poster_BlurDataURL}
              alt=""
            />
            {value.Available ? (
              <h6 className={`${'bg-primary-blue-rgb'} ${AvailableStyle}`}>
                Order Now
              </h6>
            ) : (
              <h6 className={`${'bg-[#121212]'} ${AvailableStyle}`}>
                Sold Out
              </h6>
            )}
            <div className="mt-6 space-y-1 overflow-hidden text-white">
              <h6 className={HeadingStyle}>{value.Heading}</h6>
              <h6 className={DescriptionStyle}>{value.Description}</h6>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
