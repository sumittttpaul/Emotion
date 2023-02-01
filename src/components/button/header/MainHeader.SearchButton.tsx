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

interface IProps {
  ContainerRef: RefObject<HTMLDivElement>;
  Open: boolean;
  onOpen: () => void;
  onClosed: () => void;
}

/**
 * @author
 * @function @MainHeaderSearchButton
 **/

export const MainHeaderSearchButton: FC<IProps> = (props) => {
  const [animate, setAnimate] = useState('closed');
  const [Search, setSearch] = useState('');
  const SearchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const ButtonVariant = {
    open: {
      width: '100%',
    },
    closed: {
      width: 200,
    },
  };

  const SearchFocus = () => {
    if (animate === 'closed') setAnimate('open');
    props.onOpen();
    SearchRef.current?.focus();
  };

  const SearchBlur = () => {
    if (animate === 'open') setAnimate('closed');
    props.onClosed();
    SearchRef.current?.blur();
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
      onBlur={SearchBlur}
      animate={animate}
      variants={ButtonVariant}
      transition={{ duration: 0.2, type: 'tween' }}
      className="block header-button-hover text-white w-[100px] min-w-[100px] sm:h-[40px] sm:min-h-[40x] sm:w-[200px] sm:min-w-[200px] sm:max-w-[664px] cursor-text justify-start items-center button-text-lower p-[10px] rounded-full bg-[#202020] hover:bg-[#202020]"
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
          className="flex min-w-20 pb-[2px] pl-[10px] pr-2 whitespace-nowrap text-ellipsis placeholder:text-ellipsis w-full h-full bg-transparent text-[14px] text-white placeholder:text-[#ffffff99] placeholder:text-[13px] outline-none"
        />
      </div>
    </motion.button>
  );
};
