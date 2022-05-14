import React, { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IProps {}

/**
 * @author
 * @function @FromAvatars
 **/

export const FromAvatars: FC<IProps> = (props) => {
  return (
    <div className="sm:h-[500px] p-6 space-y-4 h-full w-full items-center justify-center flex flex-col">
      From Avatars
    </div>
  );
};
