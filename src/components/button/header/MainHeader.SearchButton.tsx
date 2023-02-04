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
import { MainHeaderSearchMenuProps } from '../../header/MainHeader/search/MainHeader.Search.Menu';
import dynamic from 'next/dynamic';
import { SearchContentProps } from '../../../contents/store/search/Store.Search';

const MainHeaderSearchMenu = dynamic<MainHeaderSearchMenuProps>(() =>
  import('../../header/MainHeader/search/MainHeader.Search.Menu').then(
    (x) => x.MainHeaderSearchMenu
  )
);

interface IProps {
  ContainerRef: RefObject<HTMLDivElement>;
  SearchMenuContent: SearchContentProps[];
  SearchMenuOpen: boolean;
  setSearchMenuOpen: (value: boolean) => void;
}

/**
 * @author
 * @function @MainHeaderSearchButton
 **/

export const MainHeaderSearchButton: FC<IProps> = (props) => {
  const { SmallMediumScreen } = useScreenSize();
  const [animate, setAnimate] = useState('closed');
  const [Search, setSearch] = useState('');
  const SearchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const ButtonVariant = {
    open: {
      width: '100%',
      maxWidth: 600,
    },
    closed: {
      width: '100%',
      maxWidth: SmallMediumScreen ? 100 : 200,
    },
  };

  const SearchFocus = () => {
    if (animate === 'closed') setAnimate('open');
    props.setSearchMenuOpen(true);
    SearchRef.current?.focus();
  };

  const SearchBlur = () => {
    if (animate === 'open') setAnimate('closed');
    props.setSearchMenuOpen(false);
    SearchRef.current?.blur();
  };

  useEffect(() => {
    if (props.SearchMenuOpen) {
      setAnimate('open');
    } else {
      setAnimate('closed');
      setSearch('');
    }
  }, [props.SearchMenuOpen]);

  return (
    <div className="relative flex flex-col w-full max-w-[600px]">
      <motion.button
        id="main-header-search-button"
        aria-label="desktop-search-button"
        onFocus={SearchFocus}
        onBlur={SearchBlur}
        animate={animate}
        variants={ButtonVariant}
        transition={{ duration: 0.2, type: 'tween' }}
        className="block text-white cursor-text justify-start items-center button-text-lower p-[10px] rounded-full bg-[#202020] hover:bg-[#202020]"
      >
        <div className="flex items-center ml-1">
          <Image
            src="/icons/search-white.svg"
            height={18}
            width={18}
            className="min-h-[18px] min-w-[18px] flex relative text-white opacity-70"
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
      <MainHeaderSearchMenu
        SearchMenu={props.SearchMenuOpen}
        setSearchMenu={(value) => props.setSearchMenuOpen(value)}
        ContentArray={props.SearchMenuContent}
      />
    </div>
  );
};
