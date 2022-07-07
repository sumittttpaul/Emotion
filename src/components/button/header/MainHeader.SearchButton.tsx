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
}

/**
 * @author
 * @function @MainHeaderSearchButton
 **/

export const MainHeaderSearchButton: FC<IProps> = (props) => {
  const [animate, setAnimate] = useState('closed');
  const [width, setWidth] = useState(160);
  const [Search, setSearch] = useState('');
  const SearchRef = useRef<HTMLInputElement>(null);
  const { SmallScreen } = useScreenSize();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const ButtonVariant = {
    open: {
      width: SmallScreen ? width - 24 : width - 40,
      height: 50,
      borderRadius: 10,
    },
    closed: { width: SmallScreen ? 100 : 160, height: 40, borderRadius: 18 },
  };

  const SearchFocus = () => {
    if (animate === 'closed') setAnimate('open');
    props.onOpen();
    SearchRef.current?.focus();
  };

  useEffect(() => {
    if (props.Open) setAnimate('open');
    else setAnimate('closed');
  }, [props.Open]);

  useEffect(() => {
    if (props.ContainerRef.current)
      setWidth(props.ContainerRef.current.offsetWidth);
  }, [width]);

  useEffect(() => {
    const container = props.ContainerRef.current;
    if (container)
      container.addEventListener('resize', () => {
        if (container) setWidth(container.offsetWidth);
      });
    return () => {
      if (container)
        container.removeEventListener('resize', () => {
          if (container) setWidth(container.offsetWidth);
        });
    };
  });
  return (
    <motion.button
      aria-label="desktop-search-button"
      onFocus={SearchFocus}
      animate={animate}
      variants={ButtonVariant}
      transition={{ duration: 0.2, type: 'tween' }}
      className="block mr-1 header-button-hover transition-all duration-300 text-white w-[100px] min-w-[100px] sm:w-[160px] sm:min-w-[160px] cursor-text justify-start items-center button-text-lower p-[10px] rounded-[18px] bg-[#202020] hover:bg-[#202020]"
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
          className="flex min-w-20 pb-[2px] pl-[10px] pr-2 whitespace-nowrap text-ellipsis w-full h-full bg-transparent text-[14px] text-white placeholder:text-[rgba(255,255,255,0.60)] placeholder:text-[13px] outline-none"
        />
      </div>
    </motion.button>
  );
};
