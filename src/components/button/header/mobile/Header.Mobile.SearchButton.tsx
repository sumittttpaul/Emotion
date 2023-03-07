import { motion } from 'framer-motion';
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/legacy/image';
import { IconButton } from '@mui/material';

interface IProps {
  OpenSearch: boolean;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  setDivAnimate: Dispatch<SetStateAction<string>>;
}

/**
 * @author
 * @function @HeaderMobileSearchButton
 **/

export const HeaderMobileSearchButton: FC<IProps> = (props) => {
  const [Search, setSearch] = useState('');
  const [animate, setAnimate] = useState('closed');
  const ContainerRef = useRef<HTMLInputElement>(null);
  const SearchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const ButtonVariant = {
    open: {
      width: '100%',
    },
    closed: {
      width: 92,
    },
  };

  const SearchClick = () => {
    if (animate === 'closed') {
      props.setOpenSearch(true);
      props.setDivAnimate('open');
      setAnimate('open');
      SearchRef.current?.focus();
    }
  };

  const BackClick = () => {
    if (animate === 'open') {
      props.setOpenSearch(false);
      props.setDivAnimate('closed');
      setAnimate('closed');
      SearchRef.current?.blur();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ContainerRef.current &&
        !ContainerRef.current.contains(event.target as Node)
      ) {
        if (animate === 'open') {
          setAnimate('closed');
          props.setOpenSearch(false);
          props.setDivAnimate('closed');
          setSearch('');
        }
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [animate, ContainerRef]);

  useEffect(() => {
    function handleBackButtonPressed(event: PopStateEvent) {
      if (animate === 'open') {
        event.preventDefault();
        setAnimate('closed');
        props.setOpenSearch(false);
        SearchRef.current?.blur();
        setSearch('');
        history.pushState(null, '', window.location.pathname);
      }
    }
    window.addEventListener('popstate', handleBackButtonPressed);
    return () => {
      window.removeEventListener('popstate', handleBackButtonPressed);
    };
  });

  return (
    <motion.div
      aria-label="mobile-search-button"
      ref={ContainerRef}
      animate={animate}
      onClick={SearchClick}
      onTouchMove={SearchClick}
      variants={ButtonVariant}
      transition={{ duration: props.OpenSearch ? 0.1 : 0.3, type: 'tween' }}
      className="min-w-[92px] w-[92px] z-10 rounded-full block cursor-text justify-start items-center button-text-lower text-white bg-[#202020] hover:bg-[#202020]"
    >
      <div className="flex items-center">
        {animate === 'open' ? (
          <IconButton
            onClick={BackClick}
            aria-label="mobile-search-left-arrow-button"
            className={`${
              animate === 'open' ? '' : 'hidden'
            } cursor-default group ml-1 p-2 bg-transparent hover:bg-[#ffffff15] transition-all`}
          >
            <Image
              height={18}
              width={18}
              layout="fixed"
              src="/icons/arrow-left.svg"
              className="group-hover:opacity-100 opacity-70"
              alt=""
            />
          </IconButton>
        ) : (
          <div className="flex ml-[11px] justify-center h-[16px] w-[16px] opacity-60">
            <Image
              src="/icons/search-white-2.svg"
              height={16}
              width={16}
              layout="fixed"
              alt=""
            />
          </div>
        )}
        <input
          ref={SearchRef}
          aria-label="search-text-field"
          value={Search}
          onChange={handleSearch}
          autoCorrect="off"
          autoComplete="off"
          placeholder={
            animate === 'open'
              ? 'Search by product, category or collection'
              : 'Search'
          }
          className={`${
            animate === 'open' ? 'mx-1' : 'mx-2'
          } flex pt-[10px] pb-[12px] truncate w-full h-full bg-transparent text-[14px] placeholder:text-[13px] text-white placeholder:text-[#ffffffad] outline-none`}
        />
        <IconButton
          aria-label="mobile-search-clear-button"
          onClick={() => {
            setSearch('');
            SearchRef.current?.focus();
          }}
          className={`${
            Search === '' ? 'hidden' : ''
          } cursor-default group p-2 bg-transparent hover:bg-[#ffffff15] transition-all`}
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
          aria-label="mobile-search-right-arrow-button"
          className={`${
            animate === 'open' ? '' : 'hidden'
          } cursor-default group p-2 mr-1 bg-transparent hover:bg-[#ffffff15] transition-all`}
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
  );
};
