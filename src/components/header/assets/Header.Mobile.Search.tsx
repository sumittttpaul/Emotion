/* eslint-disable @typescript-eslint/no-empty-function */
import { Button, IconButton } from '@mui/material';
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SearchContentProps } from '../../../contents/home/search/Home.Search';

export interface HeaderMobileSearchProps {
  ContentArray: SearchContentProps[];
}

/**
 * @author
 * @function @HeaderMobileSearch
 **/

export const HeaderMobileSearch: FC<HeaderMobileSearchProps> = (props) => {
  const [Search, setSearch] = useState('');
  const SearchRef = useRef<HTMLInputElement>(null);
  const [Data, setData] = useState(props.ContentArray);

  const removeItem = (index: number) => {
    if (index !== -1) setData(Data.filter((o, i) => index !== i));
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // const removeHash = () => {
  //   history.pushState('', document.title, window.location.pathname);
  // };

  const clearSearch = () => {
    setSearch('');
    SearchRef.current?.focus();
  };

  const BackClick = () => {
    // if (SearchButtonState.show) {
    //   removeHash();
    //   SearchRef.current?.blur();
    //   setSearchButtonState({ show: false });
    // }
  };

  const SearchBlur = () => {
    // if (SearchButtonState.show) SearchRef.current?.blur();
  };

  // useEffect(() => {
  //   function handleBackButtonPressed(event: PopStateEvent) {
  //     event.preventDefault();
  //     if (SearchButtonState.show) {
  //       removeHash();
  //       SearchRef.current?.blur();
  //       setSearchButtonState({ show: false });
  //       setSearch('');
  //     }
  //   }
  //   window.addEventListener('popstate', handleBackButtonPressed);
  //   return () => {
  //     window.removeEventListener('popstate', handleBackButtonPressed);
  //   };
  // }, [SearchButtonState.show, setSearchButtonState]);

  useEffect(() => {
    function DetectScroll() {
      if (window.scrollY === 0) SearchRef.current?.focus();
    }
    window.addEventListener('scroll', DetectScroll);
    return () => {
      window.removeEventListener('scroll', DetectScroll);
    };
  });

  // useEffect(() => {
  //   if (SearchButtonState.show) SearchRef.current?.focus();
  // }, [SearchButtonState.show]);

  return (
    <div
      id="search"
      className={`${
        () => {}
        // SearchButtonState.show ? 'flex flex-col' : 'hidden'
      } absolute w-full top-0 z-[999] bg-primary-theme`}
    >
      <div className="sticky-top z-10 flex w-full bg-primary-theme">
        <div
          id="mobile-header-search-button"
          aria-label="mobile-search-button"
          className="w-full p-2 block cursor-text justify-start items-center button-text-lower text-white border-b-2 border-[#252525]"
        >
          <div className="flex items-center">
            <IconButton
              onClick={BackClick}
              aria-label="mobile-search-left-arrow-button"
              className="cursor-default group ml-[2px] bg-transparent hover:bg-[#ffffff15] transition-all"
            >
              <Image
                height={20}
                width={20}
                src="/icons/arrow-left.svg"
                className="group-hover:opacity-100 opacity-70"
                alt=""
              />
            </IconButton>
            <input
              ref={SearchRef}
              id="mobile-search-text-field"
              aria-label="mobile-search-text-field"
              value={Search}
              onChange={handleSearch}
              autoCorrect="off"
              autoComplete="off"
              placeholder="Search by Products & Collections"
              className="mx-3 flex pt-[12px] pb-[14px] truncate w-full h-full bg-transparent text-[14px] placeholder:text-[13px] text-white placeholder:text-[#ffffffad] outline-none"
            />
            {Search === '' ? (
              <IconButton
                aria-label="mobile-search-right-arrow-button"
                className="cursor-default p-2.5 mr-[2px] opacity-70 bg-transparent transition-all"
              >
                <Image
                  height={19}
                  width={19}
                  src="/icons/search-white.svg"
                  alt=""
                />
              </IconButton>
            ) : (
              <IconButton
                aria-label="mobile-search-clear-button"
                onClick={clearSearch}
                className="cursor-default p-2.5 mr-[2px] opacity-70 bg-transparent transition-all"
              >
                <Image
                  height={19}
                  width={19}
                  src="/icons/x-white-2.svg"
                  alt=""
                />
              </IconButton>
            )}
          </div>
        </div>
      </div>
      <div
        onTouchMove={SearchBlur}
        className="p-2 max-h-full w-full bg-primary-theme overflow-y-auto"
      >
        {Data.map((value, idx) => (
          <Button
            key={value.Id}
            className="
          rounded-xl px-2 py-7 h-[35px] w-full flex cursor-default items-center text-white bg-transparent button-text-lower"
          >
            <div className="block h-5 ml-1 pr-3.5 opacity-70">
              <Image height={18} width={18} src={value.Icon} alt="" />
            </div>
            <div className="items-center pl-2 pr-1 w-full overflow-hidden">
              <p className="block text-[13px] truncate font-normal text-left opacity-75">
                {value.Name}
              </p>
            </div>
            {value.Type == 'previous-search' ? (
              <div
                onPointerDown={() => removeItem(idx)}
                className="
                rounded-[50%] flex opacity-70 items-center justify-center w-[30px] h-[30px] p-0 m-0 cursor-pointer hover:bg-transparent"
              >
                <Image height={17} width={17} src={value.DeleteIcon} alt="" />
              </div>
            ) : (
              <div
                className="
                rounded-[50%] flex opacity-70 items-center justify-center w-[30px] h-[30px] p-0 m-0 cursor-pointer hover:bg-transparent"
              >
                <Image height={22} width={22} src={value.DeleteIcon} alt="" />
              </div>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};
