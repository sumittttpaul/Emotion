import React, {
  ChangeEvent,
  KeyboardEvent,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import useScreenSize from '../../../algorithms/ScreenSizeDetection';
import { HeaderSearchMenuProps } from '../../header/search/Header.Search.Menu';
import dynamic from 'next/dynamic';
import { IconButton } from '@mui/material';
import { SearchContent } from '../../../contents/store/search/Store.Search';

const HeaderSearchMenu = dynamic<HeaderSearchMenuProps>(() =>
  import('../../header/search/Header.Search.Menu').then(
    (x) => x.HeaderSearchMenu
  )
);

interface IProps {}

/**
 * @author
 * @function @HeaderSearchButton
 **/
export const HeaderSearchButton: FC<IProps> = (props) => {
  const { MediumScreen, MediumLargeScreen, LargeScreen } = useScreenSize();
  const [SearchMenuOpen, setSearchMenuOpen] = useState(false);
  const [animate, setAnimate] = useState('closed');
  const [Search, setSearch] = useState('');
  const SearchRef = useRef<HTMLInputElement>(null);
  const ContainerRef = useRef<HTMLDivElement>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      event.currentTarget.setSelectionRange(
        event.currentTarget.value.length,
        event.currentTarget.value.length
      );
    }
  };

  const ButtonVariant = {
    open: {
      maxWidth: 600,
    },
    closed: {
      maxWidth: LargeScreen || MediumLargeScreen || MediumScreen ? 200 : 100,
    },
  };

  const SearchClick = () => {
    if (animate === 'closed' && SearchMenuOpen == false) {
      setAnimate('open');
      setSearchMenuOpen(true);
      SearchRef.current?.focus();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ContainerRef.current &&
        !ContainerRef.current.contains(event.target as Node)
      ) {
        if (animate === 'open' && SearchMenuOpen == true) {
          setAnimate('closed');
          setSearchMenuOpen(false);
          setSearch('');
        }
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ContainerRef, SearchMenuOpen, animate]);

  useEffect(() => {
    if (SearchMenuOpen) {
      setAnimate('open');
    } else {
      setAnimate('closed');
      setSearch('');
    }
  }, [SearchMenuOpen]);

  return (
    <motion.div
      ref={ContainerRef}
      className="relative hidden small-screen:flex flex-col w-full max-w-[600px]"
    >
      <motion.div
        id="main-header-search-button"
        aria-label="desktop-search-button"
        onClick={SearchClick}
        animate={animate}
        variants={ButtonVariant}
        transition={{ duration: 0.2, type: 'tween' }}
        className="block text-white w-full max-w-[100px] medium-screen:max-w-[200px] cursor-text justify-start items-center button-text-lower pl-[10px] rounded-full bg-[#202020] hover:bg-[#202020]"
      >
        <div className="flex items-center">
          <div className="flex ml-[1px] justify-center h-[16px] w-[16px] opacity-60">
            <Image
              src="/icons/search-white-2.svg"
              height={16}
              width={16}
              layout="fixed"
              alt=""
            />
          </div>
          <input
            ref={SearchRef}
            aria-label="search-text-field"
            value={Search}
            onChange={handleSearch}
            onKeyDown={handleSearchKeyDown}
            autoCorrect="off"
            autoComplete="off"
            placeholder={
              animate === 'open'
                ? 'Search by product, category or collection'
                : 'Search'
            }
            className="flex min-w-20 pt-[10px] pb-[12px] pl-[10px] mr-2 truncate w-full h-full bg-transparent text-[14px] text-white placeholder:text-[#ffffffad] placeholder:text-[13px] outline-none"
          />
          <IconButton
            aria-label="desktop-search-clear-button"
            onClick={() => setSearch('')}
            className={`${
              Search === '' ? 'hidden' : ''
            } cursor-default group p-2 bg-transparent hover:bg-[#ffffff15]`}
          >
            <Image
              height={18}
              width={18}
              layout="fixed"
              src="/icons/x-white-2.svg"
              className="group-hover:opacity-100 opacity-70"
              alt=""
            />
          </IconButton>
          <IconButton
            aria-label="desktop-search-right-arrow-button"
            className={`${
              SearchMenuOpen ? '' : 'hidden'
            } cursor-default group p-2 mr-1 bg-transparent hover:bg-[#ffffff15]`}
          >
            <Image
              height={18}
              width={18}
              layout="fixed"
              src="/icons/arrow-right.svg"
              className="group-hover:opacity-100 opacity-70"
              alt=""
            />
          </IconButton>
        </div>
      </motion.div>
      <HeaderSearchMenu
        SearchRef={SearchRef}
        ContainerRef={ContainerRef}
        SearchMenu={SearchMenuOpen}
        GetEmptySearch={Search === '' ? true : false}
        setSearchMenu={setSearchMenuOpen}
        setSearch={setSearch}
        ContentArray={SearchContent}
      />
    </motion.div>
  );
};
