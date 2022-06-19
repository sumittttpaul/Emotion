import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IProps {}

/**
 * @author
 * @function @DiscoverCarousel
 **/

export const DiscoverCarousel: FC<IProps> = (props) => {
  const [SliderValue, setSliderValue] = useState(0);
  const Value = () => {
    if (document)
      setSliderValue(
        document.getElementById('DraggableSlider')!.offsetWidth -
          document.getElementById('ParentDiv')!.offsetWidth
      );
  };
  useEffect(() => {
    Value();
  }, [SliderValue]);
  return (
    <div className="w-full flex flex-col relative box-border p-0 m-0 bg-transparent overflow-x-hidden">
      <div
        id="ParentDiv"
        className="text-white text-lg rounded-xl bg-gradient-to-b from-[rgba(255,255,255,0.15)] w-full h-[500px] p-5 flex"
      >
        Discover
      </div>
      <motion.div
        id="DraggableSlider"
        drag="x"
        dragConstraints={{ left: parseInt(`-${SliderValue}`), right: 0 }}
        className="w-auto mx-auto flex space-x-3 px-5 -mt-[50px]"
      >
        <div className="text-white rounded-xl p-5 flex items-center justify-center text-xs font-normal bg-opacity-10 bg-white w-[200px] h-[100px] min-w-[200px] min-h-[100px]">
          Thumbnail 1
        </div>
        <div className="text-white rounded-xl p-5 flex items-center justify-center text-xs font-normal bg-opacity-10 bg-white w-[200px] h-[100px] min-w-[200px] min-h-[100px]">
          Thumbnail 2
        </div>
        <div className="text-white rounded-xl p-5 flex items-center justify-center text-xs font-normal bg-opacity-10 bg-white w-[200px] h-[100px] min-w-[200px] min-h-[100px]">
          Thumbnail 3
        </div>
        <div className="text-white rounded-xl p-5 flex items-center justify-center text-xs font-normal bg-opacity-10 bg-white w-[200px] h-[100px] min-w-[200px] min-h-[100px]">
          Thumbnail 4
        </div>
        <div className="text-white rounded-xl p-5 flex items-center justify-center text-xs font-normal bg-opacity-10 bg-white w-[200px] h-[100px] min-w-[200px] min-h-[100px]">
          Thumbnail 5
        </div>
        <div className="text-white rounded-xl p-5 flex items-center justify-center text-xs font-normal bg-opacity-10 bg-white w-[200px] h-[100px] min-w-[200px] min-h-[100px]">
          Thumbnail 6
        </div>
        <div className="text-white rounded-xl p-5 flex items-center justify-center text-xs font-normal bg-opacity-10 bg-white w-[200px] h-[100px] min-w-[200px] min-h-[100px]">
          Thumbnail 7
        </div>
        <div className="text-white rounded-xl p-5 flex items-center justify-center text-xs font-normal bg-opacity-10 bg-white w-[200px] h-[100px] min-w-[200px] min-h-[100px]">
          Thumbnail 8
        </div>
      </motion.div>
    </div>
  );
};
