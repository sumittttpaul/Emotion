import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @MainHeaderSearchQuickLink
 **/

export const MainHeaderSearchQuickLink: FC<IProps> = (props) => {
  return (
    <div className="flex flex-col w-full px-3 sm:px-5 space-y-3.5">
      <h6 className="font-[400] text-sm text-white w-full text-left">
        Explore
      </h6>
      <div className="w-full flex space-x-3">
        <motion.button className="w-full flex p-0 m-0 rounded-xl overflow-hidden relative box-border button-text-lower bg-transparent">
          <div className="w-full h-full flex flex-col relative">
            <div className="w-full h-[150px] flex relative">
              <Image
                objectFit="cover"
                objectPosition="center"
                layout="fill"
                src="/images/avatar/illustration/1.png"
              />
            </div>
            <div className="w-full h-full absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] transition-colors duration-300 ease-linear">
              <div className="flex w-full h-full items-end justify-between">
                <h6 className="text-[14px] p-3.5 text-center text-white font-[400] tracking-[0.3px] whitespace-nowrap overflow-hidden text-ellipsis">
                  Winter collection
                </h6>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="m-1.5 p-2 bg-white rounded-md bg-opacity-[0.15] text-[10px] text-white font-normal"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.button>
        <motion.button className="w-full flex sm:hidden lg-1200:flex p-0 m-0 rounded-xl overflow-hidden relative box-border button-text-lower bg-transparent">
          <div className="w-full h-full flex flex-col relative">
            <div className="w-full h-[150px] flex relative">
              <Image
                objectFit="cover"
                objectPosition="center"
                layout="fill"
                src="/images/avatar/illustration/2.png"
              />
            </div>
            <div className="w-full h-full absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] transition-colors duration-300 ease-linear">
              <div className="flex w-full h-full items-end justify-between">
                <h6 className="text-[14px] p-3.5 text-center text-white font-[400] tracking-[0.3px] whitespace-nowrap overflow-hidden text-ellipsis">
                  Summer collection
                </h6>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="m-1.5 p-2 bg-white rounded-md bg-opacity-[0.15] text-[10px] text-white font-normal"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  );
};
