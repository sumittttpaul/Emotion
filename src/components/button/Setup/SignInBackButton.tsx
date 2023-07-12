import { ChevronLeftIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { m } from 'framer-motion';

interface IProps {
  Label: string;
  onClick?: () => void;
}

const Variants = {
  open: {
    marginLeft: 0,
  },
  closed: {
    marginLeft: -12,
  },
};

function SignInBackButton(props: IProps) {
  const [Animate, setAnimate] = useState('closed');

  const onHoverStart = () => {
    if (Animate === 'closed') setAnimate('open');
  };
  const onHoverEnd = () => {
    if (Animate === 'open') setAnimate('closed');
  };
  return (
    <m.button
      whileTap={{ scale: 0.95 }}
      onClick={props.onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="px-[12px] py-2 group cursor-default hover:bg-white/5 rounded-lg"
    >
      <m.div
        initial="open"
        animate={Animate}
        variants={Variants}
        className="group-hover:opacity-75 opacity-100 flex items-center space-x-2"
      >
        <ChevronLeftIcon className="h-4 mb-[2px] text-sky-400" />
        <label className="font-medium text-sky-400 text-[14px] truncate">
          {props.Label}
        </label>
      </m.div>
    </m.button>
  );
}

export default SignInBackButton;
