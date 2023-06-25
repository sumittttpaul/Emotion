import React, {
  ChangeEvent,
  KeyboardEvent,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import { HeaderSearchButtonMenuProps } from './Header.SearchButton.Menu';
import dynamic from 'next/dynamic';
import { IconButton } from '@mui/material';
import { SearchContent } from '../../../contents/store/search/Store.Search';

const HeaderSearchButtonMenu = dynamic<HeaderSearchButtonMenuProps>(
  () =>
    import('./Header.SearchButton.Menu').then((x) => x.HeaderSearchButtonMenu),
  { ssr: false }
);

interface IProps {}

/**
 * @author
 * @function @HeaderSearchButton
 **/
export const HeaderSearchButton: FC<IProps> = (props) => {
  const [SearchMenuOpen, setSearchMenuOpen] = useState(false);
  const [Search, setSearch] = useState(
    'Search by product, category, collection and more'
  );
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

  const SearchClick = () => {
    if (SearchMenuOpen == false) {
      if (Search == 'Search by product, category, collection and more') {
        setSearch('');
      }
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
        if (SearchMenuOpen == true) {
          if (Search == '')
            setSearch('Search by product, category, collection and more');
          setSearchMenuOpen(false);
        }
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ContainerRef, SearchMenuOpen, Search]);

  return (
    <div
      ref={ContainerRef}
      className="relative flex flex-col w-full max-w-[600px] mx-auto"
    >
      <div
        id="desktop-header-search-button"
        aria-label="desktop-search-button"
        onClick={SearchClick}
        className={`${
          SearchMenuOpen ? 'bg-[#202020]' : 'bg-[#202020] hover:bg-[#252525]'
        } block text-white w-full cursor-text justify-start items-center button-text-lower pl-[5px] rounded-lg overflow-hidden relative`}
      >
        <div className="flex items-center">
          <input
            ref={SearchRef}
            aria-label="search-text-field"
            value={Search}
            onChange={handleSearch}
            onKeyDown={handleSearchKeyDown}
            autoCorrect="off"
            autoComplete="off"
            className={`${
              Search != 'Search by product, category, collection and more'
                ? 'text-[14px] text-white'
                : 'text-[13px] text-[#ffffffad]'
            } flex pt-[10px] pb-[12px] pl-[10px] mr-2 truncate w-full h-full bg-transparent outline-none`}
          />
          <IconButton
            aria-label="desktop-search-clear-button"
            onClick={() => setSearch('')}
            className={`${
              Search === '' || !SearchMenuOpen ? 'hidden' : ''
            } cursor-default group p-2 bg-transparent rounded-md hover:bg-[#ffffff15]`}
            sx={{
              '.MuiTouchRipple-child': {
                borderRadius: '4px',
                backgroundColor: '#ffffff50 !important',
              },
            }}
          >
            <Image
              height={18}
              width={18}
              style={{
                minHeight: 18,
                minWidth: 18,
              }}
              src="/icons/x-white-2.svg"
              className="group-hover:opacity-100 opacity-70"
              alt=""
            />
          </IconButton>
          <IconButton
            aria-label="desktop-search-button"
            className="cursor-default group p-2 mr-1 bg-transparent rounded-md hover:bg-[#ffffff15]"
            sx={{
              '.MuiTouchRipple-child': {
                borderRadius: '4px',
                backgroundColor: '#ffffff50 !important',
              },
            }}
          >
            <Image
              height={16}
              width={16}
              style={{
                minHeight: 16,
                minWidth: 16,
              }}
              src="/icons/search-white-2.svg"
              className="group-hover:opacity-90 opacity-60"
              alt=""
            />
          </IconButton>
        </div>
        {SearchMenuOpen && (
          <div className="bg-white opacity-40 h-[2px] -ml-[5px] w-full absolute bottom-0" />
        )}
      </div>
      <HeaderSearchButtonMenu
        Search={Search}
        SearchRef={SearchRef}
        ContainerRef={ContainerRef}
        SearchMenu={SearchMenuOpen}
        GetEmptySearch={Search === '' ? true : false}
        setSearchMenu={setSearchMenuOpen}
        setSearch={setSearch}
        ContentArray={SearchContent}
      />
    </div>
  );
};
