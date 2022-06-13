import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IProps {
  open: boolean;
  onClose: () => void;
}

/**
 * @author
 * @function @MainHeaderSlider
 **/

const SliderVariant = {
  open: { height: 500 },
  closed: { height: 0 },
};

export const MainHeaderSlider: FC<IProps> = (props) => {
  const [Slider, setSlider] = useState('closed');
  useEffect(() => {
    if (props.open) {
      setSlider('open');
    } else {
      setSlider('closed');
    }
  }, [props.open]);
  return (
    <motion.div
      className="bg-[#202020]"
      animate={Slider}
      variants={SliderVariant}
    ></motion.div>
  );
};
