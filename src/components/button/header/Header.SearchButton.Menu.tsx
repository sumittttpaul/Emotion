import { IconButton } from '@mui/material';
import Image from 'next/image';
import React, {
  Dispatch,
  FC,
  RefObject,
  SetStateAction,
  useState,
} from 'react';
import useNavigateList from '../../../algorithms/KeyboardNavigationList';
import { SearchContentProps } from '../../../contents/store/search/Store.Search';

export interface HeaderSearchButtonMenuProps {
  Search: string;
  SearchRef: RefObject<HTMLInputElement>;
  ContainerRef: RefObject<HTMLDivElement>;
  SearchMenu: boolean;
  GetEmptySearch: boolean;
  setSearchMenu: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
  ContentArray: SearchContentProps[];
}

/**
 * @author
 * @function @HeaderSearchButtonMenu
 **/

export const HeaderSearchButtonMenu: FC<HeaderSearchButtonMenuProps> = (
  props
) => {
  const [Data, setData] = useState(props.ContentArray);

  const removeItem = (index: number) => {
    if (index !== -1) {
      setData(Data.filter((o, i) => index !== i));
      if (props.Search === Data[index].Name) props.setSearch('');
    }
  };

  const { activeIndex, itemProps } = useNavigateList({
    vertical: true,
    list: Data,
    GetEmptySearch: props.GetEmptySearch,
    EmptySearch: (value) => props.setSearch(value),
    onSelect: (value) => props.setSearch(value.Name),
  });

  return (
    <div
      className={`${
        props.SearchMenu ? 'block' : 'hidden'
      } z-10 absolute w-full top-[45px] px-1.5 py-2.5 bg-[#1A1A1ABD] backdrop-blur-[50px] rounded-lg text-white shadow-2xl`}
    >
      {Data.map((value, idx) => (
        <div
          key={value.Id}
          className={` ${
            activeIndex === idx ? 'bg-[#ffffff15]' : 'bg-transparent'
          }
        rounded-lg p-1 h-[40px] w-full flex cursor-default items-center`}
          {...itemProps(value)}
        >
          <div className="block h-5 ml-2 pr-4 opacity-70">
            <Image
              height={18}
              width={18}
              style={{
                minHeight: 18,
                minWidth: 18,
              }}
              src={value.Icon}
              alt=""
            />
          </div>
          <div className="items-center pr-1 w-full overflow-hidden">
            <p className="block text-[13px] truncate font-[400px] tracking-wide text-left">
              {value.Name}
            </p>
          </div>
          {value.Type == 'previous-search' && (
            <IconButton
              onPointerDown={() => removeItem(idx)}
              className={`${activeIndex === idx ? 'flex' : 'hidden'} 
                  items-center justify-center w-[30px] h-[30px] p-0 m-0 cursor-pointer opacity-70 hover:bg-[#ffffff30]`}
              style={{
                borderRadius: 4,
              }}
              sx={{
                '.MuiTouchRipple-child': {
                  borderRadius: 0,
                },
              }}
            >
              <Image
                height={17}
                width={17}
                style={{
                  minHeight: 17,
                  minWidth: 17,
                }}
                src={value.DeleteIcon}
                alt=""
              />
            </IconButton>
          )}
        </div>
      ))}
    </div>
  );
};
