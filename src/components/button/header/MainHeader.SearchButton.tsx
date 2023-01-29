import React, {
  ChangeEvent,
  FC,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useScreenSize from '../../../algorithms/ScreenSizeDetection';

interface IProps {
  ContainerRef: RefObject<HTMLDivElement>;
  Open: boolean;
  onOpen: () => void;
  onAnimationComplete: () => void;
}

/**
 * @author
 * @function @MainHeaderSearchButton
 **/

export const MainHeaderSearchButton: FC<IProps> = (props) => {
  const [animate, setAnimate] = useState('closed');
  const [Search, setSearch] = useState('');
  const SearchRef = useRef<HTMLInputElement>(null);
  const { SmallScreen } = useScreenSize();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const ButtonVariant = {
    open: {
      width: '100%',
    },
    closed: {
      width: SmallScreen ? 100 : 300,
    },
  };

  const SearchFocus = () => {
    if (animate === 'closed') setAnimate('open');
    props.onOpen();
    SearchRef.current?.focus();
  };

  useEffect(() => {
    if (props.Open) {
      setAnimate('open');
    } else {
      setAnimate('closed');
      setSearch('');
    }
  }, [props.Open]);

  return (
    <motion.button
      aria-label="desktop-search-button"
      onFocus={SearchFocus}
      animate={animate}
      variants={ButtonVariant}
      onAnimationComplete={props.onAnimationComplete}
      transition={{ duration: 0.2, type: 'tween' }}
      className="block mx-1 header-button-hover transition-all duration-300 text-white w-[100px] min-w-[100px] sm:h-[47px] sm:min-h-[47x] sm:w-[300px] sm:min-w-[300px] sm:max-w-[600px] cursor-text justify-start items-center button-text-lower p-[10px] rounded-[22px] bg-[#202020] hover:bg-[#202020]"
    >
      <div className="flex items-center ml-1">
        <Image
          src="/icons/search-white.svg"
          height={17}
          width={17}
          className="min-h-[17px] min-w-[17px] flex relative text-white opacity-70"
          alt=""
        />
        <input
          ref={SearchRef}
          aria-label="search-text-field"
          value={Search}
          onChange={handleSearch}
          placeholder={
            animate === 'open'
              ? 'Search by product, category or collection'
              : 'Search'
          }
          className="flex min-w-20 pb-[2px] pl-[10px] pr-2 whitespace-nowrap text-ellipsis w-full h-full bg-transparent text-[14px] text-white placeholder:text-[#ffffff99] placeholder:text-[13px] outline-none"
        />
      </div>
    </motion.button>
  );
};
