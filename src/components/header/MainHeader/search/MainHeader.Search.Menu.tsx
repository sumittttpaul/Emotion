import { IconButton } from '@mui/material';
import Image from 'next/image';
import React, {
  Dispatch,
  FC,
  RefObject,
  SetStateAction,
  useState,
} from 'react';
import useNavigateList from '../../../../algorithms/KeyboardNavigationList';
import { SearchContentProps } from '../../../../contents/store/search/Store.Search';

export interface MainHeaderSearchMenuProps {
  ContainerRef: RefObject<HTMLInputElement>;
  SearchMenu: boolean;
  GetEmptySearch: boolean;
  setSearchMenu: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
  ContentArray: SearchContentProps[];
}

/**
 * @author
 * @function @MainHeaderSearchMenu
 **/
export const MainHeaderSearchMenu: FC<MainHeaderSearchMenuProps> = (props) => {
  const [RemoveSuggestions, setRemoveSuggestions] = useState(-1);
  const { activeIndex, itemProps } = useNavigateList({
    vertical: true,
    isOpen: props.SearchMenu,
    list: props.ContentArray,
    SearchRef: props.ContainerRef,
    GetEmptySearch: props.GetEmptySearch,
    EmptySearch: (value) => props.setSearch(value),
    onSelect: (value) => props.setSearch(value.Name),
  });
  return (
    <div
      className={`${
        props.SearchMenu ? 'block' : 'hidden'
      } z-10 absolute w-full top-14 px-1.5 py-2.5 bg-white rounded-xl`}
    >
      {props.ContentArray.map((value, idx) => (
        <>
          {RemoveSuggestions === idx ? (
            <div className="w-full flex h-[35px] items-center cursor-not-allowed">
              <p className="w-full block text-[#00000095] text-[14.5px] font-medium truncate text-center">
                Suggestion removed
              </p>
            </div>
          ) : (
            <div
              {...itemProps(value)}
              // onClick={() => props.ContainerRef.current?.focus()}
              key={value.id}
              className={` ${
                activeIndex === idx ? 'bg-[#00000015]' : 'bg-transparent'
              }
          rounded-lg p-1 h-[35px] w-full flex cursor-default items-center`}
            >
              <div className="block h-5 w-5 ml-2 opacity-70">
                <Image
                  layout="fixed"
                  height={18}
                  width={18}
                  src={value.Icon}
                  alt=""
                />
              </div>
              <p className="block text-[14px] font-medium truncate w-full text-left ml-4 mr-1">
                {value.Name}
              </p>
              <IconButton
                onClick={() => setRemoveSuggestions(idx)}
                className={`${activeIndex === idx ? 'flex' : 'hidden'} 
            items-center justify-center w-[30px] h-[30px] p-0 m-0 cursor-pointer hover:bg-transparent`}
                style={{
                  borderRadius: 0,
                }}
                sx={{
                  '.MuiTouchRipple-child': {
                    borderRadius: 0,
                  },
                }}
              >
                <Image
                  layout="fixed"
                  height={17}
                  width={17}
                  src={value.DeleteIcon}
                  alt=""
                />
              </IconButton>
            </div>
          )}
        </>
      ))}
    </div>
  );
};
