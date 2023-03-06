import { motion } from 'framer-motion';
import React, { FC } from 'react';
import Image from 'next/legacy/image';

interface IProps {
  onClick: () => void;
}

/**
 * @author
 * @function @HeaderSearchExit
 **/

export const HeaderSearchExit: FC<IProps> = (props) => {
  return (
    <motion.button
      onClick={props.onClick}
      whileTap={{ scale: 0.9 }}
      className="bg-[#202020] pt-1 px-8 rounded-md"
    >
      <Image
        height={22.5}
        width={22.5}
        className="block overflow-hidden opacity-80"
        src="/icons/x-white.svg"
        alt=""
      />
    </motion.button>
  );
};
