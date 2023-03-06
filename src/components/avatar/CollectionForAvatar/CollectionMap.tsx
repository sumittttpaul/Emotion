import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import { IAvatarIconReducerState } from '../../../redux/reducers/AvatarReducer';
import { Square_BlurDataURL } from '../../loader/BlurDataURL';

interface IProps {
  AvatarReducer: IAvatarIconReducerState[];
  forward: () => void;
  getURL: (value: string) => void;
}

/**
 * @author
 * @function @CollectionMap
 **/

export const CollectionMap: FC<IProps> = (props) => {
  return (
    <div className="h-full w-full items-center justify-center px-6 pt-2 pb-6">
      <div
        className="h-auto w-full
          inline-grid 
          grid-flow-row-dense
          grid-cols-4 
          xs-350:grid-cols-5 
          sm-500:grid-cols-8
          gap-2"
      >
        {props.AvatarReducer.map((avatars) => {
          return (
            <motion.button
              key={avatars.iconURL}
              className="rounded-[50%] relative overflow-hidden"
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                props.getURL(avatars.iconURL);
                props.forward();
              }}
            >
              <Image
                height={440}
                width={440}
                layout="responsive"
                src={avatars.iconURL}
                alt=""
                loading="lazy"
                placeholder="blur"
                blurDataURL={Square_BlurDataURL}
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
