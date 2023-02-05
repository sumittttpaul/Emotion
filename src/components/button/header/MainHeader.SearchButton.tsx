import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
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
import { IconButton } from '@mui/material';

const MainHeaderSearchMenu = dynamic<MainHeaderSearchMenuProps>(() =>
  import('../../header/MainHeader/search/MainHeader.Search.Menu').then(
    (x) => x.MainHeaderSearchMenu
  )
);

interface IProps {
  SearchMenuContent: SearchContentProps[];
  SearchMenuOpen: boolean;
  setSearchMenuOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * @author
 * @function @MainHeaderSearchButton
 **/
export const MainHeaderSearchButton: FC<IProps> = (props) => {
  const { MediumScreen, MediumLargeScreen, LargeScreen } = useScreenSize();
  const [animate, setAnimate] = useState('closed');
  const [Search, setSearch] = useState('');
  const SearchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const ButtonVariant = {
    open: {
      maxWidth: 600,
    },
    closed: {
      maxWidth: LargeScreen || MediumLargeScreen || MediumScreen ? 200 : 100,
    },
  };

  const SearchFocus = () => {
    if (animate === 'closed' && props.SearchMenuOpen == false)
      setAnimate('open');
    props.setSearchMenuOpen(true);
    SearchRef.current?.focus();
  };

  const SearchBlur = () => {
    if (animate === 'open' && props.SearchMenuOpen == true)
      setAnimate('closed');
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
      <motion.div
        id="main-header-search-button"
        aria-label="desktop-search-button"
        onFocus={SearchFocus}
        // onBlur={SearchBlur}
        animate={animate}
        variants={ButtonVariant}
        transition={{ duration: 0.2, type: 'tween' }}
        className="block text-white w-full max-w-[100px] medium-screen:max-w-[200px] cursor-text justify-start items-center button-text-lower pl-[10px] rounded-full bg-[#202020] hover:bg-[#202020]"
      >
        <div className="flex items-center ml-1">
          <Image
            src="/icons/search-white.svg"
            height={18}
            width={18}
            layout="fixed"
            className="min-h-[18px] min-w-[18px] block text-white opacity-70"
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
            className="flex min-w-20 pt-[10px] pb-[12px] pl-[10px] mr-2 whitespace-nowrap text-ellipsis placeholder:text-ellipsis w-full h-full bg-transparent text-[14px] text-white placeholder:text-[#ffffff99] placeholder:text-[13px] outline-none"
          />
          <IconButton
            aria-label="desktop-search-clear-button"
            onClick={() => setSearch('')}
            className={`${
              Search === '' ? 'hidden' : ''
            } cursor-default p-2 mr-1 bg-transparent hover:bg-[#ffffff15]`}
          >
            <Image
              height={18}
              width={18}
              layout="fixed"
              src="/icons/x-white.svg"
              alt=""
            />
          </IconButton>
        </div>
      </motion.div>
      <MainHeaderSearchMenu
        ContainerRef={SearchRef}
        SearchMenu={props.SearchMenuOpen}
        GetEmptySearch={Search === '' ? true : false}
        setSearchMenu={props.setSearchMenuOpen}
        setSearch={setSearch}
        ContentArray={props.SearchMenuContent}
      />
    </div>
  );
};
