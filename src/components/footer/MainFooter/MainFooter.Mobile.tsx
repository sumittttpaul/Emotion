import { motion } from 'framer-motion';
import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  TopPanelData: { Name: string; Icon: string; IconActive: string }[];
  Active: string;
  setActive: (value: string) => void;
}

/**
 * @author
 * @function @MainFooterMobile
 **/

export const MainFooterMobile: FC<IProps> = (props) => {
  return (
    <div className="flex w-full fixed-bottom p-3 space-x-2 z-[999] footer-gradient">
      <div className="flex w-full h-full justify-between mx-10">
        {props.TopPanelData.map((data, i) => (
          <motion.button
            key={i}
            onPointerUp={() => props.setActive(data.Name)}
            disabled={true}
            whileTap={{ scale: 0.9 }}
            className="relative rounded-lg cursor-default bg-transparent hover:bg-transparent"
          >
            <div className="m-3 flex flex-col items-center">
              <Image
                height={`${props.Active == data.Name ? 20 : 22}`}
                width={`${props.Active == data.Name ? 20 : 22}`}
                className={`${
                  props.Active == data.Name ? 'opacity-90' : 'opacity-50'
                }`}
                src={`${
                  props.Active == data.Name ? data.IconActive : data.Icon
                }`}
                alt=""
              />
              <p
                className={`${
                  props.Active == data.Name ? 'opacity-100' : 'opacity-60'
                } text-[10px] text-white mt-2 block`}
              >
                {data.Name}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
