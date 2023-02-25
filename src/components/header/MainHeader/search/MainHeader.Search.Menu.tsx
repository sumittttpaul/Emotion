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
 * @function @MainHeaderSearchMenu
 **/
export const MainHeaderSearchMenu: FC<MainHeaderSearchMenuProps> = (props) => {
  const [Data, setData] = useState(props.ContentArray);

  const removeItem = (index: number) => {
    if (index !== -1) setData(Data.filter((o, i) => index !== i));
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
      } z-10 absolute w-full top-14 px-1.5 py-2.5 bg-white rounded-xl shadow-2xl`}
    >
      {Data.map((value, idx) => (
        <div
          {...itemProps(value)}
          key={value.id}
          className={` ${
            activeIndex === idx ? 'bg-[#00000017]' : 'bg-transparent'
          }
          rounded-lg p-1 h-[35px] w-full flex cursor-default items-center`}
        >
          <div className="block h-5 ml-2 pr-4 opacity-70">
            <Image
              layout="fixed"
              height={18}
              width={18}
              src={value.Icon}
              alt=""
            />
          </div>
          <div className="items-center pr-1 w-full overflow-hidden">
            <p className="block text-[14px] truncate font-medium text-left">
              {value.Name}
            </p>
          </div>
          {value.type == 'previous-search' && (
            <IconButton
              onPointerDown={() => removeItem(idx)}
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
          )}
        </div>
      ))}
    </div>
  );
};
