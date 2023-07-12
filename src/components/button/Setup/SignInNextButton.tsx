import { m } from 'framer-motion';
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
    marginLeft: -12,
  },
};

export function SignInNextButton(props: IProps) {
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
        className="group-hover:opacity-75 opacity-100 font-medium truncate text-sky-400 text-[14px]"
      >
        {props.Label}
      </m.div>
    </m.button>
  );
}
