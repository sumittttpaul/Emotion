import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IProps {}

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
    setSlider('open');
  }, [Slider]);
  return (
    <motion.div
      
      className="relative bg-[#202020]"
      animate={Slider}
      variants={SliderVariant}
    ></motion.div>
  );
};
