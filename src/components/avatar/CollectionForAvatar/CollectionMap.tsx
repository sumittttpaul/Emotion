import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IAvatarIconReducerState } from '../../../redux/reducers/AvatarReducer';

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
    <div className="w-full items-center justify-center px-6 pt-2 pb-6">
      <div
        className="
          grid 
          grid-cols-4 
          xs-350:grid-cols-5 
          sm-500:grid-cols-8 
          grid-rows-6 
          xs-350:grid-rows-5
          sm-500:grid-rows-3 
          gap-x-2 
          gap-y-[2px]"
      >
        {props.AvatarReducer.map((avatars) => {
          return (
            <motion.button
              key={avatars.iconURL}
              className="rounded-[50%] p-0"
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                props.getURL(avatars.iconURL);
                props.forward();
              }}
            >
              <Image
                height={440}
                width={440}
                className="rounded-[50%]"
                src={avatars.iconURL}
                alt="womens-avatar-collections-image"
                placeholder="blur"
                blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88R8AApUByU2MEcEAAAAASUVORK5CYII=`}
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
