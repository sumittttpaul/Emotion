import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface IProps {
  Label: string;
  onClick?: () => void;
}

const Variants = {
  open: {
    marginLeft: 0,
  },
  closed: {
    marginLeft: -17,
  },
};

function BannerTitleButton(props: IProps) {
  const [Animate, setAnimate] = useState('closed');

  const onHoverStart = () => {
    if (Animate === 'closed') setAnimate('open');
  };
  const onHoverEnd = () => {
    if (Animate === 'open') setAnimate('closed');
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={props.onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="group flex cursor-default items-center justify-center hover:bg-white/5 py-2 pr-3 pl-[17px] rounded-xl"
    >
      <motion.div
        animate={Animate}
        variants={Variants}
        className="flex space-x-1 items-center justify-center"
      >
        <label className="group-hover:opacity-75 opacity-100 text-[20px] font-[500] tracking-wide text-white">
          {props.Label}
        </label>
        <ChevronRightIcon className="h-5 opacity-50" />
      </motion.div>
    </motion.button>
  );
}

export default BannerTitleButton;
