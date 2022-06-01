import React, { FC, useState } from 'react';
import { PhotographIcon } from '@heroicons/react/outline';
import { AvatarReducerState } from '../../../../redux/reducers/WomensAvatarReducer';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface IProps {
  WomensAvatar: AvatarReducerState[];
  forward: () => void;
  getURL: (value:string) => void;
}

/**
 * @author
 * @function @ForWomen
 **/

const ForWomen: FC<IProps> = (props) => {
  return (
    <div className="w-full items-center justify-center space-y-4">
      {/* Heading */}
      <div className="flex space-x-1 items-center">
        <PhotographIcon className="h-6 opacity-60" />
        <h6 className="text-sm font-medium text-center">
          Collections for Girls & Women
        </h6>
      </div>
      {/* Main */}
      <div
        className="
          grid 
          grid-cols-4 
          xs-350:grid-cols-5 
          sm-500:grid-cols-8 
          grid-rows-6 
          xs-350:grid-rows-5
          sm-500:grid-rows-3 
          gap-x-3 
          gap-y-2"
      >
        {props.WomensAvatar.map((avatars) => {
          return (
            <motion.button
              key={avatars.iconURL}
              className="rounded-[50%] p-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                props.getURL(avatars.iconURL);
                props.forward()
              }}
            >
              <Image
                height={440}
                width={440}
                className="rounded-[50%]"
                src={avatars.iconURL}
                alt="womens-avatar-collections-image"
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ForWomen;
